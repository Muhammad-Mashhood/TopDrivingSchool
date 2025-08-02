
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

    // Generate static tips for now (since we can't use server-side API in static export)
    const staticTips = [
      `In ${data.weatherConditions} conditions, reduce speed and increase following distance for safety.`,
      `When traveling on ${data.majorStreets}, use headlights and check mirrors frequently.`,
      `With ${data.constructionUpdates}, plan alternative routes and allow extra travel time.`,
      "Watch for pedestrians and cyclists in busy Altrincham town center areas.",
      "Maintain proper lane discipline and stay alert for changing road conditions."
    ];

    setState({
      message: 'success',
      tips: staticTips,
      errors: undefined,
    });
    setPending(false);
  };

  return (
    <div className="grid gap-8 md:grid-cols-2 items-stretch">
      <Card className="shadow-lg bg-card/70 backdrop-blur-sm flex flex-col border-0">
        <CardHeader>
          <CardTitle>Driving Conditions Input</CardTitle>
          <CardDescription>Enter current Altrincham, Manchester driving conditions to get tailored tips.</CardDescription>
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
          <CardDescription>Here are your personalized tips for driving safely in Altrincham, Manchester today.</CardDescription>
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

    