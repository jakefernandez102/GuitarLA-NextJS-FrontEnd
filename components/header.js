import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/header.module.css';

export default function Header () {

    const router = useRouter();
    // console.log( router );



    return (
        <header className={ styles.header }>
            <div className={ `contenedor ${ styles.barra }` }>
                <Link legacyBehavior href={ '/' }>
                    <a>
                        <Image src="/img/logo.svg" width={ 300 } height={ 40 } alt='Imagen logo GuitarLA' />
                    </a>
                </Link>

                <nav className={ styles.navegacion }>

                    <Link className={ router.pathname === '/' ? styles.active : '' } href="/">
                        Inicio
                    </Link>
                    <Link className={ router.pathname === '/nosotros' ? styles.active : '' } href="/nosotros">
                        Nosotros
                    </Link>
                    <Link className={ router.pathname === '/tienda' ? styles.active : '' } href="/tienda">
                        Tienda
                    </Link>
                    <Link className={ router.pathname === '/blogs' ? styles.active : '' } href="/blogs">
                        Blog
                    </Link>

                    <Link href={ '/carrito' }>
                        <Image src='/img/carrito.png' alt='Imagen carrito' width={ 30 } height={ 25 } ></Image>
                    </Link>
                </nav>

            </div>
        </header>
    );
}
