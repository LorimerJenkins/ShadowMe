import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, Image
} from 'react-native';
// import { Orderbook } from '../components/lib/components/Orderbook'
import {
  LineChart
} from "react-native-chart-kit";
import { data, screenWidth, chartConfig } from '../components/PriceChart';
// import { asks, bids } from '../models/OrderbookData'; 
import { dummyOrderHistory, dummyOpenOrders, Order } from '../models/Orders'
import { TradeModal, BuySellButtons } from '../components/TradeModal';
import { Picker } from '@react-native-picker/picker';




const TradeProperty: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [orderType, setOrderType] = useState('market');
  const [sellPrice, setSellPrice] = useState('0');
  const [currentPrice, setCurrentPrice] = useState('');
  const [bookView, setBookVue] = useState<'orderbook' | 'depth'>('orderbook');
  const [openOrders, setOpenOrders] = useState<Order[]>([]);
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [activeOrderType, setActiveOrderType] = useState<'open' | 'closed'>('open');


  const [modalVisible, setModalVisible] = useState(false);
  const [tradeAction, setTradeAction] = useState<'buy' | 'sell'>('buy');

  const handleTrade = (orderType: string, amount: string, price?: string) => {
    console.log(`${tradeAction} ${amount} at ${orderType} ${price ? `with a limit price of ${price}` : ''}`);
    setModalVisible(false);
  };



  useEffect(() => {
    setOpenOrders(dummyOpenOrders);
    setOrderHistory(dummyOrderHistory);
    setCurrentPrice('100');
  }, []);
  

  
  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <ScrollView style={styles.container}>
  
        <View style={styles.infoSection}>
          <View style={styles.imageContainer}>
            <Image source={{uri: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-659121892384395302/original/7315d324-fd0b-4d4e-9149-2a734c843c40.jpeg?im_w=1200'}} style={styles.image} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.ticker}>NYC/USD</Text>
            <Text style={styles.price}>Price: ${currentPrice}</Text>
            <Text style={styles.volume}>Volume: 1000</Text>
          </View>
        </View>

        <View style={styles.graphSection}>
          <View style={styles.graphContainer}>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
              />
          </View>
          <View style={styles.toggleContainer}>
            <TouchableOpacity onPress={() => setBookVue('orderbook')}>
              <Text style={bookView === 'orderbook' ? styles.activeToggle : styles.toggle}>Order Book</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBookVue('depth')}>
              <Text style={bookView === 'depth' ? styles.activeToggle : styles.toggle}>Market Depth</Text>
            </TouchableOpacity>
          </View>
          {bookView === 'orderbook' ? 

            // <Orderbook bids={bids} asks={asks} /> : <Text>Hello</Text>

            <Text>orderbook</Text> : <Text>depth</Text>

          }
        </View>

        <View style={styles.orderSection}>

          <View style={styles.toggleContainer}>
            <TouchableOpacity onPress={() => setActiveOrderType('open')}>
                <Text style={activeOrderType === 'open' ? styles.activeToggle : styles.toggle}>Open Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveOrderType('closed')}>
                <Text style={activeOrderType === 'closed' ? styles.activeToggle : styles.toggle}>Order History</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ordersContainer}>
            {activeOrderType === 'open' ? (
                  openOrders.map((order, index) => (
                    <View key={index} style={styles.orderItem}>
                      <Text>{order.pair}</Text>
                      <Text>{order.price}</Text>
                      <Text>{order.amount}</Text>
                      <Text>{order.dollarWorth}</Text>
                      <Text>{order.date}</Text>
                    </View>
                  ))
              ) : (
                orderHistory.map((order, index) => (
                  <View key={index} style={styles.orderItem}>
                    <Text>{order.pair}</Text>
                    <Text>{order.price}</Text>
                    <Text>{order.amount}</Text>
                    <Text>{order.dollarWorth}</Text>
                    <Text>{order.date}</Text>
                  </View>
                ))
              )}
          </View>

        </View>


        <BuySellButtons
          onBuy={() => {
            setTradeAction('buy');
            setModalVisible(true);
          }}
          onSell={() => {
            setTradeAction('sell');
            setModalVisible(true);
          }}
        />
        <TradeModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onTrade={handleTrade}
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoSection: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  ticker: {
    fontSize: 20,
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    marginBottom: 5,
  },
  volume: {
    fontSize: 20,
  },
  graphSection: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  graphContainer: {
    height: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  toggle: {
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  activeToggle: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 2,
    borderColor: '#000',
    color: '#000',
  },
  orderSection: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  toggleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ordersContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default TradeProperty;
