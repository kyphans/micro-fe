import '@repo/ui/styles.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import ReduxProvider from "@repo/data-context/provider";
import { PersistGate, persistor } from "@repo/data-context/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <PersistGate loading={null} persistor={persistor}>
        <main className='flex min-h-screen flex-col items-center justify-center p-12'>
          <div className='container flex flex-col items-center text-center gap-4'>
            <h2 className='text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-1'>
              Next JS with page-router
            </h2>
            <Component {...pageProps} />
          </div>
        </main>
      </PersistGate>
    </ReduxProvider>
  );
}

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
