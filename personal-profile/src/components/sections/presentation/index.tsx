import { Box, SxProps } from "@mui/material"
import StrongLabel from "../../shared/StrongLabel"

const PresentationSection = () => {

     const sxStyles = () => {

          const presentationContainerStyle: SxProps = {
               padding: 5,
               fontSize: 25, 
               backgroundColor:'#F7F7F7',
          }

          const presentationLabelStyle: SxProps = {
               fontSize: 35, 
               fontWeight: '600', 
               marginBottom: 5
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
          <Box component={'label'} sx={sxStyles().presentationLabelStyle} >Presentation</Box>
          <Box component={'div'} sx={sxStyles().labelsContainerStyle} >
          <Box component={'div'} sx={sxStyles().valueContainerStyle} >
               <label><strong>Full name:</strong></label>
               <label>Rafael Tulio Meran</label>
          </Box>
          <Box component={'div'} sx={sxStyles().valueContainerStyle} >
               <label><strong>Major:</strong></label>
               <label>Software Engineer</label>
          </Box>
          <Box component={'div'} sx={sxStyles().valueContainerStyle} >
               <label><strong>Hometown country:</strong></label>
               <label>Dominican Republic</label>
          </Box>
          <Box component={'div'} sx={sxStyles().valueContainerStyle} >
               <label><strong>BirthDay:</strong></label>
               <label>July, 4th</label>
          </Box>
          <Box component={'div'} sx={sxStyles().valueContainerStyle} >
               <label><strong>Work years experience:</strong></label>
               <label>6+</label>
          </Box>
          </Box>
          <Box component={'div'}>
               <label> <strong>Summary:</strong> </label>
               <Box component={'p'} sx={{textAlign: 'center'}} >
                  Hey there! I'm a seasoned <StrongLabel label="software developer" /> with a wealth of experience under my belt. I've spent most of my career focused on <StrongLabel label="frontend development" />, mastering popular <StrongLabel label="JavaScript" /> frameworks like <StrongLabel label="Angular" />, <StrongLabel label="Vue.js" />, and <StrongLabel label="React.js" />.
               </Box>
               <Box component={'p'} sx={{textAlign: 'center'}} >
                  But that's not all—I'm also well-versed in <StrongLabel label="backend" /> technologies such as <StrongLabel label="ASP.NET" />, <StrongLabel label="Golang" />, <StrongLabel label="Node.js" />, and <StrongLabel label="Spring Boot" />. I've got you covered from frontend to backend.
               </Box>
               <Box component={'p'} sx={{textAlign: 'center'}} >
                  And when it comes to <StrongLabel label="mobile development" />, I've dabbled in <StrongLabel label="React Native" />, <StrongLabel label="Xamarin Forms" />, and <StrongLabel label="Flutter" />.
               </Box>
               <Box component={'p'} sx={{textAlign: 'center'}} >
                  My passion for learning is relentless. I'm always eager to explore new programming technologies and frameworks to stay ahead of the curve.
               </Box>
               <Box component={'p'} sx={{textAlign: 'center'}} >
                  If you're looking for someone who's committed to keeping up with the latest in tech and delivering top-notch solutions, then <StrongLabel label="I'm your guy" />. Let's dive into coding together!
               </Box>
          </Box>
        </Box>
     </Box>)
}

export default PresentationSection