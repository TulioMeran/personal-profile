import { Box, Fab, SxProps } from '@mui/material'
import React, {FC, useState,useEffect} from 'react'

import profilePhoto from '../../../assets/profilePhoto.jpg'
import { KeyboardArrowUp } from '@mui/icons-material'
import { customColors } from '../../../constants/color'

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
      flexDirection: 'column',
      paddingInline: { xs: 2 , md: 15},
    }

    const profileImgStyle: SxProps = {
      borderRadius: 360,
      borderColor: '#2C0A3A',
      borderWidth: 2,
      borderStyle: 'solid',
      width: {xs: 140, md: 190, lg: 140},
      height: {xs: 100, md: 130, lg: 140},
      transition: '0.8s',
      alignSelf: 'center'
    }

    const headerContainerStyle: SxProps = {
      display: 'flex', 
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: {xs: 2,  md:1},
      paddingBottom: 1,
      flexDirection: {xs: 'column', md: 'row'},
      columnGap: {xs: 0, md: 1},
      rowGap: {xs: 1, md: 0},
    }

    const headerOpcionStyle: SxProps = {
      "&:hover": {
        cursor: 'pointer',
        fontWeight: '700',

        color: 'white',
        borderWidth: 2,
        borderRadius: 10,
        transition: '0.4s'
       },
       fontSize: '1.2rem',
       textDecoration: 'none',
       color:'white',
       paddingInline: 1,
       paddingTop: 1,
       paddingBottom: 1,
       borderRadius: 10,
       borderColor: 'white',
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
              <Box component={'div'} 
                sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, paddingY: 5, justifyContent: 'space-between'}} >
                <Box component={'div'} sx={{ display: 'flex'}} >
                <Box 
                  component={'img'} 
                  src={profilePhoto}
                  sx={{...sxStyles().profileImgStyle }}  />
                 <Box component={'div'} 
                    sx={{display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        paddingInline: 2,
                        rowGap: 1}}  >
                   <Box component={'label'}
                    sx={{fontWeight: 'bold', fontSize: '1.7rem'}} >Rafael Tulio Meran</Box>
                   <Box component={'label'} 
                    sx={{color: customColors.secondary, fontSize: '1.1rem'}} >Software Engineer | Full Stack Developer</Box>
                </Box>
                </Box>
                <Box component={'header'} 
                  sx={sxStyles().headerContainerStyle}
                 >
                 <Box component={'a'} 
                   sx={sxStyles().headerOpcionStyle} href="#presentation-section">About</Box>
                   <Box component={'a'} 
                   sx={sxStyles().headerOpcionStyle} href="#workexperience-section" >Experiencies</Box>
                   <Box component={'a'} 
                   sx={sxStyles().headerOpcionStyle} 
                   href="#briefcase-section" >Briefcase</Box>
                   <Box component={'a'} 
                   sx={sxStyles().headerOpcionStyle}
                   href="#networks-section">Networks</Box>
              </Box>
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