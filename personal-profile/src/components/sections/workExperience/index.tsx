import { Box, SxProps } from "@mui/material"
import { useContext } from "react"
import { DataProviderContext } from "../../../contexts/dataProvider"
import { customColors } from "../../../constants/color"

const WorkExperienceSection = () => {
    const {experiencies} = useContext(DataProviderContext)
    const sxStyles = () => {

        const workExperienceContainerStyle: SxProps = {
             padding: 5,
             fontSize: 25, 
        }

        const titleLabelStyle: SxProps = {
             fontSize: {xs: '1.2rem', md: '1.5rem'}, 
             fontWeight: 'bold', 
            
        }

        return {
            workExperienceContainerStyle,
            titleLabelStyle,
        }
   }
   
    return (
        <Box component={'div'} id="workexperience-section"
        sx={sxStyles().workExperienceContainerStyle}>
        <Box component={'div'} sx={{display: 'flex', flexDirection: 'column'}} >
            <Box component={'label'} sx={sxStyles().titleLabelStyle} >Work Experience</Box>

            {experiencies.map(exp => (
                <Box key={`${exp.company}-${exp.position}`} 
                    sx={{display: 'flex', 
                        flexDirection: {xs: 'column', md: 'row'}, 
                        paddingY: 1, 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        marginTop: 5}} >
                   <Box component={'label'} 
                        sx={{width: {xs: '100%', md:'20%', textAlign: 'center'}, 
                            color: customColors.gray,
                            fontSize: '1.2rem'}} >
                       {`${exp.startDay} - ${exp.endDay ? exp.endDay : 'Present'}`} 
                   </Box>
                   <Box component={'div'} sx={{width: {xs: '100%',md: '80%'}}} >
                      <Box component={'div'} 
                            sx={{ fontSize: {xs: '1.4rem' , md: '1.8rem'}, fontWeight: 'bold'}} >{`${exp.position} - ${exp.company}`}</Box>
                      <Box component={'p'}
                           sx={{color: customColors.secondary, fontSize: {xs: '1.2rem' , md: '1.5rem'}}} > {exp.description}</Box>
                      <Box component={'label'} 
                           sx={{color: customColors.gray, fontSize: {xs: '1.2rem', md: '1.4rem'}}} >{exp.stack.join(" · ")}</Box>
                   </Box>
                </Box>
            ))}
            
        </Box>
      </Box>
    )
}

export default WorkExperienceSection;