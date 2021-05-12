import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, Pressable, TextInput, Picker } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


export default function AddModal({setModalVisible, modalVisible}) {

  const [text, onChangeText] = useState('');
  const [selectedValue, setSelectedValue] = useState('');


  return(
    <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <Text style={styles.modalText}>Hello World!</Text> */}
              <Text>Plant Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Spider Plant"
              ></TextInput>
              <Text>
                Water Needs:
              </Text>
              <ModalDropdown options={['Twice a Day', 'Once a Day']}/>
              <Text>
                Sunlight Needs:
              </Text>
              <ModalDropdown options={['Partial Sun', 'Full Sun']}/>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
                <Text style={styles.textStyle2}>Add Plant</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
  )
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
    marginBottom: 10,
  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    margin: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
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