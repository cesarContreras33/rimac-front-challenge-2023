
export type AppState = {
  plans: {
    list: {
      list: PlansType[];
    };
  };
};

export type ClientType = {
  name?: string
  lastName?: string
  birthDay?: string
  tipoDoc?: string
  nroDoc?: string
  nroCell?: string
}

export type PlansType = {
  name:string
  price:number
  description:string[]
  age:number
}
