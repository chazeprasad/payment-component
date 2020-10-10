import { useSelector } from 'react-redux';
import { ITransaction } from '../store/domain/ITransaction';
import { RootState } from '../store/reducer';

export const useTransactions = () => {
    const transactions: ITransaction[] | undefined = useSelector<RootState, ITransaction[]>(
        (state) => state.paymentState.data,
    );
    return transactions || [];
};
