import { fireEvent, render } from "@testing-library/react";
import { describe, test } from "vitest";
import AtomicCheck from "./AtomicCheck";


describe('AtomicButton unit testing', () => {
  const checkLabel = 'check description'
  test('should be render component',()=>{
    const {container} = render(<AtomicCheck label={checkLabel} name={'msg'} handleChecked={()=>{}} />)
    expect(container.innerHTML).toMatchSnapshot()
  })
  test('should be checked', async () => {
    let clic = false

    const handleCheckedClick = () => {
      clic = true
    }


    const { getByText } = render(
      <AtomicCheck
        label={checkLabel}
        name={'msg'}
        handleChecked={handleCheckedClick}
      />
    )
    const check = getByText(checkLabel)
    await fireEvent.click(check)
    expect(clic).toBe(true)

  });
})