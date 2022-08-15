import * as React from 'react';
import { View, Text, Button } from 'react-native';
//пустое окно поля Новости, было нужно для создания меню навигации

const News = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>News Screen</Text>
        </View>
    );
}

export default News;