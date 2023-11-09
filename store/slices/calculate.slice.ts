import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {parseValue} from "@/helpers/helpers";

export type OperatorTypes = '+' | '-' | '*' | '/' | '';

export interface CalculateState {
    result: string;
    currentOperator: OperatorTypes;
    intermediateResult: number;
    firstOperand: string;
    secondOperand: string;
    cashResult: string;
}

const initialState: CalculateState = {
    result: '',
    currentOperator: '',
    intermediateResult: 0,
    firstOperand: '',
    secondOperand: '',
    cashResult: '',
}

const CalculateSlice = createSlice({
    name: 'calculate',
    initialState,
    reducers: {
        addOperand: (state, action: PayloadAction<number | string>) => {
            if (state.result === state.cashResult) {
                state.result = '';
                state.firstOperand = '';
            }

            if (!state.currentOperator) {
                if (action.payload === '.' && state.firstOperand === '') {
                    state.firstOperand += `0${action.payload}`;
                    state.result += `0${action.payload}`;
                } else {
                    state.firstOperand += action.payload;
                    state.result += action.payload;
                }
            } else {
                state.secondOperand += action.payload;
                state.result += action.payload;
            }
        },
        Addition: (state, action: PayloadAction<'+'>) => {
            updateStateWithOperator(state, action);
        },
        Subtraction: (state, action: PayloadAction<'-'>) => {
            updateStateWithOperator(state, action);
        },
        Multiplication: (state, action: PayloadAction<'*'>) => {
            updateStateWithOperator(state, action);
        },
        Division: (state, action: PayloadAction<'/'>) => {
            updateStateWithOperator(state, action);
        },
        Equals: (state) => {
            state.result = parseValue(state.firstOperand, state.secondOperand, state.currentOperator).toString();
            state.cashResult = state.result;
            state.firstOperand = state.result;
            state.secondOperand = '';
            state.currentOperator = '';
        }
    }
});


export const {addOperand, Addition, Subtraction, Multiplication, Division, Equals} = CalculateSlice.actions;

export default CalculateSlice.reducer;

function updateStateWithOperator(state: CalculateState, action: PayloadAction<OperatorTypes>) {
    if (!state.currentOperator && state.firstOperand) {
        state.currentOperator = action.payload;
        state.result += action.payload;
    } else if (state.currentOperator && state.firstOperand && !state.secondOperand) {
        state.result = state.result.replace(state.currentOperator, '');
        state.currentOperator = action.payload;
        state.result += action.payload;
    } else {
        if (state.secondOperand) {
            state.intermediateResult = parseValue(state.firstOperand, state.secondOperand, state.currentOperator);
            state.firstOperand = state.intermediateResult.toString();
            state.secondOperand = '';
            state.currentOperator = action.payload;
            state.result = state.firstOperand + action.payload;
        }
    }
}
