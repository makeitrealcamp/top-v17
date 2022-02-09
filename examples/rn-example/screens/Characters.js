import React from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';
import debounce from 'lodash/debounce';

import SearchBar from '../components/Search/SearchBar';
import CharCard from '../components/Cards/Character';

const Characters = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Text style={styles.text}>Search Bar</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Data List</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
  },
  list: {
    flex: 3,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
});

export default Characters;
