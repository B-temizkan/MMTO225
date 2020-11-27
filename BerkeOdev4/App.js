import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

export default App = () => {
    const [sehir, setSehir] = useState([
        { name: 'Marmara B�lgesi', id: '1' },
        { name: 'Ege B�lgesi', id: '2' },
        { name: 'Akdeniz B�lgesi', id: '3' },
        { name: 'Karadeniz B�lgesi', id: '4' },
        { name: '�� Anadolu B�lgesi', id: '5' },
        { name: 'Do�uAnadolu B�lgesi ', id: '6' },
        { name: 'G�neydo�u Anadolu B�lgesi ', id: '7' },
    ]);
    
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={1}
                data={sehir}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>

                )}
            />
            <ScrollView style={styles.scrollView}>

                <Text style={styles.text}>
                </Text>
            </ScrollView>
        </View>



    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0000',



    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: '#ffff00',
        fontSize: 24,
        alignContent: 'center',
        fontWeight: 'bold',


    },
    scrollView: {
        backgroundColor: 'pink',
        width: 100,
        height: 100,
        flex: 1,

    },
    text: {
        fontWeight: 'bold',
    }
})