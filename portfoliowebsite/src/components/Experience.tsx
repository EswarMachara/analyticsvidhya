import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-blue-200">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600"></div>
              </div>
              
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ 
  role, 
  company, 
  location, 
  period, 
  description, 
  achievements 
}: {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-gray-800">{role}</h3>
    <h4 className="text-lg text-blue-600 mb-2">{company}</h4>
    
    <div className="flex items-center gap-4 text-gray-600 mb-4">
      <div className="flex items-center">
        <MapPin className="w-4 h-4 mr-1" />
        {location}
      </div>
      <div className="flex items-center">
        <Calendar className="w-4 h-4 mr-1" />
        {period}
      </div>
    </div>
    
    <p className="text-gray-600 mb-4">{description}</p>
    
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2"></span>
          <span className="text-gray-700">{achievement}</span>
        </li>
      ))}
    </ul>
  </div>
);

const experiences = [
  {
    role: "Senior Computer Vision Engineer",
    company: "AI Research Lab",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: "Leading research and development in computer vision applications.",
    achievements: [
      "Developed state-of-the-art object detection system with 95% accuracy",
      "Led a team of 5 researchers in developing novel deep learning architectures",
      "Published 3 papers in top-tier conferences"
    ]
  },
  {
    role: "Computer Vision Researcher",
    company: "Tech Innovations Inc.",
    location: "Boston, MA",
    period: "2018 - 2021",
    description: "Conducted research in advanced computer vision algorithms.",
    achievements: [
      "Implemented real-time facial recognition system",
      "Reduced model inference time by 40%",
      "Filed 2 patents for novel computer vision algorithms"
    ]
  }
];

export default Experience;