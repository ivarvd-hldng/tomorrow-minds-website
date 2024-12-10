import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, FileText } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "AI Readiness Scan",
      description: "Een complete analyse van uw organisatie's AI-potentieel met concrete aanbevelingen.",
      features: [
        "Technische infrastructuur analyse",
        "Data readiness assessment",
        "Organisatorische impact analyse",
        "Concrete implementatie roadmap"
      ],
      duration: "2-3 weken",
      icon: Clock
    },
    {
      title: "ISO AI Beleid Service",
      description: "Op maat gemaakt AI beleid, juridisch gevalideerd en direct geïntegreerd in uw kwaliteitssysteem.",
      features: [
        "Juridisch gevalideerd beleid",
        "ISO-compliant documentatie",
        "Implementatie ondersteuning",
        "Regelmatige updates"
      ],
      duration: "1-2 weken",
      icon: FileText
    },
    {
      title: "AI Implementatie",
      description: "End-to-end begeleiding bij het implementeren van AI-oplossingen in uw organisatie.",
      features: [
        "Use case identificatie",
        "Proof of Concept ontwikkeling",
        "Change management",
        "Training en kennisoverdracht"
      ],
      duration: "Op maat",
      icon: CheckCircle
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Onze Diensten</h1>
        <p className="text-xl text-gray-600">
          Praktische AI-implementatie met meetbare resultaten
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
                <CardTitle>{service.title}</CardTitle>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Doorlooptijd: {service.duration}
                </span>
                <Button variant="outline" size="sm">
                  Meer informatie
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;