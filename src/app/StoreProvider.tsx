'use client'; // Marks this as a Client Component

import React from 'react';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import configureAppStore from '@/store';
import '@mantine/core/styles.css';
import { SessionProvider } from 'next-auth/react';

const store = configureAppStore();

// const theme = createTheme({
//   /** Put your mantine theme override here */
//   primaryColor: 'back'
// });

export default function ClientOnlyProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <SessionProvider>
        <Provider store={store}>
          <MantineProvider defaultColorScheme="dark">
            {children}
          </MantineProvider>
        </Provider>
      </SessionProvider>
    </React.StrictMode>
  );
}
