import FancyButton2 from "../Components/Buttons/FancyButtons2";

const logos = [
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Jenkins", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Terraform", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Bash", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "Grafana", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Prometheus", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { name: "Ansible", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
  { name: "Helm", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
];



const Project = () => {
  return (
    <div className="relative bg-neutral-900 text-white py-16 px-4">
      {/* Linux mascot on DevOps text */}

      {/* DevOps Text */}
      <div className="text-center max-w-3xl mx-auto z-10 relative">
        <div className="flex justify-center mb-4">
          <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600" href="#">
            Mastering DevOps
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">Explore</span>
              <svg className="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="m9 18 6-6-6-6" /></svg>
            </span>
          </a>
        </div>

        <p className="mt-5 text-lg text-gray-300">
          Delivering continuous integration and automation with cutting-edge cloud-native tools.
          <br />
          Bridging the gap between development and operations.
        </p>

        {/* Logos - Horizontal row */}
        <div className="mt-10 flex justify-center flex-wrap gap-6">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.url}
              alt={logo.name}
              title={logo.name}
              className="w-12 h-12 md:w-14 md:h-14 object-contain grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10">
        <FancyButton2 />
        </div>
      </div>
    </div>
  );
};

export default Project;
