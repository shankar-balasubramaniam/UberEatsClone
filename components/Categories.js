import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const items = [
  {
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: 'Fast Food',
  },
  {
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ alignItems: 'center', marginRight: 30 }}>
        <Image
          source={items[0].image}
          style={{ width: 50, height: 40, resizeMode: 'contain' }}
        />
        <Text style={{ fontSize: 13, fontWeight: '700' }}>{items[0].text}</Text>
      </View>
    </ScrollView>
  );
}
