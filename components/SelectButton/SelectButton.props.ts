import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import EyeIcon from './eye.svg';
import SelectorIcon from './selector.svg';

export const ButtonIcon = {
    eye: EyeIcon,
    selector: SelectorIcon
}

type IconName = keyof typeof ButtonIcon

export interface SelectButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    text: string;
    selected: boolean;
}
