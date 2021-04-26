import { createRef } from 'react';

export const historyRef = createRef();

export const push = (name, params) => {
  historyRef.current?.history?.push(name, params);
};

export default {
  historyRef,
  push
};
