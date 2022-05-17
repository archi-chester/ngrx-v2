import { Action } from "@ngrx/store"

export enum countActionsType {
    clear = '[COUNT] clear',
    decrease = '[COUNT] decrease',
    increase = '[COUNT] increase',

};

//  ACTIONS
//  CountClearAction
export class CountClearAction implements Action {
    readonly type = countActionsType.clear;
};

//  CountDecreaseAction
export class CountDecreaseAction implements Action {
    readonly type = countActionsType.decrease;
};

//  CountIncreaseAction
export class CountIncreaseAction implements Action {
    readonly type = countActionsType.increase;
};

//
//  Export all actions
export type CountActions = CountClearAction | CountDecreaseAction | CountIncreaseAction;