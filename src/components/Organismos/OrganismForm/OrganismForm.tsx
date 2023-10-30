import React from 'react'
import AtomicLink from '../../Atomos/AtomicLink/AtomicLink'
import AtomicSelectInput from '../../Moleculas/AtomicSelectInput/AtomicSelectInput'
import AtomicButton from '../../Atomos/AtomicButton/AtomicButton'
import AtomInput from '../../Atomos/AtomicInput/AtomicInput'
import './OrganismForm.scss'
import Atomiccheck from '../../Atomos/AtomicCheck/AtomicCheck';


interface OrganismFormProps {
  sendData: (e?: React.MouseEvent) => void
  handleFieldChange: (field: string, e: string | boolean) => void
  formFields: {
    tipoDoc: string
    nroDoc: string
    nroCell: string
    polPriv: boolean
    polCom: boolean
  }
}


const OrganismForm: React.FC<OrganismFormProps> = ({
  sendData,
  handleFieldChange,
  formFields
}) => {


  const onValueChange = (inputName:string,inputValue:string) => {
    handleFieldChange(inputName, inputValue)
  }
  
  const onHandleChangeSelect=(tipoDoc:string)=>{
    handleFieldChange('tipoDoc',tipoDoc)
  }

  const validateFields = (formFields) => {
    return(
      formFields.tipoDoc != '' &&
      formFields.nroDoc != '' &&
      formFields.nroCell != '' &&
      formFields.polPriv != false &&
      formFields.polCom != false 
    )
  }
  

  return (
    <form>
      <AtomicSelectInput
        label={'nro de documento:'}
        options={['DNI', 'CE', 'SS']}
        onChangeSelect={onHandleChangeSelect}
        handleFieldChange={handleFieldChange}
      />
      <AtomInput label="Celular" name="nroCell" onValueChange={onValueChange} />
      <Atomiccheck
        label="Acepto lo Política de Privacidad"
        name="polPriv"
        handleChecked={onValueChange}
      />
      <Atomiccheck
        label="Acepto la Política Comunicaciones Comerciales"
        name="polCom"
        handleChecked={onValueChange}
      />

      <AtomicLink msg={'Aplican Términos y Condiciones.'} />
      <AtomicButton
        label="Cotiza Aqui"
        onClick={(e) => sendData(e)}
        disabled={!validateFields(formFields)}
      />
    </form>
  )
}

export default OrganismForm
