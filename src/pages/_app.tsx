import '@/assets/styles/entry.scss';
import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';

const theme = {
    token: {
        colorPrimary: 'red',
    },
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ConfigProvider theme={theme}>
            {/* eslint-disable-next-line */}
            <Component {...pageProps} />
        </ConfigProvider>
    );
};

export default App;
