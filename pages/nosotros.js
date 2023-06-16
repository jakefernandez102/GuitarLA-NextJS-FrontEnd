import Layout from '@/components/layout';
import Image from 'next/image';

import styles from '../styles/nosotros.module.css';

function Nosotros () {
    return (
        <Layout
            title={ 'Nosotros' }
            description='venta de guitarras, acerca de nosotros, guitarLA, musica y blog'
        >
            <main className='contenedor'>
                <h1 className='heading'>
                    Nosotros
                </h1>


                <div className={ styles.contenido }>

                    <Image className={ styles.img } alt='Imagen sobre nosotros' src='/img/nosotros.jpg' width={ 1000 } height={ 800 } />

                    <div>
                        <p className={ styles.texto }>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue et lacus et consectetur. Phasellus rutrum lacus at dui consectetur, id maximus risus molestie. Sed sed lorem quis eros porta elementum eget et neque. Proin et tortor tempus, accumsan ex ut, vulputate felis. Nulla vel urna condimentum, maximus quam vel, vehicula nisl.
                        </p>
                        <p className={ styles.texto }>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue et lacus et consectetur. Phasellus rutrum lacus at dui consectetur, id maximus risus molestie. Sed sed lorem quis eros porta elementum eget et neque. Proin et tortor tempus, accumsan ex ut, vulputate felis. Nulla vel urna condimentum, maximus quam vel, vehicula nisl.
                        </p>
                    </div>
                </div>
            </main>

        </Layout>
    );
}

export default Nosotros;
