import {useEffect,useState} from 'react'
import { Box } from "@mui/material"
import SkillBox from "./skillBox"
import { Skill } from '../../../types/data/skill'

const SkillsSection = () => {

    const [skills,setSkills] = useState<Skill[]>([])
    const [softSkills,setSoftSkills] = useState<Skill[]>([])

    useEffect(() => {
        fetch('data.json', { headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data) => {
            setSkills(data.skills)
            setSoftSkills(data.soft)
        })
        .catch(err => console.log(err))
    },[])


    return (
        <Box component={'div'} sx={{padding: 5, display: 'flex', flexDirection: 'column', backgroundColor: '#F1F1F1'}} id="skills-section" >
            <Box component={'label'} sx={{fontSize: 40, fontWeight: '600', fontStyle: 'italic',alignSelf: {md: 'flex-end', xs: 'center'}}} >Tech Skills</Box>
            <Box component={'div'}
                sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                { skills.map((item,index) => <SkillBox key={index} name={item.name} rate={item.rate} /> )}
            </Box>
            <Box component={'label'} sx={{fontSize: 40, fontWeight: '600', fontStyle: 'italic',alignSelf: {md: 'flex-end', xs: 'center'}, marginTop: 10}} >Soft Skills</Box>
            <Box component={'div'}
                sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                { softSkills.map((item,index) => <SkillBox key={index} name={item.name} rate={item.rate} isSoft /> )}
            </Box>
        </Box>)
}

export default SkillsSection