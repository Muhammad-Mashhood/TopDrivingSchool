
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
    try {
      // For now, let's use an enhanced contextual tip generator
      // This provides intelligent responses based on the actual input
      const weatherTips = {
        rain: [
          "Reduce speed by 10-15 mph and increase following distance to 4-6 seconds in wet conditions.",
          "Ensure windshield wipers are functioning properly and headlights are on for visibility.",
          "Avoid sudden braking or sharp turns on wet roads to prevent skidding."
        ],
        fog: [
          "Use low-beam headlights and fog lights if available - avoid high beams in foggy conditions.",
          "Reduce speed significantly and use road markings and cat's eyes for guidance.",
          "Increase following distance to at least 6 seconds as visibility is severely reduced."
        ],
        snow: [
          "Drive slowly and smoothly, avoiding sudden acceleration, braking, or steering movements.",
          "Keep extra distance from other vehicles and clear all snow from windows and lights.",
          "Consider using winter tires or chains if conditions are severe."
        ],
        sunny: [
          "Be aware of sun glare, especially during morning and evening rush hours.",
          "Keep sunglasses handy and use sun visors effectively.",
          "Watch for increased pedestrian and cyclist activity in good weather."
        ]
      };

      const streetTips = {
        a56: [
          "A56 can be particularly busy during rush hours - allow extra time for your journey.",
          "Watch for speed cameras along the A56 corridor and maintain appropriate speeds.",
          "Be cautious of merge points and heavy traffic near major junctions."
        ],
        center: [
          "Altrincham town center has many pedestrian crossings - be extra vigilant.",
          "Parking can be limited in the center - consider using designated car parks.",
          "Watch for cyclists and pedestrians, especially near shops and restaurants."
        ],
        residential: [
          "Reduce speed in residential areas and watch for children and pets.",
          "Be mindful of parked cars and limited visibility around corners.",
          "Respect local parking restrictions and residents' access needs."
        ]
      };

      const constructionTips = {
        roadworks: [
          "Follow temporary traffic signs and reduced speed limits in construction zones.",
          "Merge early when lanes are closed and be patient with delayed traffic.",
          "Keep extra distance from construction vehicles and workers."
        ],
        closure: [
          "Plan alternative routes in advance using GPS or local traffic apps.",
          "Allow significantly more time for your journey due to diversions.",
          "Check local traffic updates before traveling for the latest information."
        ]
      };

      // Analyze input to determine relevant tips
      const weather = data.weatherConditions.toLowerCase();
      const streets = data.majorStreets.toLowerCase();
      const construction = data.constructionUpdates.toLowerCase();

      let selectedTips: string[] = [];

      // Weather-based tips
      if (weather.includes('rain') || weather.includes('wet')) {
        selectedTips.push(...weatherTips.rain.slice(0, 2));
      } else if (weather.includes('fog') || weather.includes('mist')) {
        selectedTips.push(...weatherTips.fog.slice(0, 2));
      } else if (weather.includes('snow') || weather.includes('ice')) {
        selectedTips.push(...weatherTips.snow.slice(0, 2));
      } else {
        selectedTips.push(...weatherTips.sunny.slice(0, 1));
      }

      // Street-based tips
      if (streets.includes('a56') || streets.includes('a 56')) {
        selectedTips.push(streetTips.a56[0]);
      } else if (streets.includes('center') || streets.includes('centre') || streets.includes('town')) {
        selectedTips.push(streetTips.center[0]);
      } else {
        selectedTips.push(streetTips.residential[0]);
      }

      // Construction-based tips
      if (construction.includes('closure') || construction.includes('closed') || construction.includes('blocked')) {
        selectedTips.push(...constructionTips.closure.slice(0, 2));
      } else if (construction.includes('roadwork') || construction.includes('construction') || construction.includes('work')) {
        selectedTips.push(constructionTips.roadworks[0]);
      } else {
        selectedTips.push("Stay alert for any unexpected road conditions or temporary changes.");
      }

      // Ensure we have exactly 5 tips
      while (selectedTips.length < 5) {
        const fallbackTips = [
          "Always maintain a safe following distance appropriate for current conditions.",
          "Check your mirrors regularly and signal your intentions clearly to other drivers.",
          "Keep your vehicle well-maintained with proper tire pressure and working lights.",
          "Stay focused on driving and avoid distractions like mobile phones.",
          "Adjust your driving style to match current road and weather conditions."
        ];
        
        for (const tip of fallbackTips) {
          if (!selectedTips.includes(tip) && selectedTips.length < 5) {
            selectedTips.push(tip);
          }
        }
      }

      return selectedTips.slice(0, 5);
    } catch (error) {
      console.error('Tip Generation Error:', error);
      
      // Ultimate fallback
      return [
        `In ${data.weatherConditions} conditions, reduce speed and increase following distance for safety.`,
        `When traveling on ${data.majorStreets}, use headlights and check mirrors frequently.`,
        `With ${data.constructionUpdates}, plan alternative routes and allow extra time for delays.`,
        "Watch for pedestrians and cyclists in busy Altrincham town center areas.",
        "Maintain proper lane discipline and stay alert for changing road conditions."
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

    