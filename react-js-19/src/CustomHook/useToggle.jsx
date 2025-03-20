import { useState } from "react";

const useToggle = (defValue) => {
    const [value, setValue] = useState(defValue);

    const toggleValue = (val) => {
        if (typeof val !== 'boolean') {
            setValue(!value);
        }
        else {
            setValue(val);
        }
    }
    return [value, toggleValue];
}

export default useToggle;