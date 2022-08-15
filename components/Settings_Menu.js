import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Style/Style';
import {
    Icon_Info,
    Icon_Pencil,
    Icon_Paint_Roller,
    Icon_Sort,
    Icon_Trash,
    Icon_Plus
} from '../Icons/icon';
//Выпадающее меню кнопки Настройки, реализовано с помощью библиотеки react-native-paper

export const Settings_Menu = () => {
    const [visible, setVisible] = React.useState(false);// visibale хранит значение true  - если меню открыто
    //false - если закрыто, setVisible - изменяет значение при взаимодействии с меню

    const openMenu = () => setVisible(true);// Открыть меню

    const closeMenu = () => setVisible(false); // Закрыть меню

    return (
        <Provider>
            <View>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Ionicons
                            name="ios-settings-sharp"
                            size={22}
                            color='white'
                            style={styles.Logo_drawer_menu}
                            onPress={openMenu}
                        />}
                    style={{ position: 'absolute', left: -207, top: 30, width: 235 }}
                >
                    <Menu.Item
                        icon={() => <Icon_Pencil size={18} color='black' style={styles.Logo_Settings_menu} />}
                        style={{
                            borderBottomColor: 'silver',
                            borderBottomWidth: 1,
                            height: 30
                        }}
                        titleStyle={{ width: '100%', right: 30 }}
                        onPress={() => { closeMenu() }} title="Переименовать"
                    />
                    <Menu.Item
                        icon={() => <Icon_Sort size={18} style={styles.Logo_Settings_menu} />}
                        style={{
                            borderBottomColor: 'silver',
                            borderBottomWidth: 1,
                            height: 30
                        }}
                        titleStyle={{ width: '100%', right: 30 }}
                        onPress={() => { closeMenu() }} title="Сортировать"
                    />
                    <Divider />
                    <Menu.Item
                        icon={() => <Icon_Plus size={18} style={styles.Logo_Settings_menu} />}
                        style={{
                            borderBottomColor: 'silver',
                            borderBottomWidth: 1,
                            height: 30
                        }}
                        titleStyle={{ width: '100%', right: 30 }}
                        onPress={() => { closeMenu() }} title="Добавить плитку"
                    />
                    <Menu.Item
                        icon={() => <Icon_Paint_Roller size={18} style={styles.Logo_Settings_menu} />}
                        style={{
                            borderBottomColor: 'silver',
                            borderBottomWidth: 1,
                            height: 30
                        }}
                        titleStyle={{ width: '100%', right: 30 }}
                        onPress={() => { closeMenu() }} title="Задать цвет категории"
                    />
                    <Menu.Item
                        icon={() => <Icon_Trash size={18} style={styles.Logo_Trash_orange} />}
                        style={{
                            borderBottomColor: 'silver',
                            borderBottomWidth: 1,
                            height: 30
                        }}
                        titleStyle={{ width: '100%', right: 30, color: '#ef8885' }}
                        onPress={() => { closeMenu() }} title="Удалить"
                    />
                </Menu>
            </View>
        </Provider>
    );
};



