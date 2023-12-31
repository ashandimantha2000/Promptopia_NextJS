import '@styles/globals.css';
import { Children } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Promptopia",
    description: "Discover & share AI prompts"
}

const RootLayout = ({children}) => {
    return (
        <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main>
                <Nav />
                {children}
            </main>
        </body>

    </html>
  )
}

export default RootLayout