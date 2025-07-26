'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { getDrivingTips, type DrivingTipsState } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, List, AlertCircle, Loader2 } from 'lucide-react';

const initialState: DrivingTipsState = {
  message: '',
  tips: undefined,
  errors: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      {pending ? 'Generating...' : 'Generate Safe Driving Tips'}
    </Button>
  );
}

export function DrivingTipsForm() {
  const [state, formAction] = useActionState(getDrivingTips, initialState);

  return (
    <div className="grid gap-8 md:grid-cols-2 items-stretch">
      <Card className="shadow-lg bg-card flex flex-col">
        <CardHeader>
          <CardTitle>Driving Conditions Input</CardTitle>
          <CardDescription>Enter current Altrincham driving conditions to get tailored tips.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <form action={formAction} className="space-y-4 flex flex-col flex-grow">
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
              <div>
                <Label htmlFor="configuredTips">Admin Configured Tips (Optional)</Label>
                <Textarea id="configuredTips" name="configuredTips" placeholder="Enter any pre-configured tips here..." suppressHydrationWarning />
              </div>
            </div>
            <SubmitButton />
             {state.message && state.message !== 'success' && (
              <div className="pt-2 text-sm font-medium text-destructive flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 shrink-0" />
                {state.message}
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      <Card className="flex flex-col shadow-lg bg-card">
        <CardHeader>
          <CardTitle>Your AI-Powered Driving Tips</CardTitle>
          <CardDescription>Here are your personalized tips for driving safely in Altrincham today.</CardDescription>
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
