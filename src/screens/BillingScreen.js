import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const BillingScreen = props => {

    return (
        <View style={styles.container}>
            <Text>
                This is Billing Screen
            </Text>
            <Button title="Go to Home" onPress={()=>{
                props.navigation.navigate({routeName: 'Home'})
            }}/>
        </View>
    );
};

export default BillingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    })