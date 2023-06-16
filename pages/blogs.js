import Blog from '@/components/blog';
import Layout from '@/components/layout';

import styles from '../styles/grid.module.css';

function Blogs ( { blogs } ) {
    // console.log( blogs );
    return (
        <Layout
            title={ 'Blog' }
            description='venta de guitarras,Blog de musica, guitarLA, musica y blog'
        >
            <h1 className='heading'>Blog</h1>
            <main className={ `contenedor ${ styles.grid }` }>
                { blogs.map( blog => (
                    <Blog
                        key={ blog.id }
                        blog={ blog }
                    />
                ) ) }
            </main>

        </Layout>
    );
}

export default Blogs;

export async function getStaticProps () {
    const respuesta = await fetch( `${ process.env.API_URL }/blogs?populate=imagen` );
    const { data: blogs } = await respuesta.json();
    // console.log( blogs );
    // console.log(guitarras)
    return {
        props: {
            blogs
        }
    };
}