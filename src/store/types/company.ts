export interface Company {
    id: string;
    label: string;
    ability: number;
    vision: number;
}

export interface CompanyState {
    data: Company
}

interface ADD_COMPANY {
    type: 'ADD_COMPANY',
    payload: Company
}

interface DELETE_COMPANY {
    type: 'DELETE_COMPANY',
    payload: Company
}

interface EDIT_COMPANY {
    type: 'EDIT_COMPANY'
    payload: Company
}


export type CompanyAction = ADD_COMPANY | DELETE_COMPANY | EDIT_COMPANY
