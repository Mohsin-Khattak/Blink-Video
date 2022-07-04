import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {styles} from './style';
import axios from 'axios';
import {urls} from '../../src/api/api-urls';
const CompoundClip = props => {
  const {navigation, route} = props;
  console.log('route:::::::: ', route);
  const [item, setItem] = React.useState(route?.params?.item);

  const [title, setTitle] = useState();
  const [clips, setClips] = React.useState([]);
  const [clip_id, setClip_id] = useState(0);
  const [keyWord, setKeyWord] = useState();
  const [category, setCategory] = useState();
  const [endTime, setEndTime] = useState();
  const [curTime, setCurTime] = useState();
  const [maxRang, setMaxRange] = useState(route?.params?.maxRang || 100);
  const [values, setVlues] = useState([0, 30]);
  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }
  const OnClipSave = async () => {
    try {
      // setModalVisible(false);
      let obj = {
        V_Title: title,
        V_Keywords: keyWord,
        V_StartTime: values[0],
        V_EndTime: values[1],
        Video_Id: item?.v_id,
        V_Url: item?.V_Url,
        v_id: clip_id,
      };
      const res = await axios.post(
        `${urls.base_url}BlinkVideo/AddCompoundClip`,
        obj,
      );
      setVlues([0, 30]);
      const copy = [...clips];
      copy?.push(obj);
      setClips(copy);
      setClip_id(res?.data?.v_id);
    } catch (error) {}
  };
  const ClipSave = () => {
    if (!title?.trim()) {
      alert('Please enter title');
    } else if (!keyWord?.trim()) {
      alert('Please enter keyword');
    } else OnClipSave();
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.iconView}>
          <Text style={styles.titleTxt}>Compound Clip</Text>
        </View>

        <View style={styles.flatlistView}>
          <FlatList
            data={clips}
            renderItem={({item, index}) => (
              <View style={styles.innerFlatlist}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                    marginTop: 10,
                  }}>
                  <Text style={{color: 'black', fontSize: 18}}>
                    Clip # {index + 1}
                  </Text>
                  <Text>
                    {fmtMSS(item.V_StartTime)}-{fmtMSS(item.V_EndTime)}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index + ''}
          />
        </View>

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
          {clips?.length === 0 && (
            <>
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
            </>
          )}
          <View style={styles.btnview}>
            <TouchableOpacity onPress={() => ClipSave()} style={styles.savebtn}>
              <Text style={styles.savetxt}>Add New</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('play')}
              style={styles.savebtn}>
              <Text style={styles.savetxt}>Save Clip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default CompoundClip;
