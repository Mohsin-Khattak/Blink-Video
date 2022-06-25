import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 110,
    marginTop: 30,
  },
  flatlistView: {
    width: '100%',
    height: 300,

    marginTop: 30,
  },
  innerFlatlist: {
    width: 370,
    height: 100,
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#000',
  },
  clipView: {
    width: '100%',
    bottom: 0,
    marginTop: 35,
    position: 'absolute',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
  },
  ClipTitleTxtInput: {
    width: 305,
    color: 'black',
    borderBottomWidth: 2,
    borderBottomColor: '#b2b3b3',
  },
  savebtn: {
    width: 130,
    height: 40,
    backgroundColor: '#5ba1f4',
    borderRadius: 75,
    marginTop: 30,
    marginLeft: 50,
  },
  savetxt: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 7,
  },
});
