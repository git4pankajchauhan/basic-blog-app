import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { counterDecrement, counterIncrement, counterReset } from 'Store/actions/counter.action'
import CustomButton from 'Components/Button/CustomButton'
import { color } from 'Assets/Style/themes'

const Couter = props => {
  const dispatch = useDispatch()
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Couter Page</h1>
      <div>Counter : {props.counter}</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <CustomButton color={color.danger} onClick={() => dispatch(counterDecrement())}>
          decrement
        </CustomButton>
        <CustomButton color={color.success} onClick={() => dispatch(counterIncrement(2))}>
          increment
        </CustomButton>
        <CustomButton color={color.default} onClick={() => dispatch(counterReset())}>
          reset
        </CustomButton>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return { counter: state.counter.counter }
}
export default connect(mapStateToProps)(Couter)
