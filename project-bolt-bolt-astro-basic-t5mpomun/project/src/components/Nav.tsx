import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'How to Buy', href: '#how-to-buy' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Community', href: '#community' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-deep-blue bg-opacity-90 backdrop-blur-lg shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src="https://ts06u0zkws.ufs.sh/f/HFcg9iYs2eKGA1L6lx3ofgT8S340bZJ5yNUpta6xWjHmzXv2"
              alt="Deep Pepe"
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <span className="font-bubblegum text-xl md:text-2xl text-sunny text-shadow-glow">Deep Pepe</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sand-light hover:text-sunny font-fredoka transition-colors hover:text-shadow-glow"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 }
          }}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-deep-blue bg-opacity-90 backdrop-blur-lg rounded-b-lg">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white hover:text-sunny font-fredoka transition-colors text-center hover:text-shadow-glow"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}