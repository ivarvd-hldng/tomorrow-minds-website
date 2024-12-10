import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Neem contact op</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Naam</label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Bericht</label>
            <Textarea id="message" name="message" required />
          </div>
          <Button type="submit" className="w-full">Verstuur</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;