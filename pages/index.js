/* eslint-disable @next/next/no-typos */
import Blog from '@/components/blog';
import Curso from '@/components/curso';
import Guitarra from '@/components/guitarra';

import Layout from '../components/layout';
import styles from '../styles/grid.module.css';

export default function Home ( { guitarras, posts, curso } ) {

  console.log( posts );


  return (
    <>
      <Layout
        title={ 'Inicio' }
        description={ 'Blog de musica, venta de guitarras y mas' }
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Coleccion</h1>
          <div className={ styles.grid }>
            { guitarras.map( guitarra => {
              return (
                <Guitarra
                  key={ guitarra.id }
                  guitarra={ guitarra.attributes }
                />
              );
            } ) }
          </div>
        </main>

        <Curso
          curso={ curso }
        />

        <section className='contenedor'>
          <h2 className="heading">
            Blog
          </h2>

          <div className={ styles.grid }>
            { posts.map( blog => (
              <Blog
                key={ blog.id }
                blog={ blog }
              />
            ) ) }
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps () {
  const urlGuitarras = `${ process.env.API_URL }/guitarras?populate=imagen`;
  const urlPost = `${ process.env.API_URL }/blogs?populate=imagen`;
  const urlCurso = `${ process.env.API_URL }/curso?populate=imagen`;

  const [ resGuitarras, resPosts, resCurso ] = await Promise.all( [
    fetch( urlGuitarras ),
    fetch( urlPost ),
    fetch( urlCurso )
  ] );

  const [ { data: guitarras }, { data: posts }, { data: curso } ] = await Promise.all( [
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ] );
  // console.log(guitarras)
  return {
    props: {
      guitarras,
      posts,
      curso
    }
  };

}