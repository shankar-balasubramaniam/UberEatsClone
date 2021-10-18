import React from 'react';
import { Image } from 'react-native';
import { View, Text } from 'react-native';

const yelpRestaurantInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image: 'https://tinyurl.com/6xtvswea',
  price: '$$',
  reviews: '1500',
  rating: 4.5,
  categories: [{ title: 'Thai' }, { title: 'Comfort Food' }],
};

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(' - ');

const description = `${formattedCategories} ${price ? ' - ' + price : ''} - 🎫 - ${rating} - 🌟 (${reviews}+)`

const title = 'Farmhouse Kitchen Thai Cuisine';
// const description = 'Thai - Comfort Food - $$ - 🎫 - 4 🌟 (2913+)';

export default function About() {
  return (
    <View style={{ height: 280 }}>
      {/* RestaurantImage */}
      <RestaurantImage image='https://tinyurl.com/6xtvswea' />
      {/* RestaurantTitle */}
      <RestaurantName title='Farmhouse Kitchen Thai Cuisine' />
      {/* RestaurantDescription */}
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: '100%', height: 180 }}
    />
  );
};

const RestaurantName = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.title}
    </Text>
  );
};

const RestaurantDescription = (props) => {
  return (
    <Text
      style={{
        fontSize: 15.5,
        fontWeight: '400',
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.description}
    </Text>
  );
};
