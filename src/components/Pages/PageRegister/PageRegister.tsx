import React,{useState,useEffect} from 'react'
import imgFamilia from '../../../assets/images/familia.png'

import AtomicPill from '../../Atomos/AtomicPill/AtomicPill'
import AtomicTitle from '../../Atomos/AtomicTitle/AtomicTitle'
import AtomicDescription from '../../Atomos/AtomicDescription/AtomicDescription'
import Form from '../../Organismos/Form/Form'

import './PageRegister.scss'
import { fetchClient } from '../../../api/apiUser'

import { useDispatch } from 'react-redux'
import { addClient, addInfo } from '../../../redux/slices/clientSlice'
import { useNavigate } from 'react-router-dom'

const initialFormField = {
  tipoDoc:'DNI',
  nroDoc:'',
  nroCell:''
}

const PageRegister = () => {
  const [formFields, setFormFields] = useState(initialFormField)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    const getData = async () => {
      const info = await fetchClient()
      dispatch(addClient(info)) 
    }
    getData()
  }, [])

  const handleFieldChange = (field, e) => {
    const update = {...formFields,[field]:e.target.value}
    setFormFields(update) 
  }

  const sendData = async(e) => {
    e.preventDefault()
    console.log(formFields)
    console.log('aqui pretendo enviar los datos para actualizar el estado')
    dispatch(addInfo(formFields))
    navigate('/options')
  }

  return (
    <div className="content">
      <div className="content__left">
        <img src={imgFamilia} alt="" />
      </div>
      <div className="content__right">
        <div className="content__right--form">
          <AtomicPill message={'Seguro Salud Flexible'} />
          <AtomicTitle msg={'Creado para ti y tu familia'} />
          <AtomicDescription
            msg={
              'Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.'
            }
          />
          <Form sendData={sendData} handleFieldChange={handleFieldChange} />
        </div>
      </div>
    </div>
  )
}

export default PageRegister




