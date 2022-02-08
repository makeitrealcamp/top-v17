import React from 'react';
import { View, Text,  TextInput } from 'react-native'
import { styles } from './App.styles'

const Input = ({labelText, handleChange, isSecureTextEntry}) => {
  return (
    <View>
      
    <Text style={styles.textLabel}>{labelText}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}     
        secureTextEntry={isSecureTextEntry}   
      />
    </View>
  );
};

export default Input;