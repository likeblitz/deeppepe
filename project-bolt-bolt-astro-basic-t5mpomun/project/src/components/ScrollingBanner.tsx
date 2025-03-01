import { motion } from 'framer-motion';

export default function ScrollingBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-deep-blue bg-opacity-50 backdrop-blur-sm py-3 md:py-4">
      <div className="flex items-center whitespace-nowrap animate-scroll" style={{ animation: 'scroll 20s linear infinite' }}>
        {/* Duplicate the text multiple times to ensure smooth infinite scroll */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className="inline-flex items-center mx-4 md:mx-8 text-xl md:text-3xl font-bubblegum text-gradient">
            <img
              src="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGA1L6lx3ofgT8S340bZJ5yNUpta6xWjHmzXv2"
              alt="Deep Pepe"
              className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4 object-contain animate-bubble"
            />
            DIVE WITH DEEP PEPE
          </span>
        ))}
      </div>
    </div>
  );
}