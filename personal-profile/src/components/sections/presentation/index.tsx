import { Box, SxProps } from "@mui/material"
import StrongLabel from "../../shared/StrongLabel"
import { customColors } from "../../../constants/color"

const PresentationSection = () => {

     const sxStyles = () => {

          const presentationContainerStyle: SxProps = {
               padding: 5,
               fontSize: 25, 
          }

          const presentationLabelStyle: SxProps = {
               fontSize: '1.5rem', 
               fontWeight: 'bold', 
              
          }

          const labelsContainerStyle: SxProps = {
               display: 'flex', 
               flexDirection: 'row',
               justifyContent: 'space-between', 
               flexWrap: 'wrap'
          }

          const valueContainerStyle: SxProps = {
               display: 'flex', 
               flexDirection: 'row', 
               marginBottom: 2, 
               columnGap: 2, 
               rowGap: 2
          }

          return {
               presentationContainerStyle,
               presentationLabelStyle,
               labelsContainerStyle,
               valueContainerStyle
          }
     }

    return (
     <Box component={'div'} 
          id="presentation-section"
          sx={sxStyles().presentationContainerStyle}>
        <Box component={'div'} sx={{display: 'flex', flexDirection: 'column'}} >
          <Box component={'label'} sx={sxStyles().presentationLabelStyle} >About</Box>
          <Box component={'div'} sx={{color: customColors.secondary}} >
               <Box component={'p'} >
                  Hey there! I'm a seasoned <StrongLabel label="software developer" /> with a wealth of experience under my belt. I've spent most of my career focused on <StrongLabel label="frontend development" />, mastering popular <StrongLabel label="JavaScript" /> frameworks like <StrongLabel label="Angular" />, <StrongLabel label="Vue.js" />, and <StrongLabel label="React.js" />.
               </Box>
               <Box component={'p'} >
                  But that's not all—I'm also well-versed in <StrongLabel label="backend" /> technologies such as <StrongLabel label="ASP.NET" />, <StrongLabel label="Golang" />, <StrongLabel label="Node.js" />, and <StrongLabel label="Spring Boot" />. I've got you covered from frontend to backend.
               </Box>
               <Box component={'p'} >
                  And when it comes to <StrongLabel label="mobile development" />, I've dabbled in <StrongLabel label="React Native" />, <StrongLabel label="Xamarin Forms" />, and <StrongLabel label="Flutter" />.
               </Box>
               <Box component={'p'} >
                  My passion for learning is relentless. I'm always eager to explore new programming technologies and frameworks to stay ahead of the curve.
               </Box>
               <Box component={'p'} >
                  If you're looking for someone who's committed to keeping up with the latest in tech and delivering top-notch solutions, then <StrongLabel label="I'm your guy" />. Let's dive into coding together!
               </Box>
          </Box>
        </Box>
     </Box>)
}

export default PresentationSection