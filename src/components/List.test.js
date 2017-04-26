import React from 'react'
import renderer from 'react-test-renderer'
import List from './List'

it('groups periods by day', () => {
  const periods = [
    { dt: 1493128800 }, // 2017-04-25 15:00 (+0100)
    { dt: 1493204400 }, // 2017-04-26 12:00 (+0100)
    { dt: 1493215200 }, // 2017-04-26 15:00 (+0100)
  ]

  const tree = renderer.create(
    <List
      onSelectPeriod={() => {}}
      periods={periods}
    />
  ).toJSON()

  expect(tree.children.length).toEqual(2)
})
