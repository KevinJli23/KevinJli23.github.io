import { motion } from "framer-motion";
import { useEffect } from "react";

export default function PortfolioHomepage() {
  useEffect(() => {
    document.title = "Kevin's Portfolio";
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6"
      >
        Welcome to My Website!
      </motion.h1>

      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg max-w-2xl text-center"
      >
        Welcome to my very first website on my journey of learning HTML, CSS, and JavaScript!
        I'm thrilled to share this experience as I dive into the world of creating user-friendly
        and accessible web interfaces.
      </motion.p>

      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8"
      >
        <a href="https://www.linkedin.com/in/kevinjianhli23" target="_blank" rel="noopener noreferrer" className="text-blue-400">LinkedIn</a> |
        <a href="https://github.com/KevinJli23" target="_blank" rel="noopener noreferrer" className="text-blue-400 ml-2">GitHub</a>
      </motion.footer>
    </div>
  );
}
