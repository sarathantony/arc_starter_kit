import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Box, Text } from 'pcln-design-system'

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`
const TextB = styled(Text)`
  color: ${palette('grayscale', 6, true)};
  font-weight: 500;
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  width: 100%;
  letter-spacing: 0.05em;
`

const Home = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <Box>
        <TextB>Hello World!</TextB>
      </Box>
    </Wrapper>
  )
}

export default Home
