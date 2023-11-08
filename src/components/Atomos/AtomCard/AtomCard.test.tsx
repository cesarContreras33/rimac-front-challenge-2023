import AtomCard from "./AtomCard";
import {test,expect} from 'vitest'
import {render,screen} from '@testing-library/react'



describe('unit-test atomicCard component',() => {
  
  test('should be a icon name ', ()=>{
    render(<AtomCard icon="ic_check" />)
    expect(screen.getByAltText("ic_check")).toBeDefined();

  })

  test('should be match to title', () => {
    const myTitle = 'iam the title'
    render(<AtomCard title={myTitle}/>)
    expect(screen.getByText("iam the title")).toBeDefined();
  });

  test('status prop should be boolean',() => {
    const beBoolean = true
    render(<AtomCard status={beBoolean}/>)
    expect(typeof beBoolean).toBe('boolean') 
  })


  test('should show div structure component ',() => {
    const {container} = render(<AtomCard title="soy el titulo" description="lorem ipsum description" status={true} onClick={()=>{}} />)
    expect(container.innerHTML).toMatchSnapshot()
  })

})

