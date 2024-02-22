"use client";

import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";


export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Particles
        		className="absolute inset-0 -z-10"
        		quantity={500}
     		/>
        
			<Navigation />
			<div className="flex items-center justify-center min-h-screen px-4">
            <div className="max-w-4xl w-full rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out backdrop-blur-md bg-black/70 border border-gray-700 overflow-hidden">
    <Card>
        <div className="p-6 space-y-4 flex flex-col items-center justify-center text-zinc-400 ">
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r text-zinc-500 hover:text-white to-transparent">
                About Me
            </h2>
            <p className=" text-center justify-center lg:text-lg mx-4 my-4 leading-relaxed text-zinc-400">
    Innovator at heart, <span className="font-semibold ">Full-Stack Developer</span> by trade. I blend modern web technologies like <span className="font-semibold ">React</span>, <span className="font-semibold ">Node.js</span>, and <span className="font-semibold ">Express</span> to craft sleek, responsive applications. Driven by curiosity, I'm on a mission to build digital experiences that <span className="font-bold">impress</span> and <span className="font-bold">perform</span>. Let's create something <span className="italic ">remarkable</span> together.
</p>

            {/* Enhanced Skills Section */}
            <div className=" p-6 space-y-4 flex-col mt-8 w-full text-center">
                <h2 className="text-3xl w-full  lg:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r text-zinc-500 hover:text-white to-transparent">
                <span className="bg-clip-text text-transparent bg-gradient-to-r text-zinc-600  hover:text-zinc-200">Skills</span>
                </h2>
                
                <div className="flex flex-wrap justify-center gap-4 mt-4">
    {["JavaScript", "TypeScript", "React.js", "Next.js", "SCSS", "Tailwind CSS", "MongoDB", "PostgreSQL", "Node.js", "Express.js", "GraphQL", "Redux", "Framer Motion", "Three.js", "Docker", "AWS", "Firebase", "Git", "Figma"].map(skill => (
        <div key={skill} className="transition duration-300 ease-in-out transform  hover:scale-110 rounded-lg bg-gradient-to-r from-black to-zinc-800 p-2 px-4 py-2 text-sm cursor-pointer  hover:from-zinc-700 hover:to-zinc-500 shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-300 group-hover:from-green-400 group-hover:to-blue-300">
                {skill}
            </span>
        </div>
    ))}
</div>


            </div>
        </div>
    </Card>
</div>

</div>

        </div>
	);
}
