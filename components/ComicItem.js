import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


function ComicItem(props) {
    const { item } = props;
    const { num, title, img } = props.item;
    return (
        <TouchableOpacity onPress={() => props.handleClick(item)}>
            <View key={num} style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: img }}
                    key={num}
                />
            </View >
        </TouchableOpacity>
    )
}

export default ComicItem

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        borderWidth: 1,
        borderRadius: 35,
        marginHorizontal: 40,
        marginVertical: 15,
        backgroundColor: 'white',
        elevation: 300
    },
    title: {
        fontSize: 20,
        width: 80 + "%",
        textAlign: 'center'

    },
    image: {
        width: 80 + '%',
        height: 150,
        resizeMode: 'contain',
        marginVertical: 10,
    }
})