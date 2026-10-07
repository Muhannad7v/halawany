import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { AutomationDemo } from '@/components/automation-demo'
import { Projects } from '@/components/projects'
import { Process } from '@/components/process'
import { WorkflowAnimation } from '@/components/workflow-animation'
import { TechAbout } from '@/components/tech-about'
import { Contact, Footer } from '@/components/contact'
import { SnapSection } from '@/components/snap-section'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <SnapSection animate={false}>
          <Hero />
        </SnapSection>
        <SnapSection>
          <WorkflowAnimation />
        </SnapSection>
        <SnapSection>
          <TechAbout />
        </SnapSection>
        <SnapSection>
          <Services />
        </SnapSection>
        <SnapSection>
          <AutomationDemo />
        </SnapSection>
        <SnapSection>
          <Projects />
        </SnapSection>
        <SnapSection>
          <Process />
        </SnapSection>
        <SnapSection>
          <Contact />
        </SnapSection>
      </main>
      <Footer />
    </>
  )
}
