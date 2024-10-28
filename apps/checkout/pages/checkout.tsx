'use client';
import { Button } from '@repo/ui/components';
// data-context
import { useAppSelector, useAppDispatch } from '@repo/data-context/hooks';
import {
  CheckoutState,
  onIncreaseQuantity
} from '@repo/data-context/reducers/count-reducer';
import {
  onClearInput,
  onInputChange,
  RemoteNextState
} from '@repo/data-context/reducers/remote-nextjs-reducer';
import { useState } from 'react';

export default function CheckoutPage() {
  const { count } = useAppSelector<CheckoutState>((state) => state.count);
  const { inputValue } = useAppSelector<RemoteNextState>(
    (state) => state.remoteNext
  );
  const dispatch = useAppDispatch();
  
  const [value, setValue] = useState(inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(onInputChange(e.target.value));
    setValue(e.target.value);
  };

  return (
    <div className='border border-red-700 p-4 m-4'>
      <div className='text-green-800'>Remote NextJs</div>
      <div className='text-blue-800'>Current state: {count}</div>

      <Button onClick={() => dispatch(onIncreaseQuantity(1))}>
        <span className='text-cyan-500'>increase count checkout</span>
      </Button>

      <div className='my-10 flex'>
        <input
          className='border w-40 h-10 bg-slate-200'
          placeholder='remote nextjs input'
          value={value}
          onChange={handleInputChange}
        />
        <Button
          className='w-10 h-10 border border-red-600 text-red-600'
          onClick={() => {
            dispatch(onClearInput());
            setValue('');
          }}>
          X
        </Button>
      </div>
    </div>
  );
}
