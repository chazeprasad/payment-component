import { call, put } from 'redux-saga/effects';
import { PaymentService } from '../service/PaymentService';
import { requestTransactionListSuccess, requestTransactionListError } from '../action/PaymentAction';

function* GetTransactionWorker(action) {
    try {
        const response = yield call(PaymentService.GetTransactionList);
        if (response.status >= 200 && response.status < 300) {
            const { data } = response;
            yield put(requestTransactionListSuccess(data));
        } else {
            throw response.error;
        }
    } catch (error) {
        yield put(requestTransactionListError(error));
    }
}

export const PaymentSaga = {
    GetTransactionWorker,
};
