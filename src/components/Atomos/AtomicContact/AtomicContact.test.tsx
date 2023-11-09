import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import AtomicContact from "./AtomicContact";

describe('AtomicContact unit test', () => {
  const msg= 'message'
  const imgurl = 'http://okurl.com/mamita.jpg'
  const tlf = '909828833'
  const component = render(<AtomicContact msg={msg} imgurl={imgurl} tlf={tlf}/>)

  test('should be type right', () => {
    expect(typeof msg).toBe('string')
    expect(typeof imgurl).toBe('string')
    expect(typeof tlf).toBe('string')
  })

  test('render component', () => {
    const {container} = component
    expect(container.innerHTML).toMatchSnapshot()
  })

  test('validating imgurl be url to image', () => {
    const validurl = /^http:\/\/.*\.(jpg|png|jpeg)$/.test(imgurl)
    expect(validurl).toBe(true)
  })
})