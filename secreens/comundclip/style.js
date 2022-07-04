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
    height: 400,
    backgroundColor: '#F1F1F1',
    marginTop: 30,
  },
  innerFlatlist: {
    width: 370,
    height: 50,
    backgroundColor: '#5ba1f4',
    alignSelf: 'center',

    borderRadius: 20,
    marginBottom: 10,
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
  titleTxt: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
    marginBottom: 20,
  },
});
