import * as React from 'react';
import { View, Text, Button } from 'react-native';
//пустое окно поля Поиск по клиентам, было нужно для создания меню навигации


const Find = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Find screen</Text>
        </View>
    );
}

export default Find;