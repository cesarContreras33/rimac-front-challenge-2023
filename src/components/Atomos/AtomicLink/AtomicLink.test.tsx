import { describe, test } from "vitest";
import AtomicLink from "./AtomicLink";
import { render } from "@testing-library/react";


describe('AtomicLink unit testing',() => {
  const msg = 'hello work'
  const {container} = render(<AtomicLink msg={msg}/>)

  test('verify if prop msg value is not empty or null ', () => {
    expect(msg).toBeTruthy()
  });

  test('props value msg should be a string type ', () => {
    expect(typeof msg).toBe('string')
  });

  test('should be render component', () => {
    expect(container.innerHTML).toMatchSnapshot()
  });
})
