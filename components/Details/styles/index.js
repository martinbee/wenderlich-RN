import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: '#656565',
    padding: 10,
  },
  image: {
    width: 400,
    height: 300,
  },
  textContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  coreContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  coreItem: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  coreItemKey: {
    fontWeight: 'bold',
  },
  coreItemValue: {
    width: 250,
  },
  button: {
    paddingTop: 5,
    paddingBottom: 10,
  },
});
