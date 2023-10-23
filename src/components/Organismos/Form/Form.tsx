import {useState} from 'react'
import imgFamilia from  '../../../assets/images/familia.png'
import logo from '../../../assets/images/logo_rimac.svg'
import AtomicButton from '../../Atomos/AtomicButton/AtomicButton'
import AtomicCheck from '../../Atomos/AtomicCheck/AtomicCheck'
import AtomInput from '../../Atomos/AtomicInput/AtomicInput'

const Form = () => {
  const [chkPriv, setChkPriv] = useState(false)
  const [chkCom, setChkCom] = useState(false)

  const onClickButton =()=> {
    console.log('me dio click')
  }
  
  const onHandleCheckPriv =()=> {
    setChkPriv(!chkPriv)
  }

  const onHandleCheckCom =()=> {
    setChkCom(!chkCom)
  }

  const onChangeInput =()=> {
    setChkCom(!chkCom)
  }
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <p>¡Compra por este medio!</p>
      </header>
      <main>
        <div className="content__left">
          <img src={imgFamilia} alt="" />
        </div>
        <div className="content__right">
          <div className="pill">seguro salud flexible</div>
          <h1>Creado para ti y tu familia</h1>
          <p>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>
          <form>
            <AtomInput label="hola mundo" value={'sadsd'} onChange={onChangeInput} />
            <AtomicCheck
              msg="Acepto lo Política de Privacidad"
              onClick={onHandleCheckPriv}
              checked={chkPriv}
            />
            <AtomicCheck
              msg="Acepto la Política Comunicaciones Comerciales"
              onClick={onHandleCheckCom}
              checked={chkCom}
            />
            <a href="#">Aplican Términos y Condiciones.</a>
            <AtomicButton label="Cotiza Aqui" onClick={onClickButton} />
          </form>
        </div>
      </main>
      <footer>
        <img src={logo} alt="logo_alt" />
        <p>© 2023 RIMAC Seguros y Reaseguros.</p>
      </footer>
    </>
  )
}

export default Form