'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function HeroSection() {
  return (
    <motion.header
      className="text-center py-24 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
        variants={itemVariants}
      >
        <span className="text-gradient">The Sabi Ecosystem</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto mb-6"
        variants={itemVariants}
      >
        Sabi /’sah-bee/ (v.) — To understand deeply.
      </motion.p>
      <motion.p
        className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto mb-10"
        variants={itemVariants}
      >
        We are a launchpad for projects that celebrate local identity on a
        global scale. Whether it's high-fidelity radio or community-driven
        dictionaries, we{' '}
        <span className="font-semibold text-primary animate-pulse-glow">sabi</span> how to
        connect people.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Link href="#projects" passHref>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out"
          >
            Explore the Projects
          </Button>
        </Link>
      </motion.div>
    </motion.header>
  );
}
