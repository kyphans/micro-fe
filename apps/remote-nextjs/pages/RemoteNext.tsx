'use client';
import { Button } from '@repo/ui/components';
// data-context
import { useAppSelector, useAppDispatch } from '@repo/data-context/hooks';
import {
  CountState,
  onIncreaseQuantity
} from '@repo/data-context/reducers/remote-react-reducer';
import {
  onClearInput,
  onInputChange,
  RemoteNextState
} from '@repo/data-context/reducers/remote-nextjs-reducer';
import { useState } from 'react';
import Link from 'next/link';

export default function RemoteNextPage() {
  const { count } = useAppSelector<CountState>((state) => state.count);
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
    <div className='border border-red-700 p-4 bg-red-50'>
      <div className='text-green-800'>Remote NextJs</div>
      <div className='text-blue-800'>Current state: {count}</div>
      <Link className='text-blue-500' href='/products'>
        Access to Products
      </Link>
      <br />
      <Link className='text-blue-500' href='/users'>
        Access to Users
      </Link>

      <Button onClick={() => dispatch(onIncreaseQuantity(1))}>
        <span className='text-black'>increase count Nextjs</span>
      </Button>

      <div className='my-10 flex'>
        <input
          className='border w-60 h-10 bg-slate-100 p-2'
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
