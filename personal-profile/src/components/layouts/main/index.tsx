import { Box, Fab, SxProps } from '@mui/material'
import React, {FC, useState,useEffect} from 'react'

import wallPaper from '../../../assets/wallpaper.jpeg'
import profilePhoto from '../../../assets/profilePhoto.jpg'
import { KeyboardArrowUp } from '@mui/icons-material'

const MainLayout: FC<{ children: any }> = ({children}) => {

  const [isVisible,setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })
  }, [])


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
      paddingTop: 1,
      paddingBottom: 1,
   //   marginBottom: 2,
      backgroundColor: '#EBEBEB'
    }

    const headerOpcionStyle: SxProps = {
      "&:hover": {
        cursor: 'pointer',
        fontWeight: '700',
        backgroundColor: '#888888',
        color: 'white',
        borderRadius: 10,
        transition: '0.4s'
       },
       fontSize: 25,
       textDecoration: 'none',
       fontStyle: 'italic',
       color:'#000',
       paddingInline: 2,
       paddingTop: 1,
       paddingBottom: 1
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
             sx={sxStyles().mainStyle}
             onScroll={(event: React.UIEvent<HTMLElement>) : void => {
              console.log(event)
            }}
            >
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
              {isVisible && <Fab 
                sx={{position: 'fixed', right: 20, bottom: 80, backgroundColor: '#13A9BD', "&:hover": {backgroundColor:'#13A9BD' }}}  
                variant='circular'
                onClick={() => window.scrollTo({top:0,left:0,behavior: 'smooth'})} >
                  <KeyboardArrowUp sx={{color: '#fff', height: 30, width: 30}} />
                  </Fab>}
              
            {children}
                
        </Box>
    )
}

export default MainLayout