import {test} from 'vitest'
import AtomCardExtend from './AtomCardExtend';
import {render} from '@testing-library/react'

describe('atomcard extend unit testing',() => {

  const booleantruly = true;
  const price = 33;
  const description = ["",""];

  const component = (<AtomCardExtend
    name={"iam the name"}
    price={price}
    description={description}
    discount = {booleantruly}
    handleSelectPlan = {() => {}}
    id = {'1'}/>);

  test('should render component', () => {
    const {container} = render(component)     
      expect(container.innerHTML).toMatchSnapshot()
  });
  
  test('should discount prop be a boolean ', () => {
      render(component)
      expect(typeof booleantruly).toBe('boolean')        
  });

  test('should be price a number type',() => {
    render(component)
    expect(typeof price).toBe('number')
  });

  test('should be description null when is empty',() => {
    const description = null
    render((<AtomCardExtend
    name={"iam the name"}
    price={price}
    description={description}
    discount = {booleantruly}
    handleSelectPlan = {() => {}}
    id = {'1'}/>))

    expect(description).toMatchSnapshot()

  })
  
})





