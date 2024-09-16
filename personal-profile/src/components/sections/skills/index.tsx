import {useContext} from 'react'
import { Box, SxProps } from "@mui/material"
import SkillBox from "./skillBox"
import { DataProviderContext } from '../../../contexts/dataProvider'

const SkillsSection = () => {

    const {skills,softs} = useContext(DataProviderContext)

    const sxStyles = () => {

        const containerStyle: SxProps = {
            padding: 5, 
            display: 'flex', 
            flexDirection: 'column', 
        }

        const labelSkillStyle: SxProps = {
            fontSize: 40, 
            fontWeight: '600', 
            alignSelf: {md: 'flex-end', xs: 'center'}
        }

        const skillsContainerStyle: SxProps = {
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            justifyContent: 'space-around'
        }

        return {
            containerStyle,
            labelSkillStyle,
            skillsContainerStyle
        }
    }

    return (
        <Box component={'div'} sx={sxStyles().containerStyle} id="skills-section" >
            <Box component={'label'} sx={sxStyles().labelSkillStyle} >Tech Skills</Box>
            <Box component={'div'}
                sx={sxStyles().skillsContainerStyle}>
                { skills.map((item,index) => <SkillBox key={index} name={item.name} rate={item.rate} /> )}
            </Box>
            <Box component={'label'} sx={[sxStyles().labelSkillStyle,{marginTop: 10}]} >Soft Skills</Box>
            <Box component={'div'}
                sx={sxStyles().skillsContainerStyle}>
                { softs.map((item,index) => <SkillBox key={index} name={item.name} rate={item.rate} isSoft /> )}
            </Box>
        </Box>)
}

export default SkillsSection