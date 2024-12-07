import React from 'react';
import { Brain, Code, Database, Camera } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            icon={<Brain className="w-8 h-8 text-blue-600" />}
            title="Machine Learning"
            skills={['Deep Learning', 'Neural Networks', 'TensorFlow', 'PyTorch']}
          />
          <SkillCard
            icon={<Camera className="w-8 h-8 text-blue-600" />}
            title="Computer Vision"
            skills={['Object Detection', 'Image Segmentation', 'OpenCV', 'YOLO']}
          />
          <SkillCard
            icon={<Code className="w-8 h-8 text-blue-600" />}
            title="Programming"
            skills={['Python', 'C++', 'CUDA', 'JavaScript']}
          />
          <SkillCard
            icon={<Database className="w-8 h-8 text-blue-600" />}
            title="Tools & Frameworks"
            skills={['Docker', 'Git', 'Linux', 'AWS']}
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) => (
  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center space-x-4 mb-4">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;