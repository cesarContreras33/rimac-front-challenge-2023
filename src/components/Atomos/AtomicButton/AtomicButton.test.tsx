
import {fireEvent, render,screen} from '@testing-library/react'
import AtomicButton from './AtomicButton'
import { describe, test } from 'vitest'

describe('AtomicButton unit testing', () => {
  test("render label",()=>{
  
    render(<AtomicButton label={'Cotiza Aqui'}/>)
  
    const msg = screen.queryByText(/Cotiza Aqui/i)
    expect(msg).toBeDefined()
  
  })

  test('should be render component', () => {
    const {container} =render(<AtomicButton label={'push me'} onClick={()=>{}} disabled={true}/>)
    expect(container.innerHTML).toMatchSnapshot()
  })

  test('should be clic to button',async () => {
    // es necesario que disabled este en modo false ya que asi no permitira que se dispare el clic
    let handleClickCalled = false

    const handleclick = () => {
      handleClickCalled = true
    }

    const {getByText} = render(
      <AtomicButton label={'push me'} onClick={handleclick} disabled={false}/>
    )

    const btn = getByText('push me')
    await fireEvent.click(btn)

    expect(handleClickCalled).toBe(true)

  });
})


