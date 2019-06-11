import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockstackButton } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BlockstackButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
