import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        marginHorizontal: 30,
      }}
    >
      <Icon icon='home' text='Home' />
      <Icon icon='search' text='Browse' />
      <Icon icon='shopping-bag' text='Grocery' />
      <Icon icon='receipt' text='Orders' />
      <Icon icon='user' text='Account' />
    </View>
  );
};

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          style={{ marginBottom: 3, alignSelf: 'center' }}
        />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomTabs;
