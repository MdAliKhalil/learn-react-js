import { useState } from "react";
import Divider from "./Divider";

function CheckBoxes() {
    // const [state, setState] = useState({
    //     web: false,
    //     mobile: false,
    //     desktop: false,
    //     digital: false,
    //     uiux: false,
    // })

    // const handleChange = (event) => {
    //     const { name, checked, value } = event.target; // Get name and checked state
    //     setState({ ...state, [name]: value ? value : checked }); // Update state correctly
    //     console.log(`Error! ${event.target}`)
    // };

    const [web, setWeb] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [desktop, setDesktop] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [uiux, setUIUX] = useState(false);

    // web ? console.log("Web checked") : mobile ? console.log("Mobile checked") : desktop ? console.log("Desktop checked") : marketing ? console.log("Marketing checked") : uiux ? console.log("UIUX checked") : "";
    const res = web ? "Web checked" : mobile ? "Mobile checked" : desktop ? "Desktop checked" : marketing ? "Marketing checked" : uiux ? "UIUX checked" : "";
    console.log(res);

    // const changeHandler = (event) => {
    //     const id = event.target.id;
    //     const chk = event.target.checked;
    //     if (id === "web") {
    //         setWeb(chk);
    //     } else if (id === "mobile") {
    //         setMobile(chk);
    //     } else if (id === "desktop") {
    //         setDesktop(chk);
    //     } else if (id === "marketing") {
    //         setMarketing(chk);
    //     } else if (id === "uiux") {
    //         setUIUX(chk);
    //     } else {
    //     }
    // }

    // console.log("String Web: ", web);
    // console.log("String Mobile: ", mobile);
    // console.log("String Desktop: ", desktop);
    // console.log("String Marketing: ", marketing);
    // console.log("String UIUX: ", uiux);

    return (
        <div>
            <h1>Select Your Desired Skills</h1>
            <input type="checkbox" name="web" id="web" checked={web} onChange={(event) => setWeb(event.target.checked)} />
            <label htmlFor="web">Website Development</label>
            <br />
            <input type="checkbox" name="mobile" id="mobile" checked={mobile} onChange={(event) => setMobile(event.target.checked)} />
            <label htmlFor="mobile">Mobile Application Development</label>
            <br />
            <input type="checkbox" name="desktop" id="desktop" checked={desktop} onChange={(event) => setDesktop(event.target.checked)} />
            <label htmlFor="desktop">Desktop Application Development</label>
            <br />
            <input type="checkbox" name="digital" id="marketing" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} />
            <label htmlFor="marketing">Digital Marketing</label>
            <br />
            <input type="checkbox" name="uiux" id="uiux" checked={uiux} onChange={(event) => setUIUX(event.target.checked)} />
            <label htmlFor="uiux">UI/UX Designing</label>
            <Divider />
        </div>
    );
}

export default CheckBoxes;