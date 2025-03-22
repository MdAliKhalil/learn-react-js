import { Link } from "react-router";

const PageNotFound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div>
                <h1>Oops... Page not found</h1>
            </div>
            <div>
                <h3><Link to='/' style={{ textDecoration: 'underline' }}>Go to Homepage</Link></h3>
            </div>
        </div>
    );
}

export default PageNotFound