import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    StyleProp,
    TextStyle,
} from 'react-native';

import { colors } from '../Common';

type ButtonProps = {
    onPress: () => void;
    children: string;
    style: StyleProp<TextStyle>;
    testID: string;
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: colors.themeColor,
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
});

export default ({ onPress, children, style, testID }: ButtonProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} >
        <Text style={styles.text} testID={testID}>{children}</Text>
    </TouchableOpacity>
);
