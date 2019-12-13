import React from 'react'
import { storiesOf } from '@storybook/react'
import { Home } from 'components'

storiesOf('Home', module)
  .add('default', () => (
    <Home />
  ))
