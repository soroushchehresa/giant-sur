import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import App from '../pages/_components/MenuBar/_components/Menu/index'

describe('MenuBar -> Menu component', () => {
  let app: ShallowWrapper

  beforeEach(() => {
    app = shallow(<App items={[]} title="Apple" />)
  })

  it('Should renders properly', () => {
    expect(shallowToJson(app)).toMatchSnapshot()
  })
})
