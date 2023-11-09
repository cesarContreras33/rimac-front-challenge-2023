import { describe, expect, test } from "vitest";
import AtomicInput from "./AtomicInput";
import { render } from "@testing-library/react";



describe('atomicInput unit testing',()=>{

  const label = '10657333'
  const name = 'dninumber'
  const onValueChange = () => {}

  const {container} = render(<AtomicInput label={label} name={name} onValueChange={onValueChange}/>)

  test('should be correct type value props', () => {
    expect(typeof label).toBe('string')
    expect(typeof name).toBe('string')
    expect(typeof onValueChange).toBe('function')
  });
  
  test('the props value should be not null', () => {
    expect(label).toBeTruthy()
    expect(name).toBeTruthy()
    expect(onValueChange).toBeTruthy()
  });
  
  test('should render component', () => {
    expect(container.innerHTML).toMatchSnapshot()
  })
})