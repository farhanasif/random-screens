import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ReceivingBalanceScreen = props => {

    return (
        <View style={styles.container}>
            <Text>
                This is Receving Balance Screen
            </Text>
            <Button title="Go to Billing" onPress={()=>{
                props.navigation.navigate({routeName: 'Bill'})
            }}
            />
        </View>
    );
};

export default ReceivingBalanceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    })