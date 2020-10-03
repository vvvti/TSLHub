import { IUser } from "./users";


export interface IInsurances {
    id?: string;
    user: string;
    number: string;
    insurance_type: string;
    insurance_company: string;
    start_date: string;
    expiry_date: string;
    insurance_cost: string;
    payment_type: string;
    insurance_owner: string;
    vehicule_owner: string;
}

export interface IGetInsurances {
    getInsurances: () => void;
    insurances: [IInsurances];
}

export interface IAddInsurance {
    addInsurance: (insurance: IInsurances) => void;
    userid: IUser;
}