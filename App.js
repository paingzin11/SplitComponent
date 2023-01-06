import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const [courseGoal, setCourseGoal] = useState([]);

  function startAddGoalHandlar() {
    setModalVisible(true);
  }

  function endAddGoalHandlar(){
    setModalVisible(false);
  }

  function addGoalHandlar(enterGoalText){
    setCourseGoal((currentCourseGoal)=>[
      ...currentCourseGoal, 
      { text:enterGoalText, mkey: Math.random().toString()}, ]
      );
      endAddGoalHandlar();
  }

  function deleteGoalHandler(xid){
    setCourseGoal( (xxcurrentCourseGoal) => {
      return xxcurrentCourseGoal.filter((xgoal) => xgoal.mkey !== xid);
    });
  }

  return (
   <>
      <StatusBar style="light" />
      <View style={styles.appcontainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandlar} /> 
        <GoalInput visible={modalVisible} onAddGoal={addGoalHandlar} onCancle={endAddGoalHandlar} />
          <View style={styles.goalContainer}>
            <FlatList 
              data={courseGoal} 
              renderItem={(itemData)=> {
                return(
                  <GoalItem 
                    text={itemData.item.text} 
                    mid={itemData.item.mkey} 
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }} 
              keyExtractor={(item,index)=> {
               return item.mkey;
              }}
            >
            </FlatList>
          </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer:{
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  
  goalContainer: {
    flex:5,
  }
});
