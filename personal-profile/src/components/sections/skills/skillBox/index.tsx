import { Star } from '@mui/icons-material'
import { Box } from '@mui/material'
import {FC} from 'react'


const SkillBox: FC<{name: string, rate: number, isSoft?: boolean}> = ({name, rate, isSoft = false}) => {

    return (
        <Box component={'div'} 
              sx={{backgroundColor: isSoft ? '#13A9BD' : '#2C0A3A', 
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center', 
                   alignItems: 'center',
                   height: 200,
                   width: 200,
                   borderRadius: 10,
                   marginTop: 1
                   }} >
            <Box component={'label'} 
                 sx={{color: '#fff', 
                      fontWeight: '700',
                      fontSize: 25,
                      paddingInline: 2,
                      textAlign: 'center',
                      "&:hover": {color: '#E3E012', cursor: 'pointer'}}} >{name}</Box>
             <Box component={'div'}
                  sx={{color: '#fff', display: 'flex', flexDirection: 'row', marginTop: 1}} >

                    {Array(rate).fill(0).map((_,index) => <Star sx={{"&:hover": {color: '#E3E012', cursor: 'pointer'}}} key={index} />)}
             </Box>
         </Box>
    )
}

export default SkillBox