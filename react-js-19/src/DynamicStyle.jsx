import Divider from "./Divider";
import UserA from '../public/UserA.jpg';
import UserB from '../public/UserB.jpg';
import style from './DynamicStyle.module.css';
import { useState } from "react";

const DynamicStyle = () => {
    const [cardstyle, setCardStyle] = useState(
        {
            width: '25%',
            border: '1px solid #c5c5c5',
            boxSizing: 'border-box',
            boxShadow: '1px 1px 5px #c5c5c5'
        }
    );

    const [label, setLabel] = useState('Grid Layout');

    const [layout, setLayout] = useState(
        {
            display: 'flex',
            gap: '10px'
        }
    );

    const userdata = [
        {
            image: UserA,
            name: "Jack Smith",
            designation: "Website Developer"
        },
        {
            image: UserB,
            name: "John Mandley",
            designation: "Mobile Application Developer"
        }
    ]

    const variantAHandler = () => {
        setCardStyle({ ...cardstyle, backgroundColor: 'green', color: 'white', border: '1px solid green', boxShadow: 'none' });
    }

    const variantBHandler = () => {
        setCardStyle({ ...cardstyle, backgroundColor: 'blue', color: 'white', border: '1px solid blue', boxShadow: 'none' });
    }

    const resetHandler = () => {
        setCardStyle({ ...cardstyle, backgroundColor: 'white', color: 'black', border: '1px solid #c5c5c5', boxShadow: '1px 1px 5px #c5c5c5' });
    }

    const layoutHandler = () => {
        if (label === "Grid Layout") {
            setLayout({ ...layout, display: 'grid' });
            setLabel('Flex Layout');
        }
        if (label === "Flex Layout") {
            setLayout({ ...layout, display: 'flex' });
            setLabel('Grid Layout');
        }
    }

    return (
        <>
            <div>
                <button onClick={variantAHandler} className={style.btn}>Variant 1</button>
                <button onClick={variantBHandler} className={style.btn}>Variant 2</button>
                <button onClick={resetHandler} className={style.btn}>Reset</button>
                <button onClick={layoutHandler} className={style.btn}>{label}</button>
            </div>
            <div style={layout}>
                {
                    userdata.map((value, index) => (
                        <div key={index} style={cardstyle}>
                            <img src={value.image} alt="Profile" width="100%" />
                            <div className={style.contentstyle}>
                                <h3>{value.name}</h3>
                                <p>{value.designation}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Divider />
        </>
    );
}

export default DynamicStyle;