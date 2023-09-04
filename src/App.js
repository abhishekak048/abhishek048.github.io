import "./App.css";
import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    console.log('heyyaaa');
    window.addEventListener(
      'flutterInAppWebViewPlatformReady',
      function (event) {
        window.flutter_inappwebview
          .callHandler('handlerFoo', 'hello bro')
          .then(function (result) {
            console.log("into then")
            // print to the console the data coming
            // from the Flutter side.;;
            console.log(JSON.stringify(result));

            window.flutter_inappwebview.callHandler(
              'handlerFooWithArgs',
              1,
              true,
              ['bar', 5],
              { foo: 'baz' },
              result
            );
          });
      }
    );
  },[]);
  return <div>Hello World.</div>;
}

