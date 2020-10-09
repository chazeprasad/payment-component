import { useSelector } from 'react-redux';
import { Payment } from '../store/domain/Payment';
import { RootState } from '../store/reducer';

export const useTransactions = () => {
    const transactions: Payment[] | undefined = useSelector<RootState, Payment[]>((state) => state.paymentState.data);
    return transactions || [];
};
