import React from 'react';
import { addDecorator } from '@storybook/react';
import Container from '../src/component/core/Container'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(story => <Container>{story()}</Container>)