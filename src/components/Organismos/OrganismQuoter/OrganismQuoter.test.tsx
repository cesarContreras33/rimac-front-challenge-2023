
import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import OrganismQuoter from './OrganismQuoter'
import { Provider } from 'react-redux'
import { store } from '@redux/store'

describe('organismQuoter unit testing component', () => {
  test('should show render component', () => {
    const { container } = render(
      <Provider store={store}>
        <OrganismQuoter
          optionPlans={[]}
          handleClickCard={() => {}}
          plans={[]}
          discount={true}
          handleSelectPlan={() => {}}
        />
      </Provider>
    )
    expect(container.innerHTML).toMatchSnapshot()
  })
  test('should be boolean type', () => {
    const booleanvalue = true
    const arr = []
    render(
      <Provider store={store}>
        <OrganismQuoter
          optionPlans={arr}
          handleClickCard={() => {}}
          plans={[]}
          discount={booleanvalue}
          handleSelectPlan={() => {}}
        />
      </Provider>
    )
    expect(typeof booleanvalue).toBe('boolean')
    expect(typeof arr).toBe('object')
  });
})