import { Button } from '@/shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const { increment, decrement, add } = useCounterActions();

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  const handleAdd = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid='value-title'>value = {counterValue}</h1>
      <Button data-testid='increment-btn' onClick={handleIncrement}>
        increment
      </Button>
      <Button data-testid='add-btn' onClick={handleAdd}>
        add 5
      </Button>
      <Button data-testid='decrement-btn' onClick={handleDecrement}>
        decrement
      </Button>
    </div>
  );
};
