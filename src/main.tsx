import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Homepage } from './page/Homepage.tsx';
/*import { Navbar } from './navbar/Navbar.tsx';*/
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = createTheme({});
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
 /* {
    path: '/',
    element: <Navbar />,
  },*/
   {
    path: '/hello',
    element: <div>Hello Another page</div>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
)
