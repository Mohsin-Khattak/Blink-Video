import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  appicon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 60,
  },
  title: {
    marginTop: 40,
    marginLeft: 20,
  },
  txt: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 18,
  },
  titleinput: {
    marginTop: 5,
    width: 380,
    borderWidth: 2,
    borderColor: '#b2b3b3',
    color: 'black',
  },
  description: {
    marginTop: 10,
    marginLeft: 20,
  },
  savebtn: {
    width: 120,
    height: 50,
    borderRadius: 70,
    backgroundColor: '#5ba1f4',
  },
  txtbtn: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  canclebtn: {
    width: 120,
    height: 50,
    borderRadius: 70,
    backgroundColor: '#5ba1f4',
  },
  innerModalView: {
    alignSelf: 'center',
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    minHeight: 400,
    width: 300,
    backgroundColor: '#5ba1f4',
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  categorytxt: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  flatlist: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    height: 50,
  },
});
