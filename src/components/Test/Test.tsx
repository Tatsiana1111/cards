import React, {ChangeEvent} from 'react';
import SuperInputText from "../../superComponents/c1-SuperInputText/SuperInputText";
import SuperButton from "../../superComponents/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../superComponents/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../superComponents/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../../superComponents/c5-SuperSelect/SuperSelect";
import SuperRadio from "../../superComponents/c6-SuperRadio/SuperRadio";
import SuperRange from "../../superComponents/c7-SuperRange/SuperRange";
import SuperDoubleRange from "../../superComponents/c8-SuperDoubleRange/SuperDoubleRange";

const Test = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton>Button</SuperButton>
            <SuperCheckbox/>
            <SuperEditableSpan value={'Editable span'}/>
            <SuperSelect options={[1, 2, 3]}/>
            <SuperRadio/>
            <SuperRange/>
            <SuperDoubleRange value={[10, 20]} onChangeRange={() => {
            }}/>
        </div>
    );
};

export default Test;