export interface ITodo{
  id: string
  name: string,
  isDone: boolean
}

 export enum TodoFilter  {
    'ALL',
   'ACTIVE',
  'DONE',
 }