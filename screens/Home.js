import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={[styles.androidSafeArea, {backgroundColor: '#eee'}]}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
        <Categories />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
