import React from 'react'
import {ZegoExpressEngine} from 'zego-express-engine-webrtc'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

function Room() {

    const { meetingid} = useParams()

   const myMeeting = async (element) =>{
      const appID = 734135390;
      const serverSecret = "575e59b76d631b27911ff95b6fcd67d2"
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, meetingid, Date.now().toString(), "Ajikya Sharma");

      const zc = ZegoUIKitPrebuilt.create(kitToken)
      zc.joinRoom({
        container:element,
        sharedLinks:[
          {
            name:'Copy Link',
            url:`https://adviserxiis.vercel.app/room/${meetingid}`
          }
        ],
        scenario:{
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton:true
      })
   }
  

  return (
    <div className='h-screen'>
      <div ref={myMeeting}  className='h-screen'/>
    </div>
  )
}

export default Room