import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenCase: (id: string) => void;
}

const ProjectCard = ({ project, index, onOpenCase }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`group relative bg-surface border border-line rounded-2xl overflow-hidden hover:border-sky/50 transition-all duration-300 ${
        project.type === 'full' ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Visual Preview */}
      <div className="relative h-64 md:h-80 bg-surface-light overflow-hidden">
        {/* Project Image */}
        {project.id === 'adey' ? (
          <img
            src="/projects/adey-coffee.svg"
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : project.id === '3dmodels' ? (
          <img
            src="/projects/3d-models.svg"
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-green/10 to-sky/10" />
            {/* Placeholder for other projects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-7xl font-heading font-bold text-line/30">
                {project.id.toUpperCase()}
              </div>
            </div>
          </>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-bg/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-3 px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onOpenCase(project.id)}
              className="px-6 py-3 bg-gradient-primary text-bg font-semibold rounded-full shadow-lg whitespace-nowrap"
            >
              View Case Study
            </motion.button>
            
            {project.figmaUrl && (
              <motion.a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-surface-light border-2 border-sky text-sky font-semibold rounded-full shadow-lg hover:bg-sky hover:text-bg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019v-3.019H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019z"/>
                </svg>
                View Design
              </motion.a>
            )}
            
            {project.externalUrl && (
              <motion.a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-surface-light border-2 border-green text-green font-semibold rounded-full shadow-lg hover:bg-green hover:text-bg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Prototype
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <p className="text-xs font-semibold text-sky tracking-widest uppercase mb-3">
          {project.category}
        </p>
        
        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 group-hover:text-gradient transition-all">
          {project.title}
        </h3>
        
        <p className="text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.chips.map((chip, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-xs font-medium bg-surface-light border border-line rounded-full text-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
