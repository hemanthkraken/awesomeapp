import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { styles } from '../Common';

const ContentView = ({ children }: { children: React.ReactNode }) => (
    <ScrollView
        style={{}}
        contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: 20,
            paddingRight: 20,
        }}>
        <View style={styles.contentView}>{children}</View>
    </ScrollView>
);

export default ContentView;
