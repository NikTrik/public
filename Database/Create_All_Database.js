import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite'
import '../Const/const'
import {
    CATEGORIES_TABLE,
    CREATE_CATEGORIES_TABLE,
    CREATE_GRAPHICS_TABLE,
    CREATE_INDICATORS_LIST_TABLE,
    CREATE_INDICATORS_TABLE,
    CREATE_SECTIONS_TABLE,
    CREATE_TILE_TABLE,
    INDICATORS_LIST_TABLE,
    INSERT_TILE_TABLE,
    RESULT_INDICATORS_LIST_TABLE,
    RESULT_TILE_TABLE,
    SECTIONS_LIST_TABLE,
    TILE_COLUMN_CLASS_ID,
    RESULT_GRAPHICS_LIST_TABLE,
    INSERT_CATEGORIES_TABLE,
    INSERT_INDICATORS_LIST_TABLE,
    INSERT_SECTIONS_TABLE,
    INSERT_INDICATORS_TABLE,
    INSERT_GRAPHICS_TABLE
} from '../Const/const';

import { Text } from 'react-native';
//Запись поля Результат плитки


//Создание базы данных
function openDatabase() {
    if (Platform.OS === "web") {
        return {
            transaction: () => {
                return {
                    executeSql: () => { },
                };
            },
        };
    }

    const db = SQLite.openDatabase("tile_26.db");
    return db;
}

export const db = openDatabase();

//Создание таблицы (принимает параметром одну из констант для создания таблицы)
const createTable = (CREATE_TABLE) => {
    db.transaction((tx) => {
        tx.executeSql(
            CREATE_TABLE
        );
    });
};

//Запись данных в таблицу (принимает массив данных который нужно записать и запрос на запись)
const setData = (data, INSERT_TABLE) => {
    db.transaction(
        (tx) => {
            tx.executeSql(INSERT_TABLE, data);
        }
    );
}


//Чтение данных из таблицы (принимает имя таблицы которую нужно вывести)
const getData = (TABLE_NAME) => {
    db.transaction(
        (tx) => {
            tx.executeSql("select * from " + TABLE_NAME, [], (_, { rows }) => {
                for (var i = 0; i < rows.length; i++) {
                    console.log(rows.item(i));
                }
            }
            );
        }
    );
}

//Очистка таблицы (принимает имя таблицы которую нужно очистить)
const deleteData = (TABLE_NAME) => {
    db.transaction(
        (tx) => {
            tx.executeSql(`delete from ` + TABLE_NAME + ";");
        }
    )
}

//считывает поле с именем Результат_Плитки и передаёт на запись в таблицу
const parserResultTile = (RESULT_TILE) => {
    RESULT_TILE.map((tile) => {
        const Id = tile.Ид;
        const ClassId = tile.КлассИд;
        const Id_value_indicator = tile.ПоказательЗначениеИд;
        const Additional_Charts = tile.ГрафикиДополнительные;
        const Un_of_m = tile.ЕдИзм;
        const Default_schedule = tile.ГрафикПоУмолчанию;
        const Name = tile.Наименование;
        const Id_category = tile.КатегорияИд;
        const RIC = 999;
        var data = [];
        data.push(Id, ClassId, Id_value_indicator, Additional_Charts, Un_of_m,
            Default_schedule, Name, Id_category, RIC)
        setData(data, INSERT_TILE_TABLE);
    })
}

//считывает поле с именем Результат_КатегорииСписок и передаёт на запись в таблицу
const parserResultCategoriesList = (RESULT_CATEGORIES_LIST) => {
    RESULT_CATEGORIES_LIST.map((tile) => {
        const Id = tile.Ид;
        const ClassId = tile.КлассИд;
        const Name_1 = tile.Имя;
        const Colour16 = tile.ЦветHex;
        const Colour = tile.Цвет;
        const Name_2 = tile.Наименование;
        const RIC = 999;
        var data = [];
        data.push(Id, ClassId, Name_1, Colour16, Colour, Name_2, RIC)
        setData(data, INSERT_CATEGORIES_TABLE);
    })
}

//считывает поле с именем Результат_ПоказателиСписок и передаёт на запись в таблицу
const parserResultIndicatorsList = (RESULT_INDICATORS_LIST) => {
    RESULT_INDICATORS_LIST.map((tile) => {
        const Id = tile.Ид;
        const ClassId = tile.КлассИд;
        const Name_1 = tile.Имя;
        const Short_name = tile.СокрИмя;
        const Name_2 = tile.Наименование;
        const Un_of_m = tile.ЕдИзм;
        const Description = tile.Описание;
        const Input = tile.Вводимый;
        var data = [];
        data.push(Id, ClassId, Name_1, Short_name, Name_2, Un_of_m, Description, Input)
        setData(data, INSERT_INDICATORS_LIST_TABLE);
    })
}

//считывает поле с именем РазрезыСписок и передаёт на запись в таблицу
const parserSectionsList = (SECTION_LIST, id) => {
    SECTION_LIST.map((list) => {
        const ClassId = list.КлассИд;
        const Name_1 = list.Имя;
        const Name_2 = list.Наименование;
        var data = [];
        data.push(id, ClassId, Name_1, Name_2);
        setData(data, INSERT_SECTIONS_TABLE);
    });
}

