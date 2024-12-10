import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const articles = [
    {
      title: "AI & ISO: De Volgende Stap in Kwaliteitsmanagement",
      excerpt: "Hoe kunstmatige intelligentie kwaliteitsmanagement transformeert en welke kansen dit biedt voor uw organisatie.",
      date: "4 december 2024",
      readTime: "8 min"
    },
    {
      title: "Praktische AI Implementatie: Best Practices",
      excerpt: "Concrete tips en richtlijnen voor het succesvol implementeren van AI in uw organisatie.",
      date: "4 december 2024",
      readTime: "6 min"
    },
    {
      title: "AI voor Kwaliteitsmanagement: Een Praktische Gids",
      excerpt: "Een stapsgewijze aanpak voor het integreren van AI in uw kwaliteitsmanagement systeem.",
      date: "4 december 2024",
      readTime: "10 min"
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Insights</h1>
        <p className="text-xl text-gray-600">
          Praktische inzichten en kennis over AI implementatie
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Card key={article.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{article.date}</span>
                <span>{article.readTime} leestijd</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <Button variant="outline">
                Lees meer
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;