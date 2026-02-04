'use client';
import Image from "next/image";
import { useState } from "react";
import {
Github, Linkedin, Instagram, Mail, Phone,
GraduationCap, Code, Server, Palette, Database, Cloud, Menu, X
} from "lucide-react";

export default function Portfolio() {

const [open,setOpen]=useState(false);

const skills=[
["HTML",95],["CSS",92],["JavaScript",90],
["React / Next",88],["Tailwind",86],
["Node",82],["MongoDB",78],["Figma / UI UX",85]
];

const projects=[
{title:"Enterprise Portfolio",points:["3D UI","Next.js","Responsive","Dark Mode","Glass UI"]},
{title:"Task Manager",points:["Login","CRUD","Dashboard","Roles","JWT Auth"]},
{title:"E-Commerce",points:["Cart","Checkout","Admin Panel","Stripe","Orders"]},
{title:"Social App",points:["Realtime Chat","Notifications","Profiles","Friends"]},
{title:"Blog CMS",points:["SEO","Editor","Admin","Publishing","Analytics"]},
{title:"Analytics Dashboard",points:["Charts","KPIs","Reports","Exports"]},
{title:"API Platform",points:["Node APIs","Auth","MongoDB","Security"]},
{title:"UI Design System",points:["Figma","Components","Themes","Accessibility"]},
];

return(
<div className="bg-black text-white scroll-smooth">

{/* NAVBAR */}
<header className="fixed top-0 w-full bg-black/80 backdrop-blur z-50 border-b border-gray-800">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
Pravin
</span>

<nav className="hidden md:flex gap-8 text-sm">
{["home","about","services","skills","projects","education","contact"].map(i=>(
<a key={i} href={`#${i}`} className="hover:text-cyan-400 capitalize">{i}</a>
))}
</nav>

<button className="md:hidden" onClick={()=>setOpen(!open)}>
{open?<X/>:<Menu/>}
</button>

</div>

{open &&
<div className="bg-black p-6 space-y-4 md:hidden">
{["home","about","services","skills","projects","education","contact"].map(i=>(
<a key={i} href={`#${i}`} className="block capitalize" onClick={()=>setOpen(false)}>{i}</a>
))}
</div>}
</header>

{/* HERO */}
<section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32">

<h1 className="text-8xl font-extrabold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-xl">
Pravin Chettiar
</h1>

<Image src="/pravin.photo.jpeg" width={320} height={320}
className="rounded-full border-4 border-cyan-400 mt-12 shadow-2xl hover:scale-105 transition"/>

<p className="max-w-4xl mt-10 text-2xl text-gray-300">
Full Stack Developer crafting enterprise web applications with modern UI/UX.
</p>

</section>

{/* ABOUT */}
<section id="about" className="max-w-7xl mx-auto px-6 py-44">
<h2 className="text-5xl text-cyan-400 font-bold mb-14">About Me</h2>

<p className="max-w-5xl text-gray-300 leading-relaxed text-lg">
B.Voc IT (AI & ML) student and Full Stack Developer specializing in React, Next.js, Node.js & MongoDB.
I design clean scalable systems with strong UI/UX focus.
</p>

<ul className="mt-10 list-disc pl-6 text-gray-400 space-y-3 text-lg">
<li>Strong problem solving</li>
<li>Reusable component architecture</li>
<li>Pixel perfect UI</li>
<li>REST API integration</li>
<li>Figma UI/UX design</li>
<li>Git collaboration</li>
<li>Performance optimization</li>
</ul>
</section>

{/* SERVICES */}
<section id="services" className="max-w-7xl mx-auto px-6 py-44">
<h2 className="text-5xl text-green-400 text-center font-bold mb-24">Services</h2>

<div className="grid md:grid-cols-3 gap-14">
{[
["Frontend Development",<Code/>],
["Backend APIs",<Server/>],
["UI UX Design",<Palette/>],
["Database Design",<Database/>],
["Cloud Deployment",<Cloud/>],
["Full Stack Solutions",<Code/>]
].map(s=>(
<div key={s[0]} className="bg-gray-900 p-16 rounded-3xl shadow-xl hover:-translate-y-3 transition">
<div className="text-cyan-400 mb-6">{s[1]}</div>
<h3 className="text-2xl font-bold">{s[0]}</h3>
<p className="text-gray-400 mt-4">Enterprise grade development.</p>
</div>
))}
</div>
</section>

{/* SKILLS */}
<section id="skills" className="max-w-6xl mx-auto px-6 py-44">
<h2 className="text-5xl text-purple-400 font-bold mb-20">Skills</h2>

{skills.map(s=>(
<div key={s[0]} className="mb-10">
<div className="flex justify-between mb-2 text-lg"><span>{s[0]}</span><span>{s[1]}%</span></div>
<div className="bg-gray-800 h-4 rounded">
<div style={{width:`${s[1]}%`}} className="h-4 bg-gradient-to-r from-cyan-400 to-green-400 rounded"/>
</div>
</div>
))}
</section>

{/* PROJECTS */}
<section id="projects" className="max-w-7xl mx-auto px-6 py-44">
<h2 className="text-5xl text-indigo-400 font-bold mb-24">Projects</h2>

<div className="grid md:grid-cols-3 gap-14">
{projects.map(p=>(
<div key={p.title} className="bg-gray-900 p-14 rounded-3xl hover:-translate-y-2 transition shadow-xl">
<h3 className="text-cyan-400 font-bold text-2xl mb-4">{p.title}</h3>
<ul className="list-disc pl-5 text-gray-400 space-y-2">
{p.points.map(pt=><li key={pt}>{pt}</li>)}
</ul>
</div>
))}
</div>
</section>

{/* EDUCATION */}
<section id="education" className="max-w-6xl mx-auto px-6 py-44">

<h2 className="text-5xl text-yellow-400 font-bold mb-16 flex items-center gap-4">
<GraduationCap/> Education
</h2>

<div className="bg-gray-900 p-20 rounded-3xl shadow-xl">
<h3 className="text-3xl font-bold mb-6">B.Voc Information Technology (AI & ML)</h3>

<ul className="text-gray-400 list-disc pl-6 space-y-3 text-lg">
<li>Artificial Intelligence fundamentals</li>
<li>Machine Learning applications</li>
<li>Full Stack Development</li>
<li>UI/UX with Figma</li>
<li>Database Management</li>
<li>Software Engineering</li>
<li>Team Projects</li>
</ul>
</div>

</section>

{/* CONTACT */}
<footer id="contact" className="py-44 text-center">

<h2 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-24">
Let’s Connect
</h2>

<div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

<a href="tel:8850935147" className="bg-gray-900 p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition">
<Phone className="mx-auto mb-4"/>8850935147
</a>

<a href="mailto:pravinchettiar96@gmail.com" className="bg-gray-900 p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition">
<Mail className="mx-auto mb-4"/>Email
</a>

<a href="https://instagram.com/pravin_chettiarr" target="_blank"
className="bg-gray-900 p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition">
<Instagram className="mx-auto mb-4"/>Instagram
</a>

<a href="https://linkedin.com" target="_blank"
className="bg-gray-900 p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition">
<Linkedin className="mx-auto mb-4"/>LinkedIn
</a>

</div>

<div className="flex justify-center gap-14 mt-20">
<a href="https://github.com/pravinchettiar96-max" target="_blank"><Github size={36}/></a>
</div>

<p className="text-gray-500 mt-20">
© {new Date().getFullYear()} Pravin Chettiar
</p>

</footer>

</div>
);
}
