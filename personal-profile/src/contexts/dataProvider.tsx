import {createContext, FC, useEffect, useState} from 'react'
import { data } from '../types/data'
import { BriefCase } from '../types/data/briefcase'
import { Skill } from '../types/data/skill'
import { Experience } from '../types/data/experience'
import { ITheme, Themes } from '../types/data/theme'
import halloweenCalabaza from '../assets/halloween-calabaza.png'
import halloweenPhoto from '../assets/halloween-2.jpg'
import christmasPhoto from '../assets/christmas-2.jpg'
import christmasSock from '../assets/greenSock.png'

const DEFAULT_THEME: ITheme = {
    mainColor: '#13A9BD',
    borderColor: '#fff',
    primaryFontColor: '#fff',
    backgroundProfilePath: null,
    backgroundProfilePathExtra: null
}

const HALLOWEEN_THEME: ITheme = {
    mainColor: '#e86900',
    borderColor: '#e86900',
    primaryFontColor: '#e86900',
    backgroundProfilePath: halloweenPhoto,
    backgroundProfilePathExtra: halloweenCalabaza
}

const CHRISTMAS_THEME: ITheme = {
    mainColor: '#00db63',
    borderColor: '#00db63',
    primaryFontColor: '#00db63',
    backgroundProfilePath: christmasPhoto,
    backgroundProfilePathExtra: christmasSock
}

export const DataProviderContext = createContext<data>({
    skills: [],
    softs: [],
    briefcase: [],
    experiencies: [],
    theme: DEFAULT_THEME,
    setTheme(_) {
        
    },
})

const DataProvider: FC<{children : any}> = ({children}) => {

    const [skills,setSkills] = useState<Skill[]>([])
    const [softs,setSofts] = useState<Skill[]>([])
    const [briefcase,setBriefcase] = useState<BriefCase[]>([])
    const [experiencies,setExperiencies] = useState<Experience[]>([])
    const [theme, setTheme] = useState<ITheme>(DEFAULT_THEME)

    const setCurrentTheme = (theme: Themes) => {
        switch (theme){
            case Themes.DEFAULT: 
                setTheme(DEFAULT_THEME)
                break;
            case Themes.CHRISTMAS: 
                setTheme(CHRISTMAS_THEME);
                break;
            case Themes.HALLOWEEN:
                setTheme(HALLOWEEN_THEME);
                break;
        }
    }

    useEffect(() => {
        const currentMonth = new Date().getMonth() + 1
        switch (currentMonth){
            case 10:
                setTheme(HALLOWEEN_THEME)
                break;
            case 11:
            case 12:
                setTheme(CHRISTMAS_THEME)
                break;
            default: 
               setTheme(DEFAULT_THEME)
               break;
        }

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
        value={{skills,softs,briefcase,experiencies,theme,setTheme: setCurrentTheme}}>
        {children}
    </DataProviderContext.Provider>
  )

}

export default DataProvider