import { Reducer } from 'react';
import { PaymentActionMap, PaymentAction } from '../action/PaymentAction';
import { Payment } from '../domain/Payment';

export type PaymentState = Readonly<{
    loading?: boolean;
    error?: any;
    success?: any;
    data: Payment[];
}>;

const initialState: PaymentState = {
    loading: false,
    error: null,
    success: null,
    data: [],
};

export const paymentReducer: Reducer<PaymentState, PaymentAction> = (state = initialState, action) => {
    let newState: PaymentState = { data: [] };

    switch (action.type) {
        case PaymentActionMap.SET_TRANSACTION_LIST:
            newState = {
                ...state,
                data: [],
            };
            break;

        case PaymentActionMap.REQUEST_TRANSACTION_LIST:
            newState = {
                ...state,
                loading: true,
                success: null,
                error: null,
                data: [],
            };
            break;

        case PaymentActionMap.REQUEST_TRANSACTION_LIST_SUCCESS:
            newState = {
                ...state,
                data: action.payload,
                loading: false,
                success: {
                    message: `success`,
                },
                error: null,
            };
            break;

        case PaymentActionMap.REQUEST_TRANSACTION_LIST_ERROR:
            newState = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
                data: [],
            };
            break;

        default:
            newState = { ...state };
            break;
    }

    return newState;
};
