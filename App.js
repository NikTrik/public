import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContent,
} from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';

import Header from './components/Header';
import Tile_list from './components/Tile_list'
import Find from './components/Find'
import News from './components/News';
import Links from './components/Links';
import Settings from './components/Settings';
import Header_Tile from './components/Header_Tile';

import styles from './Style/Style';

import {
  Icon_Back,
  Icon_Find,
  Icon_Dashboard,
  Icon_Exit,
  Icon_Info,
  Icon_News,
  Icon_Settings,
} from './Icons/icon'; //Иконки используемые на главное странице 

// Отрисовка меню навигации


//Пользовательский конктект меню навигации,в котором находится кнопка закрыть меню и раздей Выйти
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}  >
      <Icon_Back {...props} size={28} style={styles.Logo_close_drawer_menu} />
      <DrawerItemList {...props} />
      <DrawerItem
        icon={() => <Icon_Exit size={24} style={styles.Logo_Exit} />}
        label={() => <Text style={styles.text_screen_2}>Выйти</Text>}
        onPress={() => props.navigation.navigate('Дашборд')}
      />
    </DrawerContentScrollView >
  );
}

//Создание навигационного компонента спомощью функции createDrawerNavigator из библиотеки
// react-navigation/drawer
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#6cacd8',
        },
        drawerItemStyle: {
          borderBottomWidth: 1,
          borderBottomColor: 'white'
        },
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return <Header navigation={navigation} title={title} />;
        }
      }}
    >
      <Drawer.Screen
        name="Дашборд"
        component={Tile_list}
        options={{
          drawerIcon: () => <Icon_Dashboard size={18} style={styles.Logo_drawer_menu} />,
          drawerLabel: () => <Text style={styles.text_screen} >Дашборд</Text>,
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <Header_Tile navigation={navigation} title={title} />;
          }
        }}
      />
      <Drawer.Screen
        name="Поиск по клиентам"
        component={Find}
        options={{
          drawerIcon: () => <Icon_Find size={18} style={styles.Logo_drawer_menu} />,
          drawerLabel: () => <Text style={styles.text_screen} >Поиск по клиентам</Text>,
        }}
      />
      <Drawer.Screen
        name="Новости"
        component={News}
        options={{
          drawerIcon: () => <Icon_News size={18} style={styles.Logo_drawer_menu} />,
          drawerLabel: () => <Text style={styles.text_screen} >Новости</Text>,
        }}
      />
      <Drawer.Screen
        name="Ссылки"
        component={Links}
        options={{
          drawerIcon: () => <Icon_Info size={18} style={styles.Logo_drawer_menu} />,
          drawerLabel: () => <Text style={styles.text_screen} >Ссылки</Text>,
        }}
      />
      <Drawer.Screen
        name="Настройки"
        component={Settings}
        options={{
          drawerIcon: () => <Icon_Settings size={18} style={styles.Logo_drawer_menu} />,
          drawerLabel: () => <Text style={styles.text_screen} >Настройки</Text>,
        }}
      />
    </Drawer.Navigator>
  );
}

// отрисовка меню навигации и первого окна - Дашборд
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

