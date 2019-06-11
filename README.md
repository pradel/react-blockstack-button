# react-blockstack-button

React component to display a login with blockstack button.
The svg are taken from the [blockstack branding materials](https://www.dropbox.com/sh/5uyhon1dxax4t6t/AABnh34kFRzD2TSck1wE9fmqa?dl=0)

TODO show image

## Installation

With npm:

`npm install react-blockstack-button --save`

Or with yarn:

`yarn add react-blockstack-button`

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import BlockstackButton from 'react-blockstack-button';

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
