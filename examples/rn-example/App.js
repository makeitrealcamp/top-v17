import { useState } from 'react';
import { View, Switch, Text, Image, TextInput, Button, Platform, Alert, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

import Input from './Input';
import { styles } from './App.styles'

function App() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('Press me')
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState(0)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleChange = (text) => {
    setText(text)
  }

  const handleChangePassword = (text) => {
    setText(text)
  } 
  const handleChangePhone = (text) => {
    setText(text)
  } 

  const onChangeNumber = (num) => {
    setNumber(num)
  }

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={pickImage}
      >
        <Image
          source={{
            uri: !image
              ?'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'
              : image.uri
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <Input labelText='your email' handleChange={handleChangePassword}/>
      <Input labelText='your password' handleChange={handleChangePassword} isSecureTextEntry/>
      <Input labelText='your phone' handleChange={handleChangePassword}/>
      
      

      {
        Platform.OS === 'ios'
        ? (<TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            placeholder="useless placeholder"
            keyboardType="numeric"
            keyboardAppearance="dark"
          />)
        : (<TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            placeholder="useless placeholder"
            keyboardType="numeric"
            autoComplete='name'
          />)
      }



      <Button
        title="Learn More"
        color="#841584"
        onPress={pickImage}
        accessibilityLabel="Learn more about this purple button"

      />

      {/* <Switch
        // trackColor={{ false: "#767577", true: "#81b0ff" }}
        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}

      {/* <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={styles.image}
      /> */}
    </View>
  );
}



export default App;
