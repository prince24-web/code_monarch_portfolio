'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// Import the Image component from Next.js
import Image from 'next/image';
import { Github, ExternalLink, Mail, Phone, MapPin, Sun, Moon, Code, Sparkles, ArrowRight, Star, Zap, Layers, Terminal, Cpu, Palette, Database } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const skills = [
    { name: 'HTML', icon: <Code className="w-6 h-6" />, level: 95 },
    { name: 'CSS', icon: <Palette className="w-6 h-6" />, level: 92 },
    { name: 'JavaScript', icon: <Terminal className="w-6 h-6" />, level: 88 },
    { name: 'React', icon: <Cpu className="w-6 h-6" />, level: 85 },
    { name: 'Next.js', icon: <Layers className="w-6 h-6" />, level: 82 },
    { name: 'Tailwind CSS', icon: <Sparkles className="w-6 h-6" />, level: 90 },
    { name: 'Framer Motion', icon: <Zap className="w-6 h-6" />, level: 80 },
    { name: 'Python', icon: <Database className="w-6 h-6" />, level: 75 }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, featuring real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['Next.js', 'React', 'Tailwind', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'An intelligent chat application with real-time messaging, AI responses, and beautiful animations.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop',
      tech: ['React', 'Python', 'WebSocket', 'AI API'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Portfolio Dashboard',
      description: 'A dynamic dashboard for tracking personal projects, skills progression, and career milestones.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Framer Motion', 'Chart.js'],
      github: '#',
      live: '#'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github />, url: '#', color: 'hover:text-gray-400' },
    { name: 'TikTok', icon: '🎵', url: '#', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: '📘', url: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: '📷', url: '#', color: 'hover:text-purple-400' },
    { name: 'X (Twitter)', icon: '🐦', url: '#', color: 'hover:text-sky-400' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const FloatingElements = () => (
    <>
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <FloatingElements />

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 backdrop-blur-lg ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Prince Chidera
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <motion.button
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-6xl md:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Frontend
                </span>
                <br />
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                  Developer
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl`}
              variants={itemVariants}
            >
              Crafting digital experiences with 3+ years of expertise in React, Next.js, and modern web technologies. Currently pursuing Software Engineering.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className={`px-8 py-4 border-2 ${darkMode ? 'border-gray-600 hover:border-gray-400' : 'border-gray-300 hover:border-gray-500'} rounded-full font-semibold flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" /> Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-6"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className={`text-2xl transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {typeof social.icon === 'string' ? social.icon : social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative w-80 h-80 mx-auto"
              whileHover={{ scale: 1.05 }}
              style={{ y: y1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50"></div>
              {/* FIX: Replaced <img> with <Image /> and added width/height */}
              <Image
                src="/profile2.jpg"
                alt="Prince Chidera"
                width={320} // Adjusted to match w-80 (320px)
                height={320} // Adjusted to match h-80 (320px)
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20"
              />
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              A comprehensive toolkit of modern technologies and frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3 mb-2`}>
                  <motion.div
                    className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}% Proficiency</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Showcasing my latest work and creative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-2xl transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  {/* FIX: Replaced <img> with <Image /> and added width/height */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600} // Based on the provided Unsplash URLs
                    height={400} // Based on the provided Unsplash URLs
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Let&apos;s Connect {/* FIX: Replaced ' with &apos; */}
              </span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Ready to bring your ideas to life? Let&apos;s collaborate! {/* FIX: Replaced ' with &apos; */}
            </p>
          </motion.div>

          <motion.div
            className={`max-w-2xl mx-auto p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <motion.div
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>prince@example.com</p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>+234 xxx xxx xxxx</p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Nigeria</p>
              </motion.div>
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              Prince Chidera
            </motion.div>

            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className={`text-xl transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2, y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {typeof social.icon === 'string' ? social.icon : social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className={`text-center mt-8 pt-8 border-t ${darkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
            <p>&copy; 2024 Prince Chidera. All rights reserved. Built with Next.js & Framer Motion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;