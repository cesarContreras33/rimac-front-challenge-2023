import { useState } from 'react'
import AtomicLink from '../../Atomos/AtomicLink/AtomicLink'
import AtomicSelectInput from '../../Moleculas/AtomicSelectInput/AtomicSelectInput'
import AtomicButton from '../../Atomos/AtomicButton/AtomicButton'
import AtomInput from '../../Atomos/AtomicInput/AtomicInput'
import './Form.scss'
import BlackCheckbox from '../../Atomos/AtomicCheck/AtomicCheck';
import React from 'react';

const Form = ({ sendData, handleFieldChange }) => {
  const [formFields] = useState({
    tipoDoc: 'DNI',
    nroDoc: '',
    nroCell: ''
  })


  return (
    <form>
      <AtomicSelectInput
        label={'nro de documento:'}
        options={['DNI', 'CE', 'SS']}
        onChangeSelect={(e) => handleFieldChange('tipoDoc', e)}
        onChangeInput={(e) => handleFieldChange('nroDoc', e)}
      />
      <AtomInput
        label="Celular"
        value={formFields.nroPhone}
        onChange={(e) => handleFieldChange('nroCell', e)}
        className="mb-24"
      />
      <BlackCheckbox label="Acepto lo Política de Privacidad" />
      <BlackCheckbox label="Acepto la Política Comunicaciones Comerciales" />

      <AtomicLink msg={'Aplican Términos y Condiciones.'} />
      <AtomicButton label="Cotiza Aqui" onClick={sendData} />
    </form>
  )
}

export default Form