export type ExerciseItem = {
    id: number
    title: string
    level : number
    sport :string
    desc : string
    image :any
  };

  export type SqlExecutor = {
    read: (query: string, args: Array<string>) => Promise<string[]>,
    write: (query: string, args: Array<string>) => Promise<string[]>,
  }