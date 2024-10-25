'use client';
import { Button } from '@repo/ui/components';
// data-context
import { useAppSelector, useAppDispatch } from '@repo/data-context/hooks';
import { CheckoutState, onIncreaseQuantity } from '@repo/data-context/reducers/checkout-reducer';

export default function CheckoutPage() {
  const { count } = useAppSelector<CheckoutState>(
    (state) => state.checkout
  );
  const dispatch = useAppDispatch();

  return (
    <div className='border border-red-700 p-4 m-4'>
      <div className='text-green-800'>Checkout team</div>
      <div className='text-blue-800'>Current state: {count}</div>

      <Button onClick={() => dispatch(onIncreaseQuantity(1))}>
        <span className='text-cyan-500'>increase count checkout</span>
      </Button>
    </div>
  );
}
