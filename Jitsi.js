import React, { useEffect } from 'react';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

function Jitsi() {

  useEffect(() => {

    setTimeout(() => {
    const options = {
      room: 'String',
      token: 'String',
      audioMuted: true,
      audioOnly: false,
      videoMuted: false,
      subject: 'String',
    };
    const url = 'https://meet.jit.si/helloRoom-1'
    const userInfo = {
      displayName: 'User',
      email: 'user@example.com',
      avatar: 'https:/gravatar.com/avatar/abc123',
    };
    JitsiMeet.audioCall(url, userInfo, options);
    /* You can also use JitsiMeet.audioCall(url) for audio only call */
    /* You can programmatically end the call with JitsiMeet.endCall() */
  }, 1000);

      //JitsiMeet.audioCall(url, userInfo);
      /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
      /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
 
  }, [])

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  });

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log(nativeEvent)
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log(nativeEvent)
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log(nativeEvent)
  }
  return (
<JitsiMeetView

      onConferenceTerminated={e => onConferenceTerminated(e)}
      onConferenceJoined={e => onConferenceJoined(e)}
      onConferenceWillJoin={e => onConferenceWillJoin(e)}
      
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}

    />
  )
}

 
 export default Jitsi;
 