import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  github, 
  demo 
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {github && (
          <a href={github} className="flex items-center text-gray-600 hover:text-blue-600">
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
        )}
        {demo && (
          <a href={demo} className="flex items-center text-gray-600 hover:text-blue-600">
            <ExternalLink className="w-5 h-5 mr-2" />
            Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const projects = [
  {
    title: "Real-time Object Detection",
    description: "Advanced object detection system using YOLO architecture with real-time processing capabilities.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
    tags: ["Computer Vision", "PyTorch", "YOLO", "Real-time"],
    github: "#",
    demo: "#"
  },
  {
    title: "Medical Image Analysis",
    description: "Deep learning-based medical image segmentation for tumor detection and classification.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    tags: ["Medical AI", "TensorFlow", "Image Segmentation"],
    github: "#"
  },
  {
    title: "Facial Recognition System",
    description: "State-of-the-art facial recognition system with emotion detection capabilities.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    tags: ["Face Recognition", "OpenCV", "Deep Learning"],
    github: "#",
    demo: "#"
  }
];

export default Projects;