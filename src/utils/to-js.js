import React from 'react';
import { Iterable } from 'immutable';

export default WrappedComponent => wrappedComponentProps => {
  const KEY = 0;
  const VALUE = 1;

  const propsJS = Object.entries(
    wrappedComponentProps
  ).reduce((newProps, wrappedComponentProp) => {
    const value = wrappedComponentProp[VALUE];
    const key = wrappedComponentProp[KEY];

    newProps[key] = Iterable.isIterable(value)
      ? value.toJS()
      : value;
    return newProps;
  }, {});

  return <WrappedComponent {...propsJS} />;
};
