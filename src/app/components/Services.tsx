// components/Services.tsx
import React from 'react';

const Services = () => {
  return (
    <section className="service-section relative bg-gray-800">
      <div className="container mx-auto">
        {/* video as Background */}
        <div className="service-background absolute inset-0 overflow-hidden">
          <video width="100%" height="100%" autoPlay loop muted playsInline>
            <source src="/services-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-content text-slate-100 text-center relative z-10 justify-center py-0">
        <h2 className="lg:text-4xl lg:font-extrabold lg:mb-12 text-center text-white font-bold">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 lg:gap-16 gap:4">
          {/* Frontend Development Service */}
          <div className=" lg:p-8 p-4 rounded-md shadow-md">
            <h3 className="lg:text-2xl lg:font-semibold font-semibold mb-4">Frontend Development</h3>
            <p className="lg:text-lg lg:mb-6 text-sm">
              Our frontend development team crafts engaging and user-centric interfaces using the latest technologies such as TypeScript, React.js, HTML, and CSS. We focus on creating seamless and visually appealing user experiences that captivate your audience.
            </p>
            <p className="lg:text-lg lg:mb-6 text-sm">
              Whether you need a stunning website or a dynamic web application, our frontend experts have the skills to bring your vision to life.
            </p>
          </div>

          {/* Backend Development Service */}
          <div className=" lg:p-8 p-4 rounded-md shadow-md">
            <h3 className="lg:text-2xl lg:font-semibold font-semibold mb-4">Backend Development</h3>
            <p className="lg:text-lg lg:mb-6 text-sm">
              Our backend development team specializes in building robust and scalable server-side solutions. Using technologies like Node.js and Python, we create the backbone of your web applications, ensuring optimal performance, security, and data management.
            </p>
            <p className="lg:text-lg lg:mb-6 text-sm">
              From database design to server logic, we handle the intricacies of backend development, providing a solid foundation for your digital presence.
            </p>
          </div>

          {/* Full-Stack Development Service */}
          <div className="lg:p-8 p-4 rounded-md shadow-md">
            <h3 className="lg:text-2xl lg:font-semibold font-semibold mb-4">Full-Stack Development</h3>
            <p className="lg:text-lg lg:mb-6 text-sm">
              Our full-stack development services encompass both frontend and backend expertise. We offer end-to-end solutions, ensuring seamless integration between the user interface and server-side functionalities.
            </p>
            <p className="lg:text-lg lg:mb-6 text-sm">
              By leveraging technologies like React.js, Node.js, and beyond, we deliver comprehensive web applications that meet your business objectives and provide a delightful user experience.
            </p>
          </div>

          {/* Custom Solutions Service */}
          <div className="lg:p-8 p-4 rounded-md shadow-md">
            <h3 className="lg:text-2xl lg:font-semibold font-semibold mb-4">Custom Solutions</h3>
            <p className="lg:text-lg lg:mb-6 text-sm">
              Every business is unique, and so are its requirements. Our team excels in creating custom solutions tailored to your specific needs. Whether it's e-commerce, content management, or any specialized functionality, we design and develop solutions that align with your business goals.
            </p>
            <p className="lg:text-lg lg:mb-6 text-sm">
              Let us transform your ideas into reality with our personalized approach to web development.
            </p>
          </div>

          {/* Responsive Design Service */}
          <div className=" lg:p-8 p-4 rounded-md shadow-md">
            <h3 className="lg:text-2xl lg:font-semibold font-semibold mb-4">Responsive Design</h3>
            <p className="lg:text-lg lg:mb-6 text-sm">
              In today's multi-device landscape, having a responsive design is crucial. We ensure that your website or application looks and functions seamlessly across various devices, providing an optimal viewing experience for users on desktops, tablets, and smartphones.
            </p>
            <p className="lg:text-lg lg:mb-6 text-sm">
              Our responsive design services guarantee that your digital presence remains accessible and user-friendly across all platforms.
            </p>
          </div>

          {/* Maintenance and Support Service */}
          <div className="lg:p-8 p-4 rounded-md shadow-md">
            <h3 className="lg:text-2xl lg:font-semibold font-semibold mb-4">Maintenance and Support</h3>
            <p className="lg:text-lg lg:mb-6 text-sm">
              We understand that the digital landscape is dynamic, and your web applications require continuous attention. Our maintenance and support services ensure that your website or application remains up-to-date, secure, and performs optimally.
            </p>
            <p className="lg:text-lg lg:mb-6 text-sm">
              Partner with us for ongoing support, updates, and improvements to keep your digital presence at its best.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;




// components/Hero.tsx
// import React from 'react';
// import Image from 'next/image';

// const Hero: React.FC = () => {
//   return (
//     <section className="hero-section relative py-28">
//       <div className="container mx-auto">
//         {/* Image as Background */}
//         <div className="hero-background absolute inset-0">
//         <video width="100%" height="100%" autoPlay loop muted playsInline>
//             <source src="/hero-video.mp4" type="video/mp4" />
//           </video>
//         </div>

//         {/* Other content */}
//         <div className="hero-content text-white text-center relative z-10 justify-center py-64">
//           <h1 className="text-4xl font-extrabold mb-4">Welcome to ModWebSolution</h1>
//           <p className="text-lg mb-8 font-bold">
//             Your Trusted Partner for Modern and Efficient IT Solutions. We Transform Ideas into Reality.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
