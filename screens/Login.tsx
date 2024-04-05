import React, { useState } from "react";
import { Alert, Button, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"; 

const image = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLNLhhaatfpfEp9Qy3QrF79r5JrdQ-enU8Q&s' };

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        Alert.alert('Login Information', `Username: ${username}\nPassword: ${password}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'gray'} barStyle="light-content"></StatusBar>
            <ImageBackground source={image} resizeMode="cover" style={styles.imagebackground}>
                <View style={styles.contentContainer}>
                    <Image source={{ uri: 'https://lh3.googleusercontent.com/rSJmFBrBVyzp0tj-4JxyPK-3Wpv0A4lGRZ_IDmiXR63FZnRGZdbZXy15FjHPDRgr8wS5TmbFxHlX8aH2rIVXSqm53WHyeTg5ijNF-wK024R0=e365-w800' }} style={styles.img} />
                    <Text style={styles.text}>REGISTER</Text>
                    <View style={styles.form}>
                        <View style={styles.group}>
                            <TextInput
                                placeholder="USERNAME"
                                style={styles.input}
                                onChangeText={text => setUsername(text)}
                                value={username}
                            />
                        </View>
                        <View style={styles.group}>
                            <TextInput
                                placeholder="PASSWORD"
                                style={styles.input}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button title="LOGIN" onPress={handleLogin} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imagebackground:{
        flex:1,
        justifyContent:'center'
    },
    img:{
        width: 374,
        height: 250,
    },
    contentContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },

    text:{
        marginStart: 300,
        textAlign:'right'
    },
    form:{
        
       alignSelf:'flex-start'
    },
    group:{
        flexDirection:'row',
        alignItems:'center',
    },
    input:{
        marginStart:22,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        width: 374,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    button:{
        marginStart:22,
    }

   
})
export default Login;