import {FC, Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Loader from '../Loader';

interface IProps{
  children:JSX.Element
}

const Layout:FC<IProps> = ({children}) => {
  return (
    <>
    <Suspense fallback={<Loader />}>
     <HelmetProvider>
       {children}
      </HelmetProvider>
    <Outlet />
    </Suspense>
    </>
  )
}

export default Layout