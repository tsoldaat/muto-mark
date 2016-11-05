'use strict'

const Window = require('app/components/window')
const React = require('react')
const TestUtils = require('react-addons-test-utils')

describe('Window component', () => {
  let html = '<h1>Test Window Component</h1>'
  let result = null

  beforeEach(() => {
    let component = React.createElement(Window, { html: html }, null)
    let renderer = TestUtils.createRenderer()

    renderer.render(component)
    result = renderer.getRenderOutput()
  })

  it('creates a wrapper div with the appropriate class', () => {
    expect(result.type).to.equal('div')
    expect(result.props.className).to.equal('window')
  })

  it('creates a heading element', () => {
    let child = result.props.children[0]

    expect(child.type).to.equal('h1')
    expect(child.props.className).to.equal('window__heading')
    expect(child.props.children).to.not.be.empty
  })

  it('creates a content element', () => {
    let child = result.props.children[1]

    expect(child.type).to.be.instanceof(Function)
    expect(child.props.html).to.equal(html)
    expect(child.props.children).to.be.null
  })
})
