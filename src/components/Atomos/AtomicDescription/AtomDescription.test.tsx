import { describe, expect, test } from "vitest";
import AtomicDescription from "./AtomicDescription";
import { render } from "@testing-library/react";


describe('atom description unit testing',() => {

  const msg = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti autem earum consequatur architecto ad ut provident illo quaerat aliquam, blanditiis magni corrupti hic maiores quisquam voluptatem, quis necessitatibus optio sed.'
  
  const {container} = render(<AtomicDescription msg={msg}/>)

  test('should be msg like a string', () => {
    expect(typeof msg).toBe('string')
  });

  test('should be msg props cant be null ', () => {
    expect(msg).not.toBeNull()    
  });

  test('should be render component', () => {
    expect(container.innerHTML).toMatchSnapshot()
  });
  
})





