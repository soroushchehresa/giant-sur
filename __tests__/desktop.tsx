import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import App from '../pages/_components/Desktop/index'

describe('Desktop component', () => {
  let app: ShallowWrapper

  beforeEach(() => {
    app = shallow(<App />)
  })

  it('Should renders properly', () => {
    expect(shallowToJson(app)).toMatchSnapshot()
  })
})
