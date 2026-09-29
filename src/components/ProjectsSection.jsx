import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React lab for CSIT340, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/khyllalainemenardo/CSIT340-Lab1-Menardo"
        />
        <ProjectCard
          year="2026"
          title="CSIT340 React Project"
          description="My starter React project, where I first set up Vite and learned how components fit together."
          tech="React · JavaScript"
          link="https://github.com/khyllalainemenardo/CSIT340_reactproj"
        />
        <ProjectCard
          year="2026"
          title="Order Inventory"
          description="A Java application for keeping track of orders and the stock they draw from."
          tech="Java"
          link="https://github.com/khyllalainemenardo/order-inventory"
        />
        <ProjectCard
          year="2026"
          title="SIA Project"
          description="A group project for Systems Integration and Architecture that connects separate services into one system."
          tech="JavaScript"
          link="https://github.com/khyllalainemenardo/SIA_Project"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
