import { useState } from "react";
import Divider from "./Divider";
import style from './UpdateObjectInState.module.css';

const UpdateObjectInState = () => {
    const [data, setData] = useState({
        name: 'Muhammad Ali Khalil',
        address: {
            country: 'Pakistan',
            city: 'Lahore',
            postalcode: '54000'
        }
    });

    const handleName = (updatedname) => {
        setData({ ...data, name: updatedname });
    }

    const handleCountry = (updatedcountry) => {
        setData({ ...data, address: { ...data.address, country: updatedcountry } });
    }

    const handleCity = (updatedcity) => {
        setData({ ...data, address: { ...data.address, city: updatedcity } });
    }

    const handlePostalCode = (updatedpostalcode) => {
        setData({ ...data, address: { ...data.address, postalcode: updatedpostalcode } });
    }

    const handleButton = () => {
        console.log(data);
    }

    return (
        <>
            <input type="text" name="" id="" placeholder="Enter your name" onChange={(event) => handleName(event.target.value)} className={style.inpt} />
            <button onClick={handleButton} className={style.btn}>Console Updated Name</button>
            <br /><br />
            <input type="text" name="" id="" placeholder="Enter your country" onChange={(event) => handleCountry(event.target.value)} className={style.inpt} />
            <button onClick={handleButton} className={style.btn}>Console Updated Country</button>
            <br /><br />
            <input type="text" name="" id="" placeholder="Enter your city" onChange={(event) => handleCity(event.target.value)} className={style.inpt} />
            <button onClick={handleButton} className={style.btn}>Console Updated City</button>
            <br /><br />
            <input type="text" name="" id="" placeholder="Enter your postal code" onChange={(event) => handlePostalCode(event.target.value)} className={style.inpt} />
            <button onClick={handleButton} className={style.btn}>Console Updated Postal Code</button>
            <Divider />
        </>
    );
}

export default UpdateObjectInState;