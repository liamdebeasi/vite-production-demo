import React, { useRef } from 'react';

window.customElements.define('app-badge', class extends HTMLElement {
  constructor() {
    super();
  }
});

const createReactComponent = (tagName) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { children } = this.props;
      return React.createElement(tagName, {}, children);
    }
  };
};

const AppBadge = createReactComponent('app-badge');

export { AppBadge };
