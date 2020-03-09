export interface Employee {
  details: {
    firstName: string;
    lastName: string;
    address: Address;
  };
  skills: Skill[];
}

export interface Address {
  street1: string;
  street2?: string;
  city: string;
  state: string;
  postalCode: number;
}

export interface Skill {
  name: string;
  experience: {
    years: number;
    level: string;
  };
}
