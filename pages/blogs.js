import Layout from '@/components/layout';

function Blogs ( { blogs } ) {
    // console.log( blogs );
    return (
        <Layout
            title={ 'Blog' }
            description='venta de guitarras,Blog de musica, guitarLA, musica y blog'
        >
            <main className='contenedor'>
                <h1 className='heading'>Blog</h1>

            </main>

        </Layout>
    );
}

export default Blogs;

export async function getStaticProps () {
    const respuesta = await fetch( `${ process.env.API_URL }/blogs?populate=imagen` );
    const { data: blogs } = await respuesta.json();

    // console.log(guitarras)
    return {
        props: {
            blogs
        }
    };
}