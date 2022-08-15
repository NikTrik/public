import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Icon_Refresh, Icon_Settings, Icon_Menu } from '../Icons/icon';
import styles from '../Style/Style';


export default function Header({ navigation, title }) {
    return (
        <View style={styles.main} >
            <View style={styles.container}>
                <Icon_Menu
                    size={30}
                    style={styles.Logo_Menu}
                    navigation={navigation}
                />
            </View>
            {/* <View style={styles.Container_settings_menu}>
                <Icon_Settings
                    size={22}
                    style={styles.Logo_drawer_menu}
                />
            </View> */}
            {/* <View style={styles.Icon_Refresh_container}>
                <Icon_Refresh
                    size={22}
                    style={styles.Logo_drawer_menu}
                />
            </View> */}
            <Text style={styles.text}>{title}</Text>

        </View>
    )
}
