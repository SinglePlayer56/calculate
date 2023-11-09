import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {ConstructorItem} from "@/store/slices/constructor.slices";

export interface DragProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    id: string,
    isMoved: boolean,
    endHandler: () => void,
    index: number,
    moveItem: (dragIndex: number, hoverIndex: number) => void
}
