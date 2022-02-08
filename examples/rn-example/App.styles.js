import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  textLabel: {
    color: 'lightgray',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'lightgray',
    borderBottomWidth: 1,
  },
  view: {
    paddingBottom: 10,
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    padding: 10,
  }
})
