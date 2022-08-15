import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Icon_Refresh, Icon_Settings, Icon_Menu, Icon_Down, Icon_Left, Icon_Right } from '../Icons/icon';
import styles from '../Style/Style';
import { Settings_Menu } from './Settings_Menu';

export default function Header_Tile({ navigation, title }) {
    return (
        <View >
            <View style={styles.main} >
                <View style={styles.container}>
                    <Icon_Menu
                        size={30}
                        style={styles.Logo_Menu}
                        navigation={navigation}
                    />
                </View>
                <View style={styles.Container_settings_menu}>
                    <Settings_Menu />
                </View>
                <View style={styles.Icon_Refresh_container}>
                    <Icon_Refresh
                        size={22}
                        style={styles.Logo_drawer_menu}
                        navigation={navigation}
                    />
                </View>
                <Text style={styles.text}>{title}</Text>
                {/* <View style={{ top: "100%", height: 40, width: "100%" }}>
                    <View style={styles.cont}>
                        <View style={styles.Container_down_logo}>
                            <Icon_Down size={18} style={styles.Logo_drawer_menu_black} />
                        </View>
                        <Text style={styles.text_point_menu}>Дашборд</Text>
                    </View>
                    <View style={styles.cont2}>
                        <View style={styles.container_left_logo}>
                            <Icon_Left size={18} style={styles.logo_left} />
                        </View>
                        <Text style={styles.text_point_menu_2}>Август</Text>
                        <View style={styles.container_right_logo}>
                            <Icon_Right size={18} style={styles.logo_right} />
                        </View>
                    </View>
                </View> */}
            </View>
        </View>
    )
}
