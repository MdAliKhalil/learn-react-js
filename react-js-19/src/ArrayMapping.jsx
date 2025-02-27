import Divider from "./Divider";

function ArrayMapping() {
    const userdata = [
        {
            id: "b-25771",
            name: "Muhammad Ali Khalil",
            department: "Computer Science",
        },
        {
            id: "b-24981",
            name: "Muhammad Asad",
            department: "Computer Science",
        },
        {
            id: "b-25788",
            name: "Saweed Aslam",
            department: "Computer Science",
        },
        {
            id: "b-24894",
            name: "Mudassir Ahmad",
            department: "Computer Science",
        },
        {
            id: "b-25484",
            name: "Muhammad Bilal",
            department: "Computer Science",
        },
        {
            id: "b-25742",
            name: "Asadullah",
            department: "Computer Science",
        }
    ]

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Department</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userdata.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.department}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Divider />
        </div>
    );
}

export default ArrayMapping;