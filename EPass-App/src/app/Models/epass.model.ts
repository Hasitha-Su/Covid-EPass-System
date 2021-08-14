import { citizen } from './citizen.model';
export interface epass{
    id?: string
    category: string
    status:string
    other: string
    citizen?:citizen
}