import React, { useEffect } from 'react';

/**
 *
 */
export default function App() {
    if (window.location.host.includes('shopee')) {
        // react-hooks/rules-of-hooks
        useEffect(function persistHost() {
            localStorage.setItem('host', window.location.host);
        });
    }
    return <div />;
}
