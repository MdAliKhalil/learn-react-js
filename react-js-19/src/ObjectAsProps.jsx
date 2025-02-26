import Divider from './Divider'

function ObjectAsProps() {
    const obj = {
        FirstName: 'Ali',
        LastName: 'Khalil',
        Age: '24',
        Religion: 'Islam',
        Nationality: 'Pakistani'
    }

    return (
        <div>
            <PropsFunction object={obj} />
            <Divider />
        </div>
    );
}

function PropsFunction({ object }) {
    return (
        <div>
            <ul style={{ display: 'flex', gap: '50px' }}>
                <li>{object.FirstName}</li>
                <li>{object.LastName}</li>
                <li>{object.Age}</li>
                <li>{object.Religion}</li>
                <li>{object.Nationality}</li>
            </ul>
        </div>
    );
}

export default ObjectAsProps;