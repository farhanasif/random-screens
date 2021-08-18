import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Checkbox, DefaultTheme, Provider as PaperProvider, TextInput, Title } from 'react-native-paper';

const LoginScreen = props => {

    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);
    const [checked, setChecked] = useState('checked');

    const handleSecure = () => {
        secure? setSecure(false): setSecure(true);
    }

    const handleChecked = () => {
        checked =='checked'? setChecked('unchecked') : setChecked('checked');
    }
 
    return (
        <PaperProvider theme={theme}>
            
            <View style={styles.containerWrap}>

                <Title>Sign In</Title>
                <View style={styles.loginForm}>
                    <TextInput
                        style={styles.TextInputStyle1}
                        theme={{roundness: 27}}
                        mode='outlined'
                        label="Email"
                        placeholder="admin@gmail.com"
                        value={text}
                        right={<TextInput.Icon name="email" color="#A6A6A6"/>}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <View style={styles.loginForm}>
                    <TextInput
                        theme={{roundness: 27}}
                        style={styles.TextInputStyle1}
                        mode='outlined'
                        label="Password"
                        secureTextEntry={secure}
                        right={<TextInput.Icon name="eye" color="#A6A6A6" onPress={()=>{handleSecure()}}/>}
                        onChangeText={password => setPassword(password)}
                    />
                </View>
                <View style={styles.loginFormOptionWraper}>
                    <Checkbox.Item 
                        label="Remember Me" 
                        status={checked} 
                        color="#399DFF"
                        position="leading"
                        onPress={()=>{handleChecked()}}
                    />
                    <Button
                        mode="text"
                        color="#A6A6A6"
                        uppercase={false}
                        onPress={() => console.log('Pressed')}>
                        Forgot Password?
                    </Button>
                </View>
                <View style={styles.loginForm}>
                    <Button 
                        style={{
                            marginTop: 20,
                            height: 50,
                            marginLeft: 0,
                            marginRight: 0,
                            justifyContent: 'center',
                            text: '#ffff'
                            }}
                        dark
                        theme={{roundness: 30}}   
                        icon="login"
                        color="#399DFF"
                        mode="contained" 
                        onPress={() => props.navigation.navigate({routeName: 'Home'})}
                    >Sign In
                    </Button>
                </View>

            </View>

        </PaperProvider>
    )
};

export default LoginScreen;

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
    containerWrap: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#ffff',
        paddingHorizontal: 30,
    }, 
    TextInputStyle1: {
        backgroundColor: '#FFFFFF',
        
        },
    loginForm: {
        paddingVertical: 10,
        },
    loginFormOptionWraper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
    })