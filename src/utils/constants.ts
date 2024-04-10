export interface IDialogue {
  pc: string;
  "cs-degree": string;
  "sofa-table": string;
  tv: string;
  bed: string;
  resume: string;
  projects: string;
  library: string;
  exit: string;
}

export const scaleFactor: number = 4;

export const dialogueData:any = {
  pc: `Github / Lenguage program`,
  "cs-degree": `CS degree`,
  "sofa-table": `Learn`,
  tv: `Teach`,
  bed: `Sleep`,
  resume: `Resume`,
  projects: `Portfolio`,
  library: `Love`,
  kitchen: `Food: Arepas / Cofrre`,
  exit: `Close the tab`,
};

export const backgroundColor = "#242229";
export const spriteCharacterName = "spritesheet";
export const spriteMapName = "map";
export const spriteCharacterImage = "./spritesheet.png";
export const spriteMapImage = "./map.png";
export const initScene = 'index'
export const lowerBound = 50
export const upperBound = 125