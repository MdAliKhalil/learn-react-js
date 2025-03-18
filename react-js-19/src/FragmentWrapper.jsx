import { Fragment } from "react";
import Divider from "./Divider";

const Data = () => {
    return (
        <Fragment>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi. Sit voluptatibus labore aperiam doloribus officiis sint corrupti error laborum omnis ducimus? Perferendis reiciendis in nobis consequatur enim necessitatibus numquam.</p>
        </Fragment>
    );
}

const FragmentWrapper = () => {
    return (
        <>
            <Data />
            <Data />
            <Divider />
        </>
    );
}

export default FragmentWrapper;