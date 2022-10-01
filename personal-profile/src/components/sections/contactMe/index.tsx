import { Box } from "@mui/material"

const ContactMe = () => {

    return (
    <Box component={'div'}
         id="contactme-section"
         sx={{padding: 5,backgroundColor: '#EBEBEB', display: 'flex', flexDirection: 'column'}} >

        <Box component={'label'} 
             sx={{fontSize: 35, 
                  fontWeight: '600', 
                  fontStyle: 'italic'}} >Contact me</Box>
         

       <Box component={'div'} >
       Linkedin: 
          <Box component={'a'} href="https://www.linkedin.com/in/rafael-tulio-meran-6992071aa/" target={'_blank'} >Rafael Tulio Meran</Box>

       </Box>
     
      Email: rtulio007@gmail.com
            
    </Box>)
}

export default ContactMe