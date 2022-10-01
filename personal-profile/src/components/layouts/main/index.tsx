import { Box } from '@mui/material'
import {FC} from 'react'

import wallPaper from '../../../assets/wallpaper.jpeg'
import profilePhoto from '../../../assets/profilePhoto.jpg'

const MainLayout: FC<{ children: any }> = ({children}) => {

    return (
        <Box component={'main'} 
             sx={{display: 'flex', 
                 flexDirection: 'column'}}  >
            <Box 
              component={'div'} 
              sx={{width: '100%', 
                   height: 250, 
                   backgroundImage: `url(${wallPaper})`,
                   }} />
             <Box 
               component={'img'} 
               src={profilePhoto}
               sx={{borderRadius: 10,
                    width: {xs: '30%', md: '20%', lg: '15%'},
                    height: 'auto',
                    alignSelf:'center',
                    marginTop: {xs: '-15%' , md: '-10%', lg: '-8%'} }}  />
              <Box 
                component={'header'} 
                sx={{display: 'flex', 
                     justifyContent: 'space-evenly',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                     marginTop: 5,
                     marginBottom: 2
                     }} >
                 <Box component={'a'} 
                   sx={{"&:hover": {
                    cursor: 'pointer',
                    fontWeight: '700',
                   },
                   fontSize: 25,
                   textDecoration: 'none',
                   color:'#000'}} href="#presentation-section">Presentation</Box>
                   <Box component={'a'} 
                   sx={{"&:hover": {
                    cursor: 'pointer',
                    fontWeight: '700'
                   },
                   fontSize: 25,
                   textDecoration: 'none',
                   color:'#000'}} href="#skills-section" >Skills</Box>
                   <Box component={'a'} 
                   sx={{"&:hover": {
                    cursor: 'pointer',
                    fontWeight: '700'
                   },
                   fontSize: 25,
                   textDecoration: 'none',
                   color:'#000'}}>Portafolios</Box>
                   <Box component={'a'} 
                   sx={{"&:hover": {
                    cursor: 'pointer',
                    fontWeight: '700'
                   },
                   fontSize: 25,
                   textDecoration: 'none',
                   color:'#000'}}
                   href="#contactme-section">Contact Me</Box>
              </Box>
            {children}
        </Box>
    )
}

export default MainLayout