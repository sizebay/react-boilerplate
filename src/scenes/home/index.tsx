import React, { useState } from 'react'
import { useStore } from '../../store/useStore'
import {
  Agreement,
  Description,
  Header,
  Logo,
  Text,
  Input,
  Wrapper,
} from './home.styles'
import logo from '../../logo.svg'

const Home: React.FC = () => {
  const [foo, setFoo] = useState('knockout') // local state hook
  const { state, dispatch } = useStore() // global state hook (ctx api)
  var nameWidth = foo.length + 'em'
  const inputStyles = { width: nameWidth }

  const handleFoo = (what: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    what === 'value' && setFoo(value) // stores input value locally
    what === 'check' && dispatch({ type: 'GET_FOO', action: value }) // stores checkbox value globally
  }

  return (
    <Wrapper>
      <Header className="App-header">
        <Logo src={logo} className="App-logo" alt="logo" />
        <Description>
          <Text>Do whatever you want with it, except adding jquery or </Text>
          <Input
            style={inputStyles}
            value={foo}
            onChange={handleFoo('value')}
          />
        </Description>
        <Agreement hasAgreed={state.gotFoo}>
          {!state.gotFoo && (
            <Input
              secondary
              type="checkbox"
              onChange={handleFoo('check')}
              defaultChecked={false}
            />
          )}
          <Text small bold={state.gotFoo}>
            I agree to NOT use jquery nor knockout during the development.{' '}
            {state.gotFoo && (
              <span role="img" aria-label="emoji-check">
                ✅
              </span>
            )}
          </Text>
        </Agreement>
        <Text bold small>
          I'm the same <code>{'<Text>'}</code> component but with style props!{' '}
          <span role="img" aria-label="emoji-smile">
            😃
          </span>
        </Text>
      </Header>
    </Wrapper>
  )
}

export default Home
