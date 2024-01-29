import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import SvgUri from 'react-native-svg-uri';
import { SVGURL } from "../../common/svgImg";

export const LoginScreen = () => {
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');
    return (
        <View style={styles.container}>
            <Text>
                Log in to Spotify
            </Text>
            <View style={styles.bodersty}>
                <SVGURL svgurl='https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg' />
                <Text style={styles.textColor}>Continue with Google</Text>
            </View>
            <View style={styles.bodersty}>
                <SVGURL svgurl='https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg' />
                <Text style={styles.textColor}>Continue with Facebook</Text>
            </View>
            <View style={styles.bodersty}>
                <SVGURL svgurl='https://accounts.scdn.co/sso/images/new-apple-icon.e356139ea90852da2e60f1ff738f3cbb.svg' />
                <Text style={styles.textColor}>Continue with Apple</Text>
            </View>
            <View style={styles.bodersty}>
                <Text style={styles.textColor}>Continue with Phone Number</Text>
            </View>
            <Text style={styles.horzontalLine}>
                {'\n'}
            </Text>
            <View>
                <View>
                    <Text style={styles.textColor}>Email or username</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Email or username"
                        placeholderTextColor={'white'}
                        keyboardType='email-address'
                    />
                </View>
                <View>
                    <Text style={styles.textColor}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Password"
                        placeholderTextColor={'white'}
                        keyboardType='visible-password'
                    />
                </View>
                <Pressable style={{  alignItems:'center',}}>
                    <Text style={{ backgroundColor: '#1ed760', color: 'black', padding: 10, borderRadius: 15, width: '80%',textAlign:'center', margin:10 }}>Log In</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodersty: {
        flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 20, borderColor: 'white', padding: 10, margin: 10
    },
    textColor: {
        color: 'white'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
        color: 'white',
        borderRadius:10
    },
    horzontalLine: { borderTopWidth: 1, borderColor: 'white', marginTop: 20 }
});