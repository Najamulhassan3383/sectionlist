import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

function Card({ pic, name, price, rating }) {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.img} />
      <Text style={styles.rating}>{rating}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    width: 300,
    height: 300,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  rating: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
