import {useContext} from 'react'
import { Box, SxProps } from "@mui/material"
import CaseBox from './caseBox'
import { DataProviderContext } from '../../../contexts/dataProvider'

const BriefcaseSection = () => {
    
    const {briefcase} = useContext(DataProviderContext)

    const sxStyles = () => {

        const briefcaseContainer: SxProps = {
            padding: 5,
            backgroundColor: '#EBEBEB', 
            display: 'flex', 
            flexDirection: 'column', 
            fontSize: 25
        }

        const briefcaseLabel: SxProps = {
            fontSize: 35, 
            fontWeight: '600', 
            marginBottom: 2
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