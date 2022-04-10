import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:80,
        backgroundColor:'white'
    },
    logo:{
        width:40,
        height:40,
        marginTop:5,
        marginLeft:20
    },
    projectname:{
        color:'#5ba1f4',
        marginTop:5,
        marginLeft:10,
        fontWeight:'bold',
        fontSize:19
    },
    search:{
        marginLeft:186
    },
    flatlistItem:{
        marginTop:15,
        alignSelf:'center'
    },
    flatlistImage:{
        alignSelf:"center",
        width:170,
        // width:375,
        height:90,
        // marginTop:10,
        resizeMode:"cover",
        
        borderRadius:10
    },
  
    itemdetailsContainer:{
        alignSelf:"center",
        width:200,
        backgroundColor:"white",
        elevation:5,
        shadowColor: 'black',
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        height:90
    },
    title:{
        color:'black', 
        fontWeight:'bold',
        marginTop:20,
        textAlign:'left',
        paddingRight:10,
        paddingLeft:10,
        fontSize:16
    }
});
