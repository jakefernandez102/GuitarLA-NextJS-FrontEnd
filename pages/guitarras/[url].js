import Image from 'next/image';
import { useState } from 'react';

import Layout from '../../components/layout';
import styles from '../../styles/guitarras.module.css';

export default function Producto ( { guitarra,agregarCarrito } ) {

    const [cantidad,setCantidad]=useState(0);

    const { nombre, descipcion, imagen, precio } = guitarra[ 0 ].attributes;
    

    const handleSubmit = (e)=>{
        e.preventDefault();
    
        if(cantidad < 1){
            alert('Cantidad no valida')
            return;
        }

        //Construir objeto con la guitarra seleccionada para almacenarla en el local storage
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data[ 0 ].attributes.url, 
            nombre,
            precio,
            cantidad
        }

        // console.log(guitarraSeleccionada)

        //Pasando la informacion al context
        agregarCarrito(guitarraSeleccionada)
    }

    return (
        <Layout
            title={ `Guitarra ${ nombre }` }
        >
            <div className={ styles.guitarra }>
                <Image src={ imagen.data[ 0 ].attributes.formats.medium.url } width={ 600 } height={ 400 } alt={ `Imagen Guitarra ${ nombre }` } />

                <div className={ styles.contenido }>
                    <h3>{ nombre }</h3>
                    <p className={ styles.descripcion }>{ descipcion }</p>
                    <p className={ styles.precio }>${ precio }</p>

                    <form
                        onSubmit={handleSubmit}
                        className={styles.formulario}>
                        <label htmlFor="cantidad">Contidad:</label>
                        <select
                            defaultValue={0}
                            onChange={e => setCantidad(+e.target.value)} 
                            id="cantidad">
                            <option value="0" disabled>-- Seleccionar --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input
                            type="submit"  
                            value='Agregar al carrito'/>
                    </form>

                </div>
            </div>
        </Layout>
    );
}

// export async function getServerSideProps ( { query: { url } } ) {



//     const respuesta = await fetch( `${ process.env.API_URL }/guitarras?filters[url]=${ url }&populate=imagen` );
//     const { data: guitarra } = await respuesta.json();

//     // console.log( data );

//     return {
//         props: {
//             guitarra
//         }
//     };
// }

export async function getStaticPaths () {
    const respuesta = await fetch( `${ process.env.API_URL }/guitarras` );
    const { data } = await respuesta.json();

    // console.log( data );

    const paths = data.map( guitarra => ( {
        params: {
            url: guitarra.attributes.url
        }
    } ) );
    console.log( paths );
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps ( { params: { url } } ) {

    const respuesta = await fetch( `${ process.env.API_URL }/guitarras?filters[url]=${ url }&populate=imagen` );
    const { data: guitarra } = await respuesta.json();

    // console.log( data );

    return {
        props: {
            guitarra
        }
    };
}
