import React from 'react';
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import { Post } from './Post';
import { StatusBar } from 'expo-status-bar';
//Отрисовка плиток

export default function Tile({ Result }) {
    return (
        <View>
            <FlatList
                blurRadius={1}
                data={Result}
                extraData={Result}
                renderItem={({ item }) =>
                    <Post title={item.fullname} CategoryId={item.category_id} un={item.Un_of_meas} color={item.color} />}
            />
            <StatusBar theme="auto" />
        </View>
    )
}