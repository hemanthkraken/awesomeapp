import React, { useContext, useMemo, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { CoinComponent, Coin, Screen } from '../Components';

import coins from '../Data/response_1593642744260.json';

import { styles } from '../Common';
import AppContext from '../Services/AppContext';

const filterCoins = (
    coinList: Coin[],
    showBitcoin: boolean,
    showWinners: boolean,
    showLosers: boolean,
) =>
    coinList
        .filter(
            (coin) =>
                !showBitcoin ||
                (showBitcoin && coin.name.toLowerCase().includes('bitcoin')),
        )
        .filter(
            (coin) =>
                !showWinners ||
                (showWinners && coin.price_change_percentage_24h > 0),
        )
        .filter(
            (coin) =>
                !showLosers ||
                (showLosers && coin.price_change_percentage_24h <= 0),
        );

function Dashboard() {
    const { onlyShowBitcoin, onlyShowLosers, onlyShowWinners } = useContext(
        AppContext,
    );
    const coinsToRender = filterCoins(
        coins,
        onlyShowBitcoin,
        onlyShowWinners,
        onlyShowLosers,
    );

    return (
        <Screen
            testID="dashboard"
            accessibilityLabel="dashboard"
            image="graffiti"
            top={
                <View style={styles.titleWrapper}>
                    <Text
                        testID="dashboard-title"
                        accessibilityLabel="dashboard-title"
                        style={styles.h1}>
                        {coinsToRender.length || '-'} coins
                    </Text>
                </View>
            }>
            {coinsToRender.map((coin: Coin) => (
                <CoinComponent key={coin.name} coin={coin} />
            ))}
        </Screen>
    );
}

export default Dashboard;
