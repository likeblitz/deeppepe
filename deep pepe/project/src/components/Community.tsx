import { motion } from 'framer-motion';

export default function Community() {
  return (
    <section id="community" className="relative py-20 px-4 overflow-hidden">
      {/* Background with ocean theme */}
      <div className="absolute inset-0 bg-[url('https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGyWNIuKJTDoey2RItWhlCYVZ5LQ4T36KnUwE8')] bg-cover bg-center bg-no-repeat"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Headline */}
        <motion.h2 
          className="font-bubblegum text-5xl md:text-7xl text-sunny mb-12 text-shadow-deep text-center relative z-20"
          style={{
            WebkitTextStroke: '2px black',
            letterSpacing: '0.05em',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Join Our Community
        </motion.h2>
        
        {/* Content layout - Image positioned to the right */}
        <div className="flex flex-col md:flex-row items-center justify-end">
          {/* Right side with whale image */}
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background pattern for the whale */}
            <motion.div
              className="absolute -inset-[15%] md:-inset-[25%] -z-10 origin-center animate-rotate"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGBPnTO06lj8HO1TrmZAG4SCQfnIsWbi36LNXU"
                alt="Background Pattern"
                className="w-full h-full object-contain opacity-50 transform-gpu"
              />
            </motion.div>
            
            {/* Whale image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKG8f33p3zks4kvlYF3GW9bUgpXQ5eItT7fZzdj"
                alt="Community Feature"
                className="w-full h-auto rounded-3xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Social Media Icons - Repositioned for better visibility */}
      <motion.div 
        className="absolute w-[12%] md:w-[8%] left-[15%] bottom-[25%] md:top-[55%] z-20"
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 8px rgba(100, 255, 218, 0.7))" }}
      >
        <img
          src="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGcFFgAi2G4JCeXSaB5Po61nN9cuwVGWrKiLmO"
          alt="Telegram"
          className="w-full h-auto"
        />
      </motion.div>
      <motion.div 
        className="absolute w-[12%] md:w-[8%] left-[35%] bottom-[20%] md:top-[65%] z-20"
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
        whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 8px rgba(100, 255, 218, 0.7))" }}
      >
        <img
          src="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGi554QSuKW5zQ42e9rD3h6C8uBjSPERvsOp0a"
          alt="X"
          className="w-full h-auto"
        />
      </motion.div>
      <motion.div 
        className="absolute w-[12%] md:w-[8%] left-[25%] bottom-[15%] md:top-[75%] z-20"
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
        whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 8px rgba(100, 255, 218, 0.7))" }}
      >
        <img
          src="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKG5DrrDbANBhqskoZDGzTw6gj7deanuli4NC3R"
          alt="Dex Screener"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}