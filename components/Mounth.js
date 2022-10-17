import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Icon_Down, Icon_Up } from '../Icons/icon';
import styles from '../Style/Style';
import { Icon_Left, Icon_Right } from '../Icons/icon';

const props = [
    {
        key: 'January',
        text: 'Январь',
    },
    {
        key: 'February',
        text: 'Февраль',
    },
    {
        key: 'April',
        text: 'Апрель',
    },
    {
        key: 'May',
        text: 'Май',
    },
    {
        key: 'June',
        text: 'Июнь',
    },
    {
        key: 'July',
        text: 'Июль',
    },
    {
        key: 'August',
        text: 'Август',
    },
    {
        key: 'September',
        text: 'Сентябрь',
    },
    {
        key: 'March',
        text: 'Март',
    },
    {
        key: 'October',
        text: 'Октябрь',
    },
    {
        key: 'November',
        text: 'Ноябрь',
    },
    {
        key: 'December',
        text: 'Декабрь',
    },
];

var numb = 7;


// Пока в разработкеs
export const Mounth = () => {

    const [Num, setNum] = useState(2);

    console.log(Num);

    const mounths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return (
        <View style={styles.cont2}>
            <Text style={styles.text_point_menu_2}>{mounths[Num]}</Text>
            <View style={styles.container_left_logo}>
                <Icon_Left
                    size={18}
                    style={styles.logo_left}
                    setNum={setNum}
                    Num={Num}
                />
            </View>
            <View style={styles.container_right_logo}>
                <Icon_Right
                    size={18}
                    style={styles.logo_right}
                    setNum={setNum}
                    Num={Num}
                />
            </View>
        </View>

    );
}
const styles1 = StyleSheet.create({
    container1: {
        position: 'absolute',
        width: 160,
        height: 105,
        left: -120,
        top: 30,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'silver',
    },
    container: {
        marginBottom: 4,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'silver'
    },
    radioText: {
        fontSize: 16,
        color: '#000',
        left: 15
    },
    radioCircle: {
        position: 'absolute',
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        right: 35
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: 'black',
    },
});