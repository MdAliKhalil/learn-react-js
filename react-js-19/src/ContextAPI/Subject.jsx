import { useContext } from "react";
import { data } from "./ContextData";

const Subject = () => {
    const useData = useContext(data);

    return (
        <div style={{ backgroundColor: 'skyblue', margin: '10px', padding: '3px' }}>
            <h1>Subject Component</h1>
            <h3>Subject: <span style={{ textDecoration: 'underline' }}>{useData}</span></h3>
        </div>
    );
}

export default Subject;