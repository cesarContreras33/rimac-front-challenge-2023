/* import React from 'react' */
/* import AtomicInput from '../../Atomos/AtomicInput/AtomicInput' */
//import {useState} from 'react'
import AtomicInput from '../../Atomos/AtomicInput/AtomicInput'
import AtomicSelect from '../../Atomos/AtomicSelect/AtomicSelect'
import './AtomicSelectInput.scss'


interface AtomicSelectInputProps{
  options: string[]
  label:string,
  onChangeSelect:()=>void,
  onChangeInput:()=>void,
  docNumber:number
}

const AtomicSelectInput: React.FC<AtomicSelectInputProps> = ({
  options,
  label,
  onChangeSelect,
  onChangeInput,
  docNumber
}) => {
  
  return (
    <div className="atomicSelectInput">
      <AtomicSelect options={options} onChange={onChangeSelect} />
      <AtomicInput label={label} value={docNumber} onChange={onChangeInput} />
    </div>
  )
}
export default AtomicSelectInput






/*   const [inputText, setInputText] = useState('')

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  } */