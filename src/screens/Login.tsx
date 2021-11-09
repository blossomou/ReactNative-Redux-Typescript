import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Button from '../components/Button';
import TextField from '../components/TextField';

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.navigation}></View>
            <View style={styles.body}>
                <View style={styles.loginView}>
                    <TextField placeholder='Email Id' onTextChange={setEmail}/>
                    <TextField placeholder='Password' onTextChange={setPassword} isSecure={true}/>

                    <Button title="Login" onTap={() => console.log('working...')} />

                </View>
               
            </View>
           <View style={styles.footer}></View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigation:{
        flex: 2,
        backgroundColor: 'red'
    },
    body:{
        flex: 9
    },
    loginView:{
        marginTop: 200,
        marginLeft: 20,
        marginRight: 20,
        height: 400
    },
    footer:{
        flex: 1,
        backgroundColor: 'yellow'
    }
})
