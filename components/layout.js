import Head from 'next/head';

import Footer from '../components/footer';
import Header from '../components/header';

function Layout ( { children, title = '', description = '' } ) {
    return (
        <>
            <Head>
                <title>{ `GuitarLA - ${ title }` }</title>
                <meta name='description' content={ description } />
            </Head>
            <Header />

            { children }
            <Footer />
        </>
    );
}

export default Layout;
