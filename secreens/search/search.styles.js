
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"white",

  },  
  searchcontainer:{
      width:'100%',
      height:45,
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:10,
      marginTop:10
  },
  searchinput: {
    width: 355,
    height: 40,
    color:"black",
    fontSize:13,
    backgroundColor: '#ECECEC',
},
searchflatlist:{
    width:'100%',
    flex:1
},
searchitem:{
    width:"100%",
    height:50,
    borderBottomWidth:0.5,
    borderBottomColor:'ECECEC',
    paddingTop:15,
    paddingLeft:45,
},
searchtxt:{
    color:'black',
    fontSize:14,
    fontWeight:'bold'
}
});
export default styles