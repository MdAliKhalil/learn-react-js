import React from 'react';
import style from './JSX Exercise.module.css';
import Camera from '../public/Camera.jpg';
import Divider from './Divider';

function JSXExercise() {
    return (
        <div className={style.container}>
            <h1>Experience a colorful world</h1>
            <img src={Camera} alt="Amoled Camera Wallpaper" className={style.image}></img>
            <ul>
                <li>Shots</li>
                <li>Daily Vlogging</li>
                <li>Photograhy</li>
            </ul>
            <button className={style.btn} onClick={() => {
                alert('A world of photography is waiting for you!');
            }}>Experience Now</button>
            <Divider />
        </div>
    );
}

export default JSXExercise;