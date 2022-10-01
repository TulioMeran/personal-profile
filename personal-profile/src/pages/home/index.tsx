import MainLayout from "../../components/layouts/main"
import ContactMe from "../../components/sections/contactMe"
import PresentationSection from "../../components/sections/presentation"
import SkillsSection from "../../components/sections/skills"

const HomePage = () => {
    return (
        <MainLayout>
           <PresentationSection />
           <SkillsSection />
           <ContactMe />
        </MainLayout>
        )
}

export default HomePage