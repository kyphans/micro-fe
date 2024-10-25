import { styled } from '@stitches/react';
import React, { useEffect } from 'react';

// data-context
import { useAppSelector, useAppDispatch } from '@repo/data-context/hooks';
import { CheckoutState, onIncreaseQuantity } from '@repo/data-context/reducers/checkout-reducer';

const StyledButton = styled('button', {
  background: '#4b4be8',
  color: '#fff',
  padding: 12,
  margin: '12px 0'
});

const StyledText = styled('span', {
  color: '#00fc5d',
  padding: 12
});

const ReactWebpack: React.FC = () => {
  const { count } = useAppSelector<CheckoutState>((state) => state.checkout);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('ReactWebpack work');
  }, []);

  return (
    <div className='border border-red-700 p-4 m-4'>
      <div>React Webpack Team</div>
      <div>Current state: {count}</div>

      <StyledButton onClick={() => dispatch(onIncreaseQuantity(1))}>
        <StyledText className='text-cyan-500'>
          increase count checkout
        </StyledText>
      </StyledButton>
      <br></br>
      <StyledButton>
        <span>Styled Button form ReactWebpack</span>
      </StyledButton>
    </div>
  );
};

export default ReactWebpack;