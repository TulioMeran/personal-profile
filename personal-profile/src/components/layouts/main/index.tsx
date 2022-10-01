import { Box } from '@mui/material'
import {FC} from 'react'

import wallPaper from '../../../assets/wallpaper.jpeg'
import profilePhoto from '../../../assets/profilePhoto.jpg'
import { fontWeight } from '@mui/system'

const MainLayout: FC<{ children: any }> = ({children}) => {

    return (
        <Box component={'div'} 
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
                component={'div'} 
                sx={{display: 'flex', 
                     justifyContent: 'space-evenly',
                     alignItems: 'center',
                     marginTop: 5,
                     height: 50
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