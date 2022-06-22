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
} from 'react-native';
const Upload = ({navigation}) => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [keyword, setKeyword] = useState();
  const [urlVideo, setUrlVideo] = useState();
  const [data, setData] = useState();
  const save = async () => {
    try {
      const res = await axios.post(
        `http://192.168.0.111/BlinkVideoApi/api/BlinkVideo/AddNewVideo`,
        {
          V_title: title,
          Category: category,
          V_keywords: keyword,
          V_Url: urlVideo,
          Likes: 0,
          Views: 0,
        },
      );
      console.log('res', res?.data);
      setData(res?.data);
      alert('Video Upload Sucessfully');
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

        <View style={styles.description}>
          <Text style={styles.txt}>Enter Category</Text>
          <TextInput
            style={styles.titleinput}
            placeholderTextColor={'gray'}
            placeholder=""
            onChangeText={category => setCategory(category)}
            value={category}
          />
        </View>

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
            onPress={() => navigation.navigate('Viewvideo')}
            style={styles.canclebtn}>
            <Text style={styles.txtbtn}>Cancle</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Upload;
