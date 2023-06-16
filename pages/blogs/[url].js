import Layout from '@/components/layout';
import { formatearFecha } from '@/utils/helpers';
import Image from 'next/image';

import styles from '../../styles/blog.module.css';

export default function Post ( { post } ) {

    const { titulo, contenido, imagen, publishedAt } = post[ 0 ].attributes;

    return (
        <Layout
            title={ titulo }
        >
            <article className={ `${ styles.post } ${ styles[ 'mt-3' ] }` }>
                <Image src={ imagen.data[ 0 ].attributes.url } alt={ `Imagen blog ${ titulo }` } width={ 1000 } height={ 400 } />

                <div className={ styles.contenido }>
                    <h3>{ titulo }</h3>
                    <p className={ styles.fecha }>{ formatearFecha( publishedAt ) }</p>
                    <p className={ styles.texto }>{ contenido }</p>
                </div>
            </article>
        </Layout>
    );
}


export async function getServerSideProps ( { query: { url } } ) {
    // console.log( url );
    const res = await fetch( `${ process.env.API_URL }/blogs/?filters[url]=${ url }&populate=imagen` );
    const { data: post } = await res.json();

    // console.log( data );

    return {
        props: {
            post
        }
    };
}