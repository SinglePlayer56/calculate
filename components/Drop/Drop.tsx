import {DragProps} from "@/components/Drag/Drag.props";
import {useDrag} from "react-dnd";

export const Drag = ({children, className, ...props}: DragProps) => {
    const [{isDrag}, drag] = useDrag(() => ({
        type: 'dragCard',
        item: {children},
        collect: (monitor) => ({
            isDrag: monitor.isDragging()
        })
    }), []);

    return (
        <div {...props} ref={drag} style={{opacity: isDrag ? '0.5' : '1', position: 'relative', zIndex: 5}}>
            {children}
        </div>
    )
}
