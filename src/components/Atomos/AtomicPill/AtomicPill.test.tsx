import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import AtomicPill from "./AtomicPill";

describe('AtomicPill unit testing', () => {
  const message = 'pill'
  const {container} = render(<AtomicPill message={message}/>)

  test('prop message should be no empty ', () => {
    expect(message).toBeTruthy()
  });

  test('prop type can be string', () => {
    expect(typeof message).toBe('string')
  });

  test('render component',() => {
    expect(container.innerHTML).toMatchSnapshot()
  })
})


