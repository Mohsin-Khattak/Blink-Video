import MultiSlider from '@ptomasroos/react-native-multi-slider';
import axios from 'axios';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import YoutubePlayer from 'react-native-youtube-iframe';
import Entypo from 'react-native-vector-icons/Entypo';
import {useEffect, useState} from 'react/cjs/react.development';
import {styles} from './style';
import {urls} from '../../src/api/api-urls';
import Ranking from '../../src/components/ranking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserData} from '../../src/services/get-user_data';
import CompoundClip from '../comundclip';
const Play = ({navigation, route}) => {
  const [item, setItem] = React.useState(route?.params?.item);

  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [keyWord, setKeyWord] = useState();
  const [saveClip, setSaveClip] = useState(false);
  const [endTime, setEndTime] = useState();
  const [curTime, setCurTime] = useState();
  const [maxRang, setMaxRange] = useState(100);
  const [values, setVlues] = useState([0, 30]);
  // const [right, setRight] = useState(30)
  const [index, setIndex] = useState(0);
  const [commentText, setCommentText] = useState('');
  // const [isPlay, setIsPlay] = useState(true)
  const [comment, setComment] = useState([]);
  const [data, setData] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [compundClips, setCompoundClips] = useState([]);
  const [compoundIndex, setCompoundIndex] = useState(0);
  const SaveClip = async () => {
    try {
      const res = await axios.post(`${urls.base_url}BlinkVideo/AddClip`, {
        V_Title: title,
        V_Keywords: keyWord,
        V_StartTime: values[0],
        V_EndTime: values[1],
        // Ranking: 0,
        Video_Id: item?.v_id,
        V_Url: item?.V_Url,
        Catgory: category,
        user_id: item?.user_id,
      });
      alert('Added Sucessfully');
      fetchClip();
    } catch (error) {}
  };
  const deleteVideo = async item => {
    try {
      await axios.delete(
        `${urls.base_url}BlinkVideo/DeleteClip?v_id=${item.v_id}`,
      );
      await fetchClip();
    } catch (error) {
      console.log('error', error);
    }
  };
  const likeVideo = async () => {
    try {
      const userData = await getUserData();
      if (!userData) {
        return;
      }
      const res = await axios.post(
        `${urls.base_url}BlinkVideo/likeVideo?v_id=${item?.v_id}&user_id=${userData?.P_id}`,
      );
      setItem(res?.data);
      getLike();
    } catch (error) {}
  };
  const getLike = async () => {
    try {
      const userData = await getUserData();
      if (!userData) {
        return;
      }
      const res = await axios.get(
        `${urls.base_url}BlinkVideo/GetVideoLike?v_id=${item?.v_id}&user_id=${userData?.P_id}`,
      );
      setIsLiked(res?.data);
    } catch (error) {}
  };
  const fetchClip = async () => {
    try {
      const userData = await getUserData();
      if (!userData) {
        return;
      }
      const res = await axios.get(
        `${urls.base_url}BlinkVideo/GetClips?v_id=${item?.v_id}&user_id=${userData?.P_id}`,
      );
      setData(res.data);
    } catch (error) {
      console.log('error:', error);
    }
  };
  const fetchCompoundClip = async item => {
    try {
      const res = await axios.get(
        `${urls.base_url}BlinkVideo/GetCompoundClips?v_id=${item?.v_id}`,
      );

      console.log('war gya', res?.data);
      setCompoundClips(res?.data);
    } catch (error) {
      console.log('error:', error);
    }
  };
  const Addcomment = async () => {
    if (!commentText?.trim()) {
      alert('Please enter comment');
    } else {
      try {
        const res = await axios.post(
          `${urls.base_url}BlinkVideo/AddVideoComment`,
          {
            Comment: commentText,
            v_id: item?.v_id,
          },
        );
        await getComments();
      } catch (error) {
      } finally {
        setCommentText();
      }
    }
  };
  const getComments = async () => {
    try {
      let url = `${urls.base_url}BlinkVideo/ViewVideoComment?v_id=${item?.v_id}`;
      let res = await axios.get(url);

      setComment(res?.data);
    } catch (error) {}
  };

  const OnClipSave = () => {
    if (!title?.trim()) {
      alert('Please enter title');
    } else if (!keyWord?.trim()) {
      alert('Please enter keyword');
    } else if (!category?.trim()) {
      alert('Please enter Category');
    } else SaveClip();
  };
  const renderSaveClips = (item, index) => {
    return (
      <View style={styles.clipshow}>
        <TouchableOpacity
          onPress={() => {
            fetchCompoundClip(item);
            ref?.current?.seekTo(item?.V_StartTime),
              setEndTime(item?.V_EndTime),
              setIndex(index);
          }}>
          <Image
            style={{width: 250, height: 140}}
            source={{uri: `https://img.youtube.com/vi/${item?.V_Url}/0.jpg`}}
          />
          <View style={{height: 50, width: 250}}>
            <Text style={styles.clipkeyword}>
              {item?.V_Title}
              {item?.V_Keywords?.split(',')?.join(' | ')}
              {item?.Catgory}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.clipFoter}>
          <View>
            <Text style={styles.rateingtxt}>
              Rate: {item?.Ranking?.toFixed(1)}
            </Text>
            <View style={styles.rankingclip}>
              <Ranking
                rate={item?.stars || 0}
                onChange={async rank => {
                  try {
                    let copy = [...data];
                    copy[index].stars = rank;
                    setData(copy);
                    let userData = await AsyncStorage.getItem('user');
                    if (userData) {
                      userData = JSON.parse(userData);
                      let url = `${urls.base_url}BlinkVideo/RankVideo?clip_id=${item?.v_id}&user_id=${userData?.P_id}&rank=${rank}`;
                      let res = await axios.get(url);
                      console.log('res of rank  =  ', res?.data);
                      // copy[index] = res?.data;
                      // setData(copy);
                      fetchClip();
                    }
                  } catch (error) {
                    console.log('error in rank ::', error);
                  }
                }}
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => deleteVideo(item)}>
            <Entypo
              style={styles.Entypo}
              name="dots-three-vertical"
              size={25}
              color={'#0A0A0A'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  let likeby = [];
  const LikeVideo = async item => {
    if (val) {
      let vl = val.toString().split(item?.v_id);
      vl = vl.filter(e => {
        return item != e;
      });
    }
  };

  const ref = React.useRef();
  React.useEffect(() => {
    getLike();
    return () => {};
  }, []);
  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsed_sec = await ref?.current?.getCurrentTime(); // this is a promise. dont forget to await
      // calculations
      const elapsed_ms = Math.floor(elapsed_sec * 1000);
      const min = Math.floor(elapsed_ms / 60000);
      const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);
      setCurTime(min * 60 + seconds);
    }, 100); // 100 ms refresh. increase it if you don't require millisecond precision
    return () => {
      clearInterval(interval);
    };
  }, [index]);
  useEffect(() => {
    if (item?.V_EndTime) {
      ref?.current?.seekTo(item?.V_StartTime);
      setEndTime(item?.V_EndTime);
    }
    getComments();
    fetchClip();
    return () => {};
  }, []);

  useEffect(() => {
    (async () => {
      if (item?.V_EndTime != null) {
        await ref?.current?.getDuration();
        ref?.current?.seekTo(item?.V_StartTime);
        setEndTime(item?.V_EndTime);
      }
    })();
    // return () => {};
  }, [item]);

  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View style={styles.video}>
          <YoutubePlayer
            ref={ref}
            videoId={item?.V_Url}
            onChangeState={async str => {
              if (
                str == 'paused' &&
                compundClips?.length > 0 &&
                compoundIndex < compundClips?.length - 1
              ) {
                ref?.current?.seekTo(
                  compundClips[compoundIndex]?.start_time || 0,
                );
                setEndTime(compundClips[compoundIndex]?.end_time || 0);

                setCompoundIndex(compoundIndex + 1);
              }
              const range = await ref?.current?.getDuration();

              setMaxRange(range);
            }}
            height={232}
            play={curTime >= endTime ? false : true}
          />
        </View>
        <View style={styles.Description}>
          <View style={{width: 308, height: 57, marginLeft: 12}}>
            <Text style={styles.videotitle}>
              {item?.V_Title}
              {item?.V_Keywords.split(',').join(' | ')}
            </Text>
          </View>
          <View style={styles.iconsview}>
            <TouchableOpacity
              onPress={() => {
                likeVideo();
              }}
              style={styles.icon_style}>
              <AntDesign
                style={styles.Entypo}
                name={isLiked ? 'like1' : 'like2'}
                size={25}
                color={'#0A0A0A'}
              />
              <Text style={styles.txtlike}> {item?.Likes}</Text>
            </TouchableOpacity>
            <View style={styles.icon_style}>
              <Feather
                style={styles.Entypo}
                onPress={() => setModalVisible(!isModalVisible)}
                name="message-circle"
                size={25}
                color={'#0A0A0A'}
              />
              <Text style={styles.txtlike}>{comment?.length}</Text>
            </View>
            <View style={styles.icon_style}>
              <SimpleLineIcons
                style={styles.Entypo}
                name="eyeglass"
                size={25}
                color={'#0A0A0A'}
              />
              <Text style={styles.txtlike}>{item?.Views}</Text>
            </View>
            <TouchableOpacity
              style={styles.icon_style}
              onPress={() => setSaveClip(!saveClip)}>
              <FontAwesome
                style={styles.Entypo}
                name="scissors"
                size={25}
                color={'#0A0A0A'}
              />
              <Text style={styles.txtlike}>{saveClip ? 'Cancel' : 'Clip'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CompoundClip', {
                  item: route?.params?.item,
                  maxRang: maxRang,
                })
              }>
              <FontAwesome
                style={styles.Entypo}
                name="clipboard"
                size={25}
                color={'#0A0A0A'}
              />
              <Text style={styles.txtlike}>Compound</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isModalVisible ? (
        <ScrollView nestedScrollEnabled={true}>
          <View style={styles.comentmodal}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.cmnttitle}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.comments}>Comments</Text>
                <Text style={styles.countComment}>{comment?.length}</Text>
              </View>
              <AntDesign
                style={styles.Entypo}
                name="close"
                size={25}
                color={'#0A0A0A'}
              />
            </TouchableOpacity>
            <Text style={styles.cmntRespectuful}>
              Remember to keep comments respectfull
            </Text>
            <View style={{...styles.addcomment}}>
              <TextInput
                value={commentText}
                onChangeText={e => setCommentText(e)}
                style={styles.searchinput}
                placeholderTextColor={'gray'}
                placeholder="Add a comment..."
                color="black"
              />
              <TouchableOpacity onPress={() => Addcomment()}>
                <Ionicons
                  style={styles.Ionicons}
                  name="send-sharp"
                  size={25}
                  color={'#0A0A0A'}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={comment}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <View style={styles.flatlistcomment}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      marginLeft: 20,
                    }}>
                    <Image
                      style={styles.userimage}
                      source={{
                        uri: `https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png`,
                      }}
                    />
                    <Text
                      style={{color: 'black', fontSize: 12, marginLeft: 10}}>
                      Mohsin Khattak
                    </Text>
                  </View>
                  <Text style={{color: 'black', marginLeft: 80}}>
                    {item?.comment}
                  </Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
      ) : (
        <ScrollView nestedScrollEnabled>
          {!saveClip ? (
            <View style={styles.clipflatlist}>
              <FlatList
                data={data}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => renderSaveClips(item, index)}
              />
            </View>
          ) : (
            <View style={styles.clipview}>
              <Text style={styles.createtxt}>Create Clip</Text>

              <View style={styles.clipView}>
                <MultiSlider
                  isMarkersSeparated={true}
                  values={values}
                  min={0}
                  max={maxRang}
                  allowOverlap={true}
                  onValuesChangeFinish={values => {
                    setVlues(values);
                  }}
                />
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    {fmtMSS(values[0])}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 235,
                      fontWeight: 'bold',
                    }}>
                    {fmtMSS(values[1])}
                  </Text>
                </View>
                <TextInput
                  onChangeText={e => setTitle(e)}
                  value={title}
                  style={styles.ClipTitleTxtInput}
                  marginLeft={20}
                  placeholderTextColor={'gray'}
                  placeholder="Add Title"
                />
                <TextInput
                  onChangeText={e => setKeyWord(e)}
                  style={styles.ClipTitleTxtInput}
                  value={keyWord}
                  marginLeft={20}
                  placeholderTextColor={'gray'}
                  placeholder="Add Keyword"
                />
                <TextInput
                  onChangeText={e => setCategory(e)}
                  value={category}
                  style={styles.ClipTitleTxtInput}
                  marginLeft={20}
                  placeholderTextColor={'gray'}
                  placeholder="Add Category"
                />
              </View>

              <TouchableOpacity
                onPress={() => OnClipSave()}
                style={styles.savebtn}>
                <Text style={styles.savetxt}>Save Clip</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
};
export default Play;
