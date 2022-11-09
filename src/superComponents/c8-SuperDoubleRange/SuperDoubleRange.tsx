import React from 'react'
import s from './SuperDoubleRange.module.css'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
    }
) => {
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue as number[]);
    };
    return (
        <div className={s.doubleRange}>
            <Slider
                value={value}
                onChange={handleChange}
                disableSwap
            />
        </div>
    )
}

export default SuperDoubleRange
