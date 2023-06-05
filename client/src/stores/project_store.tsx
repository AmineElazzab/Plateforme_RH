import create from "zustand";
import createStore from "zustand/vanilla";

export enum EGender {
  MALE = "HOMME",
  FEMALE = "FEMME",
  UNKNOWN = "N/D",
}

export enum EVerified {
  PENDING = "PAS ENCORE VERIFIÉ",
  APPROVED = "APPROUVE",
  DENIED = "REJETE",
}

export enum ERelationship {
  SINGLE = "CELIBATAIRE",
  MARRIED = "MARIÉ",
  DIVORCED = "DIVORCÉ",
  WIDOW = "VEUF / VEUVE",
}

const defaultMyProfile = {
  username: "",
  id: 1,
  bio: "",
  country: "",
  first_name: "",
  last_name: "",
  secondary_country: "",
  citizenship_country: "",
  ethnicity: "",
  relationship_status: ERelationship.SINGLE,
  children: false,
  boys_children: 0,
  girls_children: 0,
  children_custody: "",
  job_title: "",
  looking_for: "",
  red_flags: "",
  partner_children: false,
  why_not_partner_children: "",
  daily_prayer: false,
  clothing_style: "",
  friday_prayer: false,
  beard: false,
  followed_preachers: "",
  arabic_knowledge: "",
  went_to_hijra: false,
  why_not_went_to_hijra: "",
  studied_religion: false,
  relocation: false,
  physical_illness: "Aucun handicap",
  spiritual_illness: "Aucun handicap",
  gender: EGender.UNKNOWN,
  address: "",
  postal_code: "",
  city: "",
  citylat: "-2.018032",
  citylong: "52.552552",
  birth_date: "1990-01-01",
  is_premium: false,
  is_verified: EVerified.PENDING,
  email_verified: false,
  phone_number: "",
  age: -1,
  access_token: "",
};

export interface IMyProfile {
  user_id: number;
  email: string;
  password: string;
  user_fullname: string;
  user_phone: number;
  user_address: string;
  user_image: string;
  user_departement_id: number;
  user_role_id: number;
  user_status: string;
  user_workload: number;
  user_start_date: string;
  created_at: string;
  updated_at: string;
}

export interface IOtherProfile {
  username: string;
  gender: EGender;
  id: number;
  bio: string;
  country: string;
  secondary_country: string;
  citizenship_country: string;
  looking_for: string;
  city: string;
  age: number;
}


export interface IOtherDetails {
  username: string;
  gender: EGender;
  relationship_status: ERelationship;
  id: number;
  bio: string;
  country: string;
  //secondary_country: string;
  citizenship_country: string;
  ethnicity: string;
  //children: boolean;
  boys_children: number;
  girls_children: number;
  children_custody: string;
  //job_title: string;
  looking_for: string;
  //red_flags: string;
  partner_children: boolean;
  //why_not_partner_children: string;
  //daily_prayer: boolean;
  clothing_style: string;
  //friday_prayer: boolean;
  //beard: boolean;
  //followed_preachers: string;
  //arabic_knowledge: string;
  //went_to_hijra: boolean;
  //why_not_went_to_hijra: string;
  //studied_religion: boolean;
  //relocation: boolean;
  //physical_illness: string;
  is_unavailable: boolean;
  is_friend: boolean;
  is_crush: boolean;
  likes_me: boolean;
  spiritual_illness: string;
  city: string;
  is_premium: boolean;
  is_verified: string;
  email_verified: boolean;
  age: number;
}

export interface IAccountStore {
  my_profile: IMyProfile;
  my_favorites: IOtherProfile[];
  my_matches: IOtherProfile[];
  my_like_me: IOtherProfile[];
}

const vanillaAccountStore = createStore<IAccountStore>((set) => ({
  my_profile: defaultMyProfile,
  my_favorites: [],
  my_like_me: [],
  my_matches: [],
}));

const accountStore = create(vanillaAccountStore);

export { vanillaAccountStore, accountStore };
