
import React from 'react'
import AtomicInput from '../../Atomos/AtomicInput/AtomicInput'
import AtomicSelect from '../../Atomos/AtomicSelect/AtomicSelect'
import './AtomicSelectInput.scss'


interface AtomicSelectInputProps {
  label: string
  options: string[]
  onChangeSelect: (e) => void
  handleFieldChange: (inputName, inputValue) => void
}

const AtomicSelectInput: React.FC<AtomicSelectInputProps> = ({
  label,
  options,
  onChangeSelect,
  handleFieldChange
}) => {


  const onValueChange = (inputName: string, inputValue: string) => {
    handleFieldChange(inputName, inputValue)
  }

  return (
    <div className="atomicSelectInput">
      <AtomicSelect options={options} onChange={onChangeSelect} />
      <AtomicInput
        label={label}
        name="nroDoc"
        onValueChange={onValueChange}
      />
    </div>
  )
}
export default AtomicSelectInput






