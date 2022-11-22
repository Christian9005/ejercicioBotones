
import { useEffect, useState } from "react";

const EjercicioColoresBotones = () => {
    const [color, setColor] = useState("blue");

    const handlerfun = (colorH) => {
        setColor(colorH);
    }

    return (
        <>
            <h1>Color: {color}</h1>
            <Botones colorP={color} handler={handlerfun} />
            <Cuadrado colorC={color} />
            <Circulo colorC={color} />
        </>
    );
}

const Botones = (props) => {

    const [color, setColor] = useState(props.colorP);
    const [listaBt, setListaBt] = useState([]);
    const [btAgregar, setBtAgregar] = useState({});
    const [name, setName] = useState("");
    const [btColor, setBtColor] = useState("");

    return (
        <>
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}></input>

            <input type="color"
                value={btColor}
                onChange={(event) => setBtColor(event.target.value)}></input>

            <button onClick={() => {
                setBtAgregar({ nombre: name, color: btColor }),
                listaBt.push({ nombre: name, color: btColor })
            }}>Crear Boton</button>

            <div>
                {listaBt.map((item) => {
                    return <button key={item.color} onClick={() => { setColor(item.color), props.handler(item.color) }}>{item.nombre}</button>
                })}
            </div>
        </>
    );
}

const Cuadrado = (props) => {
    const [color, setColor] = useState(props.colorC);

    useEffect(
        () => setColor(props.colorC)
    );
    return (
        <>
            <div style={{ backgroundColor: color, width: '100px', height: '100px' }} />
        </>
    )
}

const Circulo = (props) => {
    const [color, setColor] = useState(props.colorC);

    useEffect(
        () => setColor(props.colorC)
    );
    return (
        <>
            <div style={{ backgroundColor: color, width: '100px', height: '100px', borderRadius: '50%' }} />
        </>
    )
}

export default EjercicioColoresBotones;
