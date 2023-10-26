
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
  plan?: string
  price?: number
}

export type PlansType = {
  name:string
  price:number
  description:string[]
  age:number
}

export interface DataClient {
  name: string
  lastName: string
  birthDay: string
  tipoDoc: string
  nroDoc: string
  nroCell: string
  plan: string
  price: number
}
