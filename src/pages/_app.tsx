import '@/assets/styles/entry.scss';
import React from 'react';

type Props = {
    Component: typeof React.Component,
    pageProps: any,
};

export default function App({ Component, pageProps }: Props) {
    return (
        <>
            <main style={{ color: 'var(--color-main)' }}>dsf</main>
            {/* eslint-disable-next-line */}
            <Component {...pageProps} />
        </>
    );
}
