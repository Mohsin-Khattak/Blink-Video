import React, {useState} from 'react';
import axios from 'axios';
import {styles} from './style';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {urls} from '../../src/api/api-urls';
import {getUserData} from '../../src/services/get-user_data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
const Upload = ({navigation}) => {
  const [title, setTitle] = useState();
  const [keyword, setKeyword] = useState();
  const [urlVideo, setUrlVideo] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [selectCategory, setSelectCategory] = useState([
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
  const save = async () => {
    try {
      const userData = await getUserData();
      if (!userData) {
        return;
      }
      const res = await axios.post(`${urls.base_url}/BlinkVideo/AddNewVideo`, {
        V_title: title,
        Category: category?.trim(),
        V_keywords: keyword?.trim(),
        V_Url: urlVideo,
        Likes: 0,
        Views: 0,
        user_id: userData?.P_id,
      });
      console.log('res', res?.data);
      setData(res?.data);
      alert('Video Upload Sucessfully');
      navigation.goBack();
    } catch (error) {}
  };
  const uploadVideo = () => {
    if (!title?.trim()) {
      alert('please enter video title');
    } else if (!category?.trim()) {
      alert('enter category of video');
    } else if (!keyword?.trim()) {
      alert('enter keyword of video');
    } else if (!urlVideo?.trim()) {
      alert('please enter url of video');
    } else save();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView>
        <Image
          style={styles.appicon}
          source={require('../../src/assets/images/logo.png')}
        />

        <View style={styles.title}>
          <Text style={styles.txt}>Enter Title</Text>
          <TextInput
            style={styles.titleinput}
            placeholderTextColor={'gray'}
            placeholder=""
            onChangeText={title => setTitle(title)}
            value={title}
          />
        </View>

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.description}>
          <Text style={styles.txt}>Enter Category</Text>
          <TextInput
            editable={false}
            style={styles.titleinput}
            placeholderTextColor={'gray'}
            placeholder=""
            onChangeText={e => setCategory(e)}
            value={category}
          />
        </TouchableOpacity>
        <Modal
          backdropOpacity={0.1}
          style={{marginBottom: 50, alignItems: 'center'}}
          swipeDirection={'down'}
          onSwipeComplete={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
          isVisible={isModalVisible}>
          <View style={styles.innerModalView}>
            <FlatList
              ItemSeparatorComponent={() => <View style={{height: 13}} />}
              data={selectCategory}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    setCategory(item.title), setModalVisible(false);
                  }}
                  style={styles.flatlist}>
                  <Text style={styles.categorytxt}>{item.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index + ''}
            />
          </View>
        </Modal>

        <View style={styles.description}>
          <Text style={styles.txt}>Enter Keywords</Text>
          <TextInput
            style={styles.titleinput}
            placeholderTextColor={'gray'}
            placeholder=""
            onChangeText={keyword => setKeyword(keyword)}
            value={keyword}
          />
        </View>

        <View style={styles.description}>
          <Text style={styles.txt}>Enter Url</Text>
          <TextInput
            style={styles.titleinput}
            placeholderTextColor={'gray'}
            placeholder=""
            onChangeText={urlVideo => setUrlVideo(urlVideo)}
            value={urlVideo}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 40,
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={() => uploadVideo()}
            style={styles.savebtn}>
            <Text style={styles.txtbtn}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack('Viewvideo')}
            style={styles.canclebtn}>
            <Text style={styles.txtbtn}>Cancle</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Upload;
