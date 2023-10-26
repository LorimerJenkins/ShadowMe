import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const BookingsTab: React.FC = () => {

    const [activeTab, setActiveTab] = useState<'transactions' | 'newTab'>('newTab');

    const transactions = [
        { id: '1', buyPrice: 140.44, sellPrice: 102475.55, percentage: 10, house: 'Cambridge, UK', link: 'http://example.com' },
        { id: '2', buyPrice: 105.33, sellPrice: 132740.44, percentage: 5, house: 'Salem, US', link: 'http://example.com' },
        { id: '3', buyPrice: 140.44, sellPrice: 175.55, percentage: 10, house: 'Cambridge, UK', link: 'http://example.com' },
        { id: '4', buyPrice: 105.33, sellPrice: 140.44, percentage: 5, house: 'Salem, US', link: 'http://example.com' },
        { id: '5', buyPrice: 140.44, sellPrice: 175.55, percentage: 10, house: 'Cambridge, UK', link: 'http://example.com' },
        { id: '6', buyPrice: 105.33, sellPrice: 140.44, percentage: 5, house: 'Salem, US', link: 'http://example.com' },
    ];

    const predefinedColors = ['#000000', '#9163f3'];

    interface HouseData {
        [house: string]: {
            key: string;
            count: number;
            color: string;
        };
    }

    const houseData: HouseData = {};

    transactions.forEach((transaction, index) => {
        const { house, buyPrice, sellPrice, percentage } = transaction;
        if (!houseData[house]) {
            houseData[house] = {
                key: house,
                count: 0,
                color: predefinedColors[index % predefinedColors.length],
            };
        }
        houseData[house].count += (sellPrice - buyPrice) * (percentage / 100);
    });

    const pieChartData = Object.values(houseData);

    const portfolioValue = transactions.reduce(
        (acc, transaction) => acc + (transaction.sellPrice - transaction.buyPrice) * (transaction.percentage / 100), 0
    );


    return (
        <View style={styles.container}>
            
            lol
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        padding: 16,
    },
    chartTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
        marginTop: 15,
    },
    smallerChartContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150
    },
    textContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    portfolioValue: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
    },
    transactionItem: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 10,
    },
    tabSelector: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    activeTab: {
        marginHorizontal: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
    inactiveTab: {
        marginHorizontal: 15,
        fontSize: 18,
        color: '#ccc',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
      },
});

export default BookingsTab;
