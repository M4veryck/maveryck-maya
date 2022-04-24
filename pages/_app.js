import { useEffect } from 'react'

import '../styles/globals.scss'
import { NavBarContextProvider } from '../components/navBarContext'

function MyApp({ Component, pageProps }) {
    // Thanks to https://dev.to/josedonato/adding-a-service-worker-into-your-next-js-application-1dib
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/serviceWorker.js').then(
                function (registration) {
                    console.log(
                        'Service Worker registration successful with scope: ',
                        registration.scope
                    )
                },
                function (err) {
                    console.log('Service Worker registration failed: ', err)
                }
            )
        }
    }, [])
    return (
        <NavBarContextProvider>
            <Component {...pageProps} />
        </NavBarContextProvider>
    )
}

export default MyApp
