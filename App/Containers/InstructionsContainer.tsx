import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Markdown from 'react-native-simple-markdown';

import markdown from '../MARKDOWN';

const InstructionsContainer = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    testID="instructions"
                    accessibilityLabel="instructions"
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Markdown styles={markdownStyles}>
                        {markdown.instructions}
                    </Markdown>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const markdownStyles = StyleSheet.create({
    heading1: {
        fontSize: 38,
        marginBottom: 20,
        textAlign: 'center',
    },
    heading2: {
        fontSize: 30,
        marginBottom: 10,
    },
    heading3: {
        fontSize: 24,
    },
    text: {
        color: '#555555',
    },
    strong: {
        fontWeight: 'bold',
    },
});

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        height: '100%',
        width: '100%',
        paddingHorizontal: 20,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default InstructionsContainer;