//считывает поле с именем ПоказателиСписок и передаёт на запись в таблицу
const parserIndicatorslist = (INDICATORS_LIST, id) => {
    INDICATORS_LIST.map((list) => {
        const ClassId = list.КлассИд;
        const ID = list.Ид;
        const Class = list.Класс;
        const Un_of_m = list.ЕдИзм;
        const Name_1 = list.Имя;
        const Name_2 = list.Наименование;
        const input = list.Вводимый;
        var data = [];
        data.push(id, ClassId, ID, Class, Un_of_m, Name_1, Name_2, input)
        setData(data, INSERT_INDICATORS_TABLE);
    });
}

//считывает поле с именем Результат_ГрафикиСписок и передаёт на запись в таблицу
const parserResultGraphicsList = (RESULT_GRAPHICS_LIST) => {
    RESULT_GRAPHICS_LIST.map((tile) => {
        const Id = tile.Ид;
        const ClassId = tile.КлассИд;
        const General_graph_type = tile.ОбщийТипГрафика;
        const Indicators_list = tile.ПоказателиСписок.length;
        const Periodicity = tile.Периодичности;
        const Default_period_name = tile.ПериодПоУмолчаниюИмя;
        const Default_period_size = tile.ПериодПоУмолчаниюРазмер;
        const Tabular_display = tile.ТабличноеОтображение;
        const Quick_access = tile.БыстрыйДоступ;
        const Sections_list = tile.РазрезыСписок.length;
        const Name = tile.Наименование;
        const Chart_type = tile.ТипГрафика;
        const Comment = tile.Комментарий;
        const INDICATORS_LIST = tile.ПоказателиСписок;
        const SECTION_LIST = tile.РазрезыСписок;
        parserIndicatorslist(INDICATORS_LIST, Id);
        parserSectionsList(SECTION_LIST, Id);
        var data = [];
        data.push(Id, ClassId, General_graph_type, Indicators_list, Periodicity, Default_period_name,
            Default_period_size, Tabular_display, Quick_access, Sections_list, Name, Chart_type, Comment);
        setData(data, INSERT_GRAPHICS_TABLE);
    })
}


//Запрос данных с сервера
export async function get_data() {
    console.log(1);
    const resp = await axios.get(' https://api-ric999.clients.oe-it.ru/clt/1n', {
        params: {
            ssid: "35353B2963C914935554746FA645F6C6D313B29D07F808AD9FBE01E4B685530C",
            method: "ПлиткиСписок",
            "парОграничение.json": JSON.stringify({
                "ПараметрыЗапросаСхемы": {
                    "Приложение": "11181849",
                    "Список": "11183951"
                }
            })
        }
    })
    const newdate = resp.data.result;
    newdate.map((tile, index) => {
        const RESULT_TILE = tile.Результат_Плитки;
        const RESULT_CATEGORIES_LIST = tile.Результат_КатегорииСписок;
        const RESULT_INDICATORS_LIST = tile.Результат_ПоказателиСписок;
        const RESULT_GRAPHICS_LIST = tile.Результат_ГрафикиСписок;
        parserResultTile(RESULT_TILE);
        parserResultCategoriesList(RESULT_CATEGORIES_LIST);
        parserResultIndicatorsList(RESULT_INDICATORS_LIST);
        parserResultGraphicsList(RESULT_GRAPHICS_LIST);
    })
    return resp;
}

// Позволяет вынуть данные из таблицы в не промиса (принимает переменную базы данных и имя таблицы из которой нужно считать данные)
function read(TABLE_NAME) {
    const [Result, setResult] = useState('');

    useEffect(() => {
        get(TABLE_NAME).then((data) => {
            setResult(data)
        }).catch((error) => console.log(error))
    }, [])

    return Result;
}

// Считывает данные из таблицы в промис (принимает переменную базы данных и имя таблицы из которой нужно считать данные)
async function get(TABLE_NAME) {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql("select * from " + TABLE_NAME, [], (_, { rows }) => {
                    var data = rows._array;
                    resolve(data);
                })
            }
        )
    })
}

//Создание всех таблиц
function createTables() {
    createTable(CREATE_TILE_TABLE);
    createTable(CREATE_CATEGORIES_TABLE);
    createTable(CREATE_INDICATORS_LIST_TABLE);
    createTable(CREATE_GRAPHICS_TABLE);
    createTable(CREATE_INDICATORS_TABLE);
    createTable(CREATE_SECTIONS_TABLE);
}


export default function Create_All_Database() {
    console.log('-----------------------');

    //Создание всех таблиц
    createTables();

    //get_data();// делает запрос и записывает его в таблицы 

    //var dt = read(TABLE_NAME);// В эту пеерменную будет записываться массив объектов содержащих в себе строки таблицы

    getData(RESULT_TILE_TABLE); // выводит данные из таблицы по её имени
    //deleteData(); 
    //return dt;
}
