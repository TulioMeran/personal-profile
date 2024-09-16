import {createContext, FC, useEffect, useState} from 'react'
import { data } from '../types/data'
import { BriefCase } from '../types/data/briefcase'
import { Skill } from '../types/data/skill'
import { Experience } from '../types/data/experience'

export const DataProviderContext = createContext<data>({
    skills: [],
    softs: [],
    briefcase: [],
    experiencies: []
})

const DataProvider: FC<{children : any}> = ({children}) => {

    const [skills,setSkills] = useState<Skill[]>([])
    const [softs,setSofts] = useState<Skill[]>([])
    const [briefcase,setBriefcase] = useState<BriefCase[]>([])
    const [experiencies,setExperiencies] = useState<Experience[]>([])

    useEffect(() => {
        fetch('data.json', { headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data: data) => {
            setSkills(data.skills)
            setSofts(data.softs)
            setBriefcase(data.briefcase)
            setExperiencies(data.experiencies)
        })
        .catch(err => console.log(err))
    },[])

  return (
    <DataProviderContext.Provider 
        value={{skills,softs,briefcase,experiencies}}>
        {children}
    </DataProviderContext.Provider>
  )

}

export default DataProvider