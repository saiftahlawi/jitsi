
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

import Jitsi from './Jitsi'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
const [JoinMeeting,setJoinMeeting]=useState(false)
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <View
          style={{
            backgroundColor:Colors.white,
            justifyContent:'center',
            alignItems:'center',
            height:600
          }}>
       {JoinMeeting?(<Jitsi/>):(<TouchableOpacity onPress={()=>setJoinMeeting(true)}>
<View style={{width:200,marginTop:10}} >

  <Text style={{borderWidth:1,borderColor:"#000",padding:10,textAlign:'center'}}>
    join Meeting
  </Text>
</View>
</TouchableOpacity>)
       }


   </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
