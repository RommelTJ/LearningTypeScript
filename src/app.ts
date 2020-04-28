type Admin = {
  name: string;
  privileges: string[];
};

type GeneralEmployee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & GeneralEmployee;

const e1: ElevatedEmployee = {
  name: "Rommel",
  privileges: ["create-server"],
  startDate: new Date()
};

type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combineable & Numeric; // number type because the intersection of union types is number.
