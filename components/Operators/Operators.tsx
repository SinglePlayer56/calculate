import {OperatorsProps} from "@/components/Operators/Operators.props";
import styles from './Operators.module.css';
import {Button, ButtonCard} from "@/components";
import cn from "classnames";
import {useAppDispatch} from "@/custom-hooks/redux.hooks";
import {Addition, Multiplication, Division, Subtraction} from "@/store/slices/calculate.slice";

export const Operators = ({className, ...props}: OperatorsProps): JSX.Element => {
    const dispatch = useAppDispatch();


    return (
        <ButtonCard className={cn(styles.operators, className)} {...props}>
            <Button onClick={() => dispatch(Division('/'))} buttonValue={'/'}/>
            <Button onClick={() => dispatch(Multiplication('*'))} buttonValue={'x'}/>
            <Button onClick={() => dispatch(Subtraction('-'))} buttonValue={'-'}/>
            <Button onClick={() => dispatch(Addition('+'))} buttonValue={'+'}/>
        </ButtonCard>
    )
}
