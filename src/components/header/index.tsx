'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="border-y-2 py-8 px-32 text-3xl">
      <ul className="flex justify-between items-center">
        <div className="flex gap-4">
          <Link href={'/'}>
            <li>Home</li>
          </Link>
          <Link href={'/tempo'}>
            <li>Tempo</li>
          </Link>
        </div>
        <div className="flex gap-8">
          {!session ? (
            <Link href={'/login'}>
              <li>Login</li>
            </Link>
          ) : (
            <button onClick={() => signOut()}>
              <li>Logout</li>
            </button>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Header;
