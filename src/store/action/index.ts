import { Action } from 'redux';

export interface AppAction extends Action {
    payload: any;
}

export interface AppError {
    error: any;
}

export type ActionCreator<A extends AppAction> = () => A;
export type ActionCreatorWithPayload<A extends AppAction> = (payload: A['payload']) => A;
