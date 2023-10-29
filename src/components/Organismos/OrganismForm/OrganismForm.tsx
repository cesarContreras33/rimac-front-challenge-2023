import React, { ChangeEvent, useState } from 'react'
import AtomicLink from '../../Atomos/AtomicLink/AtomicLink'
//import AtomicSelectInput from '../../Moleculas/AtomicSelectInput/AtomicSelectInput'
import AtomicButton from '../../Atomos/AtomicButton/AtomicButton'
import AtomInput from '../../Atomos/AtomicInput/AtomicInput'
import './OrganismForm.scss'
import Atomiccheck from '../../Atomos/AtomicCheck/AtomicCheck';


interface OrganismFormProps{
  sendData:(e?:React.MouseEvent) => void
  handleFieldChange:(field:string,e:string) => void
}


const OrganismForm: React.FC<OrganismFormProps> = ({
  sendData,
  handleFieldChange
}) => {

/*   const numbersRestrictions = (text:string) => {
    return text.replace(/[^0-9]/g,'')
  } */

  const onValueChange = async (inputName:string,inputValue:string) => {
    //const newInputValue = await numbersRestrictions(inputValue)
    await handleFieldChange(inputName, inputValue)
  }
  


  return (
    <form>
      {/*       <AtomicSelectInput
        label={'nro de documento:'}
        options={['DNI', 'CE', 'SS']}
        onChangeSelect={onHandleChangeSelect}
        onChangeInput={onHandleChangeInput}
        docNumber={formFields.nroDoc}
      /> */}
      <AtomInput
        label="Celular"
        name="nroCell"
        onValueChange={onValueChange}
    /*     numbersRestrictions={numbersRestrictions} */
      />
      <Atomiccheck label="Acepto lo Política de Privacidad" />
      <Atomiccheck label="Acepto la Política Comunicaciones Comerciales" />

      <AtomicLink msg={'Aplican Términos y Condiciones.'} />
      <AtomicButton label="Cotiza Aqui" onClick={(e) => sendData(e)} />
    </form>
  )
}

export default OrganismForm
