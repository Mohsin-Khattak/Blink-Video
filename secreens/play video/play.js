import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { styles } from './style';
import YoutubePlayer from 'react-native-youtube-iframe';
import Entypo from 'react-native-vector-icons/Entypo';
import { useState, useEffect } from 'react/cjs/react.development';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import axios from 'axios';



// const data = [
//     {

//         name_1: 'Intro to Object Oriented Programming ',
//         time: '30:17',
//         clip: 'Clip 1',
//         time: 30,
//         endTime: 40,
//     },
//     {
//         name: 'SiBw7os-_zI',

//         name_1: 'Intro to Object Oriented Programming ',
//         time: '30:17',
//         clip: 'Clip 1',
//         time: 70,
//         endTime: 80,
//     },
//     {
//         name: 'SiBw7os-_zI',
//         name_1: 'Intro to Object Oriented Programming ',
//         time: '30:17',
//         clip: 'Clip 1',
//         time: 400,
//         endTime: 350,
//     },
//     {   
//         name: 'SiBw7os-_zI',
//         name_1: 'Intro to Object Oriented Programming ',
//         time: '30:17',
//         clip: 'Clip 1',
//         time: 500,
//         endTime: 550,
//     },
// ]


const Play = ({ navigation, route }) => {
    var item = route?.params?.item
    const [title, setTitle] = useState()
    const [endTime, setEndTime] = useState()
    const [curTime, setCurTime] = useState()
    const [maxRang, setMaxRange] = useState(100)
    const [values, setVlues] = useState([0, 30])
    const [right, setRight] = useState(30)
    const [index, setIndex] = useState(0)
    const [isPlay, setIsPlay] = useState(true)
    const [data, setData] = useState([]);
    const SaveClip = async () => {
        try {
            const res = await axios.post(`http://192.168.100.40/BlinkVideoApi/api/BlinkVideo/AddClip`, {
                "Clip_Title": title,
                Clip_StartTime: values[0],
                Clip_EndTime: values[1],
                Ranking: 0,
                v_id: item.v_id,

            });
            alert('Added Sucessfully')
            fetchClip()
        } catch (error) {
        }
    }
    const fetchClip = async () => {
        try {
            const res = await axios.get(`http://192.168.100.40/BlinkVideoApi/api/BlinkVideo/GetClips?v_id=${item.v_id}`)
            console.log('res', res.data)
            setData(res.data)
        } catch (error) {

        }
    }
   

    const ref = React.useRef();
    React.useEffect(() => {

        setCurTime(ref.current.getCurrentTime());
        return () => {

        };
    }, [])
    useEffect(() => {
        const interval = setInterval(async () => {
            const elapsed_sec = await ref.current.getCurrentTime(); // this is a promise. dont forget to await
            // calculations
            const elapsed_ms = Math.floor(elapsed_sec * 1000);
            const min = Math.floor(elapsed_ms / 60000);
            const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);

            //  console.log("current min",min);  
            //  console.log("current Time",seconds);  
            setCurTime(min * 60 + seconds)

        }, 100); // 100 ms refresh. increase it if you don't require millisecond precision
        return () => {
            clearInterval(interval);
            console.log();
        };
    }, [index]);

   useEffect(()=>{fetchClip()},[])


    function fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View>
                <View style={styles.video}>
                    <YoutubePlayer
                        ref={ref} videoId={item.V_Url}
                        parseDuration={(event) => {
                            console.log('event');
                        }}
                        onChangeState={async (str) => {
                            const range = await ref.current.getDuration()
                            console.log('lol', range);
                            setMaxRange(range)

                        }}
                        height={232}
                        play={curTime >= endTime ? false : true}
                    />
                </View>
                <View style={styles.scissors}>
                    <TouchableOpacity >
                        <Entypo style={styles.Entypo} name='scissors' size={25} color={'#0A0A0A'} />
                        <Text style={styles.txtscissors}>Clip</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>

                <View style={styles.clipflatlist}>
                    <FlatList horizontal data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => { ref?.current?.seekTo(item.Clip_StartTime), setEndTime(item.V_EndTime), setIndex(index) }}
                                    style={styles.clips}>
                                    <Image style={{width:250,height:150,marginTop:7}} source={{ uri: `https://img.youtube.com/vi/${item.V_Url}/0.jpg` }} />
                                    <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold', fontSize: 16, marginTop:10 }}>{item.Clip_Title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>


                <View style={styles.clipview}>
                    <View style={{ alignItems: 'center', marginTop: 15 }}>
                        <MultiSlider
                            isMarkersSeparated={true}
                            values={values}
                            min={0}
                            max={maxRang}

                            allowOverlap={true}
                            onValuesChangeFinish={(values) => {
                                console.log(values);
                                setVlues(values);
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'black', marginLeft: 30, fontWeight: 'bold' }}>{fmtMSS(values[0])}</Text>
                        <Text style={{ color: 'black', marginLeft: 224, fontWeight: 'bold' }}>{fmtMSS(values[1])}</Text>
                    </View>
                    <TextInput onChangeText={title => (setTitle(title))} style={styles.ClipTitle} marginLeft={20} placeholderTextColor={"gray"} placeholder='Add Title' />
                    <TouchableOpacity onPress={SaveClip} style={styles.savebtn}>
                        <Text style={styles.savetxt}>Save Clip</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
};
export default Play;
