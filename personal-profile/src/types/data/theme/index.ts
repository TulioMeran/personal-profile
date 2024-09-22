export interface ITheme {
    mainColor: string;
    borderColor: string;
    primaryFontColor: string;
    backgroundProfilePath: string | null;
    backgroundProfilePathExtra: string | null;
}

export enum Themes {
    HALLOWEEN,
    CHRISTMAS,
    DEFAULT
}