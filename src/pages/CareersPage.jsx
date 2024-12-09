import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CareersPage = () => {
  const positions = [
    {
      title: "Junior AI Consultant",
      type: "Fulltime",
      location: "Utrecht",
      description: "Ben jij recent afgestudeerd in AI en wil je direct impact maken? Bij Tomorrow Minds krijg je de kans om vanaf de start mee te bouwen aan iets bijzonders.",
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Werken bij Tomorrow Minds</h1>
        <p className="text-xl text-gray-600">
          Start je carrière in AI consultancy
        </p>
      </div>

      <div className="grid gap-8 max-w-3xl mx-auto">
        {positions.map((position) => (
          <Card key={position.title}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{position.title}</CardTitle>
                  <div className="flex gap-4 mt-2 text-sm text-gray-500">
                    <span>{position.type}</span>
                    <span>{position.location}</span>
                  </div>
                </div>
                <Button>
                  Solliciteer nu
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{position.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;