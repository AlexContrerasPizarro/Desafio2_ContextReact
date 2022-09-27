import React from 'react'
import { useContext } from 'react'
import '../assets/css/galeria.css'
import Context from '../Context'

export default function Home() {
    const { imagenes } = useContext(Context);

    return (
        <div className="Home">
            <h1 className="title"> Natural Pictures</h1>
            <div className="gallery contenedorFavoritos p-3">
                {imagenes.filter((e) => e.fav).map((e, i) => (
                    <div className="photo" style={{ backgroundImage: `url(${e.src})` }} key={i}>
                        <p className="galeriaCardItems">{e.desc}</p>
                    </div>
                ))}
            </div>

        </div>

    );
}