
import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import OrganismQuoter from './OrganismQuoter'
import { Provider } from 'react-redux'
import { store } from '@redux/store'

describe('organismQuoter unit testing component', () => {
  
  const booleanvalue = true
  const arr = []
  const discount = true

  const component = render(
    <Provider store={store}>
      <OrganismQuoter
        optionPlans={arr}
        handleClickCard={() => {}}
        plans={[]}
        discount={discount}
        handleSelectPlan={() => {}}
      />
    </Provider>
  )

  test('should show render component', () => {
    const { container } = component
    expect(container.innerHTML).toMatchSnapshot()
  })
  test('should be boolean type', () => {
    expect(typeof booleanvalue).toBe('boolean')
    expect(typeof arr).toBe('object')
  });
})