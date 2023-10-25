export interface Order {
    id: string;
    pair: string;
    price: string;
    amount: string;
    dollarWorth: string;
    date: string;
    type: string;
  }

const dummyOpenOrders = [
    { id: '1', pair: 'NYC/USD', price: '100', amount: '10', dollarWorth: '1000', date: '2023-10-15', type: 'buy' },
    { id: '2', pair: 'NYC/USD', price: '100', amount: '10', dollarWorth: '1000', date: '2023-10-15', type: 'buy' },
    { id: '3', pair: 'NYC/USD', price: '100', amount: '10', dollarWorth: '1000', date: '2023-10-15', type: 'buy' },
    { id: '4', pair: 'NYC/USD', price: '100', amount: '10', dollarWorth: '1000', date: '2023-10-15', type: 'buy' },
  ];
  const dummyOrderHistory = [
    { id: '1', pair: 'NYC/USD', price: '99', amount: '10', dollarWorth: '990', date: '2023-10-14', type: 'sell' },
    { id: '2', pair: 'NYC/USD', price: '99', amount: '10', dollarWorth: '990', date: '2023-10-14', type: 'sell' },
    { id: '3', pair: 'NYC/USD', price: '99', amount: '10', dollarWorth: '990', date: '2023-10-14', type: 'sell' },
    { id: '4', pair: 'NYC/USD', price: '99', amount: '10', dollarWorth: '990', date: '2023-10-14', type: 'sell' },
  ];

  export { dummyOpenOrders, dummyOrderHistory }