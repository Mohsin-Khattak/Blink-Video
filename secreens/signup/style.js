import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  appicon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  createaccount: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 20,
    marginLeft: 30,
  },
  name: {
    marginLeft: 20,
    marginTop: 70,
    borderBottomWidth: 2,
    borderBottomColor: '#b2b3b3',
    width: 350,
  },

  email: {
    marginTop: 10,
    marginLeft: 20,
    width: 350,
    borderBottomWidth: 2,
    borderBottomColor: '#b2b3b3',
  },
  useremail: {
    color: 'black',
  },
  signupbtn: {
    marginTop: 60,
    marginLeft: 240,
    width: 120,
    height: 50,
    borderRadius: 70,
    backgroundColor: '#5ba1f4',
  },
  signuptxt: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 24,
  },
  alreadyacount: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 70,
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  roleview: {
    marginLeft: 20,
    marginTop: 35,
    width: '100%',
    flexDirection: 'row',
  },
  roletxt: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  radioButtonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 5,
  },
});
