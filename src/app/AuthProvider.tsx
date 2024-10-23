'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import ClientOnlyProvider from './StoreProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthProvider = ({ children }: any) => {
  return (
    <SessionProvider>
      <ClientOnlyProvider>{children}</ClientOnlyProvider>
    </SessionProvider>
  );
};

export default AuthProvider;
