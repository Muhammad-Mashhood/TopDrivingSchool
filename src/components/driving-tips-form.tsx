
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, List, AlertCircle, Loader2 } from 'lucide-react';

type DrivingTipsState = {
  message: string;
  tips?: string[];
  errors?: {
    weatherConditions?: string[];
    majorStreets?: string[];
    constructionUpdates?: string[];
  };
};

const initialState: DrivingTipsState = {
  message: '',
  tips: undefined,
  errors: undefined,
};

export function DrivingTipsForm() {
  const [state, setState] = useState<DrivingTipsState>(initialState);
  const [pending, setPending] = useState(false);

  const generateAITips = async (data: any) => {
    // Use a demo API key for testing - in production, you'd use a backend proxy
    const API_KEY = 'AIzaSyD3Sf9lIRBtpJbqy0vvjgBRLVkn_TagLt4'; // Your API key from Cloudflare
    
    try {
      const prompt = `Generate exactly 5 specific, practical driving safety tips for Altrincham, Manchester based on these current conditions:

Weather: ${data.weatherConditions}
Major Streets/Areas: ${data.majorStreets}
Construction Updates: ${data.constructionUpdates}

Requirements:
- Each tip should be specific to the conditions provided
- Focus on safety and practical advice
- Keep each tip concise (1-2 sentences)
- Include local knowledge when possible
- Return as a JSON array of exactly 5 strings

Example format: ["tip 1", "tip 2", "tip 3", "tip 4", "tip 5"]`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      const text = result.candidates[0].content.parts[0].text;

      // Try to parse the JSON response
      let tips: string[];
      try {
        tips = JSON.parse(text);
        if (!Array.isArray(tips) || tips.length !== 5) {
          throw new Error('Invalid response format');
        }
      } catch {
        // Fallback: split by lines and clean up
        tips = text
          .split('\n')
          .filter((line: string) => line.trim() && !line.includes('```') && !line.includes('[') && !line.includes(']'))
          .map((line: string) => line.replace(/^\d+\.\s*/, '').replace(/^[-*]\s*/, '').replace(/^"/, '').replace(/"$/, '').trim())
          .filter((line: string) => line.length > 10)
          .slice(0, 5);

        // If we still don't have 5 tips, add contextual ones
        const contextualTips = [
          `In ${data.weatherConditions} conditions, reduce speed and increase following distance for safety.`,
          `When traveling on ${data.majorStreets}, use headlights and check mirrors frequently.`,
          `With ${data.constructionUpdates}, plan alternative routes and allow extra travel time.`,
          "Watch for pedestrians and cyclists in busy Altrincham town center areas.",
          "Maintain proper lane discipline and stay alert for changing road conditions."
        ];

        while (tips.length < 5) {
          const contextualTip = contextualTips[tips.length % contextualTips.length];
          if (!tips.includes(contextualTip)) {
            tips.push(contextualTip);
          }
        }
      }

      return tips.slice(0, 5);
    } catch (error) {
      console.error('AI Generation Error:', error);
      
      // Enhanced fallback tips based on conditions
      return [
        `In ${data.weatherConditions} conditions, reduce speed and increase following distance for safety.`,
        `When traveling on ${data.majorStreets}, use headlights and ensure windshield wipers are in good condition.`,
        `With ${data.constructionUpdates}, plan alternative routes and allow extra time for delays.`,
        "Watch for pedestrians and cyclists in busy Altrincham town center areas.",
        "Maintain proper lane discipline on A56 and check mirrors frequently."
      ];
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      weatherConditions: formData.get('weatherConditions') as string,
      majorStreets: formData.get('majorStreets') as string,
      constructionUpdates: formData.get('constructionUpdates') as string,
    };

    // Simple client-side validation
    const errors: any = {};
    if (!data.weatherConditions || data.weatherConditions.length < 3) {
      errors.weatherConditions = ['Weather conditions must be described.'];
    }
    if (!data.majorStreets || data.majorStreets.length < 3) {
      errors.majorStreets = ['Please list at least one major street.'];
    }
    if (!data.constructionUpdates || data.constructionUpdates.length < 3) {
      errors.constructionUpdates = ['Please provide construction updates.'];
    }

    if (Object.keys(errors).length > 0) {
      setState({ message: 'Please correct the errors below and try again.', errors });
      setPending(false);
      return;
    }

    // Generate AI-powered tips
    const tips = await generateAITips(data);

    setState({
      message: 'success',
      tips: tips,
      errors: undefined,
    });
    setPending(false);
  };

  return (
    <div className="grid gap-8 md:grid-cols-2 items-stretch">
      <Card className="shadow-lg bg-card/70 backdrop-blur-sm flex flex-col border-0">
        <CardHeader>
          <CardTitle>Driving Conditions Input</CardTitle>
          <CardDescription>Enter current Altrincham, Manchester driving conditions to get AI-powered tailored tips.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-grow">
            <div className="flex-grow space-y-4">
              <div>
                <Label htmlFor="weatherConditions">Weather Conditions</Label>
                <Input id="weatherConditions" name="weatherConditions" placeholder="e.g., Heavy rain, foggy" suppressHydrationWarning />
                {state.errors?.weatherConditions && <p className="pt-1 text-sm font-medium text-destructive">{state.errors.weatherConditions[0]}</p>}
              </div>
              <div>
                <Label htmlFor="majorStreets">Major Streets / Intersections</Label>
                <Input id="majorStreets" name="majorStreets" placeholder="e.g., A56, Dunham Road" suppressHydrationWarning />
                {state.errors?.majorStreets && <p className="pt-1 text-sm font-medium text-destructive">{state.errors.majorStreets[0]}</p>}
              </div>
              <div>
                <Label htmlFor="constructionUpdates">Construction Updates</Label>
                <Input id="constructionUpdates" name="constructionUpdates" placeholder="e.g., Road closure on George Street" suppressHydrationWarning />
                {state.errors?.constructionUpdates && <p className="pt-1 text-sm font-medium text-destructive">{state.errors.constructionUpdates[0]}</p>}
              </div>
            </div>
            <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 button-3d">
              {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
              {pending ? 'Generating...' : 'Generate Safe Driving Tips'}
            </Button>
            {state.message && state.message !== 'success' && (
              <div className="pt-2 text-sm font-medium text-destructive flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 shrink-0" />
                {state.message}
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      <Card className="flex flex-col shadow-lg bg-card/70 backdrop-blur-sm border-0">
        <CardHeader>
          <CardTitle>Your AI-Powered Driving Tips</CardTitle>
          <CardDescription>Here are your AI-generated personalized tips for driving safely in Altrincham, Manchester today.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex">
          {state.tips && state.tips.length > 0 ? (
            <ul className="space-y-3 text-sm">
              {state.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <List className="h-4 w-4 mr-3 mt-1 shrink-0 text-primary" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center text-center text-muted-foreground m-auto">
              <Sparkles className="h-12 w-12 mb-4" />
              <p className="font-semibold">Your tips will appear here</p>
              <p className="text-sm">Fill out the form to get started.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

    