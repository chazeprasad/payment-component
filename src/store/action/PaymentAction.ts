import { ActionCreator, AppAction, ActionCreatorWithPayload, AppError } from './index';
import { ITransaction } from '../domain/ITransaction';

// --- Action Type--- //
export const PaymentActionMap = {
    SET_TRANSACTION_LIST: '@payment/set-transaction',
    REQUEST_TRANSACTION_LIST: '@payment/request-transaction',
    REQUEST_TRANSACTION_LIST_SUCCESS: '@payment/request-transaction-success',
    REQUEST_TRANSACTION_LIST_ERROR: '@payment/request-transaction-error',
    RESET: '@payment/reset',
};

// --- Action --- //
export interface SetTransactionListAction extends AppAction {
    payload: ITransaction[];
}

export type RequestTransactionListAction = AppAction;

export interface RequestTransactionListSuccessAction extends AppAction {
    payload: ITransaction[];
}

export interface RequestTransactionListErrorAction extends AppAction {
    payload: AppError;
}

export interface ResetPaymentDataAction extends AppAction {
    payload: null;
}

// --- Action Creator --- //
export const setTransactionList: ActionCreatorWithPayload<SetTransactionListAction> = (payload) => ({
    type: PaymentActionMap.SET_TRANSACTION_LIST,
    payload,
});

export const requestTransactionList: ActionCreator<RequestTransactionListAction> = () => ({
    type: PaymentActionMap.REQUEST_TRANSACTION_LIST,
    payload: null,
});

export const requestTransactionListSuccess: ActionCreatorWithPayload<RequestTransactionListSuccessAction> = (
    payload,
) => ({
    type: PaymentActionMap.REQUEST_TRANSACTION_LIST_SUCCESS,
    payload,
});

export const requestTransactionListError: ActionCreatorWithPayload<RequestTransactionListErrorAction> = (payload) => ({
    type: PaymentActionMap.REQUEST_TRANSACTION_LIST_ERROR,
    payload,
});

export const resetPaymentDataAction: ActionCreator<ResetPaymentDataAction> = () => ({
    type: PaymentActionMap.RESET,
    payload: null,
});

export type PaymentAction =
    | SetTransactionListAction
    | RequestTransactionListAction
    | RequestTransactionListSuccessAction
    | RequestTransactionListErrorAction
    | ResetPaymentDataAction;
