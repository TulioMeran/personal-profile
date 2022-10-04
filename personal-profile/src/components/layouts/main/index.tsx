import { Box, SxProps } from '@mui/material'
import {FC} from 'react'

import wallPaper from '../../../assets/wallpaper.jpeg'
import profilePhoto from '../../../assets/profilePhoto.jpg'

const MainLayout: FC<{ children: any }> = ({children}) => {

  const sxStyles = () => {

    const mainStyle: SxProps = {
      display: 'flex', 
      flexDirection: 'column'
    }

    const imgStyle: SxProps = {
      width: '100%', 
      height: 250, 
      backgroundImage: `url(${wallPaper})`,
    }

    const profileImgStyle: SxProps = {
      borderRadius: 10,
      width: {xs: '30%', md: '20%', lg: '15%'},
      height: 'auto',
      alignSelf:'center',
      marginTop: {xs: '-15%' , md: '-10%', lg: '-8%'} 
    }

    const headerContainerStyle: SxProps = {
      display: 'flex', 
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 5,
      marginBottom: 2
    }

    const headerOpcionStyle: SxProps = {
      "&:hover": {
        cursor: 'pointer',
        fontWeight: '700',
       },
       fontSize: 25,
       textDecoration: 'none',
       fontStyle: 'italic',
       color:'#000'
    }

    return {
      mainStyle,
      imgStyle,
      profileImgStyle,
      headerContainerStyle,
      headerOpcionStyle
    }
  }
    return (
        <Box component={'main'} 
             sx={sxStyles().mainStyle}  >
            <Box 
              component={'div'} 
              sx={sxStyles().imgStyle} />
             <Box 
               component={'img'} 
               src={profilePhoto}
               sx={sxStyles().profileImgStyle}  />
              <Box 
                component={'header'} 
                sx={sxStyles().headerContainerStyle} >
                 <Box component={'a'} 
                   sx={sxStyles().headerOpcionStyle} href="#presentation-section">Presentation</Box>
                   <Box component={'a'} 
                   sx={sxStyles().headerOpcionStyle} href="#skills-section" >Skills</Box>
                   <Box component={'a'} 
                   sx={sxStyles().headerOpcionStyle} 
                   href="#briefcase-section" >Briefcase</Box>
                   <Box component={'a'} 
                   sx={sxStyles().headerOpcionStyle}
                   href="#contactme-section">Contact Me</Box>
              </Box>
            {children}
        </Box>
    )
}

export default MainLayout