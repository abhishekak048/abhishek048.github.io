import "./App.css";
import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    console.log('heyyaaa');
    // window.webkit.messageHandlers.bridge.postMessage("data");
  //  window.Android.mobileLoginForCaptchaResponse("token");
    window.addEventListener(
      'message',
      function (event) {
        console.log("event then")


        window.flutter_inappwebview
          .callHandler('handlerFoo', 'flutter moon')
      }
    );
  },[]);
  return <div>Hello World Update</div>;
}

