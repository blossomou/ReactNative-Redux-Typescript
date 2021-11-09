import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';


const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Text>Home Screen</Text>
            </View>
            <View style={styles.body}>
                <Button title="Logout" onTap={() => console.log('Logout')} />
            </View>

            <View style={styles.footer}></View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigation: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 9,
    },
    loginView: {
        marginTop: 200,
        marginLeft: 20,
        marginRight: 20,
        height: 400,
    },
    footer: {
        flex: 1,
    },
});