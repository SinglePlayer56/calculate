import styles from './Operands.module.css';
import {Button, ButtonCard} from "@/components";
import cn from "classnames";
import {OperandsProps} from "@/components/Operands/Operands.props";
import {useAppDispatch} from "@/custom-hooks/redux.hooks";
import {addOperand} from "@/store/slices/calculate.slice";

export const Operands = ({className, ...props}: OperandsProps): JSX.Element => {
    const dispatch = useAppDispatch();

    const handleOperand = (number: number) => {
        dispatch(addOperand(number))
    }

    return (
        <ButtonCard className={cn(styles.operands, className)} {...props}>
            <Button onClick={()=> dispatch(addOperand(7))} buttonValue={7}/>
            <Button onClick={()=> dispatch(addOperand(8))} buttonValue={8}/>
            <Button onClick={()=> dispatch(addOperand(9))} buttonValue={9}/>
            <Button onClick={()=> dispatch(addOperand(4))} buttonValue={4}/>
            <Button onClick={()=> dispatch(addOperand(5))} buttonValue={5}/>
            <Button onClick={()=> dispatch(addOperand(6))} buttonValue={6}/>
            <Button onClick={()=> dispatch(addOperand(1))} buttonValue={1}/>
            <Button onClick={()=> dispatch(addOperand(2))} buttonValue={2}/>
            <Button onClick={()=> dispatch(addOperand(3))} buttonValue={3}/>
            <Button onClick={()=> dispatch(addOperand(0))} className={styles.operandZero} buttonValue={0}/>
            <Button onClick={()=> dispatch(addOperand('.'))} buttonValue={','}/>
        </ButtonCard>
    )
}
