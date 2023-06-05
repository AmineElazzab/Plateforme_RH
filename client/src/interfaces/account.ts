
export interface IAccount {
  username: string;
  first_name: string;
  last_name: string;
  gender: 'MALE' | 'FEMALE';
  birth_date: string;
  address: string;
  country: string;
  city: string
}