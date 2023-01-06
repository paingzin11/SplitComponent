import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import {useState } from 'react';

function GoalInput (props){
    const [enterGoalText, setEnterGoalText] = useState('');    
    
    function goInputHandlar(enterText){
        setEnterGoalText(enterText);
    };

    function addGoalHandlar(){
        props.onAddGoal(enterGoalText);
        setEnterGoalText('');
    };

    return(
        <Modal visible={props.visible} animationType="slide" >
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')} />
            <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goInputHandlar} value={enterGoalText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Add Goa" onPress={addGoalHandlar} color="#b180f0" />
                </View>
                <View style={styles.button}>
                    <Button title="Cancle" onPress={props.onCancle} color="#f31282" />
                </View>
            </View>
        </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,  
        backgroundColor: '#311b6b',
      },
      image:{
        width: 100,
        height: 100,
        margin: 20,
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 8,
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection:'row'
      },
      button:{
        width: 100,
        marginHorizontal: 8,
      },
});