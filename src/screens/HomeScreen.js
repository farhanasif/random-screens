import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, List, Provider as PaperProvider } from 'react-native-paper';

const HomeScreen = props => {

    return (
        <PaperProvider theme={theme}>
        <View style={styles.container}>
            
            <List.Section>

                <List.Subheader>Browse Different Screens</List.Subheader>

                <List.Item 
                    title="Go to Caller Screen" 
                    left={() => <List.Icon icon="chevron-right" />}
                    onPress={()=>{props.navigation.navigate({routeName: 'Call'})}} 
                />

                <List.Item
                    title="Go to Receiver Screen"
                    left={() => <List.Icon color="#000" icon="chevron-right" />}
                    onPress={()=>{props.navigation.navigate({routeName: 'Receving'})}}
                />

                <List.Item 
                    title="Bill" 
                    left={() => <List.Icon icon="chevron-right" />}
                    onPress={()=>{props.navigation.navigate({routeName: 'Bill'})}} 
                />

                <List.Item
                    title="Go to Receving Balance"
                    left={() => <List.Icon color="#000" icon="chevron-right" />}
                    onPress={()=>{props.navigation.navigate({routeName: 'RecevingBalance'})}}
                />
                <List.Item
                    title="Go to Reports"
                    left={() => <List.Icon color="#000" icon="chevron-right" />}
                    onPress={()=>{props.navigation.navigate({routeName: 'ReportGuest'})}}
                />
                
            </List.Section>
            
        </View>
        </PaperProvider>
    );
};

export default HomeScreen;

const theme = {
    ...DefaultTheme,
    roundness: 4,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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