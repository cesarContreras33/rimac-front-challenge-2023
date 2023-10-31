
import {SelectHTMLAttributes} from 'react'

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

export interface AtomCardProps {
  id?: number
  icon: string
  title: string
  description: string
  status?: boolean
  onClick: () => void
}

interface Plan {
  id: number
  icon: string
  title: string
  description: string
  status: boolean
}

export interface OrganismCuoterProps {
  optionPlans: Plan[]
  handleClickCard: (id: number) => void
  plans: ClientType[]
  discount: boolean
  handleSelectPlan: (id: string, discount: boolean) => void
}


export interface AtomCardExtendProps {
  name?: string
  price?: number
  description?: string[]
  age?: number
  discount?: boolean
  handleSelectPlan: (id: string, discount: boolean) => void
  id: string
}


export interface AtomicBreadcrumpRoute {
  label: string
  num: string
  status: boolean
}

export interface AtomicBreadcrumpProps {
  routes: AtomicBreadcrumpRoute[]
}



export interface AtomicButtonProps {
  label: string
  onClick: (e) => void
  disabled?: boolean
}

export interface AtomicCheckProps {
  label: string
  name: string
  handleChecked: (inputName: string, inputValue: boolean) => void
}

export interface AtomicContactProps {
  msg: string
  imgurl: string
  tlf: string
}


export interface AtomicDescriptionProps {
  msg: string
}

export interface InputFormProps {
  label: string
  name: string
  onValueChange?: (name: string, value: string) => void
  numbersRestrictions?: (text: string) => void
}

export interface atomicLinkProps {
  msg: string
}

export interface AtomicPillProps {
  message: string
}

export interface AtomicResumenCardProps {
  dataclient: DataClient
}


export interface AtomicSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[]
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}


export interface OrganismResumenProps {
  dataclient: DataClient
}


interface formfields {
  tipoDoc: string
  nroDoc: string
  nroCell: string
  polPriv: boolean
  polCom: boolean
}

export interface OrganismFormProps {
  sendData: (e?: React.MouseEvent) => void
  handleFieldChange: (field: string, e: string | boolean) => void
  formFields: formfields
}
