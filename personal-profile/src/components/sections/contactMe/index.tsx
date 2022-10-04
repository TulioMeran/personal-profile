import { EmailOutlined, GitHub } from "@mui/icons-material"
import { Box, SxProps } from "@mui/material"

import imgLinkedin from '../../../assets/linkedin.svg'
import imgGooglePlay from '../../../assets/Google.png'

const ContactMeSection = () => {

     const sxStyles = () => {

          const contactmeContainerStyle: SxProps = {
               padding: 5,
               backgroundColor: '#E1E1E1', 
               display: 'flex', 
               flexDirection: 'column'
          }

          const contactmeLabelStyle: SxProps = {
               fontSize: 35, 
               fontWeight: '600', 
               fontStyle: 'italic'
          }

          const linksContainerStyle: SxProps = {
               display: 'flex', 
               flexDirection: 'row', 
               justifyContent: 'space-between',
               flexWrap: 'wrap', 
               marginTop: 2,
               columnGap: 1, 
               rowGap:1
          }

          const contactBoxStyle: SxProps = {
               display: 'flex', 
               flexDirection: 'row', 
               alignItems: 'center', 
               fontSize: 25, 
               flexWrap: 'wrap',
               columnGap: 1, 
               rowGap:1
          }

          const enlaceStyle: SxProps = {
               textDecoration: 'none', 
               color: '#1992CF'
          }

          const contactBoxLabelStyle: SxProps = {
               fontWeight: '700'
          }

          const contactBoxImgStyle: SxProps = {
               height: 50, 
               width: 50
          }

          return {
               contactmeContainerStyle,
               contactmeLabelStyle,
               linksContainerStyle,
               contactBoxStyle,
               enlaceStyle,
               contactBoxLabelStyle,
               contactBoxImgStyle
          }
     }

    return (
    <Box component={'footer'}
         id="contactme-section"
         sx={sxStyles().contactmeContainerStyle} >

        <Box component={'label'} 
             sx={sxStyles().contactmeLabelStyle} >Contact me</Box>
         
       <Box component={'div'} sx={sxStyles().linksContainerStyle}  >
          <Box component={'div'} sx={sxStyles().contactBoxStyle}>
               <Box component={'label'} sx={sxStyles().contactBoxLabelStyle} >Linkedin: </Box>
               <Box component={'img'} src={imgLinkedin} sx={sxStyles().contactBoxImgStyle}  />
               <Box component={'a'} href="https://www.linkedin.com/in/rafael-tulio-meran-6992071aa/" target={'_blank'} sx={sxStyles().enlaceStyle} >Rafael Tulio Meran</Box>
          </Box>
          <Box component={'div'} sx={sxStyles().contactBoxStyle}>
               <Box component={'label'} sx={sxStyles().contactBoxLabelStyle} >Email: </Box>
               <EmailOutlined sx={{...sxStyles().contactBoxImgStyle, color: '#900C3F'}} />
               <Box component={'a'} href="mailto:rtulio007@gmail.com" target={'_blank'} sx={sxStyles().enlaceStyle} >rtulio007@gmail.com</Box>
          </Box>
          <Box component={'div'} sx={sxStyles().contactBoxStyle}>
               <Box component={'label'} sx={sxStyles().contactBoxLabelStyle} >GitHub: </Box>
               <GitHub sx={{...sxStyles().contactBoxImgStyle, color: '#2C0A3A'}} />
               <Box component={'a'} href="https://github.com/TulioMeran" target={'_blank'} sx={sxStyles().enlaceStyle} >my page</Box>
          </Box>
          <Box component={'div'} sx={sxStyles().contactBoxStyle}>
               <Box component={'label'} sx={sxStyles().contactBoxLabelStyle} >Google Play Store: </Box>
               <Box component={'img'} src={imgGooglePlay} sx={sxStyles().contactBoxImgStyle}  />
               <Box component={'a'} href="https://play.google.com/store/apps/developer?id=TulioMeran" target={'_blank'} sx={sxStyles().enlaceStyle} >my account</Box>
          </Box>   

       </Box>
            
    </Box>)
}

export default ContactMeSection