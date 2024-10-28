import { Button } from '@repo/ui/components';
import RemoteNextjsPage from './remote-pages/remote-next-page';
import ReactWebpackRemoteComponent from './remote-pages/remote-react-webpack-page';

// data-context
import {
  CountState,
  onClearCount
} from '@repo/data-context/reducers/remote-react-reducer';
import { useAppDispatch, useAppSelector } from '@repo/data-context/hooks';
import {
  onClearInput,
  RemoteNextState
} from '@repo/data-context/reducers/remote-nextjs-reducer';

export default function Home() {
  const dispatch = useAppDispatch();
  const { inputValue } = useAppSelector<RemoteNextState>(
    (state) => state.remoteNext
  );
    const { count } = useAppSelector<CountState>(
      (state) => state.count
    );

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl'>
        <h1 className='text-2xl font-bold text-center mb-4'>App Shell</h1>
        <div>
          <span>Get input RemoteNext from "app shell": {inputValue}</span>
        </div>
        <div>
          <span>Get count global from app shell: {count}</span>
        </div>
        <div className='mb-6'>
          <RemoteNextjsPage />
        </div>
        <div className='mb-6'>
          <ReactWebpackRemoteComponent />
        </div>
        <div className='text-center'>
          <Button
            onClick={() => {
              dispatch(onClearCount());
              dispatch(onClearInput());
            }}>
            <span className='block w-[300px]'>Click clear with App Shell</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
