import { formatearFecha } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/blog.module.css';

export default function Blog ( { blog } ) {
    console.log( blog );

    const { contenido, imagen, titulo, url, publishedAt } = blog.attributes;
    console.log( imagen.data[ 0 ].attributes.formats.medium.url );
    return (
        <article className={ `contenedor ${ styles[ 'post-grid' ] }` }>
            <div className='post'>

                <Image className='imagen' src={ imagen.data[ 0 ].attributes.formats.medium.url } alt={ `Imagen blog ${ titulo }` } width={ 600 } height={ 400 } />

                <div className={ styles.contenido }>
                    <h3>{ titulo }</h3>
                    <p className={ styles.fecha }>{ formatearFecha( publishedAt ) }</p>
                    <p className={ styles.resumen }>{ contenido }</p>
                    <Link href={ `/blogs/${ url }` } legacyBehavior>
                        <a className={ styles.enlace }>
                            Leer Post
                        </a>
                    </Link>
                </div>

            </div>
        </article>
    );
}
