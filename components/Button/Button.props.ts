import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {OperatorTypes} from "@/store/slices/calculate.slice";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    buttonValue: number | string;
    color?: 'white' | 'blue';
}
