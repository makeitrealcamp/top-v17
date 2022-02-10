import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';
import debounce from 'lodash/debounce';

import SearchBar from '../components/Search/SearchBar';
import CharCard from '../components/Cards/Character';

import { getCharacters, getSingleCharacter } from '../services/api';

const Characters = () => {
  const [data, setData] = useState({
    characters: [],
    currentPage: 1,
    totalPages: 1,
  });

  const getAllCharacters = async (page = 1) => {
    try {
      const response = await getCharacters(page);
      const { results, info } = await response.json();

      setData({
        characters: [...data.characters, ...results],
        totalPages: info.pages || 1,
        currentPage: page,
      })

    } catch (error) {
      alert(error);
    }
  }

  const searchCharacterHandler = async (text) => {
    try {
      const response = await getSingleCharacter(text);
      const responseJson = await response.json()

      if (!responseJson?.error) {
        setData({
          characters: responseJson.results,
          totalPages: responseJson.info.pages,
          currentPage: 1,
        })
      } else {
        setData({
          characters: [],
          totalPages: 1,
          currentPage: 0,
          error: true,
        })
      }
    } catch (error) {

    }

  }

  const searchCharacterDebounced = debounce(searchCharacterHandler, 900);

  useEffect(() => {
    getAllCharacters(1);
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar
          title="Characters"
          handleChangeInput={searchCharacterDebounced}
        />
      </View>
      <View style={styles.list}>
        {
          data?.error
          ? (
            <Text style={styles.text}>
              There is nothing here
            </Text>
          ) : (
            <FlatList
              data={data.characters}
              renderItem={({ item }) => <CharCard {...item} />}
              keyExtractor={item => item.id}
              numColumns={2}
              ListFooterComponent={() => (
                <Text style={styles.text}>End of file</Text>
              )}
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                getAllCharacters(data.currentPage + 1);
              }}
            />
          )
        }
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
