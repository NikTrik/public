import axios from 'axios';
import React from 'react';
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
    INSERT_GRAPHICS_TABLE,
    CREATE_GRAPHICS_INDICATORS_TABLE,
    INSERT_GRAPHICS_INDICATORS_TABLE,
    GRAPHICS_INDICATORS_TABLE,
    INSERT_GRAPHICS_SECTIONS_TABLE,
    CREATE_GRAPHICS_SECTIONS_TABLE,
    GRAPHICS_SECTIONS_TABLE,
    CURRENT_TILE_VALUES_TABLE,
    CREATE_CURRENT_TILE_VALUES_TABLE,
    INSERT_CURRENT_TILE_VALUES_TABLE
} from '../Const/const';
import { read } from './Pars_data';

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

    const db = SQLite.openDatabase("tile_017.db");
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
const setData = (data, INSERT_TABLE, str) => {
    db.transaction(
        (tx) => {
            tx.executeSql(INSERT_TABLE + str + ' ; ', data);
        }
    );
}


//Чтение данных из таблицы (принимает имя таблицы которую нужно вывести)
export const getData = (TABLE_NAME) => {
    db.transaction(
        (tx) => {
            tx.executeSql("select * from " + TABLE_NAME, [], (_, { rows }) => {
                for (var i = 0; i < rows.length; i++)
                    console.log(rows.item(i));
                console.log(rows.length)
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
    var data = [];
    var str = '';
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
        data.push(Id, ClassId, Id_value_indicator, Additional_Charts, Un_of_m,
            Default_schedule, Name, Id_category, RIC);// записываем все данные в один массив 
        str += "(?,?,?,?,?,?,?,?,?), ";// для каждого объекта добавляем в запрос место под запись
    });
    setData(data, INSERT_TILE_TABLE, str.slice(0, -2));
}

//считывает поле с именем Результат_КатегорииСписок и передаёт на запись в таблицу
const parserResultCategoriesList = (RESULT_CATEGORIES_LIST) => {
    var data = [];
    var str = '';
    RESULT_CATEGORIES_LIST.map((tile) => {
        const Id = tile.Ид;
        const ClassId = tile.КлассИд;
        const Name_1 = tile.Имя;
        const Colour16 = tile.ЦветHex;
        const Colour = tile.Цвет;
        const Name_2 = tile.Наименование;
        const RIC = 999;
        data.push(Id, ClassId, Name_1, Colour16, Colour, Name_2, RIC);
        str += "(?,?,?,?,?,?,?), ";
    })
    setData(data, INSERT_CATEGORIES_TABLE, str.slice(0, -2));
}

//считывает поле с именем Результат_ПоказателиСписок и передаёт на запись в таблицу
const parserResultIndicatorsList = (RESULT_INDICATORS_LIST) => {
    var data = [];
    var str = "";
    var mas_obj = []
    RESULT_INDICATORS_LIST.map((tile) => {
        const Id = tile.Ид;
        const ClassId = tile.КлассИд;
        const Name_1 = tile.Имя;
        const Short_name = tile.СокрИмя;
        const Name_2 = tile.Наименование;
        const Un_of_m = tile.ЕдИзм;
        const Description = tile.Описание;
        const Input = tile.Вводимый;
        var flag = false;
        for (var i = 0; i < mas_obj.length; i++)
            if (JSON.stringify(mas_obj[i]) === JSON.stringify(tile))
                flag = true;
        if (!flag) {
            mas_obj.push(tile);
            data.push(Id, ClassId, Name_1, Short_name, Name_2, Un_of_m, Description, Input);
            str += "(?,?,?,?,?,?,?,?), ";
        }
    })
    setData(data, INSERT_INDICATORS_LIST_TABLE, str.slice(0, -2));

}

//считывает поле с именем РазрезыСписок и передаёт на запись в таблицу, также передаётся index
// чтобы указать первичный ключи в таблице SECTIONS
//Добавил запись в таблицу связи между Графиками и Разрезами
const parserSectionsList = (SECTION_LIST, id, index) => {
    var data1 = [];
    var data2 = [];
    var str1 = '';
    var str2 = '';
    SECTION_LIST.map((list) => {
        const ClassId = list.КлассИд;
        const Name_1 = list.Имя;
        const Name_2 = list.Наименование;
        data1.push(ClassId, Name_1, Name_2, index + 1);
        str1 += "(?,?,?,?), ";
        data2.push(index + 1, id);
        index++;
        str2 += "(?,?), ";
    });
    setData(data1, INSERT_SECTIONS_TABLE, str1.slice(0, -2));
    setData(data2, INSERT_GRAPHICS_SECTIONS_TABLE, str2.slice(0, -2));
}

//считывает поле с именем ПоказателиСписок и передаёт на запись в таблицу, также передаётся результат ПоказателиСписок
// чтобы задать таблицу связи между показателями и графиками 
const parserIndicatorslist = (GRAPHICS_INDICATORS_TABLE, id, RESULT_INDICATORS_LIST) => {

    var indicators_id = [];

    RESULT_INDICATORS_LIST.map((obj, index) => {
        indicators_id[index] = obj.Ид;
        return index + 1;
    });

    var len = indicators_id.length;

    var data = [];
    var str = "";
    GRAPHICS_INDICATORS_TABLE.map((list) => {
        const ID = list.Ид;

        for (var i = 0; i < len; i++)
            if (ID == indicators_id[i])
                break;

        data.push(ID, id);
        str += "(?,?), "
    });

    setData(data, INSERT_GRAPHICS_INDICATORS_TABLE, str.slice(0, -2));
}

//считывает поле с именем Результат_ГрафикиСписок и передаёт на запись в таблицу
const parserResultGraphicsList = (RESULT_GRAPHICS_LIST, RESULT_INDICATORS_LIST) => {
    var data = [];
    var str = "";
    RESULT_GRAPHICS_LIST.map((tile, index) => {
        const Id = tile.Ид;
        const ClassId = tile.КлассИд;
        const General_graph_type = tile.ОбщийТипГрафика;
        const Periodicity = tile.Периодичности;
        const Default_period_name = tile.ПериодПоУмолчаниюИмя;
        const Default_period_size = tile.ПериодПоУмолчаниюРазмер;
        const Tabular_display = tile.ТабличноеОтображение;
        const Quick_access = tile.БыстрыйДоступ;
        const Name = tile.Наименование;
        const Chart_type = tile.ТипГрафика;
        const Comment = tile.Комментарий;
        const GRAPHICS_INDICATORS_TABLE = tile.ПоказателиСписок;
        const SECTION_LIST = tile.РазрезыСписок;
        parserIndicatorslist(GRAPHICS_INDICATORS_TABLE, Id, RESULT_INDICATORS_LIST);
        parserSectionsList(SECTION_LIST, Id, index);
        data.push(Id, ClassId, General_graph_type, Periodicity, Default_period_name,
            Default_period_size, Tabular_display, Quick_access, Name, Chart_type, Comment);
        str += "(?,?,?,?,?,?,?,?,?,?,?), ";
        return index + 1;
    });

    setData(data, INSERT_GRAPHICS_TABLE, str.slice(0, -2));
}


//Запрос данных с сервера
export async function get_data() {
    // deleteAllDataBase();
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
    }).then((resp) => {
        const newdate = resp.data.result;
        newdate.map((tile, index) => {
            const RESULT_TILE = tile.Результат_Плитки;
            const RESULT_CATEGORIES_LIST = tile.Результат_КатегорииСписок;
            const RESULT_INDICATORS_LIST = tile.Результат_ПоказателиСписок;
            const RESULT_GRAPHICS_LIST = tile.Результат_ГрафикиСписок;
            parserResultTile(RESULT_TILE);
            parserResultCategoriesList(RESULT_CATEGORIES_LIST);
            parserResultIndicatorsList(RESULT_INDICATORS_LIST);
            parserResultGraphicsList(RESULT_GRAPHICS_LIST, RESULT_INDICATORS_LIST);
        })
    })
        .catch((error) => console.log(error))
        .finally(() => { console.log('----------------------------------------------') });

}

