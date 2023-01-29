import { FunctionComponent } from "react";

const RadioInput: FunctionComponent = () => {
    return (
        <div>
            <div>
                <input type="radio" name="radio" value="man"/>
                <label>man</label>
            </div>
            <div>
                <input type="radio" name="radio" value="woman"/>
                <label>woman</label>
            </div>
            <div>
                <input type="radio" name="radio" value="nothing"/>
                <label>nothing</label>
            </div>
        </div>
    );
};

export default RadioInput;
