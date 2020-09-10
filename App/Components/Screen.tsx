import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { BackgroundImage, ContentView, Images } from '../Components';

const Screen = ({
    children,
    image,
    top,
    testID,
    accessibilityLabel,
}: {
    children: React.ReactNode;
    image: keyof typeof Images;
    top: React.ReactNode;
    testID?: string;
    accessibilityLabel?: string;
}) => (
    <View
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        style={{ flex: 1, flexDirection: 'column' }}>
        <BackgroundImage image={image}>
            <SafeAreaView
                style={{
                    flex: 1,
                }}>
                {top || top}
                <ScrollView
                    style={{
                        flex: 1,
                    }}
                    contentInsetAdjustmentBehavior="automatic"
                    testID={`${testID}-scrollview`}>
                    <ContentView>{children}</ContentView>
                </ScrollView>
            </SafeAreaView>
        </BackgroundImage>
    </View>
);

export default Screen;
