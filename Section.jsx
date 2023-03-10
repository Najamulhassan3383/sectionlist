import React from "react";
import { SectionList, View, StyleSheet, Text, FlatList } from "react-native";
import Card from "./Card";

function Section() {
  const DATA = [
    {
      key: "Desi Food",
      title: "Desi Food",
      data: [
        {
          rating: 5,
          key: 0,
          name: "Biryani",
          price: 100,
          src: require("./ben-lei-flFd8L7_B3g-unsplash.jpg"),
        },
        {
          rating: 5,
          key: 1,
          name: "Karahi",
          price: 200,
          src: require("./ben-lei-flFd8L7_B3g-unsplash.jpg"),
        },
        {
          rating: 5,
          key: 2,
          name: "Nihari",
          price: 300,
          src: require("./ben-lei-flFd8L7_B3g-unsplash.jpg"),
        },
      ],
    },
    {
      key: "Fast Food",
      title: "Fast Food",
      data: [
        {
          rating: 5,
          key: 3,
          name: "Burger",
          price: 100,
          src: require("./saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg"),
        },
        {
          rating: 5,
          key: 4,
          name: "Pizza",
          price: 200,
          src: require("./saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg"),
        },
        {
          rating: 5,
          key: 5,
          name: "Sandwich",
          price: 300,
          src: require("./saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg"),
        },
      ],
    },
  ];

  const renderFlatListItem = ({ item }) => (
    <View style={styles.horizontalContainer}>
      <Image source={item.pic} />
    </View>
  );

  return (
    <View style={{ width: "100%" }}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.horizontalContainer}>
            <Card pic={item.src} name={item.name} price={item.price} />
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

export default Section;

const styles = StyleSheet.create({
  item: {
    width: 90,
    backgroundColor: "#f9c2ff",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
