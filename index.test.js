/* eslint-env jest */
import React from 'react'
import { sheet } from 'emotion'
import serializer from 'jest-glamor-react'
import { create as render } from 'react-test-renderer'
import { Box, Flex, div } from './dist/index.cjs.js'

expect.addSnapshotSerializer(serializer(sheet))

// Box
test('Box renders', () => {
  const json = render(<Box m={2} px={3} />).toJSON()
  expect(json).toMatchSnapshot()
})

test('Box renders with props', () => {
  const json = render(<Box m={[1, 2]} px={[1, 2]} w={1} flex="1 1 auto" />)
  expect(json).toMatchSnapshot()
})

// Flex
test('Flex renders', () => {
  const flex = render(<Flex />)
  expect(flex).toMatchSnapshot()
})

test('Flex renders with props', () => {
  const flex = render(
    <Flex wrap direction="column" align="center" justify="space-between" />
  )
  expect(flex).toMatchSnapshot()
})

test('Flex renders with column prop', () => {
  const flex = render(<Flex column />)
  expect(flex).toMatchSnapshot()
})

test('Flex renders with responsive props', () => {
  const flex = render(
    <Flex
      wrap={[true, false]}
      direction={['column', 'row']}
      align={['stretch', 'center']}
      justify={['space-between', 'center']}
    />
  )
  expect(flex).toMatchSnapshot()
})

// div
test('div removes grid-styled props', () => {
  const json = render(
    React.createElement(div, {
      id: 'hi',
      className: 'beep',
      width: 0.5,
      color: 'blue',
      fontSize: 4,
      wrap: true
    })
  ).toJSON()
  expect(json.props.id).toEqual('hi')
  expect(json.props.className).toEqual('beep')
  expect(json.props.width).toEqual(undefined)
  expect(json.props.color).toEqual(undefined)
  expect(json.props.fontSize).toEqual(undefined)
  expect(json.props.wrap).toEqual(undefined)
})

test('div accepts an is prop to change elements', () => {
  const json = render(
    React.createElement(div, {
      is: 'h2'
    })
  ).toJSON()
  expect(json.type).toBe('h2')
})
