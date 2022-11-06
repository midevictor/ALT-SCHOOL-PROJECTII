import {useReducer } from 'react'
import CounterReducer from './CounterReducer';

const useCounterHook = () => {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(CounterReducer, initialState);

    const increment = () => {
        dispatch({ type: 'increment' });
    }

    const decrement = () => {
        dispatch({ type: 'decrement' });
    }

    const reset = () => {
        dispatch({ type: 'reset' });
    }

    return { count: state.count, increment, decrement, reset };
}

export default useCounterHook;
