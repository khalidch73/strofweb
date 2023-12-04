// components/TechnologiesContent.tsx
import React from 'react';

const TechnologiesContent = () => {
  return (
    <section className="bg-gradient-to-r from-slate-500 bg-white to-stone-500 py-28 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Embracing Cutting-Edge Technologies for Modern Web Development
        </h2>
        <h3 className="text-2xl font-semibold mb-12 text-center">At ModWebSolution, we pride ourselves on being at the forefront of technological innovation, utilizing a diverse and powerful stack of technologies to craft modern and efficient websites. Our commitment to staying abreast of the latest advancements allows us to deliver unparalleled web solutions that redefine the digital landscape.</h3>

        {/* Frontend Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Frontend Technologies</h3>
          <ol className="list-decimal list-inside text-xl">
            <li>
              <strong>TypeScript:</strong> Harnessing the robustness of TypeScript, we bring strong typing to the frontend, enhancing code quality, and enabling a more structured and maintainable development process.
            </li>
            <li>
              <strong>React.js:</strong> Our frontend development leverages the power of React.js, a declarative and efficient JavaScript library for building dynamic user interfaces. It enables us to create interactive and seamless user experiences.
            </li>
            <li>
              <strong>HTML & CSS:</strong> The foundation of every web application, HTML and CSS, are meticulously crafted to ensure accessibility, responsiveness, and a visually appealing design that aligns with your brand identity.
            </li>
          </ol>
        </div>

        {/* Backend Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Backend Technologies</h3>
          <ol className="list-decimal list-inside text-xl">
            <li>
              <strong>Node.js:</strong> Powering our backend solutions, Node.js enables scalable and high-performance server-side applications. Its event-driven architecture allows for real-time communication and efficient handling of concurrent requests.
            </li>
            <li>
              <strong>Python:</strong> With Python, we build robust and scalable backend solutions. Its simplicity, readability, and vast ecosystem of libraries make it an ideal choice for a variety of applications.
            </li>
          </ol>
        </div>

        {/* Full-Stack Development */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Full-Stack Development</h3>
          <p>
            Our full-stack development services encompass both frontend and backend technologies. Seamless integration between the user interface and server-side functionalities ensures a cohesive and comprehensive web application.
          </p>
        </div>

        {/* Frameworks and Libraries */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Frameworks and Libraries</h3>
          <ol className="list-decimal list-inside text-xl">
            <li>
              <strong>Next.js:</strong> Leveraging the benefits of Next.js, we build web applications with improved performance, SEO optimization, and server-side rendering capabilities, providing a superior user experience.
            </li>
          </ol>
        </div>

        {/* Development Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Development Tools</h3>
          <ol className="list-decimal list-inside text-xl">
            <li>
              <strong>Visual Studio Code:</strong> Our development team relies on Visual Studio Code for its lightweight yet powerful features. It enhances our productivity and ensures a smooth coding experience.
            </li>
          </ol>
        </div>

        {/* CSS Framework */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">CSS Framework</h3>
          <ol className="list-decimal list-inside text-xl">
            <li>
              <strong>Tailwind CSS:</strong> For streamlined and efficient styling, we employ Tailwind CSS. Its utility-first approach allows for rapid development and easy maintenance of a consistent design system.
            </li>
          </ol>
        </div>

        {/* Data Science and Analytics */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Data Science and Analytics</h3>
          <ol className="list-decimal list-inside text-xl">
            <li>
              <strong>Pandas & NumPy:</strong> When data manipulation and analysis are integral to your web application, our expertise in Pandas and NumPy ensures efficient data handling and processing.
            </li>
          </ol>
        </div>

        {/* Collaboration and Communication */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Collaboration and Communication</h3>
          <ol className="list-decimal list-inside text-xl">
            <li>
              <strong>GitHub:</strong> Ensuring version control and seamless collaboration, we utilize GitHub to manage code repositories, track changes, and facilitate a collaborative development environment.
            </li>
          </ol>
        </div>

        {/* Continuous Integration */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Continuous Integration</h3>
          <ol className="list-decimal list-inside text-xl">
            <li>
              <strong>Docker:</strong> Embracing Docker, we implement containerization to ensure consistency in deployment across different environments, making the deployment process more efficient and reliable.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesContent;
