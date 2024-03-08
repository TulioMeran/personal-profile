import { Star } from '@mui/icons-material'
import { Box, SxProps } from '@mui/material'
import {FC} from 'react'

const MAX_RATE_SKILL = 5;
const SkillBox: FC<{name: string, rate: number, isSoft?: boolean}> = ({name, rate, isSoft = false}) => {

     const sxStyles = () => {

          const mainContainer: SxProps = {
               backgroundColor: isSoft ? '#13A9BD' : '#2C0A3A', 
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center', 
                   alignItems: 'center',
                   height: 200,
                   width: 200,
                   borderRadius: 10,
                   marginTop: 1,
                   "&:hover":{
                    boxShadow: '2px 3px #888888',
                    cursor: 'pointer',
                    height: 205,
                    width: 205,
                    transition: '0.4s'
                   }
                          
          }

          const labelNameStyle: SxProps = {
               color: '#fff', 
               fontWeight: '700',
               fontSize: 25,
               paddingInline: 2,
               textAlign: 'center',
               "&:hover": {color: '#E3E012', cursor: 'pointer'}
          }

          const starsContainerStyle: SxProps = {
               color: '#fff', 
               display: 'flex', 
               flexDirection: 'row', 
               marginTop: 1
          }

          const starStyle: SxProps = {
               "&:hover": {color: '#E3E012', 
               cursor: 'pointer'}
          }

          return { 
               mainContainer,
               labelNameStyle,
               starsContainerStyle,
               starStyle
          }
     }

    return (
        <Box component={'div'} 
              sx={sxStyles().mainContainer} >
            <Box component={'label'} 
                 sx={sxStyles().labelNameStyle} >{name}</Box>
             <Box component={'div'}
                  sx={sxStyles().starsContainerStyle} >

                    {Array(MAX_RATE_SKILL).fill(0).map((_,index) => 
                    <Star sx={{...sxStyles().starStyle,
                               color: index+1 <= rate ? '#E3E012': 'white'}} 
                         key={index} />)}
             </Box>
         </Box>
    )
}

export default SkillBox