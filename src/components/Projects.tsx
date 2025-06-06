import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  repoUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'TLX Finance Analytics',
      description: 'Platform for tracking Fed net liquidity and Toros leverage tokens performance. Provides comprehensive financial analytics for investors.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'TypeScript', 'Chart.js', 'API Integration'],
      liveUrl: 'https://tlx.fijisolutions.net/',
    },
    {
      title: 'Catalytics Pro',
      description: 'Community project for Jupiter Exchange. Provides real-time analytics and insights for traders and investors in the ecosystem.',
      image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'TypeScript', 'Web3', 'Blockchain'],
      liveUrl: 'https://catalytics.pro/',
    },
    {
      title: 'DeFi Dashboard',
      description: 'Comprehensive dashboard for tracking DeFi investments across multiple protocols and chains.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Next.js', 'Web3.js', 'GraphQL'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Blockchain Explorer',
      description: 'Custom blockchain explorer for viewing transactions, blocks, and smart contracts on a specific network.',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Node.js', 'Ethers.js'],
      liveUrl: '#',
      repoUrl: '#',
    }
  ];

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Featured work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 font-medium"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
