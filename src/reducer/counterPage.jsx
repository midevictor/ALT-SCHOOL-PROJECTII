import React from 'react'
import useCounterHook from './counterHook';

const CounterPage = () => {
    const { count, increment, decrement, reset } = useCounterHook();
    return (
      <div className="flex-center">
        <div className='flex-column'>
          <p>{count}</p>
          <button onClick={increment} className="butt">Increment</button>
          <button onClick={decrement} className="butt">Decrement</button>
          <button onClick={reset} className="butt">Reset</button>
        </div>
      </div>
    );
}

export default CounterPage
