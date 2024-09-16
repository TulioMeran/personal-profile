import MainLayout from "../../components/layouts/main"
import BriefcaseSection from "../../components/sections/briefcase"
import NetworksSection from "../../components/sections/networks"
import PresentationSection from "../../components/sections/presentation"
import WorkExperienceSection from "../../components/sections/workExperience"

const HomePage = () => {
    return (
        <MainLayout>
           <PresentationSection />
           <WorkExperienceSection />
           <BriefcaseSection />
           <NetworksSection />
        </MainLayout>
        )
}

export default HomePage