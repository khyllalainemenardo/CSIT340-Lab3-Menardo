import SectionHeading from './SectionHeading.jsx'
import TimelineItem from './TimelineItem.jsx'

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2023 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Studying web development, database design, and systems integration, and building projects for each along the way."
        />
        <TimelineItem
          period="2021 – 2023"
          title="Senior High School, ABM Strand"
          place="De La Salle Andres Soriano Memorial College"
          description="Studied accounting, business, and management, which later led me to explore how technology supports the way organizations work."
        />
        <TimelineItem
          period="2014 – 2018"
          title="Junior High School"
          place="De La Salle Andres Soriano Memorial College"
          description="Built a strong foundation in core subjects and first got curious about computers through school activities and projects."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection
