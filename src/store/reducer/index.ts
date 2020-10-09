import { combineReducers, ReducersMapObject } from 'redux';
import { PaymentState, paymentReducer } from './PaymentReducer';

export type RootState = {
    paymentState: PaymentState;
};

const reducerMap: ReducersMapObject<any, any> = {
    paymentState: paymentReducer,
};

export default combineReducers<RootState>(reducerMap);
