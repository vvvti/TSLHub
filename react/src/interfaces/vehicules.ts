import { IUser } from "./users"

export interface IVehicules {
    id?: string,
    user: string,
    registration_number: string,
    vehicule_brand: string,
    vehicule_type: string,
    vehicule_model: string,
    vin_number: string,
    first_registration_date: string,
    registration_owner_name: string,
    reg_owner_pesel_regon: string,
    reg_owner_address: string,
    owner_name: string,
    owner_pesel_regon: string,
    owner_address: string,
    max_total_weight: string,
    perm_gross_weight: string,
    perm_gross_group: string,
    gross_weight: string,
    vehicule_category: string,
    homologation_number: string,
    axle_count: string,
    trailer_total_break: string,
    trailer_total: string,
    engine_capacity: string,
    engine_power: string,
    fuel_kind: string,
    power_to_weight: string,
    seat_count: string,
    places_count: string,
    vehicule_kind: string,
    vehicule_purpose: string,
    production_year: string,
    allowed_package: string,
    axle_pressure: string,
    milage: string,
}

export interface IGetVehicules {
    getVehicules: () => void;
    vehicules: [IVehicules];
}

export interface IAddVehicule {
    addVehicule: (vehicule: IVehicules) => void
    userid: IUser
}