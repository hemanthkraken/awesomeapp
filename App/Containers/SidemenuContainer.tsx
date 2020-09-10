import React, { useCallback, useMemo, useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert,
    Text,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Markdown from 'react-native-simple-markdown';

import { Button } from '../Components';
import markdown from '../MARKDOWN';

function App() {
    const [counter, setCounter] = useState(0);

    const [intervalRef, setIntervalRef] = useState(
        {} as ReturnType<typeof setInterval>,
    );

    const getAnswer = useCallback(() => {
        const interval = setInterval(() => {
            setCounter((cpt) => cpt + 1);
        }, 200);
        setIntervalRef(interval);
    }, []);

    useEffect(() => {
        if (counter > 15) {
            setCounter(0);
            clearInterval(intervalRef);
            Alert.alert(`${42}`);
        }
    }, [counter, intervalRef]);

    const component = useMemo(
        () => (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        testID="sidemenu"
                        accessibilityLabel="sidemenu"
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Markdown styles={markdownStyles} testID={'sideBarMenuContent'}>
                            {markdown.sidemenu}
                        </Markdown>
                        <Button style={{ marginTop: 50 }} onPress={getAnswer} testID={'sidemenuButton'}>
                            Get the ultimate answer
                        </Button>
                        {counter > 0 && (
                            <Text
                                style={[
                                    markdownStyles.heading3,
                                    { marginTop: 50, marginLeft: 20 },
                                ]}>
                                Thinking {new Array(counter).fill('.').join('')}
                            </Text>
                        )}
                    </ScrollView>
                </SafeAreaView>
            </>
        ),
        [getAnswer, counter],
    );
    return component;
}

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
        textAlign: 'center',
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
        paddingHorizontal: 10,
    },
});

export default App;
