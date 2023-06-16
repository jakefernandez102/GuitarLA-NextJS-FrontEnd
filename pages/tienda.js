import Layout from '@/components/layout';

import Guitarra from '../components/guitarra';
import styles from '../styles/grid.module.css';

export async function getStaticProps(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const {data: guitarras} = await respuesta.json()

    // console.log(guitarras)
    return {
        props:{
            guitarras
        }
    }
}
// export async function getServerSideProps(){
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//     const {data: guitarras} = await respuesta.json()

//     // console.log(guitarras)
//     return {
//         props:{
//             guitarras
//         }
//     }
// }


function Tienda ({guitarras}) {

    // console.log(guitarras)


    return (
        <Layout
            title={ 'Tienda' }
            description='Tienda de guitarras, Tienda virtual, guitarLA, musica y blog'
        >
            <main>
                <h1 className="heading">Nuestra coleccion</h1>

                <div className={styles.grid}>
                    {guitarras.map(guitarra =>{
                        return(
                            <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                            />
                            )
                    })}
                </div>


            </main>

        </Layout>
    );
}

export default Tienda;
