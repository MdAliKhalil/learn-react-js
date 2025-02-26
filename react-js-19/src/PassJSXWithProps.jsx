import Divider from "./Divider";
import SlideA from '../public/SlideA.jpg';

function PassJSXWithProps() {
    return (
        <div>
            <JSXAsProps col="black">
                <img src={SlideA} alt="" style={{ width: '25%' }} />
            </JSXAsProps>
            <Divider />
        </div>
    );
}

function JSXAsProps({ children, col = "green" }) {
    return (
        <div>
            <h1 style={{ color: col }}>A Wondorful Car</h1>
            {children}
        </div>
    );
}

export default PassJSXWithProps;