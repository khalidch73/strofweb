// components/Portfolio.tsx
import React from 'react';

// Sample data for projects
const projects = [
  {
    id: 1,
    name: 'Project One',
    description: 'A description of the first project.',
    technologies: ['React.js', 'Node.js', 'Tailwind CSS'],
    images: ['/project1-image1.jpg', '/project1-image2.jpg'],
  },
  {
    id: 2,
    name: 'Project Two',
    description: 'A description of the second project.',
    technologies: ['Next.js', 'Python', 'Django'],
    images: ['/project2-image1.jpg', '/project2-image2.jpg'],
  },
  {
    id: 3,
    name: 'Project Three',
    description: 'A description of the second project.',
    technologies: ['Next.js', 'Python', 'Django'],
    images: ['/project2-image1.jpg', '/project2-image2.jpg'],
  },
  {
    id: 4,
    name: 'Project Four',
    description: 'A description of the second project.',
    technologies: ['Next.js', 'Python', 'Django'],
    images: ['/project2-image1.jpg', '/project2-image2.jpg'],
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section className="bg-white text-gray-800 py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Our Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-8 rounded-md shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-lg mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Technologies Used:</h4>
                <ul className="list-disc list-inside">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2">Project Images:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Project ${project.id} Image ${index + 1}`}
                      className="w-full h-auto rounded-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
