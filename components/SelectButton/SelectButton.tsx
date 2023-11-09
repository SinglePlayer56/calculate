import {ButtonIcon, SelectButtonProps} from "@/components/SelectButton/SelectButton.props";
import cn from "classnames";
import styles from './SelectButton.module.css';
import {motion} from 'framer-motion';

export const SelectButton = ({icon, text, selected, className, ...props}: SelectButtonProps): JSX.Element => {
    const IconButton = ButtonIcon[icon];
    const {onAnimationStart, onDragStart, onDragEnd, onDrag, ref, ...updateProps} = props;

    const variants = {
        select: {backgroundColor: '#FFFFFF', transition:{duration:0.3}},
        unselect: {backgroundColor: '#F3F4F6', transition:{duration:0.3}}
    }

    return (
        <motion.button
            variants={variants}
            animate={selected ? 'select' : 'unselect'}
            initial={{backgroundColor:'#F3F4F6'}}
            className={cn(styles.button, className, {
                [styles.selected]: selected
            })}
            {...updateProps}
        >
            <IconButton/>
            {text}
        </motion.button>
    )
}
