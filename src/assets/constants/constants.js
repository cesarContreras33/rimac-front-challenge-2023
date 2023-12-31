
//Page Register
const REGISTER_PILL ='Seguro Salud Flexible';
const REGISTER_TITLE ='Creado para ti y tu familia';
const REGISTER_PARR = 'Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.'

const REGISTER_SELECT_OPTIONS = ['DNI', 'CE', 'SS']

const REGISTER_CHECK_POLICY_PRIV = 'Acepto lo Política de Privacidad'
const REGISTER_CHECK_POLICY_COM = 'Acepto la Política Comunicaciones Comerciales'

const REGISTER_LINK_TERM = 'Aplican Términos y Condiciones'
const REGISTER_BUTTON = 'Cotiza Aqui'

const REGISTER_DOC_LABEL = 'Nro de documento'
const REGISTER_CELULAR_LABEL = 'Celular'



// Page Options
const OPTIONS_QUOTES = [
  { label: 'Planes y Cobertura', num: '1', status: true },
  { label: 'Resumen', num: '2', status: false }
]

const OPTIONS_TITLE = '¿Para quién deseas cotizar?'
const OPTIONS_DESCRIPTION = 'Selecciona la opción que se ajuste más a tus necesidades.'


const OPTIONS_QUOTES_PLANS = [
  {
    id: 1,
    icon: 'IcProtectionLight',
    title: 'Para mí',
    description:
      'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    status: false
  },
  {
    id: 2,
    icon: 'IcAddUserLight',
    title: 'Para alguien más',
    description:
      'Realiza una cotización para uno de tus familiares o cualquier persona.',
    status: false
  }
]

const OPTIONS_PILL_MSG = 'plan recomendado'

const OPTIONS_PLAN_MSG = 'costo de plan'

const OPTIONS_NAV_RESUMEN = '/resumen'

const BUTTON_SELECTION_LABEL = 'Seleccionar Planes'

//resumen 

const RESUMEN_TITLE ='Precios calculados para:'
const RESUMEN_SUBTITLE ='Responsable de pago'
const RESUMEN_CELL ='Celular:'
const RESUMEN_PLAN ='Plan elegido:'
const RESUMEN_COSTO_PLAN ='Costo del Plan'



//footer
/* The `const FOOTER_COPYRIGHT` is defining a constant variable that holds the value `'© 2023 RIMAC
Seguros y Reaseguros'`. This value is likely used to display the copyright information in the footer
section of a web page. */
const FOOTER_COPYRIGHT = '© 2023 RIMAC Seguros y Reaseguros.'

const INITIALFORMFIELD = {
  tipoDoc: 'DNI',
  nroDoc: '',
  nroCell: '',
  polPriv: false,
  polCom: false
}


//commons
const ACTION_BACK = 'Volver'


export { 
  REGISTER_PILL, 
  REGISTER_TITLE, 
  REGISTER_PARR, 
  REGISTER_SELECT_OPTIONS,
  REGISTER_CHECK_POLICY_PRIV, 
  REGISTER_CHECK_POLICY_COM,
  REGISTER_LINK_TERM,
  REGISTER_BUTTON,
  REGISTER_DOC_LABEL,
  REGISTER_CELULAR_LABEL,
  OPTIONS_QUOTES,
  OPTIONS_TITLE,
  OPTIONS_DESCRIPTION,
  OPTIONS_QUOTES_PLANS,
  OPTIONS_PILL_MSG,
  OPTIONS_PLAN_MSG,
  OPTIONS_NAV_RESUMEN,
  BUTTON_SELECTION_LABEL,
  RESUMEN_TITLE,
  RESUMEN_SUBTITLE,
  RESUMEN_CELL,
  RESUMEN_PLAN,
  RESUMEN_COSTO_PLAN,
  FOOTER_COPYRIGHT,
  INITIALFORMFIELD,
  ACTION_BACK
}
