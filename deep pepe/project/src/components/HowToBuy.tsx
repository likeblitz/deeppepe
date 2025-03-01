import { motion } from 'framer-motion';

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background Image without blur effect */}
      <div className="absolute inset-0 z-0 bg-deep-blue/90" 
           style={{ 
             backgroundImage: 'url(https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGhq134Ye2kL2dO48rX6plwFQU9SJZYtDz0AcC)',
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             opacity: 0.4
           }} 
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.h2 
          className="font-bubblegum text-5xl md:text-7xl text-center mb-12 md:mb-16 text-white" 
          style={{
            WebkitTextStroke: '2px black',
            letterSpacing: '0.05em',
            textShadow: '3px 3px 0 #0D47A1, 6px 6px 0 rgba(0,0,0,0.2)',
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          HOW TO BUY
        </motion.h2>

        {/* Steps Grid - Removed white background container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step 1 */}
          <motion.div
            className="bg-[#FFFFFF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4 flex items-center">
              <span className="text-6xl text-sunny mr-4 font-bold opacity-30">1</span>
              <h3 className="font-bubblegum text-2xl md:text-3xl text-deep-blue">
                Create Wallet 🏄‍♂️
              </h3>
            </div>
            <p className="text-abyssal font-quicksand">
              Grab a wallet faster than a dolphin catches fish! Trust Wallet or Metamask will do the trick.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="bg-[#FFFFFF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="mb-4 flex items-center">
              <span className="text-6xl text-sunny mr-4 font-bold opacity-30">2</span>
              <h3 className="font-bubblegum text-2xl md:text-3xl text-deep-blue">
                Get Some BNB 🐠
              </h3>
            </div>
            <p className="text-abyssal font-quicksand">
              Load up on BNB like it's fish food! You'll need this to swim in our Deep Pepe ocean.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="bg-[#FFFFFF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="mb-4 flex items-center">
              <span className="text-6xl text-sunny mr-4 font-bold opacity-30">3</span>
              <h3 className="font-bubblegum text-2xl md:text-3xl text-deep-blue">
                Find a DEX 🦈
              </h3>
            </div>
            <p className="text-abyssal font-quicksand">
              Visit PancakeSwap or your favorite DEX. Copy our contract address and paste it like you've found buried treasure!
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            className="bg-[#FFFFFF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="mb-4 flex items-center">
              <span className="text-6xl text-sunny mr-4 font-bold opacity-30">4</span>
              <h3 className="font-bubblegum text-2xl md:text-3xl text-deep-blue">
                Swap for $DEEP 🐋
              </h3>
            </div>
            <p className="text-abyssal font-quicksand">
              Trade BNB for $DEEP PEPE and BOOM! You're now officially swimming in the deepest parts of the crypto ocean!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}