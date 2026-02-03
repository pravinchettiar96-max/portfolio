'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark theme

  const projects = [
    { title: 'Professional Portfolio', desc: 'A professional developer portfolio with animations, responsive layout, and recruiter-friendly structure.', tech: 'React, Tailwind, Framer Motion', live: '#', code: '#' },
    { title: 'Task Management System', desc: 'Role-based task management system with authentication, authorization, and full CRUD workflows.', tech: 'React, Node.js, Express, MongoDB', live: '#', code: '#' },
    { title: 'E-Commerce Platform', desc: 'Full-featured e-commerce platform with product management, cart, checkout, and admin dashboard.', tech: 'MERN Stack', live: '#', code: '#' },
    { title: 'Social Media App', desc: 'A social networking platform with real-time chat, notifications, and user profiles.', tech: 'React, Node.js, Socket.io, MongoDB', live: '#', code: '#' },
    { title: 'Blog CMS', desc: 'Content management system for blogs with role-based access and SEO optimization.', tech: 'Next.js, Tailwind CSS, MongoDB', live: '#', code: '#' },
    { title: 'Portfolio Analytics Dashboard', desc: 'Dashboard showing analytics, charts, and performance metrics for projects.', tech: 'React, Chart.js, Node.js, Express', live: '#', code: '#' },
  ];

  const skills = [
    { name: 'HTML', percent: 95 },
    { name: 'CSS', percent: 90 },
    { name: 'JavaScript', percent: 90 },
    { name: 'React', percent: 85 },
    { name: 'Tailwind CSS', percent: 85 },
    { name: 'UI/UX Design', percent: 80 },
    { name: 'Figma', percent: 75 },
    { name: 'Node.js', percent: 80 },
    { name: 'Express.js', percent: 80 },
    { name: 'MongoDB', percent: 75 },
    { name: 'Git & GitHub', percent: 85 },
    { name: 'Deployment & CI/CD', percent: 70 },
  ];

  return (
    <div className='min-h-screen bg-gray-900 text-gray-100 transition-colors duration-500'>

      {/* Hero Section */}
      <section className='relative flex flex-col items-center justify-center min-h-screen'>
        <motion.h1 initial={{ scale: 0, rotateY: -180 }} animate={{ scale: 1, rotateY: 0 }} transition={{ duration: 1 }}
          className='text-8xl md:text-[9rem] font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent text-center drop-shadow-2xl select-none animate-pulse'>
          Pravin Chettiar
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }} className='mt-10'>
          <Image src='/pravin.photo.jpeg' alt='Pravin Chettiar Profile' width={400} height={400} className='w-96 md:w-[28rem] rounded-full shadow-2xl object-cover border-8 border-gradient-to-r from-blue-400 via-teal-400 to-green-400 hover:scale-105 transition-transform duration-500' />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className='mt-10 text-center'>
          <span className='inline-block mb-4 px-6 py-2 rounded-full text-sm bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 text-white font-semibold shadow-lg'>Full Stack Developer</span>
          <p className='text-2xl md:text-3xl text-gray-200 max-w-2xl mx-auto mt-4 font-medium'>Creating professional, interactive, and visually engaging web applications for enterprise and modern web standards.</p>
          <div className='mt-8 flex justify-center gap-6'>
            <a href='#projects' className='px-8 py-3 rounded-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl'>Explore Projects</a>
            <a href='#contact' className='px-8 py-3 rounded-full border-2 border-green-400 text-green-300 font-semibold transition-all duration-300 hover:bg-green-900 hover:scale-105'>Hire Me</a>
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className='max-w-7xl mx-auto px-6 py-28'>
        <h3 className='text-4xl font-bold mb-10 text-teal-400'>About Me</h3>
        <div className='grid md:grid-cols-2 gap-14 items-start'>
          <p className='text-lg text-gray-200 leading-relaxed'>
            I am a growth-oriented Full Stack Web Developer experienced in building end-to-end enterprise-grade web solutions. I focus on creating scalable, secure, and visually stunning applications. I emphasize code quality, reusability, and maintainability.
            <br /><br />
            Beyond development, I enjoy designing clean UI/UX experiences, exploring new technologies, implementing animations, and interactions that delight users. I continuously contribute to open-source projects, mentor juniors, and participate in hackathons to enhance my skills.
          </p>
          <div className='space-y-5'>
            {['Problem-solving & analytical thinking','UI/UX & accessibility awareness','Clean & maintainable code','Effective teamwork & communication','Continuous learning & adaptability','Open-source contributions','Hackathon participation'].map(item => (
              <motion.div key={item} whileHover={{ scale: 1.05 }} className='p-4 rounded-xl bg-gray-800 shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>✔ {item}</motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='max-w-7xl mx-auto px-6 py-28'>
        <h3 className='text-4xl font-bold mb-8 text-green-400'>Skills & Expertise</h3>
        <p className='max-w-3xl mb-14 text-gray-200'>Combining UI/UX design with technical skills to build professional, interactive, and scalable web applications.</p>
        <div className='grid md:grid-cols-2 gap-10'>
          {skills.map(skill => (
            <div key={skill.name} className='mb-6'>
              <div className='flex justify-between mb-1 font-semibold'>{skill.name} <span>{skill.percent}%</span></div>
              <div className='w-full bg-gray-700 rounded-full h-6'>
                <motion.div initial={{ width: 0 }} animate={{ width: `${skill.percent}%` }} className='h-6 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 rounded-full shadow-lg'/>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='max-w-7xl mx-auto px-6 py-28'>
        <h3 className='text-4xl font-bold mb-8 text-blue-400'>Projects</h3>
        <p className='max-w-3xl mb-12 text-gray-200'>A showcase of professional projects demonstrating full-stack development, modern frameworks, and enterprise-ready solutions.</p>
        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map(project => (
            <motion.div key={project.title} whileHover={{ scale: 1.05, rotateY: 5 }} className='p-6 rounded-2xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2'>
              <h4 className='text-xl font-bold mb-2 text-teal-400'>{project.title}</h4>
              <p className='text-gray-200 mb-3'>{project.desc}</p>
              <p className='text-sm mb-4 font-semibold'>Tech Stack: {project.tech}</p>
              <div className='flex gap-4'>
                <a href={project.live} className='inline-flex items-center gap-2 text-blue-400 font-semibold'>Live Demo <ExternalLink size={16} /></a>
                <a href={project.code} className='inline-flex items-center gap-2 text-green-400 font-semibold'>Source Code <Github size={16} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 border-t border-gray-700'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10'>
          <div>
            <h4 className='text-xl font-bold text-teal-400 mb-3'>Pravin Chettiar</h4>
            <p className='text-gray-300 leading-relaxed'>Creating professional, high-performing, and visually engaging web applications using modern technologies for enterprise-grade standards.</p>
          </div>
          <div>
            <h5 className='font-semibold text-gray-200 mb-4'>Quick Links</h5>
            <ul className='space-y-2'>
              <li><a href='#skills' className='hover:text-teal-400 transition'>Skills</a></li>
              <li><a href='#projects' className='hover:text-teal-400 transition'>Projects</a></li>
              <li><a href='#contact' className='hover:text-teal-400 transition'>Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className='font-semibold text-gray-200 mb-4'>Connect</h5>
            <div className='flex gap-4'>
              <a href='#' className='p-3 rounded-full bg-gray-800 text-blue-400 transition-all duration-300 hover:bg-gray-700 hover:scale-110'><Github size={18} /></a>
              <a href='#' className='p-3 rounded-full bg-gray-800 text-green-400 transition-all duration-300 hover:bg-gray-700 hover:scale-110'><Linkedin size={18} /></a>
              <a href='mailto:your@email.com' className='p-3 rounded-full bg-gray-800 text-teal-400 transition-all duration-300 hover:bg-gray-700 hover:scale-110'><Mail size={18} /></a>
            </div>
          </div>
        </div>
        <div className='text-center py-6 text-gray-400 border-t border-gray-700'>
          © {new Date().getFullYear()} Pravin Chettiar. All rights reserved.
        </div>
      </footer>

    </div>
  );
}