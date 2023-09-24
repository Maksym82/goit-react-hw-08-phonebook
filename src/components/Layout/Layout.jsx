import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
    return (
        <>
            <AppBar />
            <Main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    );
};