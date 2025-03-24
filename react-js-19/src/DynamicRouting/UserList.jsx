import { Link } from "react-router";

const UserList = () => {
    const list = [
        { id: 'b-25771', name: 'Muhammad Ali Khalil' },
        { id: 'b-24894', name: 'Muhammad Asad' },
        { id: 'b-25742', name: 'Asadullah' },
        { id: 'b-25788', name: 'Saweed Aslam' }
    ]

    return (
        <div>
            <ul>
                {
                    list.map((item) => (
                        <li key={item.id}>{item.id} <br /> <Link to={`/user-list/${item.id}/${item.name}`} style={{ textDecoration: 'underline', color: 'blue' }}>{item.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default UserList