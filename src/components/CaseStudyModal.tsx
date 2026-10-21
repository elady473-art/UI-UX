import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudyDetails } from '../data/caseStudies';

interface CaseStudyModalProps {
  caseId: string;
  onClose: () => void;
}

const CaseStudyModal = ({ caseId, onClose }: CaseStudyModalProps) => {
  const caseStudy = caseStudyDetails[caseId];

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/95 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-line rounded-2xl shadow-2xl overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 float-right z-10 w-10 h-10 flex items-center justify-center bg-surface-light hover:bg-line border border-line rounded-full transition-colors"
            aria-label="Close modal"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold text-sky tracking-widest uppercase mb-4">
              {caseStudy.kicker}
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-6">
              {caseStudy.title}
            </h2>

            <p className="text-lg text-muted leading-relaxed mb-12 pb-12 border-b border-line">
              {caseStudy.intro}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {caseStudy.sections.map(([heading, content], index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-heading font-bold mb-3">
                    {heading}
                  </h3>
                  <p className="text-muted leading-relaxed">{content}</p>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            {caseStudy.note && (
              <div className="mt-12 p-6 bg-surface-light border border-line rounded-xl">
                <p className="text-sm text-muted italic leading-relaxed">
                  <strong className="text-sky not-italic">Note:</strong>{' '}
                  {caseStudy.note}
                </p>
              </div>
            )}

            {/* Close Button at Bottom */}
            <div className="flex justify-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-8 py-3 bg-gradient-primary text-bg font-semibold rounded-full"
              >
                Close Case Study
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;
