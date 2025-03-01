import { motion } from 'framer-motion';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-[#e6f4ff] to-[#c1e0ff] overflow-hidden">
      {/* Background image with 50% opacity */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGCgju15dac43YVFD7XbTwedBEWuG6fqyZmojN)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
        }}
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Tokenomics Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="font-bubblegum text-5xl md:text-7xl text-deep-blue tracking-wider uppercase" 
                style={{ 
                  WebkitTextStroke: '2px black',
                  letterSpacing: '0.05em',
                }}>
              TOKENOMICS
            </h2>
          </motion.div>
          
          {/* Contract Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex items-center bg-white rounded-full overflow-hidden border-2 border-deep-blue/30 shadow-md max-w-full">
              <div className="bg-deep-blue py-3 px-4 text-white font-bold">
                CA:
              </div>
              <div className="py-2 px-4 font-mono text-abyssal overflow-hidden text-sm md:text-base whitespace-nowrap overflow-ellipsis max-w-[200px] md:max-w-[400px]">
                0xABC123DEF456GHI789JKL012MNO345PQR678ST9
              </div>
              <button
                className="py-2 px-3 text-ocean-blue hover:text-deep-blue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                </svg>
              </button>
            </div>
          </motion.div>
          
          {/* Updated Tokenomics Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[600px]">
              <svg viewBox="0 0 600 600" width="100%" height="100%" className="max-w-full">
                {/* Pie Chart Segments - Using actual angles from the design */}
                <g transform="translate(300, 300)">
                  {/* 17% Presale - Black */}
                  <path
                    d="M 0 0 L 0 -200 A 200 200 0 0 1 114.7 -164.7 Z"
                    fill="#000000"
                    stroke="white"
                    strokeWidth="2"
                  />
                  
                  {/* 18% Private round - Blue */}
                  <path
                    d="M 0 0 L 114.7 -164.7 A 200 200 0 0 1 198.5 -31.2 Z"
                    fill="#4169E1"
                    stroke="white"
                    strokeWidth="2"
                  />
                  
                  {/* 9% Seed round - Orange */}
                  <path
                    d="M 0 0 L 198.5 -31.2 A 200 200 0 0 1 180.9 85.5 Z"
                    fill="#FF7043"
                    stroke="white"
                    strokeWidth="2"
                  />
                  
                  {/* 15% Rewards for Analysts - Pink */}
                  <path
                    d="M 0 0 L 180.9 85.5 A 200 200 0 0 1 51.8 192.6 Z"
                    fill="#FF4081"
                    stroke="white"
                    strokeWidth="2"
                  />
                  
                  {/* 5% Operational - Turquoise */}
                  <path
                    d="M 0 0 L 51.8 192.6 A 200 200 0 0 1 -17.4 199.2 Z"
                    fill="#40E0D0"
                    stroke="white"
                    strokeWidth="2"
                  />
                  
                  {/* 5% Marketing - Green */}
                  <path
                    d="M 0 0 L -17.4 199.2 A 200 200 0 0 1 -87.2 180.9 Z"
                    fill="#4CAF50"
                    stroke="white"
                    strokeWidth="2"
                  />
                  
                  {/* 5% Advisors - Light Yellow */}
                  <path
                    d="M 0 0 L -87.2 180.9 A 200 200 0 0 1 -141.4 141.4 Z"
                    fill="#FFEB3B"
                    stroke="white"
                    strokeWidth="2"
                  />
                  
                  {/* 2% Public round - Light Gray */}
                  <path
                    d="M 0 0 L -141.4 141.4 A 200 200 0 0 1 -162.3 117.6 Z"
                    fill="#E0E0E0"
                    stroke="white"
                    strokeWidth="2"
                  />
                  
                  {/* 10% Public round - Gray */}
                  <path
                    d="M 0 0 L -162.3 117.6 A 200 200 0 0 1 -195.1 -41.5 Z"
                    fill="#BDBDBD"
                    stroke="white"
                    strokeWidth="2"
                  />
                  
                  {/* 6% Liquidity - Purple */}
                  <path
                    d="M 0 0 L -195.1 -41.5 A 200 200 0 0 1 0 -200 Z"
                    fill="#9C27B0"
                    stroke="white"
                    strokeWidth="2"
                  />
                  
                  {/* Center Circle with Pepe image */}
                  <circle cx="0" cy="0" r="80" fill="#FFC107" stroke="#000" strokeWidth="2" />
                  <image 
                    href="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGA1L6lx3ofgT8S340bZJ5yNUpta6xWjHmzXv2" 
                    x="-70" 
                    y="-70" 
                    height="140" 
                    width="140" 
                  />
                </g>
                
                {/* Labels */}
                <g>
                  {/* 17% Presale */}
                  <text x="200" y="110" className="font-bold" fill="#000" fontSize="18">17%</text>
                  <text x="200" y="130" className="font-medium" fill="#000" fontSize="14">Presale</text>
                  
                  {/* 18% Private round */}
                  <text x="350" y="160" className="font-bold" fill="#000" fontSize="18">18%</text>
                  <text x="350" y="180" className="font-medium" fill="#000" fontSize="14">Private round</text>
                  
                  {/* 9% Seed round */}
                  <text x="450" y="280" className="font-bold" fill="#000" fontSize="18">9%</text>
                  <text x="450" y="300" className="font-medium" fill="#000" fontSize="14">Seed round</text>
                  
                  {/* 15% Rewards */}
                  <text x="420" y="380" className="font-bold" fill="#000" fontSize="18">15%</text>
                  <text x="420" y="400" className="font-medium" fill="#000" fontSize="14">Rewards for Analysts</text>
                  
                  {/* 5% Operational */}
                  <text x="330" y="470" className="font-bold" fill="#000" fontSize="18">5%</text>
                  <text x="330" y="490" className="font-medium" fill="#000" fontSize="14">Operational</text>
                  
                  {/* 5% Marketing */}
                  <text x="250" y="520" className="font-bold" fill="#000" fontSize="18">5%</text>
                  <text x="250" y="540" className="font-medium" fill="#000" fontSize="14">Marketing</text>
                  
                  {/* 5% Advisors */}
                  <text x="160" y="500" className="font-bold" fill="#000" fontSize="18">5%</text>
                  <text x="160" y="520" className="font-medium" fill="#000" fontSize="14">Advisors</text>
                  
                  {/* 2% Public round */}
                  <text x="100" y="460" className="font-bold" fill="#000" fontSize="18">2%</text>
                  <text x="100" y="480" className="font-medium" fill="#000" fontSize="14">Public round</text>
                  
                  {/* 10% Public round */}
                  <text x="70" y="320" className="font-bold" fill="#000" fontSize="18">10%</text>
                  <text x="70" y="340" className="font-medium" fill="#000" fontSize="14">Public round</text>
                  
                  {/* 6% Liquidity */}
                  <text x="120" y="180" className="font-bold" fill="#000" fontSize="18">6%</text>
                  <text x="120" y="200" className="font-medium" fill="#000" fontSize="14">Liquidity</text>
                </g>
                
                {/* Token Supply Text */}
                <g>
                  <text x="300" y="580" textAnchor="middle" className="font-bubblegum" fill="#000" fontSize="28" fontWeight="bold">555,555,555</text>
                  <text x="300" y="605" textAnchor="middle" className="font-quicksand" fill="#000" fontSize="16" fontWeight="medium">TOKEN SUPPLY</text>
                </g>
              </svg>
            </div>
          </motion.div>
          
          {/* 0/0 Tax Note */}
          <div className="flex justify-center mt-8">
            <div className="bg-white p-3 rounded-md shadow-md border-2 border-ocean-blue/30 w-[180px] flex flex-col items-center transform rotate-3">
              <p className="font-bubblegum text-xl text-deep-blue mb-1">0/0 Tax</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#FFD54F" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"></path>
                <path d="M12 6v2m0 8v2"></path>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}