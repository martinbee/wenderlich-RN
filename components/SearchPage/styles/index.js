import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    color: '#48BBEC',
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
  },
  image: {
    marginTop: 10,
    width: 217,
    height: 138,
  },
  spinner: {
    marginTop: 10,
  },
  error: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  }
});
