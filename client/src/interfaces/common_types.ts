import { IOtherProfile } from "../stores/project_store";


export interface IPricing {
    pricing_id: string;
    label: string;
    price: number;
    duration: number;
    description: string;
    gender: string;
}

export interface IProfileListingAPI{
    page_ref: string;
    has_next: boolean;
    has_prev: boolean;
    page_index: number;
    total: number;
    profiles: IOtherProfile[]
}