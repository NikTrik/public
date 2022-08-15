import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { get_data } from '../Database/Create_All_Database';

//Окно загрузки

export default function Loading() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <ActivityIndicator size="large" color="#fcc" />
            <Text style={{ marginTop: 15 }}>Loading...</Text>
        </View>
    )
}