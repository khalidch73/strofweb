// components/Hero.tsx
import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container mx-auto">
        {/* Image as Background */}
        <div className="hero-background absolute inset-0">
        <video width="100%" height="100%" autoPlay loop muted playsInline>
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Other content */}
        <div className="hero-content text-white text-center relative z-10 justify-center pt-56 lg:text-center lg:py-64">
          <h1 className="text-2xl lg:text-4xl font-bold lg:font-extrabold mb-4">Welcome to ModWebSolution</h1>
          <p className="text-xl mb-8 font-bold">
            Your Trusted Partner for Modern and Efficient IT Solutions. We Transform Ideas into Reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
