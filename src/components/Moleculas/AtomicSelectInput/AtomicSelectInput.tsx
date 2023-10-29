
import React from 'react'
import AtomicInput from '../../Atomos/AtomicInput/AtomicInput'
import AtomicSelect from '../../Atomos/AtomicSelect/AtomicSelect'
import './AtomicSelectInput.scss'


interface AtomicSelectInputProps{
  options: string[]
  label:string,
  onChangeSelect:(e:React.ChangeEvent<HTMLSelectElement>) => void,
  onChangeInput:(e:React.ChangeEvent<HTMLInputElement>) => void,
  docNumber:number
}

const AtomicSelectInput: React.FC<AtomicSelectInputProps> = ({
  label,
  options,
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






