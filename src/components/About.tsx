import { motion } from 'framer-motion';
import { Button } from './ui/3d-button';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-[#e6f4ff] to-[#c1e0ff] overflow-hidden">
      {/* Background pattern - repeating but subtle */}
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-soft-light" 
           style={{ 
             backgroundImage: 'url(https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGxTh4a01l01R47JPDyFCcvGktzfnYVSK6wasZ)',
             backgroundRepeat: 'repeat',
             backgroundSize: '400px 400px',
           }} 
      />

      {/* Wave element at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#0D47A1" 
            fillOpacity="0.2" 
            d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-10 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Character on the left */}
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGhs7iqt2kL2dO48rX6plwFQU9SJZYtDz0AcCu"
              alt="Deep Pepe Character"
              className="w-full max-w-[500px] mx-auto drop-shadow-[0_10px_25px_rgba(13,71,161,0.5)] animate-float"
            />
          </motion.div>

          {/* Text content on the right */}
          <motion.div 
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-bubblegum text-4xl md:text-5xl text-deep-blue mb-6 text-shadow-deep">
              WHAT IS $DEEP PEPE?
            </h2>
            <div className="space-y-4 font-quicksand text-abyssal mb-8">
              <p className="text-lg md:text-xl">
                Born in the deepest trenches of the crypto ocean, Deep Pepe emerged as the most legendary aquatic meme token ever discovered!
              </p>
              <p className="text-lg">
                With a community as vast as the seven seas and tokenomics as solid as a pearl, we're making waves in the DeFi space!
              </p>
            </div>
            
            {/* Enhanced Buy Now Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                variant="ai"
                size="lg"
                className="bg-coral hover:bg-coral/90 text-white font-fredoka text-lg px-10 py-4 rounded-xl border-2 border-white/20 shadow-[0_4px_14px_rgba(255,112,67,0.5)] hover:shadow-[0_6px_20px_rgba(255,112,67,0.7)]"
              >
                Buy Now
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}