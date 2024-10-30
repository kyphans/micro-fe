'use client';
import Link from "next/link";
import RemoteNextPage from "./RemoteNext";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='container flex flex-col items-center text-center gap-4'>
        <h2 className='text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-1'>
          Nextjs Application
        </h2>
        <p className='max-w-3xl text-lg text-muted-foreground'>
          This is the nextjs application that maintained by the{' '}
          <strong>Nextjs Team</strong>
          <br/>
          <Link className="text-blue-500" href='/products'>Access to Products</Link>
          <br/>
          <Link className="text-blue-500" href='/users'>Access to Users</Link>

          <RemoteNextPage/>
        </p>
      </div>
    </main>
  );
}
