import {useState,useEffect} from 'react'
import imgFamilia from '../../../assets/images/familia.png'

import AtomicPill from '../../Atomos/AtomicPill/AtomicPill'
import AtomicTitle from '../../Atomos/AtomicTitle/AtomicTitle'
import AtomicDescription from '../../Atomos/AtomicDescription/AtomicDescription'
import OrganismForm from '../../Organismos/Form/OrganismForm'

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
    const inputString = e.target.value;
    const newInputNumber = inputString.replace(/[^1-9]/g,'');
    const sanit = newInputNumber.slice(0,9)
    e.target.value = sanit
    if(newInputNumber.length <= 9){
      const update = { ...formFields, [field]: sanit }
      setFormFields(update)
    }   
  }

  const sendData = async(e) => {
    e.preventDefault()
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
          <OrganismForm sendData={sendData} handleFieldChange={handleFieldChange} />
        </div>
      </div>
    </div>
  )
}

export default PageRegister




