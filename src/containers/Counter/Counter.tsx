import React from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import {
  incrementActionCreator,
  decrementActionCreator,
  onAddActionCreator,
  onSubtractActionCreator,
} from "../../store/actions";

interface ICounter {
  counter: number;
  title: string;
  errorMsg: string;
  onIncrement: () => void;
  onDecrement: () => void;
  onAdd: () => void;
  onSubtract: () => void;
}
const Counter = ({
  counter,
  onIncrement,
  onDecrement,
  onAdd,
  onSubtract,
  title,
  errorMsg,
}: ICounter) => {
  return (
    <div>
      <CounterOutput value={counter} />
      <CounterControl label="Increment" clicked={onIncrement} />
      <CounterControl label="Decrement" clicked={onDecrement} />
      <CounterControl label="Add 5" clicked={onAdd} />
      <CounterControl label="Subtract 5" clicked={onSubtract} />
      {title && <h1 style={{ color: "green" }}>{title}</h1>}
      {<h1 style={{ color: "red" }}>{errorMsg}</h1>}
    </div>
  );
};

const mapStateToProps = (state: {
  counter: number;
  title: string;
  errorMsg: string;
}) => {
  return {
    counter: state.counter,
    title: state.title,
    errorMsg: state.errorMsg,
  };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    onIncrement: () => dispatch(incrementActionCreator()),
    onDecrement: () => dispatch(decrementActionCreator()),
    onAdd: () => dispatch(onAddActionCreator(5)),
    onSubtract: () => dispatch(onSubtractActionCreator(5)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
