import Divider from "./Divider";

function DefaultProps() {
    return (
        <div>
            <PropsFunction name="Muhammad Ali Khalil" />
            <PropsFunction />
            <Divider />
        </div>
    );
}

function PropsFunction({ name = "User" }) {
    return (
        <div>
            <b>Good Evening,</b>&nbsp;<p style={{ display: 'inline' }}>{name}</p>
        </div>
    );
}

export default DefaultProps;