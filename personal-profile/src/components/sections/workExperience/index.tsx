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
             fontSize: '1.5rem', 
             fontWeight: 'bold', 
            
        }

        const labelsContainerStyle: SxProps = {
             display: 'flex', 
             flexDirection: 'row',
             justifyContent: 'space-between', 
             flexWrap: 'wrap'
        }

        const valueContainerStyle: SxProps = {
             display: 'flex', 
             flexDirection: 'row', 
             marginBottom: 2, 
             columnGap: 2, 
             rowGap: 2
        }

        return {
            workExperienceContainerStyle,
            titleLabelStyle,
             labelsContainerStyle,
             valueContainerStyle
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
                        flex: 'row', 
                        paddingY: 1, 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        marginTop: 5}} >
                   <Box component={'label'} 
                        sx={{width: {xs: '30%', md:'20%'}, 
                            color: customColors.gray,
                            fontSize: '1.2rem'}} >
                       {`${exp.startDay} - ${exp.endDay ? exp.endDay : 'Present'}`} 
                   </Box>
                   <Box component={'div'} sx={{width: '80%'}} >
                      <Box component={'div'} 
                            sx={{ fontSize: '1.8rem'}} >{`${exp.position} - ${exp.company}`}</Box>
                      <Box component={'p'}
                           sx={{color: customColors.secondary, fontSize: '1.5rem'}} > {exp.description}</Box>
                      <Box component={'label'} 
                           sx={{color: customColors.gray}} >{exp.stack.join(" · ")}</Box>
                   </Box>
                </Box>
            ))}
            
        </Box>
      </Box>
    )
}

export default WorkExperienceSection;