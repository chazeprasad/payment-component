import Axios from 'axios';

const API_BASE_URL = './assets/data';

const GetTransactionList = async () => {
    const headers = {
        'Content-Type': 'application/json',
    };
    const url = `${API_BASE_URL}/transaction-data.json`;

    return Axios.get(url, { headers });
};

export const PaymentService = {
    GetTransactionList,
};
