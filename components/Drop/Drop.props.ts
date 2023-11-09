import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface DragProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}
