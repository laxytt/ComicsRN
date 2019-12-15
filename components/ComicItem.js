import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


function ComicItem(props) {
    console.log("))))))))))))))", props.item.img)

    return (
        <TouchableOpacity onPress={() => props.handleClick(props.item)}>
            <View key={props.item.num} style={styles.container}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: props.item.img }}
                    key={props.item.num}
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
        borderRadius: 7,
        marginHorizontal:40,
        marginVertical: 15,
        backgroundColor:'white'
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