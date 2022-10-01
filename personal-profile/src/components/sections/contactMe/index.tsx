import { EmailOutlined, GitHub, Google } from "@mui/icons-material"
import { Box } from "@mui/material"

import imgLinkedin from '../../../assets/linkedin.svg'
import imgGooglePlay from '../../../assets/Google.png'

const ContactMe = () => {

    return (
    <Box component={'footer'}
         id="contactme-section"
         sx={{padding: 5,backgroundColor: '#EBEBEB', display: 'flex', flexDirection: 'column'}} >

        <Box component={'label'} 
             sx={{fontSize: 35, 
                  fontWeight: '600', 
                  fontStyle: 'italic'}} >Contact me</Box>
         

       <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',flexWrap: 'wrap', marginTop: 2,columnGap: 1, rowGap:1}}  >
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 25, flexWrap: 'wrap'}}>
               <Box component={'label'} sx={{fontWeight: '700'}} >Linkedin: </Box>
               <Box component={'img'} src={imgLinkedin} sx={{height: 50, width: 50}}  />
               <Box component={'a'} href="https://www.linkedin.com/in/rafael-tulio-meran-6992071aa/" target={'_blank'} sx={{textDecoration: 'none', color: '#1992CF'}} >Rafael Tulio Meran</Box>
          </Box>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 25,flexWrap: 'wrap',columnGap: 1, rowGap:1}}>
               <Box component={'label'} sx={{fontWeight: '700'}} >Email: </Box>
               <EmailOutlined sx={{height: 50, width: 50, color: '#900C3F'}} />
               <Box component={'a'} href="mailto:rtulio007@gmail.com" target={'_blank'} sx={{textDecoration: 'none', color: '#1992CF'}} >rtulio007@gmail.com</Box>
          </Box>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 25,flexWrap: 'wrap',columnGap: 1, rowGap:1}}>
               <Box component={'label'} sx={{fontWeight: '700'}} >GitHub: </Box>
               <GitHub sx={{height: 50, width: 50, color: '#2C0A3A'}} />
               <Box component={'a'} href="https://github.com/TulioMeran" target={'_blank'} sx={{textDecoration: 'none', color: '#1992CF'}} >my page</Box>
          </Box>
          <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 25,flexWrap: 'wrap',columnGap: 1, rowGap:1}}>
               <Box component={'label'} sx={{fontWeight: '700'}} >Google Play Store: </Box>
               <Box component={'img'} src={imgGooglePlay} sx={{height: 50, width: 50}}  />
               <Box component={'a'} href="https://play.google.com/store/apps/developer?id=TulioMeran" target={'_blank'} sx={{textDecoration: 'none', color: '#1992CF'}} >my account</Box>
          </Box>   

       </Box>
            
    </Box>)
}

export default ContactMe