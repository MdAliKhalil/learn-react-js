import Divider from "./Divider";

function SpreadOperator() {
    const array1 = [10, 20, 30, 40, 50];
    const array2 = [60, 70, 80, 90, 100];
    const newarray = [...array1, ...array2, 110, 120, 130, 140, 150];

    const obj1 = {
        id: "b-25771",
        name: "Muhammad Ali Khalil",
        department: "Computer Science"
    }

    const obj2 = {
        religion: "Islam",
        nationality: "Pakistani"
    }

    const newobj = { ...obj1, ...obj2, martialstatus: "Single" }

    return (
        <div>
            <p>{newarray}</p>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Department</td>
                        <td>Religion</td>
                        <td>Nationality</td>
                        <td>Martial Status</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{newobj.id}</td>
                        <td>{newobj.name}</td>
                        <td>{newobj.department}</td>
                        <td>{newobj.religion}</td>
                        <td>{newobj.nationality}</td>
                        <td>{newobj.martialstatus}</td>
                    </tr>
                </tbody>
            </table>
            <Divider />
        </div>
    );
}

export default SpreadOperator;