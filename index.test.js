/* eslint-env jest */
import React from 'react'
import { sheet } from 'emotion'
import serializer from 'jest-glamor-react'
import { create as render } from 'react-test-renderer'
import { Box, Grid, Flex } from './dist/index.cjs.js'

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

test('Box renders with `is` prop', () => {
  const json = render(<Box is="section" />).toJSON()
  expect(json).toMatchSnapshot()
  expect(json.type).toBe('section')
})

// Grid
test('Grid renders', () => {
  const grid = render(<Grid />)
  expect(grid).toMatchSnapshot()
})

test('Grid has a classname', () => {
  const div = render(<Grid />).toJSON()
  expect(div.props.className).toBeTruthy()
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
