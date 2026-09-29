import SectionHeading from './SectionHeading.jsx'
import TimelineItem from './TimelineItem.jsx'

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web development, databases, and systems integration."
        />
        <TimelineItem
          period="2026"
          title="Systems Integration Project"
          place="CIT-U College of Computer Studies"
          description="Worked with a team to design and connect the parts of our SIA class system."
        />
        <TimelineItem
          period="2022 – 2024"
          title="Senior High School, ICT Strand"
          place="Senior High School"
          description="Wrote my first lines of code and decided to pursue IT."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection
