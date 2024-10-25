'use client';
import { lazy, Suspense, useEffect, useState } from 'react';
const ReactRemoteComponent = lazy(
  () => import('../remote-components/remote-react-webpack')
);

function ReactWebpackRemoteComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading Remote React Webpack...</div>;
  }
  return (
    <Suspense>
      <ReactRemoteComponent />
    </Suspense>
  );
}

export default ReactWebpackRemoteComponent;
