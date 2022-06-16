import React from 'react';
import { AppShell } from 'ui';

function App() {
  return (
    <div>
      <AppShell 
        title="Flatlander Farms plant directory" 
        colorScheme="dark"
        routes={[
          {
            path: '/',
            element: () => <h1>Is this really Home</h1>,
          },
          {
            path: '/plants',
            element: () => <h1>Plant Directory</h1>,
          },
        ]}
        navLinks={[
          {
            path: '/',
            label: 'Home',
          },
          {
            path: '/plants',
            label: 'Plants',
          },
        ]}
      />
    </div>
  );
}

export default App;
