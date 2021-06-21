import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { counterDecrement, counterIncrement, counterReset } from 'Store/actions/Counter.action';

const Home = props => {
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home Page</h1>
      <div>Counter : {props.counter}</div>
      <button onClick={() => dispatch(counterIncrement(2))}>increment</button>
      <button onClick={() => dispatch(counterDecrement())}>decrement</button>
      <button onClick={() => dispatch(counterReset())}>reset</button>
    </div>
  );
};
const mapStateToProps = state => {
  return { counter: state.counter.counter };
};
export default connect(mapStateToProps)(Home);
