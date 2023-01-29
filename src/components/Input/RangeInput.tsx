import { FunctionComponent } from "react";

const RangeInput: FunctionComponent = () => {
    return (
        <div>
            <input type="range"/>
            <label>범위 선택</label>
        </div>
    );
};

export default RangeInput;
