import React from 'react'
import Heart from "./Heart"
import { useContext } from "react"
import "../assets/css/galeria.css"
import Context from "../Context"

export default function Galeria() {
    const { imagenes, setImagenes } = useContext(Context);

    const Favoritos = (id) => {
        const indexImg = imagenes.findIndex((e) => e.id === id);
        imagenes[indexImg].fav = !imagenes[indexImg].fav;
        setImagenes([...imagenes]);

    };

    return (
        <div className="gallery contenedorGaleria p-3">
            {imagenes.map((e, i) => (
                <div onClick={() => Favoritos(e.id)} className="photo" style={{ backgroundImage: `url(${e.src})` }} key={i}>
                    <Heart selected={e.fav} />
                    <p className="galeriaCardItems">{e.desc}</p>
                </div>
            ))}
        </div>
    )
}

