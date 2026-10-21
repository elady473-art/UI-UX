import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      category: 'Design',
      items: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      category: 'Development',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
    },
    {
      category: 'Tools & Methods',
      items: ['Git', 'Agile', 'User Testing', 'Information Architecture', 'Accessibility', 'UI Animation'],
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-surface">
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
            Background
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted leading-relaxed">
              I'm a UI/UX designer and frontend developer based in Addis Ababa,
              Ethiopia. I care about creating digital experiences that are
              clear, welcoming, and thoughtfully crafted.
            </p>

            <p className="text-lg text-muted leading-relaxed">
              My background includes contributions to enterprise ERP systems at
              INSA during a full-time internship, where I worked on
              procurement-related microservice interfaces and connected them to
              backend services using React.
            </p>

            <p className="text-lg text-muted leading-relaxed">
              I enjoy exploring interface patterns, building reusable
              components, and thinking through how people actually use the
              things we design and build.
            </p>

            <p className="text-lg text-muted leading-relaxed">
              When I'm not designing or coding, I'm learning about Ethiopian
              coffee culture, exploring local cafés, and spending time with
              family and friends.
            </p>

            {/* Resume Download */}
            <div className="pt-4">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-light border border-line hover:border-sky rounded-full font-medium transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg border border-line rounded-xl p-6"
              >
                <h3 className="text-xl font-heading font-bold mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-surface-light border border-line rounded-lg text-sm font-medium text-muted hover:text-text hover:border-sky transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
