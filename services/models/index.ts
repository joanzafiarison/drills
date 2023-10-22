export type ExerciseItem = {
    id: number
    title: string
    level : number
    sport :string
    desc : string
    image :string
  };

export type UserData = {
  id : number
  username : string
  email : string 
}

  export type SqlExecutor = {
    read: (query: string, args: Array<string>) => Promise<string[]>,
    write: (query: string, args: Array<string>) => Promise<string[]>,
  }