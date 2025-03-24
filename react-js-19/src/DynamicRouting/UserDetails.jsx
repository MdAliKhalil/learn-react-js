import { useParams } from "react-router";
import { Link } from "react-router";

const UserDetails = () => {
    const { id, name } = useParams();

    return (
        <div>
            <div style={{ marginTop: '20px', marginBottom: '20px', textDecoration: 'underline' }}>
                <Link to='/user-list'> Back</Link>
            </div>
            <table border="1" style={{ margin: 'auto' }}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserDetails