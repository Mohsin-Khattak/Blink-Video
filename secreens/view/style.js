import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CECECE',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:"center",
        justifyContent:"space-between",
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 5,

    },
    projectname: {
        color: '#5ba1f4',
        marginTop: 5,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 19
    },
    search: {
        // marginLeft: 339,
        // position: 'absolute',
        // top: 28
    },
    searchinput: {
        width: 270,
        height: 50,
        backgroundColor: 'transparent',
        color:"black",
        fontSize:13
    },
    inputContainer:{
        flexDirection:"row",
        alignItems:"center",
        width: 320,
        height: 50,
        marginLeft: 10,
        marginTop: 5,
        backgroundColor: '#ECECEC',
        borderRadius: 12,
        justifyContent:"space-between",
        paddingHorizontal:10,
       
    },
    videobtn: {
        width: 180,
        height: 50,
        backgroundColor: '#ECECEC',
        borderRadius: 20
    },
    videotxt: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 15,
        color: 'black'
    },
    title: {
        marginLeft: 60,
        marginTop: 15,
        width: 310
    },
    name_1: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',

    },
    time: {
        marginTop: 8,
        marginLeft: 60
    },
    time1: {
        color: '#6C6C6C',
        fontSize: 12
    },
    Entypo: {
        position: "absolute",
        left: 320,
        top: 6
    },
    userimage: {
        width: 36,
        height: 36,
        position: 'absolute',
        top: 14,
        left: 12,
        borderRadius: 100
    },
    categoryFlatList: { 
        width: "100%",
        marginTop:15,
        
        alignItems:"center",
        height:60
        // backgroundColor:"gray"

     },
    categoryItem: {
        height: 40,
        backgroundColor: "white",
        width: 100,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "center",
        marginTop:2
    },
    categorytxt:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    },



    ///////////////////////////////modal style 
    container:{
        flex:1,
        width:"100%",
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
    modalInput: {
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