// components/About.tsx
import React from 'react';
const About = () => {
  return (
    <section className="bg-gradient-to-r from-white bg-slate-900 to-gray-900 text-white py-24 relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0 relative">
          <video width="100%" height="100%" autoPlay loop muted playsInline>
            <source src="/about-video.mp4" type="video/mp4" />
          </video>
        </div>

        
        <div className="lg:w-1/2 lg:pl-8 z-10">
          <h2 className="text-3xl font-extrabold mb-4">ModWebSolution</h2>
          <p className="text-lg mb-6">
            At ModWebSolution, we are at the forefront of technological innovation, crafting modern
            solutions that redefine the digital landscape. Specializing in a diverse range of
            cutting-edge technologies, we bring your ideas to life with expertise in TypeScript,
            Node.js, React.js, Next.js, Tailwind CSS, and Python.
          </p>
          <p className="text-lg mb-6">
            Our mission is to revolutionize the web development experience by integrating the power
            of OpenAI. We believe in pushing boundaries and embracing the latest advancements to
            deliver websites that not only meet but exceed the expectations of the modern digital
            era.
          </p>
          <p className="text-lg">
            With a team of skilled professionals, we embark on a journey to transform your visions
            into visually stunning and functionally robust websites. Whether you're a startup
            looking to establish your online presence or an enterprise aiming for digital
            excellence, ModWebSolution is your trusted partner in the world of IT solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
