import { motion } from 'framer-motion';
import { Button } from './ui/3d-button';
import { IconSwimming } from '@tabler/icons-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 md:pt-16">
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGShjiwpFVBYP3hLQ2EneAUKkv15dFoNf9mCtZ"
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>
      {/* Headline Image */}
      <div className="absolute top-16 md:top-0 left-0 right-0 w-full z-10">
        <img
          src="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGwQeWX6RNIRp5of6KgXvTQmH7hzS3Eluqt48A"
          alt="Deep Pepe Headline" 
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mt-[30%] md:mt-[10%]">
        <div className="text-center md:text-left w-full md:w-1/2">
          <motion.p
            className="text-xl md:text-2xl mb-8 text-sand-light max-w-xl mx-auto md:mx-0 text-shadow-water animate-wave font-quicksand"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Dive into the most memeable depths of the crypto ocean 🌊
          </motion.p>

          <Button
            variant="ai"
            size="lg"
            supportIcon={IconSwimming}
            className="text-xl font-fredoka border-2 shadow-lg hover:shadow-bioluminescent/50"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(100, 255, 218, 0.7)' }}
            whileTap={{ scale: 0.95 }}>
            Start Swimming
          </Button>
        </div>

        <motion.div
          className="md:w-1/2 flex justify-center relative z-10 mt-10 md:mt-0"
          initial={{ scale: 0, x: 100 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGA1L6lx3ofgT8S340bZJ5yNUpta6xWjHmzXv2"
            alt="Deep Pepe Logo"
            className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] animate-float drop-shadow-[0_0_30px_rgba(144,202,249,0.5)]"
          />
        </motion.div>
      </div>
    </section>
  );
}