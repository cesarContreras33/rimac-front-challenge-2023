
import {render,screen} from '@testing-library/react'
import AtomicButton from './AtomicButton'

it("button render",()=>{

  render(<AtomicButton label={'Cotiza Aqui'} onClick={()=>{}}/>)

  const msg = screen.queryByText(/Cotiza Aqui/i)
  expect(msg).toBeDefined()

})

