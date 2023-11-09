import {SelectModeProps} from "@/components/SelectMode/SelectMode.props";
import styles from './SelectMode.module.css';
import cn from "classnames";
import {SelectButton} from "@/components";
import {useState} from "react";

export const SelectMode = ({className, ...props}: SelectModeProps): JSX.Element => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
      <div className={cn(styles.selectMode, className)} {...props}>
        <SelectButton onClick={() => setIsSelected(!isSelected)} icon={'eye'} text={'Runtime'} selected={!isSelected}/>
        <SelectButton onClick={() => setIsSelected(!isSelected)} icon={'selector'} text={'Constructor'} selected={isSelected}/>
      </div>
  )
}
