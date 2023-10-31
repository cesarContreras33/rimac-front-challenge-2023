import React from 'react'
import AtomicLink from '../../Atomos/AtomicLink/AtomicLink'
import AtomicSelectInput from '../../Moleculas/AtomicSelectInput/AtomicSelectInput'
import AtomicButton from '../../Atomos/AtomicButton/AtomicButton'
import AtomInput from '../../Atomos/AtomicInput/AtomicInput'
import './OrganismForm.scss'
import Atomiccheck from '../../Atomos/AtomicCheck/AtomicCheck';
import {validateFields} from '../../../../utils/utils.js'

import {
  REGISTER_SELECT_OPTIONS,
  REGISTER_CHECK_POLICY_PRIV,
  REGISTER_CHECK_POLICY_COM,
  REGISTER_LINK_TERM,
  REGISTER_BUTTON,
  REGISTER_DOC_LABEL,
  REGISTER_CELULAR_LABEL
} from '../../../assets/constants/constants.js'


interface formfields{
  tipoDoc: string
  nroDoc: string
  nroCell: string
  polPriv: boolean
  polCom: boolean
}

interface OrganismFormProps {
  sendData: (e?: React.MouseEvent) => void
  handleFieldChange: (field: string, e: string | boolean) => void
  formFields: formfields
}


const OrganismForm: React.FC<OrganismFormProps> = ({
  sendData,
  handleFieldChange,
  formFields
}) => {


  const onValueChange = (inputName:string,inputValue:string | boolean) => {
    handleFieldChange(inputName, inputValue)
  }
  
  const onHandleChangeSelect=(tipoDoc:string)=>{
    handleFieldChange('tipoDoc',tipoDoc)
  }


  return (
    <form>
      <AtomicSelectInput
        label={REGISTER_DOC_LABEL}
        options={REGISTER_SELECT_OPTIONS}
        onChangeSelect={onHandleChangeSelect}
        handleFieldChange={handleFieldChange}
      />
      <AtomInput
        label={REGISTER_CELULAR_LABEL}
        name="nroCell"
        onValueChange={onValueChange}
      />
      <Atomiccheck
        label={REGISTER_CHECK_POLICY_PRIV}
        name="polPriv"
        handleChecked={onValueChange}
      />
      <Atomiccheck
        label={REGISTER_CHECK_POLICY_COM}
        name="polCom"
        handleChecked={onValueChange}
      />

      <AtomicLink msg={REGISTER_LINK_TERM} />
      <AtomicButton
        label={REGISTER_BUTTON}
        onClick={(e) => sendData(e)}
        disabled={!validateFields(formFields)}
      />
    </form>
  )
}

export default OrganismForm
