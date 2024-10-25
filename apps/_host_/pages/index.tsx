import { Button } from '@repo/ui/components';
import CheckoutPage from './remote-pages/checkout-page';
import ReactWebpackRemoteComponent from './remote-pages/remote-react-webpack-page';

export default function Home() {
  return (
    <div>
      <span className='block'>App Shell</span>
      <CheckoutPage />
      <ReactWebpackRemoteComponent/>
      <Button>
        <span className='text-cyan-500'>Click App Shell</span>
      </Button>
    </div>
  );
}
