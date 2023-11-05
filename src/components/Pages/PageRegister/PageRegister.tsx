import {useState,useEffect} from 'react'
import imgFamilia from '@images/familia.png'

import AtomicPill from '@atoms/AtomicPill/AtomicPill'
import AtomicTitle from '@atoms/AtomicTitle/AtomicTitle'
import AtomicDescription from '@atoms/AtomicDescription/AtomicDescription'
import OrganismForm from '@organism/OrganismForm/OrganismForm'

import './PageRegister.scss'
import { fetchClient } from '@api/apiUser'

import { useDispatch } from 'react-redux'
import { addClient, addInfo } from '@redux/slices/clientSlice'
import { useNavigate } from 'react-router-dom';

import {
  REGISTER_PILL,
  REGISTER_TITLE,
  REGISTER_PARR,
  INITIALFORMFIELD
} from '@constants/constants.js'




const PageRegister = () => {
  const [formFields, setFormFields] = useState(INITIALFORMFIELD)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    const getData = async () => {
      const info = await fetchClient()
      dispatch(addClient(info)) 
    }
    getData()
  }, [])


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
              <AtomicPill message={REGISTER_PILL} />
              <AtomicTitle msg={REGISTER_TITLE} />
            </div>
            <img src={imgFamilia} alt="" />
          </div>
          <AtomicDescription msg={REGISTER_PARR} />
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




