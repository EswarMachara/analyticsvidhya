import React from 'react';
import { Award, BookOpen, Trophy, Users } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Achievements & Recognition</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Awards & Recognition</h3>
            {awards.map((award, index) => (
              <AwardCard key={index} {...award} />
            ))}
          </div>
          
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Publications & Patents</h3>
            {publications.map((pub, index) => (
              <PublicationCard key={index} {...pub} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AwardCard = ({ 
  title, 
  organization, 
  year, 
  description 
}: {
  title: string;
  organization: string;
  year: string;
  description: string;
}) => (
  <div className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <Trophy className="w-12 h-12 text-blue-600 flex-shrink-0" />
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-blue-600">{organization}</p>
      <p className="text-gray-600 text-sm mb-2">{year}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const PublicationCard = ({ 
  title, 
  journal, 
  year, 
  impact 
}: {
  title: string;
  journal: string;
  year: string;
  impact: string;
}) => (
  <div className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <BookOpen className="w-12 h-12 text-blue-600 flex-shrink-0" />
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-blue-600">{journal}</p>
      <p className="text-gray-600 text-sm mb-2">{year}</p>
      <p className="text-gray-700">{impact}</p>
    </div>
  </div>
);

const awards = [
  {
    title: "Best Paper Award",
    organization: "CVPR 2023",
    year: "2023",
    description: "Recognized for groundbreaking research in real-time object detection"
  },
  {
    title: "Innovation Excellence Award",
    organization: "AI Research Foundation",
    year: "2022",
    description: "For contributions to advancing computer vision technology"
  }
];

const publications = [
  {
    title: "Advanced Real-time Object Detection Using Deep Learning",
    journal: "IEEE Transactions on Pattern Analysis",
    year: "2023",
    impact: "Cited by 150+ researchers"
  },
  {
    title: "Novel Approach to Medical Image Segmentation",
    journal: "Nature Computer Science",
    year: "2022",
    impact: "Featured in top AI conferences"
  }
];

export default Achievements;