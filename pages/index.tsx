import styles from '@/styles/Home.module.css'
import cn from "classnames";
import {MouseEvent, useCallback} from 'react';
import {Drag, Drop, SelectMode} from "@/components";
import DropIcon from '../public/drop-icon.svg';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {useAppDispatch, useAppSelector} from "@/custom-hooks/redux.hooks";
import {
    ConstructorItem,
    CurrentOrder,
    InitItems,
    IsDragItem,
    RemoveItem,
    updateInitOrder
} from "@/store/slices/constructor.slices";
import {OrderComponent} from "@/helpers/types";
import {Reorder, motion} from 'framer-motion';
import {useEffect, useState} from "react";



export default function Home() {
    const dispatch = useAppDispatch();
    const componentOrderList = useAppSelector(state => state.constructorCalculate.initOrder);
    const constructorBordItem = useAppSelector(state => state.constructorCalculate.currentOrder);
    const [items, setItems] = useState<ConstructorItem[]>(componentOrderList);
    const [constrItems, setConstrItems] = useState<ConstructorItem[]>(constructorBordItem);

    useEffect(() => {
        setItems(componentOrderList);
        setConstrItems([]);
        setConstrItems(constructorBordItem);
    },[componentOrderList, constructorBordItem])

    const removeHandler = (e: MouseEvent, item: ConstructorItem) => {
        e.stopPropagation();

        dispatch(RemoveItem(item));
    }

    const moveItem = useCallback((dragIndex:number, hoverIndex:number) => {
        const dragItem = items[dragIndex];
        setConstrItems((prevState) => {
            const updatedState = [...prevState];
            updatedState.splice(dragIndex, 1);
            updatedState.splice(hoverIndex, 0, dragItem);
            return updatedState;
        });
    }, [items]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={cn(styles.wrapper)}>
                <SelectMode className={styles.selectMode}/>
                <div className={styles.calculateContainer}>
                    {items.map((dragItem, index) => {
                        const DragComponent = OrderComponent[dragItem.nameComponent];
                        return (
                            <Drag
                                key={dragItem.id}
                                // onDragEnd={() => dispatch(IsDragItem(dragItem))}
                                id={dragItem.id.toString()}
                                isMoved={dragItem.unDraggable}
                                endHandler={() => dispatch(IsDragItem(dragItem))}
                                index={index}
                                moveItem={moveItem}
                            >
                                <DragComponent/>
                            </Drag>
                        )
                    })}
                </div>
                {/*<Reorder.Group*/}
                {/*    as={'div'}*/}
                {/*    className={styles.calculateContainer}*/}
                {/*    onReorder={setItems}*/}
                {/*    values={items}*/}
                {/*>*/}
                {/*    {items.map((dragItem) => {*/}
                {/*        const DragComponent = OrderComponent[dragItem.nameComponent];*/}

                {/*        return (*/}
                {/*            <Reorder.Item*/}
                {/*                key={dragItem.id}*/}
                {/*                value={dragItem}*/}
                {/*                as={'div'}*/}
                {/*                animate={dragItem.unDraggable ? {position: 'relative', zIndex: 2} : {position: 'relative', zIndex: 2, opacity: 0.5}}*/}
                {/*                whileDrag={{zIndex: 3}}*/}
                {/*                dragSnapToOrigin={true}*/}
                {/*                drag={dragItem.unDraggable ? 'x' : false}*/}
                {/*                onDragEnd={() => dispatch(IsDragItem(dragItem))}*/}
                {/*            >*/}
                {/*                <DragComponent/>*/}
                {/*            </Reorder.Item>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</Reorder.Group>*/}
                <div className={styles.dropContainer}>
                    <Drop className={styles.dragAndDrop}>
                        {constructorBordItem.length > 0 ?
                            <div className={styles.calculateContainer}>
                                {constrItems.map((item) => {
                                    const ConstrComponent = OrderComponent[item.nameComponent];

                                    return (
                                        <div
                                            key={item.id}
                                            style={{position: 'relative', zIndex: 2}}
                                            // onDoubleClick={(e) => removeHandler(e, item) }
                                            // onDragEnd={() => dispatch(CurrentOrder(constrItems))}
                                        >
                                            <ConstrComponent/>
                                        </div>
                                    )
                                })
                                }
                            </div>
                            // <Reorder.Group
                            //     as={'div'}
                            //     onReorder={setConstrItems}
                            //     values={constrItems}
                            //     className={styles.calculateContainer}
                            // >
                            //     {constrItems.map((item) => {
                            //         const ConstrComponent = OrderComponent[item.nameComponent];
                            //
                            //         return (
                            //             <Reorder.Item
                            //                 key={item.id}
                            //                 value={item}
                            //                 as={'div'}
                            //                 style={{position: 'relative', zIndex: 2}}
                            //                 whileDrag={{zIndex: 3}}
                            //                 dragSnapToOrigin={true}
                            //                 drag={'y'}
                            //                 onDoubleClick={(e) => removeHandler(e, item) }
                            //                 onDragEnd={() => dispatch(CurrentOrder(constrItems))}
                            //             >
                            //                 <ConstrComponent/>
                            //             </Reorder.Item>
                            //         )
                            //     })
                            //     }
                            // </Reorder.Group>
                            :
                            <div className={styles.dropInfo}>
                                <DropIcon className={styles.dropIcon}/>
                                <h3 className={styles.dropTitle}>Перетащите сюда</h3>
                                <p className={styles.dropText}>любой элемент из левой панели</p>
                            </div>
                        }
                    </Drop>
                </div>
            </div>
        </DndProvider>
    )
}
