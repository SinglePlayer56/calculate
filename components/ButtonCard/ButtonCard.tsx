import {ButtonCardProps} from "@/components/ButtonCard/ButtonCard.props";
import styles from './ButtonCard.module.css';
import cn from "classnames";

export const ButtonCard = ({children, className, ...props}: ButtonCardProps): JSX.Element => {
    return (
        <div
            className={cn(styles.cardsWrapper, className)}
            {...props}
        >
            {children}
        </div>
    )
}
