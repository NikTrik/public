import React, { useState, useEffect } from 'react';
import { db } from './Create_All_Database';
import * as SQLite from 'expo-sqlite'



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
export async function get(TABLE_NAME) {
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
