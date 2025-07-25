import React from 'react';
import img from '../img/profile-2.png'; // Update with your correct path

const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'PHP', 'MySQL',
    'Bash', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'GitLab',
    'Jenkins', 'Ansible', 'Terraform', 'AWS', 'Azure', 'Linux', 'Nginx', 'Apache',
    'CI/CD', 'Prometheus', 'Grafana'
  ];

  return (
    <section id="about" className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        
        {/* Content */}
        <div className="flex-1">
          <p className="text-lg mb-6 leading-relaxed">
            Hi, I'm <strong>Hiralal Singh</strong>, a passionate web developer and DevOps enthusiast
            with a knack for creating scalable, beautiful, and functional systems.
            I specialize in <strong>front-end development</strong> and also work with modern DevOps tools
            to ensure smooth deployment pipelines, automation, and infrastructure as code.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={img}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-indigo-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
