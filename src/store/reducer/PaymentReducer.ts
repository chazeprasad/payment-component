import { Reducer } from 'react';
import { PaymentActionMap, PaymentAction } from '../action/PaymentAction';
import { Payment } from '../domain/Payment';

const dl: Array<any> = JSON.parse(`[
    {
      "amount": 975.11,
      "status": "SUCCEEDED",
      "bank": "Citibank Visa",
      "last4": 5284,
      "date": "2019-11-06T13:23:46.341970"
    },
    {
      "amount": 115.47,
      "status": "DISPUTED",
      "bank": "Capitol One",
      "last4": 8287,
      "date": "2020-07-17T13:23:46.341992"
    },
    {
      "amount": 758.09,
      "status": "FAILED",
      "bank": "Bank of America",
      "last4": 7199,
      "date": "2019-09-17T13:23:46.342001"
    },
    {
      "amount": 749.33,
      "status": "FAILED",
      "bank": "Citibank Visa",
      "last4": 9695,
      "date": "2020-01-22T13:23:46.342008"
    },
    {
      "amount": 319.66,
      "status": "CANCELED",
      "bank": "Wells Fargo",
      "last4": 7733,
      "date": "2020-07-08T13:23:46.342015"
    },
    {
      "amount": 668.82,
      "status": "DISPUTED",
      "bank": "Citibank Visa",
      "last4": 8803,
      "date": "2019-09-17T13:23:46.342022"
    },
    {
      "amount": 606.15,
      "status": "FAILED",
      "bank": "Capitol One",
      "last4": 4425,
      "date": "2019-10-17T13:23:46.342029"
    },
    {
      "amount": 461.47,
      "status": "SUCCEEDED",
      "bank": "Wells Fargo",
      "last4": 7225,
      "date": "2020-09-05T13:23:46.342036"
    },
    {
      "amount": 979.48,
      "status": "SUCCEEDED",
      "bank": "Bank of America",
      "last4": 9185,
      "date": "2019-12-05T13:23:46.342042"
    },
    {
      "amount": 502.68,
      "status": "CANCELED",
      "bank": "Citibank Visa",
      "last4": 6535,
      "date": "2020-04-14T13:23:46.342049"
    },
    {
      "amount": 633.17,
      "status": "SUCCEEDED",
      "bank": "Wells Fargo",
      "last4": 7101,
      "date": "2020-03-20T13:23:46.342056"
    },
    {
      "amount": 806.34,
      "status": "SUCCEEDED",
      "bank": "Capitol One",
      "last4": 6828,
      "date": "2019-11-23T13:23:46.342063"
    },
    {
      "amount": 573.37,
      "status": "FAILED",
      "bank": "Bank of America",
      "last4": 4008,
      "date": "2020-04-28T13:23:46.342070"
    },
    {
      "amount": 433.58,
      "status": "FAILED",
      "bank": "Capitol One",
      "last4": 9073,
      "date": "2019-09-16T13:23:46.342077"
    },
    {
      "amount": 470.66,
      "status": "FAILED",
      "bank": "Capitol One",
      "last4": 9413,
      "date": "2020-07-01T13:23:46.342091"
    },
    {
      "amount": 361.62,
      "status": "FAILED",
      "bank": "Bank of America",
      "last4": 8476,
      "date": "2020-04-26T13:23:46.342098"
    },
    {
      "amount": 698.95,
      "status": "SUCCEEDED",
      "bank": "Wells Fargo",
      "last4": 9954,
      "date": "2019-12-26T13:23:46.342104"
    },
    {
      "amount": 537.89,
      "status": "SUCCEEDED",
      "bank": "Citibank Visa",
      "last4": 6335,
      "date": "2020-02-23T13:23:46.342116"
    },
    {
      "amount": 264.84,
      "status": "CANCELED",
      "bank": "Bank of America",
      "last4": 4353,
      "date": "2019-09-20T13:23:46.342125"
    },
    {
      "amount": 167.46,
      "status": "DISPUTED",
      "bank": "Capitol One",
      "last4": 6076,
      "date": "2019-12-21T13:23:46.342132"
    },
    {
      "amount": 373.67,
      "status": "FAILED",
      "bank": "Bank of America",
      "last4": 6808,
      "date": "2020-08-16T13:23:46.342138"
    },
    {
      "amount": 149.36,
      "status": "FAILED",
      "bank": "Capitol One",
      "last4": 5768,
      "date": "2020-04-22T13:23:46.342145"
    },
    {
      "amount": 946.69,
      "status": "DISPUTED",
      "bank": "Citibank Visa",
      "last4": 9196,
      "date": "2020-01-13T13:23:46.342152"
    },
    {
      "amount": 458.36,
      "status": "FAILED",
      "bank": "Citibank Visa",
      "last4": 7150,
      "date": "2020-03-30T13:23:46.342159"
    },
    {
      "amount": 824.01,
      "status": "SUCCEEDED",
      "bank": "Capitol One",
      "last4": 5874,
      "date": "2019-11-27T13:23:46.342166"
    },
    {
      "amount": 526.95,
      "status": "CANCELED",
      "bank": "Wells Fargo",
      "last4": 6958,
      "date": "2020-06-02T13:23:46.342172"
    },
    {
      "amount": 700.95,
      "status": "SUCCEEDED",
      "bank": "Bank of America",
      "last4": 8264,
      "date": "2020-06-04T13:23:46.342179"
    },
    {
      "amount": 812.51,
      "status": "FAILED",
      "bank": "Citibank Visa",
      "last4": 4574,
      "date": "2020-05-21T13:23:46.342185"
    },
    {
      "amount": 937.41,
      "status": "FAILED",
      "bank": "Citibank Visa",
      "last4": 4737,
      "date": "2019-09-16T13:23:46.342192"
    },
    {
      "amount": 738.84,
      "status": "SUCCEEDED",
      "bank": "Citibank Visa",
      "last4": 8928,
      "date": "2020-01-10T13:23:46.342199"
    },
    {
      "amount": 324.54,
      "status": "FAILED",
      "bank": "Wells Fargo",
      "last4": 7396,
      "date": "2020-03-07T13:23:46.342206"
    },
    {
      "amount": 466.14,
      "status": "FAILED",
      "bank": "Bank of America",
      "last4": 8543,
      "date": "2020-06-11T13:23:46.342212"
    },
    {
      "amount": 287.29,
      "status": "DISPUTED",
      "bank": "Bank of America",
      "last4": 8563,
      "date": "2020-09-03T13:23:46.342219"
    },
    {
      "amount": 756.86,
      "status": "FAILED",
      "bank": "Bank of America",
      "last4": 9130,
      "date": "2020-02-03T13:23:46.342225"
    },
    {
      "amount": 223.23,
      "status": "DISPUTED",
      "bank": "Wells Fargo",
      "last4": 4450,
      "date": "2020-03-08T13:23:46.342232"
    },
    {
      "amount": 534.94,
      "status": "CANCELED",
      "bank": "Wells Fargo",
      "last4": 6478,
      "date": "2020-04-06T13:23:46.342243"
    },
    {
      "amount": 315.82,
      "status": "SUCCEEDED",
      "bank": "Capitol One",
      "last4": 5717,
      "date": "2020-04-22T13:23:46.342250"
    },
    {
      "amount": 702.34,
      "status": "FAILED",
      "bank": "Wells Fargo",
      "last4": 6025,
      "date": "2020-05-25T13:23:46.342258"
    },
    {
      "amount": 946.24,
      "status": "FAILED",
      "bank": "Wells Fargo",
      "last4": 8805,
      "date": "2020-04-28T13:23:46.342264"
    },
    {
      "amount": 944.84,
      "status": "FAILED",
      "bank": "Capitol One",
      "last4": 6362,
      "date": "2020-05-16T13:23:46.342271"
    },
    {
      "amount": 418.85,
      "status": "CANCELED",
      "bank": "Wells Fargo",
      "last4": 8339,
      "date": "2020-03-31T13:23:46.342278"
    },
    {
      "amount": 298.01,
      "status": "SUCCEEDED",
      "bank": "Wells Fargo",
      "last4": 9775,
      "date": "2020-09-01T13:23:46.342289"
    },
    {
      "amount": 135.5,
      "status": "DISPUTED",
      "bank": "Capitol One",
      "last4": 8464,
      "date": "2019-10-16T13:23:46.342296"
    },
    {
      "amount": 232.55,
      "status": "SUCCEEDED",
      "bank": "Capitol One",
      "last4": 9906,
      "date": "2020-06-29T13:23:46.342303"
    },
    {
      "amount": 430.64,
      "status": "CANCELED",
      "bank": "Bank of America",
      "last4": 4263,
      "date": "2020-06-16T13:23:46.342310"
    },
    {
      "amount": 332.05,
      "status": "DISPUTED",
      "bank": "Bank of America",
      "last4": 7129,
      "date": "2020-07-01T13:23:46.342317"
    },
    {
      "amount": 808.51,
      "status": "DISPUTED",
      "bank": "Capitol One",
      "last4": 4538,
      "date": "2019-10-25T13:23:46.342323"
    },
    {
      "amount": 580.23,
      "status": "DISPUTED",
      "bank": "Bank of America",
      "last4": 8802,
      "date": "2019-12-30T13:23:46.342330"
    },
    {
      "amount": 548.54,
      "status": "FAILED",
      "bank": "Capitol One",
      "last4": 5380,
      "date": "2020-02-24T13:23:46.342336"
    },
    {
      "amount": 701.42,
      "status": "CANCELED",
      "bank": "Wells Fargo",
      "last4": 6448,
      "date": "2019-11-06T13:23:46.342343"
    },
    {
      "amount": 203.67,
      "status": "DISPUTED",
      "bank": "Wells Fargo",
      "last4": 5024,
      "date": "2019-09-23T13:23:46.342350"
    },
    {
      "amount": 699.81,
      "status": "SUCCEEDED",
      "bank": "Bank of America",
      "last4": 4827,
      "date": "2019-10-31T13:23:46.342356"
    },
    {
      "amount": 422.17,
      "status": "FAILED",
      "bank": "Capitol One",
      "last4": 6205,
      "date": "2020-03-18T13:23:46.342363"
    },
    {
      "amount": 493.07,
      "status": "CANCELED",
      "bank": "Capitol One",
      "last4": 7678,
      "date": "2020-07-27T13:23:46.342370"
    },
    {
      "amount": 955.88,
      "status": "FAILED",
      "bank": "Capitol One",
      "last4": 7224,
      "date": "2019-11-05T13:23:46.342376"
    },
    {
      "amount": 852.23,
      "status": "SUCCEEDED",
      "bank": "Wells Fargo",
      "last4": 4420,
      "date": "2020-04-19T13:23:46.342383"
    },
    {
      "amount": 625.09,
      "status": "DISPUTED",
      "bank": "Bank of America",
      "last4": 8673,
      "date": "2020-03-28T13:23:46.342389"
    },
    {
      "amount": 762.33,
      "status": "DISPUTED",
      "bank": "Citibank Visa",
      "last4": 4007,
      "date": "2020-08-23T13:23:46.342396"
    },
    {
      "amount": 664.29,
      "status": "DISPUTED",
      "bank": "Wells Fargo",
      "last4": 6404,
      "date": "2019-12-27T13:23:46.342402"
    },
    {
      "amount": 591.94,
      "status": "CANCELED",
      "bank": "Wells Fargo",
      "last4": 4984,
      "date": "2020-02-07T13:23:46.342410"
    },
    {
      "amount": 643.85,
      "status": "DISPUTED",
      "bank": "Capitol One",
      "last4": 7693,
      "date": "2020-03-22T13:23:46.342416"
    },
    {
      "amount": 287.22,
      "status": "DISPUTED",
      "bank": "Wells Fargo",
      "last4": 5395,
      "date": "2019-09-09T13:23:46.342423"
    },
    {
      "amount": 451.44,
      "status": "SUCCEEDED",
      "bank": "Capitol One",
      "last4": 5414,
      "date": "2020-04-15T13:23:46.342430"
    },
    {
      "amount": 902.4,
      "status": "DISPUTED",
      "bank": "Wells Fargo",
      "last4": 6363,
      "date": "2020-05-29T13:23:46.342442"
    },
    {
      "amount": 896.66,
      "status": "FAILED",
      "bank": "Bank of America",
      "last4": 8089,
      "date": "2019-11-10T13:23:46.342453"
    },
    {
      "amount": 753.04,
      "status": "SUCCEEDED",
      "bank": "Citibank Visa",
      "last4": 4491,
      "date": "2020-06-27T13:23:46.342464"
    },
    {
      "amount": 643.27,
      "status": "DISPUTED",
      "bank": "Bank of America",
      "last4": 9705,
      "date": "2020-06-28T13:23:46.342471"
    },
    {
      "amount": 953.94,
      "status": "CANCELED",
      "bank": "Wells Fargo",
      "last4": 7853,
      "date": "2019-09-15T13:23:46.342477"
    },
    {
      "amount": 526.65,
      "status": "CANCELED",
      "bank": "Bank of America",
      "last4": 9954,
      "date": "2019-10-17T13:23:46.342483"
    },
    {
      "amount": 955.11,
      "status": "SUCCEEDED",
      "bank": "Capitol One",
      "last4": 7830,
      "date": "2020-07-13T13:23:46.342490"
    },
    {
      "amount": 148.33,
      "status": "DISPUTED",
      "bank": "Capitol One",
      "last4": 5405,
      "date": "2020-02-18T13:23:46.342497"
    },
    {
      "amount": 229.17,
      "status": "DISPUTED",
      "bank": "Citibank Visa",
      "last4": 4139,
      "date": "2020-02-29T13:23:46.342504"
    },
    {
      "amount": 999.31,
      "status": "SUCCEEDED",
      "bank": "Capitol One",
      "last4": 8389,
      "date": "2020-08-17T13:23:46.342511"
    },
    {
      "amount": 107.84,
      "status": "FAILED",
      "bank": "Wells Fargo",
      "last4": 5645,
      "date": "2020-02-20T13:23:46.342518"
    },
    {
      "amount": 851.11,
      "status": "FAILED",
      "bank": "Capitol One",
      "last4": 4606,
      "date": "2020-02-29T13:23:46.342525"
    },
    {
      "amount": 595.63,
      "status": "SUCCEEDED",
      "bank": "Wells Fargo",
      "last4": 4242,
      "date": "2019-11-22T13:23:46.342531"
    },
    {
      "amount": 427.2,
      "status": "SUCCEEDED",
      "bank": "Bank of America",
      "last4": 9037,
      "date": "2020-02-15T13:23:46.342543"
    },
    {
      "amount": 888.69,
      "status": "FAILED",
      "bank": "Wells Fargo",
      "last4": 6842,
      "date": "2020-01-11T13:23:46.342550"
    },
    {
      "amount": 644.0,
      "status": "DISPUTED",
      "bank": "Bank of America",
      "last4": 9590,
      "date": "2019-11-20T13:23:46.342557"
    },
    {
      "amount": 472.7,
      "status": "SUCCEEDED",
      "bank": "Citibank Visa",
      "last4": 8080,
      "date": "2020-05-30T13:23:46.342563"
    },
    {
      "amount": 423.31,
      "status": "FAILED",
      "bank": "Wells Fargo",
      "last4": 9257,
      "date": "2019-11-27T13:23:46.342570"
    },
    {
      "amount": 823.11,
      "status": "CANCELED",
      "bank": "Capitol One",
      "last4": 9131,
      "date": "2019-10-05T13:23:46.342577"
    },
    {
      "amount": 354.5,
      "status": "DISPUTED",
      "bank": "Wells Fargo",
      "last4": 4384,
      "date": "2019-12-15T13:23:46.342584"
    },
    {
      "amount": 715.79,
      "status": "DISPUTED",
      "bank": "Wells Fargo",
      "last4": 4270,
      "date": "2020-01-11T13:23:46.342590"
    },
    {
      "amount": 971.91,
      "status": "CANCELED",
      "bank": "Capitol One",
      "last4": 5233,
      "date": "2020-04-29T13:23:46.342597"
    },
    {
      "amount": 770.77,
      "status": "SUCCEEDED",
      "bank": "Capitol One",
      "last4": 9940,
      "date": "2020-08-30T13:23:46.342604"
    },
    {
      "amount": 292.45,
      "status": "DISPUTED",
      "bank": "Capitol One",
      "last4": 5461,
      "date": "2020-05-16T13:23:46.342610"
    },
    {
      "amount": 639.66,
      "status": "CANCELED",
      "bank": "Bank of America",
      "last4": 8696,
      "date": "2020-02-12T13:23:46.342617"
    },
    {
      "amount": 266.81,
      "status": "FAILED",
      "bank": "Bank of America",
      "last4": 7042,
      "date": "2020-06-04T13:23:46.342623"
    },
    {
      "amount": 338.03,
      "status": "CANCELED",
      "bank": "Wells Fargo",
      "last4": 6157,
      "date": "2019-11-22T13:23:46.342635"
    },
    {
      "amount": 937.54,
      "status": "FAILED",
      "bank": "Citibank Visa",
      "last4": 6310,
      "date": "2020-07-04T13:23:46.342642"
    },
    {
      "amount": 713.48,
      "status": "CANCELED",
      "bank": "Citibank Visa",
      "last4": 5244,
      "date": "2020-05-19T13:23:46.342649"
    },
    {
      "amount": 755.34,
      "status": "FAILED",
      "bank": "Capitol One",
      "last4": 8564,
      "date": "2020-04-11T13:23:46.342656"
    },
    {
      "amount": 924.38,
      "status": "CANCELED",
      "bank": "Wells Fargo",
      "last4": 5087,
      "date": "2020-03-19T13:23:46.342662"
    },
    {
      "amount": 753.22,
      "status": "CANCELED",
      "bank": "Capitol One",
      "last4": 5188,
      "date": "2020-05-04T13:23:46.342669"
    },
    {
      "amount": 339.41,
      "status": "CANCELED",
      "bank": "Capitol One",
      "last4": 9484,
      "date": "2020-07-20T13:23:46.342675"
    },
    {
      "amount": 626.86,
      "status": "CANCELED",
      "bank": "Bank of America",
      "last4": 7728,
      "date": "2019-10-20T13:23:46.342682"
    },
    {
      "amount": 627.75,
      "status": "DISPUTED",
      "bank": "Bank of America",
      "last4": 6088,
      "date": "2020-03-22T13:23:46.342689"
    },
    {
      "amount": 599.28,
      "status": "FAILED",
      "bank": "Citibank Visa",
      "last4": 4441,
      "date": "2020-06-30T13:23:46.342695"
    },
    {
      "amount": 559.52,
      "status": "CANCELED",
      "bank": "Wells Fargo",
      "last4": 4710,
      "date": "2020-06-24T13:23:46.342701"
    },
    {
      "amount": 712.91,
      "status": "DISPUTED",
      "bank": "Wells Fargo",
      "last4": 5574,
      "date": "2019-09-09T13:23:46.342708"
    },
    {
      "amount": 337.67,
      "status": "DISPUTED",
      "bank": "Citibank Visa",
      "last4": 4839,
      "date": "2020-07-27T13:23:46.342715"
    },
    {
      "amount": 611.46,
      "status": "FAILED",
      "bank": "Wells Fargo",
      "last4": 6938,
      "date": "2020-06-25T13:23:46.342721"
    },
    {
      "amount": 124.0,
      "status": "SUCCEEDED",
      "bank": "Citibank Visa",
      "last4": 6118,
      "date": "2019-09-29T13:23:46.342728"
    },
    {
      "amount": 249.39,
      "status": "DISPUTED",
      "bank": "Wells Fargo",
      "last4": 4622,
      "date": "2019-10-06T13:23:46.342735"
    },
    {
      "amount": 624.36,
      "status": "CANCELED",
      "bank": "Capitol One",
      "last4": 7949,
      "date": "2019-11-21T13:23:46.342741"
    },
    {
      "amount": 189.99,
      "status": "SUCCEEDED",
      "bank": "Capitol One",
      "last4": 9802,
      "date": "2020-08-19T13:23:46.342748"
    }
  ]
`);

export type PaymentState = Readonly<{
    loading?: false,
    error?: null,
    success?: null,
    data: Payment[]
}>

const initialState: PaymentState = {
    loading: false,
    error: null,
    success: null,
    data: []
}

export const paymentReducer:Reducer<PaymentState, PaymentAction> = (state = initialState, action) => {
    let newState: PaymentState = {data:[]};
    let payment: any 
    
    switch (action.type) {
        case PaymentActionMap.SET_TRANSACTION_LIST:
            newState = {
                ...state,
                data: [...dl]
            }
            break
        
        default:
            newState = { ...state }
            break
    }

    return newState
}
