import {useContext} from 'react'
import { Box, SxProps } from "@mui/material"
import CaseBox from './caseBox'
import { DataProviderContext } from '../../../contexts/dataProvider'

const BriefcaseSection = () => {
    
    const {briefcase, theme} = useContext(DataProviderContext)

    const sxStyles = () => {

        const briefcaseContainer: SxProps = {
            padding: 5,
            display: 'flex', 
            flexDirection: 'column', 
            fontSize: {xs: '1.2rem', md: '1.5rem'}, 
        }

        const briefcaseLabel: SxProps = {
            fontWeight: '600', 
            marginBottom: 2,
            color: theme.primaryFontColor
        }


        return {
            briefcaseContainer,
            briefcaseLabel
        }
    }

    return (
        <Box id="briefcase-section" 
             component={'div'}
             sx={sxStyles().briefcaseContainer} >
           <Box component={'label'} sx={sxStyles().briefcaseLabel} >Briefcase</Box>
           <Box component={'div'} >
                {briefcase.map((item,index) => (<CaseBox key={index} case={item} />))}
           </Box>
        </Box>
    )
}

export default BriefcaseSection