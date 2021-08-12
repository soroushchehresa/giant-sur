import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import App from './index'

describe('MenuBar -> Menu component', () => {
  let app: ShallowWrapper

  beforeEach(() => {
    app = shallow(<App items={[]} />)
  })

  it('Should renders properly', () => {
    expect(shallowToJson(app)).toMatchSnapshot()
  })
})
