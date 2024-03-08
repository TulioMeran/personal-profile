import { Box, Fab, Paper, SxProps } from '@mui/material'
import React, {FC, useState,useEffect} from 'react'

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

    const profileImgStyle: SxProps = {
      borderRadius: 10,
      borderColor: '#2C0A3A',
      borderWidth: 2,
      borderStyle: 'solid',
      width: {xs: '30%', md: '20%', lg: '15%'},
      height: 'auto',
      alignSelf:'center',
      maxHeight: '150px',
      maxWidth: '150px',
      transition: '0.8s'
    }

    const headerContainerStyle: SxProps = {
      display: 'flex', 
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexWrap: 'wrap',
      paddingTop: 1,
      paddingBottom: 1,
      backgroundColor: '#EBEBEB',
      flexDirection: {xs: 'column', md: 'row'}
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
       color:'#000',
       paddingInline: 2,
       paddingTop: 1,
       paddingBottom: 1,
       borderRadius: 10,
       borderColor: '#2C0A3A',
       borderWidth: 1,
       borderStyle: 'solid',
       width: {xs: '100%', md: 'auto'},
       textAlign: 'center',
       marginY: '2px'
       
    }

    return {
      mainStyle,
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
              <Paper 
                  sx={{position: 'sticky',  
                       top: 0, display: 'flex', 
                       flexDirection: 
                          {xs: 'row', md: 'column'},
                        backgroundColor: '#EBEBEB',
                        justifyContent: 'space-around',
                        zIndex: 10,
                        paddingInline: 2}}
                  elevation={5} >
              <Box 
               component={'img'} 
               src={profilePhoto}
               sx={{...sxStyles().profileImgStyle, 
               right: isVisible ? 20 : 0  }}  />
              <Box component={'header'} 
                sx={sxStyles().headerContainerStyle}
                 >
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
              </Paper>

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