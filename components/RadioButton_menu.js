import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from '../Style/Style';

export default RadioButton = () => {
    const [checked, setChecked] = React.useState('Дашборд');

    return (
        <View style={styles.RadioButton_menu}>
            <RadioButton
                value="Дашборд"
                status={checked === 'Дашборд' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Дашборд')}
            />
            <RadioButton
                value="509"
                status={checked === '509' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('509')}
            />
            <RadioButton
                value="224"
                status={checked === '224' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('224')}
            />
        </View>
    );

}