import styled from 'react-emotion'

const newStyled = function(Component, opts) {
  const thing = styled(Component, opts)
  return (...styles) => {
    const ret = thing(...styles)
    ret.extend = (...moreStyles) => {
      return styled(ret)(...moreStyles)
    }
    return ret
  }
}
export { newStyled as default }
