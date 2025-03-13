import Divider from './Divider';
import UserA from '../public/UserA.jpg';
import UserB from '../public/UserB.jpg';

function UserCard() {
    const userdata = [
        {
            image: UserA,
            name: "Jack Smith",
            designation: "Website Developer"
        },
        {
            image: UserB,
            name: "John Mandley",
            designation: "Mobile Application Developer"
        }
    ]

    const containerstyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px'
    }

    const cardstyle = {
        width: '25%',
        boxSizing: 'border-box',
        boxShadow: '1px 1px 5px #c5c5c5'
    }

    const contentstyle = {
        paddingLeft: '10px',
        paddingBottom: '5px'
    }

    return (
        <>
            <Cards users={userdata} container={containerstyle} card={cardstyle} content={contentstyle} />
            <Divider />
        </>
    );
}

function Cards(props) {
    const { users, container, card, content } = props;
    
    return (
        <>
            <div style={container}>
                {
                    users.map((value, index) => (
                        <div key={index} style={card}>
                            <img src={value.image} alt="Profile" width="100%" />
                            <div style={content}>
                                <h3>{value.name}</h3>
                                <p>{value.designation}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default UserCard;