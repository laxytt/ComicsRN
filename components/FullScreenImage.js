import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';




function FullScreenImage(props) {
    return (
        <View style={styles.container}>
            
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

export default FullScreenImage

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