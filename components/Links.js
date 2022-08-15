import * as React from 'react';
import { View, Text, Button } from 'react-native';
//пустое окно поля Ссылки, было нужно для создания меню навигации

const Links = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Links screen</Text>
        </View>
    );
}

export default Links;