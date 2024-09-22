import { Box, Fab, SxProps } from '@mui/material'
import React, {FC, useState,useEffect, useContext} from 'react'

import { KeyboardArrowUp } from '@mui/icons-material'
import { customColors } from '../../../constants/color'
import profilePhotoPng from '../../../assets/profilePhoto.png'
import halloweenCalabazaPng from '../../../assets/halloween-calabaza.png'
import greenSockPng from '../../../assets/greenSock.png'

import { DataProviderContext } from '../../../contexts/dataProvider'
import { Themes } from '../../../types/data/theme'

const MainLayout: FC<{ children: any }> = ({children}) => {

  const [isVisible,setIsVisible] = useState(false)
  const {theme,setTheme} = useContext(DataProviderContext)

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
      borderWidth: 0,
      borderStyle: 'solid',
      width: {xs: 140, md: 160, lg: 160},
      height: {xs: 140, md: 160, lg: 160},
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
        borderRadius: 10,
        transition: '0.4s'
       },
       fontSize: '1.2rem',
       textDecoration: 'none',
       color: theme.primaryFontColor,
       paddingInline: 1,
       paddingTop: 1,
       paddingBottom: 1,
       borderRadius: 10,
       borderColor: theme.borderColor,
       borderWidth: 1,
       borderStyle: 'solid',
       width: {xs: '100%', md: 'auto'},
       textAlign: 'center',
       marginY: '2px'
       
    }

    const themeOptionStyle: SxProps = {
      width: 30, 
      height: 30,
      transition: '0.4s',
      ':hover': {
        cursor: 'pointer',
        width: 32, 
        height: 32,
      }
    }


    return {
      mainStyle,
      profileImgStyle,
      headerContainerStyle,
      headerOpcionStyle,
      themeOptionStyle
    }
  }
    return (
        <Box component={'main'} 
             sx={sxStyles().mainStyle}
             onScroll={(event: React.UIEvent<HTMLElement>) : void => {
              console.log(event)
            }}
            >
              <Box component={'div'} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'end', columnGap: 1, marginTop: 1}} >
                <Box component={'img'} 
                     onClick={() => setTheme(Themes.HALLOWEEN)}
                     src={halloweenCalabazaPng}
                     sx={sxStyles().themeOptionStyle} />
                <Box component={'img'} 
                     onClick={() => setTheme(Themes.CHRISTMAS)}
                     src={greenSockPng}
                     sx={sxStyles().themeOptionStyle} />

                <Box 
                  component={'label'}
                  onClick={() => setTheme(Themes.DEFAULT)}
                  sx={{textAlign: 'center', 
                        marginTop: 1, 
                        color: theme.primaryFontColor, 
                        fontWeight: 'bold',
                        transition: '0.4s',
                        fontSize: '0.8rem',
                        ':hover': {
                          cursor: 'pointer',
                          fontSize: '1rem',
                        }
                      }}
                  >Default</Box>
              </Box>
              <Box component={'div'} 
                sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, paddingY: 5, justifyContent: 'space-between'}} >
                <Box component={'div'} sx={{ display: 'flex'}} >
                  {/*
                  <Box 
                  component={'img'} 
                  src={profilePhoto}
                  sx={{...sxStyles().profileImgStyle }}  />
                  */}
                <Box component={'div'} 
                    sx={{display: 'flex', 
                         flexDirection: 'column', 
                         justifyContent: 'center', 
                         alignItems: 'center'}}  >
                <Box component={'div'} 
                  sx={{backgroundImage: `url(${ theme.backgroundProfilePath ? theme.backgroundProfilePath : null})`,  
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      borderRadius: 50,
                      borderWidth: 2,
                      borderStyle: 'solid',
                      borderColor: theme.borderColor,
                      backgroundColor: '#fff',
                      width: {xs: 140, md: 160, lg: 160},
                      height: {xs: 140, md: 160, lg: 160},}} >
                <Box 
                  component={'img'} 
                  src={profilePhotoPng}
                  sx={{...sxStyles().profileImgStyle }}  />
                 
                </Box>
                {theme.backgroundProfilePathExtra && <Box 
                  component={'img'} 
                  src={theme.backgroundProfilePathExtra}
                  sx={{width: {xs: 40, md: 50, lg: 50},
                       height: {xs: 40, md: 50, lg: 50},
                       position: 'absolute', 
                       top: {xs: 195,  md: 210, lg: 210}}}  />}
                
                </Box>

                 <Box component={'div'} 
                    sx={{display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        paddingInline: 2,
                        rowGap: 1, 
                        minWidth: 200}}  >
                   <Box component={'label'}
                    sx={{fontWeight: 'bold', fontSize: '1.7rem', color: theme.primaryFontColor}} >Rafael Tulio Meran</Box>
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
                sx={{ position: 'fixed',transition: '0.6s', right: 20, bottom: 80, backgroundColor: theme.mainColor, "&:hover": {backgroundColor: theme.mainColor }}}  
                variant='circular'
                onClick={() => window.scrollTo({top:0,left:0,behavior: 'smooth'})} >
                  <KeyboardArrowUp sx={{color: '#fff', height: 30, width: 30}} />
                  </Fab>}
              
            {children}
                
        </Box>
    )
}

export default MainLayout