import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { View } from 'react-native';
import styles from '../Style/Style';
import { Settings_Menu } from '../components/Settings_Menu';
import Create_All_Database from '../Database/Create_All_Database';
import { RadioButton_menu } from '../components/RadioButton_menu'


//Содержит все иконки в приложении с использованием библиотеки expo-vector-icons

export function Icon_Back({ navigation, style, size }) {
    return (
        <View style={styles.Container_close_drawer_menu_logo}>
            <Ionicons
                name="arrow-back"
                size={size}
                style={style}
                onPress={() => navigation.closeDrawer()}
            />
        </View>
    )
}

//Иконка раздела Поиск по клиентам
export function Icon_Find({ style, size }) {
    return (
        <FontAwesome
            name="search"
            size={size}
            style={style}
        />
    );
}

//Иконка раздела Дашборд
export function Icon_Dashboard({ style, size }) {
    return (
        <AntDesign
            name="table"
            size={size}
            style={style}
        />
    );
}

//Иконка раздела Новости
export function Icon_News({ style, size }) {
    return (
        <FontAwesome5
            name="newspaper"
            size={size}
            style={style}
        />
    );
}

//Иконка раздела Настройки
export function Icon_Settings({ style, size }) {
    return (
        <Ionicons
            name="ios-settings-sharp"
            size={size}
            style={style}
            onPress={() => { return (<Settings_Menu />) }}
        />
    );
}

//Иконка раздела Ссылки
export function Icon_Info({ style, size }) {
    return (
        <MaterialCommunityIcons
            name="information"
            size={size}
            style={style}
        />
    );
}

//Иконка раздела Выйти
export function Icon_Exit({ style, size }) {
    return (
        <MaterialIcons
            name="exit-to-app"
            size={size}
            style={style}
        />
    );
}

//Иконка кнопки обновление данных
export function Icon_Refresh({ style, size, navigation }) {
    return (
        <FontAwesome
            name="refresh"
            size={size}
            style={style}
            onPress={() => Create_All_Database()}
        />
    );
}

//Иконка Конпки бокового меню навигации
export function Icon_Menu({ navigation, style, size }) {
    return (
        <Entypo
            name="menu"
            size={size}
            style={style}
            onPress={() => navigation.openDrawer()} />
    );
}

//Иконка раздела меню настроек Переименовать
export function Icon_Pencil({ navigation, style, size }) {
    return (
        <MaterialCommunityIcons
            name="pencil"
            size={size}
            style={style} />
    );
}

//Иконка раздела меню настроек Сортировать
export function Icon_Sort({ navigation, style, size }) {
    return (
        <MaterialIcons
            name="sort"
            size={size}
            style={style} />
    );
}

//Иконка раздела меню настроек Добавить плитку
export function Icon_Plus({ navigation, style, size }) {
    return (
        <AntDesign
            name="plus"
            size={size}
            style={style} />
    );
}

//Иконка раздела меню настроек Задать цвет категории
export function Icon_Paint_Roller({ navigation, style, size }) {
    return (
        <MaterialIcons
            name="format-paint"
            size={size}
            style={style} />
    );
}

//Иконка раздела меню настроек Удалить
export function Icon_Trash({ navigation, style, size }) {
    return (
        <FontAwesome5
            name="trash"
            size={size}
            style={style}
            color="#ef8885"
        />
    );
}

//Иконка раздела меню выбора Риц - стрелочка вниз
export function Icon_Up({ navigation, style, size, setOpen }) {
    return (
        <AntDesign
            name="up"
            size={size}
            style={style}
            onPress={() => setOpen(false)}
        />
    );
}


//Иконка раздела меню выбора Риц - стрелочка вниз
export function Icon_Down({ navigation, style, size, setOpen }) {
    return (
        <AntDesign
            name="down"
            size={size}
            style={style}
            onPress={() => setOpen(true)}
        />
    );
}


//Иконка раздела меню выбора месяца - стрелочка влево
export function Icon_Left({ navigation, style, size }) {
    return (
        <AntDesign
            name="left"
            size={size}
            style={style}
            onPress={() => console.log(1)}
        />
    );
}

//Иконка раздела меню выбора месяца - стрелочка вправо
export function Icon_Right({ navigation, style, size }) {
    return (
        <AntDesign
            name="right"
            size={size}
            style={style}
            onPress={() => console.log(1)}
        />
    );
}

