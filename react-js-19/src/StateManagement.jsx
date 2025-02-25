import React, { useState } from 'react';
import Divider from './Divider';
import style from './StateManagement.module.css';
import CarA from '../public/CarA.jpg';
import CarB from '../public/CarB.jpg';

function StateManagement() {
    const [image, setImage] = useState(CarA);
    const [button, setButton] = useState('Next Image');

    const handleImageChange = () => {
        if (button === 'Next Image') {
            setImage(CarB);
            setButton('Previous Image');
        }
        else {
            setImage(CarA);
            setButton('Next Image');
        }
    }

    return (
        <div>
            <img src={image} alt='Car Wallpaper' className={style.image} />
            <br />
            <button className={style.btn} onClick={handleImageChange}>{button}</button>
            <Divider />
        </div>
    );
}

export default StateManagement;