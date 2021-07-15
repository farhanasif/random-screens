import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import callerData from './CallerData';

const ReceiverScreen = props => {

    return (
        <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <View style={styles.ScreenButton}>
                    <View style={styles.ScreenButtonView}>
                        <TouchableOpacity
                        style={styles.ButtonOne}
                        onPress={()=>{
                            props.navigation.navigate({routeName: 'Call'})
                        }}
                        >
                            <Feather 
                                name="phone-outgoing"
                                size={28}
                                color= '#0083B0'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ScreenButtonViewRecv}>
                        <TouchableOpacity
                        style={styles.ButtonOne}
                        onPress={()=>{
                            props.navigation.navigate({routeName: 'Receiving'})
                        }}
                        >
                            <Feather 
                            name="phone-incoming"
                            size={28}
                            color= 'green'
                            />
                        </TouchableOpacity>
                    </View>
                    {/* <Button title="Go to Billing" onPress={()=>{
                        props.navigation.navigate({routeName: 'Bill'})
                    }}
                    /> */}
            </View>
            <SafeAreaView backgroundColor='#ffff'>

            {/* CallList */}
            <View styles={styles.callListWraper}>
                <Text style={{fontSize: 15, paddingVertical: 10, alignSelf:'center'}}>Received Calls</Text>
                {/* Call List Start */}
                {
                    callerData.map((items, key)=> (

                        <View style={styles.callListCardWraper}>
                            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                                <View style={{paddingHorizontal: 10, justifyContent:'center'}}>
                                <Feather 
                                    name="user"
                                    size={28}
                                    color= '#1d3557'
                                    />
                                </View>
                                <View style={{paddingHorizontal: 5}}>
                                    <View>
                                        <Text style={{fontSize:20}}>{items.name? items.name: items.phone}</Text>
                                    </View>
                                    <View style={{flexDirection:'row', alignContent: 'center', alignItems: 'center', marginTop: 5}}>
                                        <Text style={{paddingRight:5, color: 'gray'}}>Duration</Text>
                                        <MaterialCommunityIcons 
                                                name="checkbox-blank-circle"
                                                size={5}
                                            />
                                        <Text style={{paddingHorizontal:5, color: 'gray'}}>{items.duration}</Text>
                                    </View>
                                    <View style={{flexDirection:'row', alignContent: 'center', alignItems: 'center', marginTop: 2, marginBottom: 5}}>
                                        <Text style={{paddingRight:4, color: 'gray'}}>Call Cost</Text>
                                        <MaterialCommunityIcons 
                                                name="checkbox-blank-circle"
                                                size={5}
                                            />
                                        <Text style={{paddingHorizontal:5, color: 'gray'}}>{items.call_cost}</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row', alignItems: 'flex-end', marginTop: 2, marginBottom: 5}}>
                                    <MaterialCommunityIcons 
                                                name="clock-outline"
                                                size={20}
                                                color='gray'
                                    />
                                    <Text style={{paddingHorizontal:2, color:'gray'}}>{items.call_time}</Text>
                                </View>
                                
                            </View>
                        </View>
                    ))
                }

                {/* Call List Ends */}
            </View>
            </SafeAreaView>


        </ScrollView>
        
        <View style={styles.ScreenButton}>

                    <View style={styles.ScreenButtonView}>
                        <TouchableOpacity
                        style={styles.ButtonOne}
                        onPress={()=>{
                            props.navigation.navigate({routeName: 'Bill'})
                        }}
                        >
                            <View>
                                <Feather 
                                    name="zap"
                                    size={20}
                                    color= '#a8dadc'
                                />
                            </View>
                            <View style={styles.IconView}>
                             <Text style={styles.IconText}>Bill</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ScreenButtonView}>
                        <TouchableOpacity
                        style={styles.ButtonOne}
                        onPress={()=>{
                            props.navigation.navigate({routeName: 'RecevingBalance'})
                        }}
                        >
                            <View>
                                <Feather 
                                    name="pie-chart"
                                    size={20}
                                    color= '#a8dadc'
                                />
                            </View>
                            <View style={styles.IconView}>
                             <Text style={styles.IconText}>Balance</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
        </View>
    </View>
    );
};

export default ReceiverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
        },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffff',
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: 'center'
        }, 
    ScreenButton: {
        flexDirection:'row',
        justifyContent: 'space-around',
        backgroundColor: '#ffff',
        paddingTop: 15,
        paddingBottom: 12,
        marginTop: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: '#f1faee'
    },
    ScreenButtonView: {
        flexDirection: 'column',
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center'

    },
    IconView:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconText: {
        color: '#264653'
    },
    ScreenButtonViewRecv: {
        flexDirection: 'row',
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',

    },
    ButtonOne: {
        color: "#0083B0",
    },
    ButtonTextOne: {
        color: "blue",
        fontSize: 20
    }, 
    callListWraper : {
        paddingHorizontal: 20,
        backgroundColor: '#ffff'
    },
    callListCardWraper: {
        backgroundColor: '#ffff',
        borderRadius: 12,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    }
    })