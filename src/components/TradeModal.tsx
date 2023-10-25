import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Dimensions
} from 'react-native';
import { Picker } from '@react-native-picker/picker';


interface TradeModalProps {
    visible: boolean;
    onClose: () => void;
    onTrade: (orderType: string, amount: string, price: string | undefined, action: string) => void;
  }

const TradeModal: React.FC<TradeModalProps> = ({ visible, onClose, onTrade }) => {
  const [orderType, setOrderType] = useState('market');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  return (
    <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
        onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>

          <Picker
            selectedValue={orderType}
            onValueChange={(itemValue, itemIndex) => setOrderType(itemValue)}
            style={styles.pickerContainer} 
            >
            <Picker.Item label="Market Order" value="market" />
            <Picker.Item label="Limit Order" value="limit" />
            </Picker>

            <TextInput
                value={amount}
                onChangeText={setAmount}
                placeholder="Amount"
                keyboardType="numeric"
                style={styles.input}
            />

            {orderType === 'limit' && (
            <TextInput
                value={price}
                onChangeText={setPrice}
                placeholder="Price"
                keyboardType="numeric"
                style={styles.input}
            />
            )}

            <View style={styles.summaryContainer}>
            <Text>Order Summary:</Text>
            <Text>{`Order Type: ${orderType}`}</Text>
            <Text>{`Amount: ${amount}`}</Text>
            {orderType === 'limit' && <Text>{`Price: ${price}`}</Text>}
            </View>


            <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => onTrade(orderType, amount, orderType === 'limit' ? price : undefined, 'buy')}
                style={styles.buyButton}
            >
                <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onTrade(orderType, amount, orderType === 'limit' ? price : undefined, 'sell')}
                style={styles.sellButton}
            >
                <Text style={styles.buttonText}>Sell</Text>
            </TouchableOpacity>
            </View>

        </View>
      </View>
    </Modal>
  );
};

interface BuySellButtonsProps {
  onBuy: () => void;
  onSell: () => void;
}

const BuySellButtons: React.FC<BuySellButtonsProps> = ({ onBuy, onSell }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={onBuy} style={styles.buyButton}>
      <Text style={styles.buttonText}>Buy</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onSell} style={styles.sellButton}>
      <Text style={styles.buttonText}>Sell</Text>
    </TouchableOpacity>
  </View>
);


const styles = StyleSheet.create({
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginVertical: 10,
    fontSize: 16,
  },
  summaryContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
    marginVertical: 10,
  },
  confirmButton: {
    backgroundColor: '#008CBA',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  buyButton: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  sellButton: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
});


export { TradeModal, BuySellButtons };
