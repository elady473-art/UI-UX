import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import { projects } from '../data/projects';

const Work = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sky font-semibold text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A collection of design projects, interfaces, and explorations
            showcasing user experience thinking and visual craft.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenCase={setSelectedCase}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCase && (
        <CaseStudyModal
          caseId={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </section>
  );
};

export default Work;
