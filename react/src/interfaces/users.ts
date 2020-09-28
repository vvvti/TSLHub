export interface IUser {
    userid: number;
}

export interface IUserProfile {
id: string
user: string
telephone_number: string
first_name : string
last_name: string
company_name: string
skype_number: string 
}

export interface IGetProfile {
    getProfiles: () => void;
    profiles: [IUserProfile]; 
}