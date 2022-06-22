import React, { useState } from 'react';
import { View, TextInput, FlatList, Text , TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './search.styles';
const Search = ({navigation}) => {

    const [search, setSearch] = useState([
        {
            title: 'All',
        },
        {
            title: 'Cartoon',
        },
        {
            title: 'Naat',
        },
        {
            title: 'Song',
        },
        {
            title: 'Drama',
        },
        {
            title: 'News',
        },
        {
            title: 'Qwali',
        },
    ])
    const renderSearch = (item, index) => {
        return (
            <View
                onPress={() => onchangeCategory(item, index)}
                style={styles.searchitem}>
                <View >
                    <Text style={styles.searchtxt}>{item.title}</Text>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.searchcontainer}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons
                        name='chevron-back'
                        color={'#5ba1f4'}
                        size={35} style={styles.search}
                    />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchinput}
                    placeholderTextColor={'gray'}
                    placeholder='Search Video'
                    color='black'
                />
            </View>

            <View style={styles.searchflatlist}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={search}
                    renderItem={({ item, index }) => renderSearch(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
};
export default Search;