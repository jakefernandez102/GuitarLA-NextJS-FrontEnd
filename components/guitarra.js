import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/guitarras.module.css';

export default function Guitarra ( { guitarra } ) {

    const {nombre, descipcion, imagen, precio,url} = guitarra;
    // console.log(imagen.data[0].attributes.formats.medium.url)
    return (
        <div className={styles.guitarra}>
            <Image src={imagen.data[0].attributes.formats.medium.url} width={600} height={400} alt={`Imagen Guitarra ${nombre}`} />

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descipcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`} legacyBehavior>
                    <a className={styles.enlace} >
                        Ver Producto
                    </a>
                </Link>
            </div>
        </div>
    );
}
