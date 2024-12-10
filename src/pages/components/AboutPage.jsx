import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: "Ivar van Duuren",
      role: "Oprichter",
      description: "Oprichter van ISOPlanner en ervaren ondernemer in de kwaliteitsmanagement sector."
    },
    {
      name: "Positie Open",
      role: "Junior AI Consultant",
      description: "We zoeken ambitieuze AI-specialisten die samen met ons Tomorrow Minds willen opbouwen."
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Over Tomorrow Minds</h1>
        <p className="text-xl text-gray-600">
          Tomorrow Minds is opgericht vanuit de overtuiging dat AI praktisch en toegankelijk moet zijn voor elke organisatie.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Onze Visie</h2>
          <p className="text-gray-600 mb-4">
            Als onderdeel van de REDLAB groep combineren we de energie van een startup met de stabiliteit en ervaring van een gevestigd bedrijf. Met ons zusterbedrijf ISOPlanner bedienen we meer dan 360 organisaties in hun kwaliteitsmanagement behoeften.
          </p>
          <p className="text-gray-600">
            Tomorrow Minds bouwt voort op deze expertise door AI praktisch en verantwoord te implementeren, met meetbare resultaten en concrete waarde voor uw organisatie.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Onze Aanpak</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Praktisch & Resultaatgericht</h3>
                <p className="text-gray-600">Focus op concrete implementaties met meetbare impact</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Kennisoverdracht</h3>
                <p className="text-gray-600">Uw team meenemen in de mogelijkheden van AI</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Verantwoorde AI</h3>
                <p className="text-gray-600">Ethische en veilige implementatie volgens ISO-standaarden</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Ons Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Users className="w-12 h-12 text-blue-600" />
                  <div>
                    <CardTitle>{member.name}</CardTitle>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;