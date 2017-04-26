import React from 'react'
import renderer from 'react-test-renderer'
import ListPeriod from './ListPeriod'

it('renders correctly', () => {
  const period = { dt: 1493215200 }
  let selected

  const tree = renderer.create(
    <ListPeriod
      onSelectPeriod={p => selected = p}
      period={period}
    />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it('yields the clicked period', () => {
  const period = { dt: 1493215200 }
  let selected

  const component = renderer.create(
    <ListPeriod
      onSelectPeriod={p => selected = p}
      period={period}
    />
  )

  const tree = component.toJSON()
  tree.props.onClick()

  expect(selected).toEqual(period)
})
