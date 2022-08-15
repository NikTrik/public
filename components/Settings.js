import * as React from 'react';
import { View, Text, Button } from 'react-native';
//пустое окно поля Настройки, было нужно для создания меню навигации

const Settings = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
        </View>
    );
}

export default Settings;