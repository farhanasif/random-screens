import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const HomeScreen = props => {

    return (
        <View style={styles.container}>
            <Text>
                Go to Caller Screen
            </Text>
            <Button title="Go to Call List" onPress={()=>{
                props.navigation.navigate({routeName: 'Call'})
            }}
            />
            <Text>
                Go to Receiver Screen
            </Text>
            <Button title="Go to Receiver List" onPress={()=>{
                props.navigation.navigate({routeName: 'Receving'})
            }}
            />
            <Text>
                Go to Billing Screen
            </Text>
            <Button title="Go to billing" onPress={()=>{
                props.navigation.navigate({routeName: 'Bill'})
            }}
            />
            <Text>
                Go to Receiving Balance
            </Text>
            <Button title="Go to Receiving Balance" onPress={()=>{
                props.navigation.navigate({routeName: 'RecevingBalance'})
            }}
            />
            <Text>
                Go to Reports
            </Text>
            <Button title="Reports" onPress={()=>{
                props.navigation.navigate({routeName: 'ReportGuest'})
            }}
            />            
            {/* <View style={styles.ScreenButtonView}>
                <TouchableOpacity
                style={styles.ButtonOne}
                onPress={()=>{
                    props.navigation.navigate({routeName: 'Call'})
                }}
                >
                    <Feather 
                        name="phone-outgoing"
                        size={58}
                        color= '#0083B0'
                    />
                    <Text>
                        Go to Calls
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ScreenButtonView}>
                <TouchableOpacity
                style={styles.ButtonOne}
                onPress={()=>{
                    props.navigation.navigate({routeName: 'Call'})
                }}
                >
                    <Feather 
                        name="phone-outgoing"
                        size={58}
                        color= '#0083B0'
                    />
                    <Text>
                        Go to Calls
                    </Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    ScreenButtonView: {
        flexDirection: 'column',
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center'
        },
    ButtonOne: {
        color: "#0083B0",
        },

    })