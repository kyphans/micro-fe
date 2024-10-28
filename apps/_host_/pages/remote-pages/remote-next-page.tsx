'use client';
import { lazy, Suspense, useEffect, useState } from 'react';
const LazyRemoteNext = lazy(() => import('../remote-components/remote-next'));

function RemoteNextPageHost() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading Remote NextJs...</div>;
  }
  return (
    <Suspense>
      <LazyRemoteNext />
    </Suspense>
  );
}

export default RemoteNextPageHost;
