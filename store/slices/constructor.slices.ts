import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ComponentName} from "@/helpers/types";

export interface ConstructorItems {
    initOrder: ConstructorItem[],
    currentOrder: ConstructorItem[],
    constructorMode: boolean
}

export interface ConstructorItem {
    id: number;
    nameComponent: ComponentName;
    unDraggable: boolean;
    isActive: boolean;
}

const OrderList: ConstructorItem[] = [
    {id: 1, isActive: false, unDraggable: true, nameComponent : 'ResultOutput'},
    {id: 2, isActive: false, unDraggable: true, nameComponent : 'Operators'},
    {id: 3, isActive: false, unDraggable: true, nameComponent : 'Operands'},
    {id: 4, isActive: false, unDraggable: true, nameComponent : 'ResultButton'}
]

const initialState: ConstructorItems = {
    initOrder: OrderList,
    currentOrder: [],
    constructorMode: true
}

const ConstructorSlice = createSlice({
    name: 'constructorCalculate',
    initialState,
    reducers: {
        InitItems: (state, action: PayloadAction<ConstructorItem[]>) => {
            state.initOrder = action.payload;
        },
        CurrentOrder: (state, action: PayloadAction<ConstructorItem[]>) => {
            state.currentOrder = action.payload;
        },
        IsDragItem: (state, action: PayloadAction<ConstructorItem>) => {
            const targetItem = state.initOrder.find((item) => item.id === action.payload.id);
            if (targetItem) {
                targetItem.unDraggable = false;
                state.currentOrder = [...state.currentOrder, targetItem]
            }
        },
        RemoveItem: (state, action: PayloadAction<ConstructorItem>) => {
            const targetItem = state.initOrder.find((item) => item.id === action.payload.id);
            if (targetItem) {
                targetItem.unDraggable = true;
                state.currentOrder = state.currentOrder.filter((item) => item.id != targetItem.id);
            }
        },
        CreateRuntimeOrder: (state) => {
            state.currentOrder = state.currentOrder.map((item) => ({...item, isActive: true}));
        },
        updateInitOrder: (state, action: PayloadAction<ConstructorItem[]>) => {
            state.initOrder = action.payload;
        }

    }
})

export const {updateInitOrder, CurrentOrder, CreateRuntimeOrder, IsDragItem, RemoveItem, InitItems} = ConstructorSlice.actions;

export default ConstructorSlice.reducer;
