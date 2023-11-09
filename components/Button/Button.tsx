import {ButtonProps} from "@/components/Button/Button.props";
import styles from './Button.module.css';
import cn from 'classnames';
import {useAppSelector} from "@/custom-hooks/redux.hooks";

export const Button = ({buttonValue, color = 'white', className, ...props }: ButtonProps): JSX.Element => {
    const isConstructorMode = useAppSelector((state) => state.constructorCalculate.constructorMode);

    return  (
        <button className={cn(styles.button, className, {
            [styles.white]: color === 'white',
            [styles.blue]: color === 'blue',
            [styles.constructorMode]: isConstructorMode
        })} {...props}
            disabled={isConstructorMode}
        >
            {buttonValue}
        </button>
    )
}
