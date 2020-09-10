import React, { useCallback } from 'react';
import { Alert, Image, Text, View, StyleSheet } from 'react-native';

import { styles } from '../Common';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {
    h1,
    h2,
    h3,
    h4,
    image,
    imageWrapper,
    left,
    right,
    row,
    win,
    loss,
    wrapper,
} = styles;

export type Coin = {
    name: string;
    current_price: number;
    symbol: string;
    price_change_percentage_24h: number;
    image: string;
};

const sanitize = (name: string) => name.replace(/ Coin$/, '');

const isWin = (coin: Coin) => coin.price_change_percentage_24h >= 0;

const fakeCoins = ['bsv'];

const CoinComponent = ({ coin }: { coin: Coin }) => {
    const { name, symbol, current_price } = coin;
    const tapCoin = useCallback(() => {
        if (!fakeCoins.includes(symbol.toLowerCase())) {
            Alert.alert(`Good choice:\n ${name} @ $${current_price}!`);
        } else {
            throw new Error(`Bad choice: ${name} isn't even real!`);
        }
    }, [name, current_price, symbol]);

    const coinID = `Coin-${coin.symbol}`;

    return (
        <TouchableOpacity
            onPress={tapCoin}
            style={wrapper}
            testID={coinID}
            accessibilityLabel={coinID}>
            <View style={left}>
                <View style={imageWrapper}>
                    <Image
                        source={{
                            uri: coin.image,
                        }}
                        style={image}
                        testID={`${coinID}-image`}
                        fadeDuration={0}/>
                </View>
            </View>
            <View style={right}>
                <View style={row}>
                    <Text
                        testID={`${coinID}-name`}
                        accessibilityLabel={`${coinID}-name`}
                        style={[h2, { maxWidth: 150 }]}>
                        {sanitize(coin.name)}
                    </Text>
                    <Text
                        testID={`${coinID}-price`}
                        accessibilityLabel={`${coinID}-price`}
                        style={h3}>
                        ${coin.current_price}
                    </Text>
                </View>
                <View style={row}>
                    <Text
                        testID={`${coinID}-symbol`}
                        accessibilityLabel={`${coinID}-symbol`}
                        style={h3}>
                        {coin.symbol.toUpperCase()}
                    </Text>
                    <Text
                        testID={`${coinID}-percentage`}
                        accessibilityLabel={`${coinID}-percentage`}
                        style={[h3, isWin(coin) ? win : loss]}>
                        {(isWin(coin) ? '+' : '') +
                            coin.price_change_percentage_24h.toFixed(2)}
                        %
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export { CoinComponent };
