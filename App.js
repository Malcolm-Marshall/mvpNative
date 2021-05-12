import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, Pressable, TextInput, Picker } from 'react-native';
// import {Dropdown} from 'react-native-material-dropdown';
import ModalDropdown from 'react-native-modal-dropdown';
import AddModal from './components/AddModal'

import Plants from './components/Plants';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  let data = [{
    value: 'Banana',
  }, {
    value: 'Mango',
  }, {
    value: 'Pear',
  }];

  return (
    <>
      <View style={styles.container}>
        <Text>Happy Plants!</Text>
        <StatusBar style="auto" />
        <Button className='button' title="Add" style={styles.button} onPress={() => setModalVisible(true)} />
        <AddModal setModalVisible={setModalVisible} modalVisible={modalVisible}/>
        <View>
          <Plants />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-around',

  },
  button: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    margin: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
