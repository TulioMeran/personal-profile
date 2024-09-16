import { BriefCase } from "./briefcase";
import { Experience } from "./experience";
import { Skill } from "./skill";

export interface data {
    skills: Skill[];
    softs: Skill[];
    briefcase: BriefCase[];
    experiencies: Experience[];
}