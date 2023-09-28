import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
    title: "Promptopia",
    description: "Discover & share AI prompts"
}

const layout = ({children}) => {
    return (
        <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main>
                {children}
            </main>
        </body>

    </html>
  )
}

export default layout