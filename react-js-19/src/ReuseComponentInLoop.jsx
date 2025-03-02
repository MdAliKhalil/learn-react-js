import Divider from './Divider';

function ReuseComponentInLoop() {
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

    const User = ({ user }) => {
        return (
            <div style={{ border: "1px solid green", borderRadius: "10px", marginBottom: "10px", padding: "10px", width: "400px" }}>
                <h3>ID: {user.id}</h3>
                <h3>Name: {user.name}</h3>
                <h3>Department: {user.department}</h3>
            </div>
        );
    }

    return (
        <div>
            {userdata.map((data) => (
                <div key={data.id}>
                    <User user={data} />
                </div>
            ))}
            <Divider />
        </div>
    );
}

export default ReuseComponentInLoop;