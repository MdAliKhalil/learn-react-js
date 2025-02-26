import React, { useState } from 'react';
import style from './ConditionalRenderingExercise.module.css'
import Divider from './Divider';
import SlideA from '../public/SlideA.jpg';
import SlideB from '../public/SlideB.jpg';
import SlideC from '../public/SlideC.jpg';

function ConditionalRenderingExercise() {
    const [slide, setSlide] = useState(null);

    const slideAHandler = () => {
        setSlide(0);
    }
    const slideBHandler = () => {
        setSlide(1);
    }
    const slideCHandler = () => {
        setSlide(2);
    }

    return (
        <div>
            {slide === 0 ? <img src={SlideA} alt="Slide A" className={style.slide} /> : slide === 1 ? <img src={SlideB} alt="Slide B" className={style.slide} /> : slide === 2 ? <img src={SlideC} alt="Slide C" className={style.slide} /> : null}
            <br />
            <button onClick={slideAHandler} className={style.btn}>Slide A</button>
            <button onClick={slideBHandler} className={style.btn}>Slide B</button>
            <button onClick={slideCHandler} className={style.btn}>Slide C</button>
            <Divider />
        </div>
    );
}

export default ConditionalRenderingExercise;