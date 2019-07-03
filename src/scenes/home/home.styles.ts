import styled from 'styled-components'

interface StyleProps {
  bold?: boolean
  small?: boolean
  secondary?: boolean
  hasAgreed?: boolean
}

export const Wrapper = styled.div`
  text-align: center;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: #fff;
  background-color: #282c34;
`

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`

export const Agreement = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  opacity: ${props => (props.hasAgreed ? '1' : '0.5')};
  cursor: default;
`

export const Text = styled.p<StyleProps>`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-size: ${props => (props.small ? '15px' : 'unset')};
`

export const Input = styled.input<StyleProps>`
  ${props => (props.secondary ? `margin-right: 10px` : `margin-left: 10px`)};
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 26px;
  max-width: 150px;
  outline: none;
`

export const Description = styled.div`
  display: flex;
  align-items: center;
`
