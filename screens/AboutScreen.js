import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class AboutScreen extends React.Component {
    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container} >
                <Text></Text>
            </View>
        );
    }
}

AboutScreen.navigationOptions = {
    headerTitle: 'XKCD',
    headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
        fontSize: 35,
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    image: {
        width: 100 + '%',
        height: 100 + '%',
        resizeMode: 'contain',
    }
});
