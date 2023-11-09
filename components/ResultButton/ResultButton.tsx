import {Button, ButtonCard} from "@/components";
import {ResultButtonProps} from "@/components/ResultButton/ResultButton.props";
import {useAppDispatch} from "@/custom-hooks/redux.hooks";
import {Equals} from "@/store/slices/calculate.slice";
import styles from './ResultButton.module.css';

export const ResultButton = ({className, ...props}: ResultButtonProps): JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <ButtonCard className={className} {...props}>
            <Button className={styles.resultButton} onClick={()=> dispatch(Equals())} color={'blue'} buttonValue={'='}/>
        </ButtonCard>
    )
}
