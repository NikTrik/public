import { StyleSheet } from 'react-native';
//почти все стили из приложения


const styles = StyleSheet.create(
    {
        Logo_drawer_menu: {
            color: 'white'
        }, //Все белые исконки
        Logo_drawer_menu_black: {
            color: 'black',
        }, //Все белые исконки

        Logo_Trash_orange: {
            color: '#ef8885',
            right: 10
        }, //Логотип поля Удалить
        text_screen: {
            left: -25,
            color: 'white',
            fontSize: 17,
        }, // Тексты всех полей из меню навигации
        text_screen_2: {
            left: -25,
            color: '#3a4357',
            fontSize: 17,
        }, // Текст поля Выйти из меню навигации
        Logo_close_drawer_menu: {
            height: 42,
            width: 35,
            marginLeft: 5,
            marginTop: 28,
            color: 'white',
            backgroundColor: '#3a4357'
        },// иконка закрыть меню навигации
        Container_close_drawer_menu_logo: {
            width: '100%',
            height: 70,
            top: -28,
            backgroundColor: '#3a4357'
        },// контейнер логотипа закрыть меню навигации
        Container_settings_menu: {
            position: 'absolute',
            width: 24,
            height: 24,
            top: '45%',
            right: "2%"
        }, //Контейнер кнопки меню настроек
        Icon_Refresh_container: {
            position: 'absolute',
            width: 24,
            height: 24,
            top: -67,
            right: "10%",
            zIndex: 1

        },
        Logo_Exit: {
            color: "#3a4357"
        }, // Логотип раздела выйти из меню навигации
        Logo_Menu: {
            color: 'white'
        }, //Логотип меню навигации
        container: {
            position: 'absolute',
            width: 30,
            height: 30,
            top: '40%',
            left: '1%',
        },
        main: {
            height: 70,
            width: '100%',
            backgroundColor: "#3a4357",
            //overflow: 'hidden'
        },  // Заголовк приложения
        text: {
            fontWeight: 'bold',
            position: 'absolute',
            fontSize: 20,
            width: '20%',
            height: '40%',
            textAlign: 'center',
            color: 'white',
            top: '40%',
            left: '40%',
        } // Текст заголовка приложения
        ,
        cont: {
            position: 'absolute',
            height: 40,
            width: '50%',
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'silver'
        },
        cont2: {
            position: 'absolute',
            height: 40,
            width: '50%',
            backgroundColor: 'white',
            left: "50%",
            borderLeftWidth: 1,
            borderLeftColor: 'silver'
        },
        text_point_menu: {
            fontSize: 18,
            textAlign: 'center',
            top: "15%"
        },
        text_point_menu_2: {
            fontSize: 18,
            textAlign: 'center',
            top: '15%',
        },
        Container_down_logo: {
            width: 20,
            height: 20,
            left: '72%',
            bottom: '35%'
        },
        container_left_logo: {
            position: 'absolute',
            width: "30%",
            height: 20,
            left: '0%',
            top: '25%',
        },
        container_right_logo: {
            position: 'absolute',
            width: "30%",
            height: 20,
            right: "0%",
            top: "25%",
        },
        logo_right: {
            position: 'absolute',
            right: "30%"
        },
        logo_left: {
            position: 'absolute',
            left: "30%",
        },
        RadioButton_menu: {
            width: 170,
            height: 140,
            position: 'absolute',
            right: -15,
            top: 25,
            backgroundColor: 'silver'
        },
        content: {
            position: 'absolute',
            top: 10,
            width: 40,
            height: 40,
            backgroundColor: 'green'
        }
    }
)

export default styles;