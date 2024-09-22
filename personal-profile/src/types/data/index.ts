import { BriefCase } from "./briefcase";
import { Experience } from "./experience";
import { Skill } from "./skill";
import { ITheme, Themes } from "./theme";

export interface data {
    skills: Skill[];
    softs: Skill[];
    briefcase: BriefCase[];
    experiencies: Experience[];
    theme: ITheme,
    setTheme: (theme: Themes) => void;
}