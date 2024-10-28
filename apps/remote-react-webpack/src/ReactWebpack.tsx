import { styled } from '@stitches/react';
import React, { useEffect } from 'react';

// data-context
import { useAppDispatch, useAppSelector } from '@repo/data-context/hooks';
import {
  CountState,
  onIncreaseQuantity
} from '@repo/data-context/reducers/remote-react-reducer';
import { RemoteNextState } from '@repo/data-context/reducers/remote-nextjs-reducer';

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
  const { count } = useAppSelector<CountState>((state) => state.count);
  const dispatch = useAppDispatch();
  const { inputValue } = useAppSelector<RemoteNextState>(
    (state) => state.remoteNext
  );

  useEffect(() => {
    console.log('ReactWebpack work');
  }, []);

  return (
    <div className='border border-yellow-700 p-4 bg-yellow-50'>
      <div className='text-blue-800'>Remote React Webpack</div>
      <div>
        <span>Get input RemoteNext from "remote reactjs": {inputValue}</span>
      </div>
      <div>Current state: {count}</div>

      <StyledButton onClick={() => dispatch(onIncreaseQuantity(1))}>
        <StyledText>increase count react-webpack</StyledText>
      </StyledButton>
    </div>
  );
};

export default ReactWebpack;