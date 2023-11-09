import {useDrop} from "react-dnd";
import {DropProps} from "@/components/Drop/Drop.props";

export const Drop = ({children, className, ...props}: DropProps) => {
    const [{canDrop, isOver}, drop] = useDrop(() => ({
        accept: 'dragCard',
        hover: (item, monitor) => {

        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }), []);
    return (
        <div {...props}
             ref={drop}
             className={className}
             style={{backgroundColor: canDrop ? '#F0F9FF' : 'white'}}
        >
            {children}
        </div>
    )
}
