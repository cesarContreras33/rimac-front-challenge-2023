import React from "react"
import { AtomicCheckVisualProps } from "@types/types"

const AtomicCheckVisual: React.FC<AtomicCheckVisualProps> = ({
  checked,
  label,
  toggleCheckbox
}) => {
  return (
    <label className={`mt-24 atomiccheck ${checked ? 'checked' : ''}`}>
      <input type="checkbox" checked={checked} onChange={toggleCheckbox} />
      <span className="checkmark"></span>
      {label}
    </label>
  )
}

export default AtomicCheckVisual