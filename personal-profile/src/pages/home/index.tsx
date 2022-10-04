import MainLayout from "../../components/layouts/main"
import BriefcaseSection from "../../components/sections/briefcase"
import ContactMeSection from "../../components/sections/contactMe"
import PresentationSection from "../../components/sections/presentation"
import SkillsSection from "../../components/sections/skills"

const HomePage = () => {
    return (
        <MainLayout>
           <PresentationSection />
           <SkillsSection />
           <BriefcaseSection />
           <ContactMeSection />
        </MainLayout>
        )
}

export default HomePage