 
import {render,screen} from '@testing-library/react'
import AtomicCheck from './AtomicCheck'

describe('checkbox testing',()=>{

  const msg = "mensaje";
  const checked=false;
  const onClick = () => {
    console.log('change check!')
  };

  test('checkbox render',()=>{
    const component = render(<AtomicCheck msg={msg} checked={checked} onClick={onClick}/>)
    expect(component).toBeDefined()
  })
  
  test('checkbox testing clic',()=>{  
    render(<AtomicCheck msg={msg} checked={checked} onClick={onClick}/>)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(checked)
    expect(screen.getByText(msg)).toBeTruthy()
  })

  
})


/* test('checkbox testing clic',()=>{
  const msg = "mensaje";
  const checked=false;
  const onChange = () => {
    console.log('change check!')
  };

  render(<AtomicCheck msg={msg} checked={checked} onChange={onChange}/>)

  const checkbox = screen.getByRole('checkbox') as HTMLInputElement
  expect(checkbox.checked).toBe(checked)
  expect(screen.getByText(msg)).toBeTruthy()

}) */