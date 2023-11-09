import {Operands, Operators, ResultButton, ResultOutput} from "@/components";

export const OrderComponent = {
    ResultOutput: ResultOutput,
    Operators: Operators,
    Operands: Operands,
    ResultButton: ResultButton
}

export type ComponentName = keyof typeof OrderComponent;
