import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import YoutubePlayer from 'react-native-youtube-iframe';
import Entypo from 'react-native-vector-icons/Entypo';
import { useState, useEffect } from 'react/cjs/react.development';



const data = [
    {
        name: 'SiBw7os-_zI',
        name_1: 'Intro to Object Oriented Programming ',
        time: '30:17',
        clip: 'Clip 1',
        time: 30,
        endTime: 40,
    },
    {
        name: 'SiBw7os-_zI',
        name_1: 'Intro to Object Oriented Programming ',
        time: '30:17',
        clip: 'Clip 1',
        time: 70,
        endTime: 80,
    },
    {
        name: 'SiBw7os-_zI',
        name_1: 'Intro to Object Oriented Programming ',
        time: '30:17',
        clip: 'Clip 1',
        time: 400,
        endTime: 350,
    },
    {   
        name: 'SiBw7os-_zI',
        name_1: 'Intro to Object Oriented Programming ',
        time: '30:17',
        clip: 'Clip 1',
        time: 500,
        endTime: 550,
    },
]

const play = ({navigation}) => {
    const [endTime, setEndTime] = useState()
    const [curTime, setCurTime] = useState()
    const [index, setIndex] = useState(0)
    const ref = React.useRef();

    
    // React.useEffect(() => {
    //     console.log('ldkfkkd');
    //     setCurTime(ref.current.getCurrentTime());
    //     return () => {
    //         console.log('cleaned up');
    //     };
    // }, [])
    useEffect(() => {
        const interval = setInterval(async () => {
          const elapsed_sec = await ref.current.getCurrentTime(); // this is a promise. dont forget to await
          //  console.log('elapsed_sec =>'+ elapsed_sec)
          // calculations
          const elapsed_ms = Math.floor(elapsed_sec * 1000);
          const min = Math.floor(elapsed_ms / 60000);
          const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);
         console.log("current Time",seconds);  
          setCurTime(seconds)

        //   setElapsed(
        //     min.toString().padStart(2, '0') +
        //       ':' +
        //       seconds.toString().padStart(2, '0') +
        //       ':' +
        //       ms.toString().padStart(3, '0'),
        //   );
        }, 100); // 100 ms refresh. increase it if you don't require millisecond precision

        return () => {
          clearInterval(interval);
        };
      }, [index]);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View>
                <View style={styles.video}>
                    <YoutubePlayer parseDuration={(event) => {
                        console.log('event');
                    }} ref={ref} videoId={data[index].name}
                        height={232}
                        play={curTime >= endTime ? false : true}
                    />
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('Clip')} style={styles.scissors}>
                    <Entypo style={styles.Entypo} name='scissors' size={25} color={'#0A0A0A'} />
                    <Text style={styles.txtscissors}>Clip</Text>
                </TouchableOpacity>
            </View>
            <FlatList horizontal data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { ref?.current?.seekTo(item.time), setEndTime(item.endTime), setIndex(index) }}
                            style={styles.clips}>
                            {/* <View style={styles.videoclips}>
                    {/* <YoutubePlayer  videoId={item.name}
                    height={232}
                    play={false}     
                    />  
                    
                </View> */}
                            <Image style={styles.logo} source={require('../../src/assets/images/cc.jpg')} />

                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    );
};
export default play;
