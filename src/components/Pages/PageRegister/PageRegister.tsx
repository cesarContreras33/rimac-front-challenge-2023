import {useState,useEffect} from 'react'
import imgFamilia from '../../../assets/images/familia.png'

import AtomicPill from '../../Atomos/AtomicPill/AtomicPill'
import AtomicTitle from '../../Atomos/AtomicTitle/AtomicTitle'
import AtomicDescription from '../../Atomos/AtomicDescription/AtomicDescription'
import OrganismForm from '../../Organismos/OrganismForm/OrganismForm'

import './PageRegister.scss'
import { fetchClient } from '../../../api/apiUser'

import { useDispatch } from 'react-redux'
import { addClient, addInfo } from '../../../redux/slices/clientSlice'
import { useNavigate } from 'react-router-dom'

const initialFormField = {
  tipoDoc:'DNI',
  nroDoc:'',
  nroCell:'',
  polPriv:false,
  polCom:false
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

  useEffect(()=>{
    console.log('aqui quiero validar')
  },[formFields])



   const handleFieldChange = (field, valor) => { 
    const update = { ...formFields, [field]: valor }
    setFormFields(update)
  }


  const sendData = (event) => {
    event.preventDefault()
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
          <div className="content__right--form-group">
            <div className="form-group">
              <AtomicPill message={'Seguro Salud Flexible'} />
              <AtomicTitle
                msg={'Creado para ti y tu familia'}
              />
            </div>
            <img src={imgFamilia} alt="" />
          </div>
          <AtomicDescription
            msg={
              'Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.'
            }
          />
          <OrganismForm
            sendData={sendData}
            handleFieldChange={handleFieldChange}
            formFields={formFields}
          />
        </div>
      </div>
    </div>
  )
}

export default PageRegister




