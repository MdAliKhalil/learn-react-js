import { useState } from "react";
import Divider from "./Divider";
import style from './UpdateArrayInState.module.css';

const UpdateArrayInState = () => {
    const [data, setData] = useState(['Ali', 'Asad', 'Asadullah', 'Saweed', 'Bilal', 'Mudassir']);

    const [details, setDetails] = useState([
        { id: 'b-25771', name: 'Muhammad Ali Khalil' },
        { id: 'b-24894', name: 'Muhammad Asad' }
    ]);

    const handleChange = (name) => {
        data[data.length - 1] = name;
        setData([...data]);
    }

    const handleID = (id) => {
        details[details.length - 1].id = id;
        setDetails([...details]);
    }

    const handleName = (name) => {
        details[details.length - 1].name = name;
        setDetails([...details]);
    }

    return (
        <>
            <input type="text" name="candidate" placeholder="Enter your name" onChange={(event) => handleChange(event.target.value)} className={style.inpt} />
            <ul>
                {
                    data.map((userdata, index) => (
                        <li key={index}>{userdata}</li>
                    ))
                }
            </ul>
            <input type="text" name="rollno" placeholder="Enter roll number" onChange={(event) => handleID(event.target.value)} className={style.inpt} />
            <br />
            <input type="text" name="name" placeholder="Enter your name" onChange={(event) => handleName(event.target.value)} className={style.inpt} />
            {
                details.map((item, index) => (
                    <ul key={index}>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                    </ul>
                ))
            }
            <Divider />
        </>
    );
}

export default UpdateArrayInState;