async function getValues() {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    const dt = await read(RESULT_TILE_TABLE);


    dt.map(async (tile) => {
        const resp = await axios.get(' https://api-ric999.clients.oe-it.ru/clt/1n', {
            params: {
                ssid: "0336CF90130F4B91632A639137B2953E459CDADFD92FD5288793955012F36292",
                method: "ПлиткиЗначение",
                "парПериоды": '[{"Дата":"' + date + '.' + month + '.' + year + '","Периодичность":"","Смещение":0}]',
                "парПлитки": tile.TILE_ID,
                "парГрафик": '',
                "парЗначенияРазрезов": '',
                "парОграничение.json": JSON.stringify({
                    "ПараметрыЗапросаСхемы": {
                        "Приложение": "11181849"
                    }
                })
            }
        }).catch((error) => console.log(error));
        const d = resp.data.result;
        d.map((tx) => {
            t = tx.ПоказателиСписок;
            var res = t[0].ПоказательСтрокой;
            var data = [tile.TILE_ID, res, date + '.' + month + '.' + year];
            setData(data, INSERT_CURRENT_TILE_VALUES_TABLE);
        })
    })

}


//Создание всех таблиц
function createTables() {
    createTable(CREATE_TILE_TABLE);
    createTable(CREATE_CATEGORIES_TABLE);
    createTable(CREATE_INDICATORS_LIST_TABLE);
    createTable(CREATE_GRAPHICS_TABLE);
    createTable(CREATE_SECTIONS_TABLE);
    createTable(CREATE_GRAPHICS_INDICATORS_TABLE);
    createTable(CREATE_GRAPHICS_SECTIONS_TABLE);
    createTable(CREATE_CURRENT_TILE_VALUES_TABLE);
}

//Очистить все таблицы
function deleteAllDataBase() {
    deleteData(CATEGORIES_TABLE);
    deleteData(RESULT_TILE_TABLE);
    deleteData(RESULT_INDICATORS_LIST_TABLE);
    deleteData(RESULT_GRAPHICS_LIST_TABLE);
    deleteData(GRAPHICS_INDICATORS_TABLE);
    deleteData(SECTIONS_LIST_TABLE);
    deleteData(GRAPHICS_SECTIONS_TABLE);
    deleteData(CURRENT_TILE_VALUES_TABLE);
}

const allTableName = [CATEGORIES_TABLE, RESULT_TILE_TABLE, RESULT_INDICATORS_LIST_TABLE, RESULT_GRAPHICS_LIST_TABLE,
    GRAPHICS_INDICATORS_TABLE, SECTIONS_LIST_TABLE, GRAPHICS_SECTIONS_TABLE, CURRENT_TILE_VALUES_TABLE]

export default function Create_All_Database() {
    console.log('-----------------------');
    //Создание всех таблиц
    createTables();

    //get_data();// делает запрос и записывает его в таблицы

    getData(RESULT_TILE_TABLE); // выводит данные из таблицы по её имени

    //deleteAllDataBase(); // Очистить все таблицы
}
