import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Computer Vision Engineer & Researcher
            </h1>
            <p className="text-xl text-gray-600">
              Pushing the boundaries of Artificial Intelligence and Computer Vision to solve real-world challenges.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Github />} label="GitHub" />
              <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="#contact" icon={<Mail />} label="Contact" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;