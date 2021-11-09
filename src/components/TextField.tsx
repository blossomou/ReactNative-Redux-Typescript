import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'


interface TextFieldProps{
    placeholder: string;
    isSecure?: boolean;
    onTextChange: Function

}

const TextField: React.FC<TextFieldProps> = ({placeholder, isSecure = false, onTextChange}) => {
    const [isPassword, setIsPassword] = useState(false);
    
    useEffect(() => {
      setIsPassword(isSecure)
    }, []);

    return (
        <View style={styles.container}>
            <TextInput style={styles.textField} placeholder={placeholder} 
                secureTextEntry={isSecure} onChangeText={(text) => onTextChange(text)} />
            
            {isSecure && (<TouchableOpacity style={{justifyContent: 'center'}} onPress={() => setIsPassword(!isPassword)}>
                <Image style={{width: 60, height: 30}} source={isSecure ? require('../images/show.png') : require('../images/hide.png') }/>
            </TouchableOpacity>)}
        </View>
    )
}

export default TextField

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#CBCBCB',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        paddingLeft: 20,
        paddingRight: 10,
    },
    textField: {
        flex: 1,
        height: 50,
        fontSize: 20,
        color: '#000',
    },
})
