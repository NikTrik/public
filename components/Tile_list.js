import React, { useState, useEffect } from 'react';
import {
    RESULT_TILE_TABLE,
    CATEGORIES_TABLE,
    RESULT_INDICATORS_LIST_TABLE,
    RESULT_GRAPHICS_LIST_TABLE,
    INDICATORS_LIST_TABLE,
    SECTIONS_LIST_TABLE
} from '../Const/const';
import Loading from './Loading';
import Tile from './Tile';
import { get } from '../Database/Pars_data';
import Create_All_Database, { get_data } from '../Database/Create_All_Database';
// Раздел Дашборд из меню навигации


export const g = (setResult, setIsLoading) => {
    useEffect(() => {
        setIsLoading(true);

        get_data().finally(() => { setIsLoading(false) });

        var dt = []
        get(RESULT_TILE_TABLE).then((data) => {
            data.map((obj, index) => {
                var tile = {}
                tile.fullname = obj.TILE_FULLNAME;
                tile.nubmer = index + 1;
                tile.ric = obj.RIC_ID;
                tile.Un_of_meas = obj.TILE_UNITS_OF_MEASUREMENT;
                tile.category_id = obj.TILE_CATEGORY_ID;
                dt.push(tile);
                return index + 1;
            });
        }).catch((error) => console.log(error)).finally(() => { setIsLoading(true) });

        get(CATEGORIES_TABLE).then((data) => {
            data.map((obj) => {
                for (var i = 0; i < 15; i++) {
                    if (dt[i].category_id == obj.CATEGORIES_ID) {
                        dt[i].color = "#" + obj.CATEGORIES_HEX_COLOR;
                        dt[i].categories = obj.CATEGORIES_NAME;
                    }
                }
            });
            setResult(dt);
        }).catch((error) => console.log(error)).finally(() => { setIsLoading(false); });
    }, [])
}



const Tile_list = ({ navigation, state = false }) => {

    const [Result, setResult] = useState(''); // Result хранит данные из запроса базе данных для отрисовки плиток
    //setResult - функция изменяющая эти данные 
    const [IsLoading, setIsLoading] = useState(false); // isLoading - хранит состояние загрузки
    // true - запрос ещё обрабатывается, false - данные готовы к отрисовке

    g(setResult, setIsLoading);// функция получения результата из базы данных


    if (IsLoading) {
        //Отрисовка окна загрузки
        return (
            <Loading />
        );
    }
    //Отрисовка плиток (Пока не хватает данных для отрисовки всех полей плиток)
    return (
        <Tile Result={Result} />
    );
}

export default Tile_list;