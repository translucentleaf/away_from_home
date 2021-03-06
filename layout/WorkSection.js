import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import TutorialCard from '../components/TutorialCard';
import work_tutorials from '../constants/work_tutorial_list';

export default class WorkSection extends React.Component {
  render() {
    const tutorial_list = work_tutorials.map((tutorial, index) => {
      return(
        <TutorialCard
          name={tutorial.name}
          imgSource={tutorial.img_path}
          path={tutorial.path}
          key={index}
        />
      );
    })

    return (
      <View style={styles.background}>
        <View style={styles.title_background}>
          <Text style={styles.section_title}>Work Tutorials</Text>
        </View>
        <View style={styles.tutorial_list}>{tutorial_list}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title_background: {
    backgroundColor: '#2A2D34',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  section_title: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'center'
  },
  tutorial_list: {
    marginTop: 50
  },
  background: {
    backgroundColor: '#FFF8F0',
    height: Dimensions.get('window').height
  }
})
