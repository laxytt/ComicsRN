import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';




function ComicItem(props) {
    const noImage = "../img/no-image-available.jpg";
    console.log("This is props.item.img", props.item.img);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.item.title}</Text>
            <Image
                style={styles.image}
                source={{ uri: props.item.img }}
                key={props.item.num}
            />
            {/* <FlatList
                data={props.item}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.num}
            /> */}
        </View >
    )
}

export default ComicItem

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        borderWidth:1,
        borderRadius:7,
        marginHorizontal:15,
        marginVertical:15

    },
    title: {
        fontSize: 20,
        width: 80 + "%",
        textAlign:'center'
        
    },
    image: {
        width: 80 + '%',
        height: 150,
        resizeMode: 'contain',
        marginVertical:10
    }
})