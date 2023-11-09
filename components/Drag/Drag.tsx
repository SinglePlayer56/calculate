import {DragProps} from "@/components/Drag/Drag.props";
import {useDrag} from "react-dnd";
import styles from './Drag.module.css';
import cn from "classnames";

export const Drag = ({children, isMoved, id, endHandler, className, ...props}: DragProps) => {
    const [{isDrag}, drag] = useDrag(() => ({
        type: 'dragCard',
        item: {id},
        canDrag: () => isMoved,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult) {
                endHandler();
            }
        },
        collect: (monitor) => ({
            isDrag: monitor.isDragging()
        })
    }), [isMoved]);



    return (
        <div {...props}
             ref={drag}
             className={cn(styles.dragElement, {
                 [styles.isDrag]: isDrag,
                 [styles.notActive]: !isMoved
             })}
        >
            {children}
        </div>
    )
}
