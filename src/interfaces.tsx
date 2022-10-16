import internal from "stream";

export interface ChallengeFile{
    name:string;
    download_url:string;
  }
  

export interface Challenge {
    name:string,
    description:string,
    level: number,
    author:string,
    input: any
    expected: any
}


export interface DataFrameProps{
    title:string,
    data: any
}

export interface EditorBoxProps{
    code:string,
    onCodeChanged?:(code:string)=>void,
    onRun?: ()=>void
}

export interface LogBoxProps{
    stdout?: string,
    stderr?: string,
    index?: number,
    onIndexChanged?: (index:number)=> void
}