import {OperatorsProps} from "@/components/Operators/Operators.props";
import styles from "@/styles/Home.module.css";
import {Button, ButtonCard} from "@/components";
import cn from "classnames";

export const Operators = ({className, ...props}: OperatorsProps): JSX.Element => {
    return (
        <ButtonCard className={cn(styles.operators, className)} {...props}>
            <Button buttonValue={'/'}/>
            <Button buttonValue={'x'}/>
            <Button buttonValue={'-'}/>
            <Button buttonValue={'+'}/>
        </ButtonCard>
    )
}
