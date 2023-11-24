import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}

export default function App() {
  const [key, onChangeKey] = React.useState('');
  const [newKey, onChangenewKey] = React.useState('');
  const [value, onChangeValue] = React.useState('');

  React.useEffect(() => {
    alert(`key is ${newKey} value is ${value}`);
  },[newKey])

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Save an item, and grab it later!</Text>
      <Button
        title="Save this key/value pair"
        onPress={() => {
          save(newKey, value);
        }}
      />
      <Text style={styles.paragraph}>Enter new  key</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(key) => onChangenewKey(key)}
        placeholder="Enter the new key to store"
      />
      <Text style={styles.paragraph}>Enter new  value for key</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => onChangeValue(value)}
        placeholder="Enter the new value for current key"
      />
      <Text style={styles.paragraph}>🔐 Enter your key 🔐</Text>
      <TextInput
        style={styles.textInput}
        onSubmitEditing={event => {
          getValueFor(event.nativeEvent.text);
        }}
        placeholder="Enter the key for the value you want to get"
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container : {
        margin :5
    },
    paragraph : {
        fontSize :12
    },
    textInput : {
        borderColor : "black",
        width : "100%"
    }
})