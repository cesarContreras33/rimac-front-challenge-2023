
import './AtomicCheck.scss'

interface AtomicCheckProps {
  msg: string;
  checked: boolean;
  onClick: () => void; 
}

const AtomicCheck: React.FC<AtomicCheckProps> = ({ msg,onClick,checked }) => {

  return (
    <p className="atomicCheck">
      <input type="checkbox" checked={checked} onClick={onClick} />
      <label >{msg}</label>
    </p>
  )
}


export default AtomicCheck
