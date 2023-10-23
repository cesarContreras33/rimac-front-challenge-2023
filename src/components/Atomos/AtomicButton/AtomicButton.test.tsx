
import {render,screen} from '@testing-library/react'
import AtomicButton from './AtomicButton'

it("button render",()=>{
  const onClick = () => {
    console.log('me dio click')
  }
  render(<AtomicButton label={'Cotiza Aqui'} onClick={onClick}/>)
  const msg = screen.queryByText(/Cotiza Aqui/i)
  expect(msg).toBeDefined()

})

