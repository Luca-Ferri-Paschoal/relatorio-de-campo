export interface IRelation {
    hrs: number;
    pub: number;
    rv: number;
    vid: number;
    bs: number;
}

export type IRelationAttr = 'hrs' | 'pub' | 'rv' | 'vid' | 'bs';

export const relation0: IRelation = {
    hrs: 0,
    pub: 0,
    rv: 0,
    vid: 0,
    bs: 0,
}

export const attrs = Object.keys(relation0) as  IRelationAttr[]; 
