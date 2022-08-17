import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Icon_Down, Icon_Up } from '../Icons/icon';

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



// Пока в разработке
export const RadioButton_menu = () => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState('');

    if (open) {
        return (
            <View>
                <View style={styles.Container_down_logo}>
                    <Icon_Up
                        size={18}
                        style={styles.Logo_drawer_menu_black}
                        setOpen={setOpen}
                    />
                </View>
                <View style={styles.container1}>
                    <View>
                        {props.map(res => {
                            return (
                                <View key={res.key} style={styles.container}>
                                    <Text style={styles.radioText}>{res.text}</Text>
                                    <TouchableOpacity
                                        style={styles.radioCircle}
                                        onPress={() => {
                                            setState(res.key);
                                        }}>
                                        {state === res.key && <View style={styles.selectedRb} />}
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                        <Text> Selected: {state} </Text>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.Container_down_logo}>
            <Icon_Down
                size={18}
                style={styles.Logo_drawer_menu_black}
                setOpen={setOpen}
            />
        </View>
    );

}
const styles = StyleSheet.create({
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