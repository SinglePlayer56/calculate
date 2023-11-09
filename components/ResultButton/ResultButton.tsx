import {Button, ButtonCard} from "@/components";
import {ResultProps} from "@/components/Result/Result.props";

export const Result = ({className, ...props}: ResultProps): JSX.Element => {
    return (
        <ButtonCard className={className} {...props}>
            <Button color={'blue'} buttonValue={'='}/>
        </ButtonCard>
    )
}
