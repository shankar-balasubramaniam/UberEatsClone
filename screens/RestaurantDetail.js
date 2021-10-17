import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider width={1.8} />
    </View>
  );
}
