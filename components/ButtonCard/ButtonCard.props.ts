import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ButtonCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}
