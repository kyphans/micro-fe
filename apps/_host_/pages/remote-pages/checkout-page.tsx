'use client';
import { lazy, Suspense, useEffect, useState } from 'react';
const LazyCheckout = lazy(() => import('../remote-components/remote-checkout'));

function CheckoutPageHost() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading Remote NextJs...</div>;
  }
  return (
    <Suspense>
      <LazyCheckout />
    </Suspense>
  );
}

export default CheckoutPageHost;
