# react-blockstack-button

React component to display a login with blockstack button.

<div>
  <img src="assets/btn-blockstack-blue-l.svg" alt="Blockstack logo blue">
  <img src="assets/btn-blockstack-light-l.svg" alt="Blockstack logo light">
</div>

## Installation

With npm:

`npm install react-blockstack-button --save`

Or with yarn:

`yarn add react-blockstack-button`

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BlockstackButton } from 'react-blockstack-button';

const App = () => {
  const handleLogin = () => {
    // Call the blockstack sdk there
  };

  return <BlockstackButton onClick={handleLogin} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
```

## Demo

https://react-blockstack-button.leopradel.com/#demo

## Props

https://react-blockstack-button.leopradel.com/#props
