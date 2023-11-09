import {ResultOutputProps} from "@/components/ResultOutput/ResultOutput.props";
import {ButtonCard} from "@/components";
import styles from './ResultOutput.module.css';
import {useAppSelector} from "@/custom-hooks/redux.hooks";
import {replaceResult} from "@/helpers/helpers";

export const ResultOutput = ({className, ...props}: ResultOutputProps): JSX.Element => {
    const value = useAppSelector((state) => state.calculate.result);

    const result = replaceResult(value);
    return  (
        <ButtonCard>
            <div className={styles.resultWrapper}>
                <span className={styles.result}>
                    {result === '' ? '0' : result}
                </span>
            </div>
        </ButtonCard>
    )
}
