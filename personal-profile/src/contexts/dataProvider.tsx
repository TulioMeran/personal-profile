import {createContext, FC, useEffect, useState} from 'react'
import { data } from '../types/data'
import { BriefCase } from '../types/data/briefcase'
import { Skill } from '../types/data/skill'

export const DataProviderContext = createContext<data>({
    skills: [],
    softs: [],
    briefcase: []
})

const DataProvider: FC<{children : any}> = ({children}) => {

    const [skills,setSkills] = useState<Skill[]>([])
    const [softs,setSofts] = useState<Skill[]>([])
    const [briefcase,setBriefcase] = useState<BriefCase[]>([])

    useEffect(() => {
        fetch('data.json', { headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then((response) => response.json())
        .then((data: data) => {
            setSkills(data.skills)
            setSofts(data.softs)
            setBriefcase(data.briefcase)
        })
        .catch(err => console.log(err))
    },[])

  return (
    <DataProviderContext.Provider 
        value={{skills,softs,briefcase}}>
        {children}
    </DataProviderContext.Provider>
  )

}

export default DataProvider