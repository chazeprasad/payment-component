import { call, put } from 'redux-saga/effects';
import { PaymentService } from '../service/PaymentService';
import { requestTransactionListSuccess, requestTransactionListError } from '../action/PaymentAction';
import { ITransaction } from '../domain/ITransaction';

const extractTransactionData = (data) => {
    const transactionData: Array<ITransaction> = data.map((x) => {
        const transaction: ITransaction = {
            amount: x.amount,
            status: x.status,
            date: x.date,
            method: `${x.bank} •••• ${x.last4}`,
        };

        return transaction;
    });

    return transactionData;
};

function* GetTransactionWorker(action) {
    try {
        const response = yield call(PaymentService.GetTransactionList);
        if (response.status >= 200 && response.status < 300) {
            const { data } = response;
            const transactions = extractTransactionData(data);
            yield put(requestTransactionListSuccess(transactions));
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
