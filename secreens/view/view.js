import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {styles} from './style';
import {urls} from '../../src/api/api-urls';
import ReactNativeModal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
const Viewvideo = ({navigation}) => {
  const ref = React.useRef();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [data, setData] = React.useState([]);
  const [searchModal, setSearchModal] = useState(false);
  const [videoByCategory, setVideoByCategory] = React.useState(null);
  const [flag, setflag] = useState(0);
  const isFocus = useIsFocused();
  const [category, setCategory] = useState([
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
    {
      title: 'Education',
    },
  ]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    _retrieveData();
  }, [searchModal, flag]);
  const storeData = async () => {
    if (searchTerm.trim().length <= 0) {
      return;
    }
    let history = [];
    const val = await AsyncStorage.getItem('history');
    if (val) {
      history = JSON.parse(val);
    }
    history.push(searchTerm);
    await AsyncStorage.setItem('history', JSON.stringify(history));
  };
  const _retrieveData = async () => {
    const history = await AsyncStorage.getItem('history');
    let val = JSON.parse(history);
    setSearch(val);
  };
  const removeHistory = async item => {
    const history = await AsyncStorage.getItem('history');
    let val = JSON.parse(history);
    if (val) {
      let vl = val.toString().split(',');
      vl = vl.filter(e => {
        return item != e;
      });
      await AsyncStorage.setItem('history', JSON.stringify(vl));
      setflag(flag + 1);
    }
  };
  const mapToPlay = async item => {
    try {
      let userData = await AsyncStorage.getItem('user');
      if (userData) {
        userData = JSON.parse(userData);
        await axios.post(
          `${urls.base_url}BlinkVideo/UpdateViews?v_id=${item.v_id}&user_id=${userData?.P_id}`,
        );
      }
      navigation.navigate('play', {item: item});
    } catch (error) {
      console.log('error:', error);
    }
  };
  const renderCategory = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => onchangeCategory(item, index)}
        style={{
          ...styles.categoryItem,
          borderWidth: item?.isSelected ? 1 : 0,
          borderColor: item?.isSelected ? 'dodgerblue' : null,
        }}>
        <View>
          <Text style={styles.categorytxt}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderSearch = (item, index) => {
    return (
      <View
        onPress={() => onchangeCategory(item, index)}
        style={styles.searchitem}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 20,
          }}>
          <TouchableOpacity>
            <Text
              onPress={() => {
                setSearchTerm(item);
                setSearchModal(false);
              }}
              style={styles.searchtxt}>
              {item}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              onPress={() => removeHistory(item)}
              name="cross"
              size={20}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderItem = (item, index) => {
    return (
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => mapToPlay(item)} style={styles.video}>
          <Image
            style={{height: 215, width: '100%'}}
            source={{uri: `https://img.youtube.com/vi/${item.V_Url}/0.jpg`}}
          />
        </TouchableOpacity>
        <View style={{height: 88}}>
          <View>
            {/* <Image style={styles.userimage} source={require('../../src/assets/images/mohsin.jpg')} /> */}
            <Image
              style={styles.userimage}
              source={{uri: `https://img.youtube.com/vi/${item.V_Url}/0.jpg`}}
            />
          </View>
          <View style={styles.title}>
            <View style={{width: 310, height: 35}}>
              <Text ellipsizeMode="tail" style={{...styles.name_1}}>
                {item.V_Title}
                {item.V_Keywords.split(',').join(' | ')}
              </Text>
            </View>
            <Entypo
              style={styles.Entypo}
              name="dots-three-vertical"
              size={20}
              color={'black'}
            />
          </View>
          <View style={styles.time}>
            <Text style={styles.time1}>Views : {item.Views} </Text>
          </View>
        </View>
      </View>
    );
  };
  const onchangeCategory = (item, index) => {
    let copy = [...category];
    copy.map(e => {
      e.isSelected = false;
    });
    copy[index].isSelected = true;
    setCategory(copy);
    let videos = [...data];
    if (item.title == 'All') {
      setVideoByCategory([...data]);
    } else {
      let filter = videos.filter(e => {
        return e?.Category == item?.title;
      });

      setVideoByCategory(filter);
    }
    // setData(filter)
  };
  const getData = async () => {
    try {
      let userData = await AsyncStorage.getItem('user');

      if (userData) {
        userData = JSON.parse(userData);
        let url = `${urls.base_url}${urls.video.getVideo}?&user_id=${userData?.P_id}`;
        if (searchTerm?.trim()?.length > 0) {
          url = `${urls.base_url}${urls.video.search}?searchterm=${searchTerm}`;
        }
        const res = await axios.get(url);
        setData(res?.data);
      }
    } catch (error) {
      console.log('error::   ', error);
    }
  };

  React.useEffect(() => {
    if (isFocus) {
      setVideoByCategory();
      getData();
    }
  }, [searchTerm, isFocus]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../src/assets/images/logo.png')}
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => setSearchModal(true)}>
            <TextInput
              style={styles.searchinput}
              placeholderTextColor={'gray'}
              value={searchTerm}
              placeholder="Search Video"
              color="black"
              onChangeText={v => setSearchTerm(v)}
              onFocus={() => setSearchModal(true)}
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              name="search1"
              color={'#5ba1f4'}
              size={30}
              style={styles.search}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.categoryFlatList}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={category}
          renderItem={({item, index}) => renderCategory(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <FlatList
        data={videoByCategory ? videoByCategory : data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => renderItem(item)}
      />

      <ReactNativeModal
        onBackButtonPress={() => setSearchModal(false)}
        style={{margin: 0}}
        isVisible={searchModal}>
        <View style={styles.container}>
          <View style={styles.searchcontainer}>
            <TouchableOpacity onPress={() => setSearchModal(false)}>
              <Ionicons
                name="chevron-back"
                color={'#5ba1f4'}
                size={35}
                style={styles.search}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.modalInput}
              placeholderTextColor={'gray'}
              placeholder="Search Video"
              color="black"
              onChangeText={v => setSearchTerm(v)}
              onEndEditing={() => {
                setSearchModal(false), storeData();
              }}
              value={searchTerm}
            />
          </View>

          <View style={styles.searchflatlist}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={search}
              renderItem={({item, index}) => renderSearch(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
};
export default Viewvideo;
