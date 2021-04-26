import { useReducer, useEffect, useRef, useMemo, useCallback } from 'react';
import { runSaga, stdChannel } from 'redux-saga';

export default function useReducerAndSaga(reducer, rootSaga, initialState) {
  const [state, reactDispatch] = useReducer(reducer, initialState);
  const env = useRef(state);
  env.current = state;
  
  const channel = useMemo(() => stdChannel(), []);
  const dispatch = useCallback(a => {
    setImmediate(channel.put, a);
    reactDispatch(a);
  }, []);

  const getState = useCallback(() => env.current, []);

  useEffect(() => {
    const sagaMonitor =
      process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

    const task =
      process.env.NODE_ENV === 'development'
        ? runSaga({ channel, dispatch, getState, sagaMonitor }, rootSaga)
        : runSaga({ channel, dispatch, getState }, rootSaga);
    return () => task.cancel();
  }, []);

  return [state, dispatch];
}
