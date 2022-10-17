import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Icon_Refresh, Icon_Settings, Icon_Menu, Icon_Down, Icon_Left, Icon_Right } from '../Icons/icon';
import styles from '../Style/Style';
import { Settings_Menu } from './Settings_Menu';
import { Button } from 'react-native-paper';
import { RadioButton_menu } from './RadioButton_menu';
import { Mounth } from './Mounth';

export default function Header_Tile({ navigation, title }) {
    return (
        <View style={{ height: 100 }}>

            <View style={styles.main} >

                <View style={styles.container}>
                    <Icon_Menu
                        size={30}
                        style={styles.Logo_Menu}
                        navigation={navigation}
                    />
                </View>

                {/* <View style={styles.Icon_Refresh_container}>
                    <Icon_Refresh
                        size={22}
                        style={styles.Logo_drawer_menu}
                        navigation={navigation}
                    />
                </View> */}

                <Text style={styles.text}>{title}</Text>

                <View style={{ top: "100%", height: 40, width: "100%" }}>

                    <View style={styles.cont}>

                        <Text style={styles.text_point_menu}>Дашборд</Text>

                        <View style={styles.Container_down_logo}>

                            <RadioButton_menu />

                        </View>

                    </View>

                    <Mounth />

                </View>

                <View style={styles.Container_settings_menu}>
                    <Settings_Menu />
                </View>

            </View>

        </View>
    )
}
