import { takeLatest } from 'redux-saga/effects';
import { PaymentActionMap } from '../action/PaymentAction';
import { PaymentSaga } from './PaymentSaga';

export function* SagaWatcher() {
    yield takeLatest(PaymentActionMap.REQUEST_TRANSACTION_LIST, PaymentSaga.GetTransactionWorker);
}
