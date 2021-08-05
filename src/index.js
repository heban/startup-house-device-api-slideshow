import React from 'react';
import ReactDOM from 'react-dom';

import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Box,
  Image,
  CodePane,
} from 'spectacle';

// Images
import Intro from './images/intro-unsplash.jpeg';
import NewPossibilities from './images/tony.gif';
import Mobile from './images/mobile.jpeg';
import JS from './images/js.png';
import VR from './images/vr.jpeg';
import Gamepads from './images/gamepads.jpeg';
import Audio from './images/audio.jpeg';
import Common from './images/common.jpeg';
import WebXRSupport from './images/webxr-support.png';
import GamepadSupport from './images/gamepad-support.png';
import RecognizerSupport from './images/recognizer.png';
import SynthesisSupport from './images/synthesis.png';
import CaptureSupport from './images/capture-support.png';
import VibrationSupport from './images/vibration.png';
import NFCSupport from './images/nfc.png';
import OrientationSupport from './images/orientation.png';
import BarcodeSupport from './images/barcode.png';
import TextdecoderSupport from './images/textdecoder.png';
import ProximitySupport from './images/proximity.png';
import DeviceMemorySupport from './images/device-memory.png';
import BatterySupport from './images/battery.png';
import NetworkSupport from './images/network.png';
import BluetoothSupport from './images/bluetooth.png';
import PicInPicSupport from './images/pic-in-pic.png';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Cabin", Helvetica, Arial, sans-serif',
    text: '"Merriweather", Helvetica, Arial, sans-serif'
  },
  colors: {
    primary: '#fff',
    secondary: '#000',
    tertiary: '#0066ff',
    quaternary: '#0066ff',
    fifth: '#0066ff',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen color={theme.colors.tertiary} />
    </Box>
    <Box padding="1em">
      <Progress color={theme.colors.tertiary} />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SDHLogo = () => (
  <Box pt="6px">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="54" viewBox="0 0 32 54">
      <defs>
        <path id="a" d="M.146.172h10.165v10.86H.146z"/>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path stroke="#06F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.218" d="M26.606 21.062s7.532 4.79 6.313 16.104l-15.833-9.368-15.834 9.368C.033 25.852 7.565 21.062 7.565 21.062M17.086 52.874s1.79-1.775 3.829-5.473c1.65-2.994-.47-6.698-3.83-6.698-3.36 0-5.478 3.704-3.828 6.698 2.038 3.698 3.829 5.473 3.829 5.473z" />
        <path stroke="#06F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.218" d="M20.177 35.629l4.45 2.628c.93-3.265 1.66-7.098 1.957-11.524 1.272-18.925-9.498-25.612-9.498-25.612S6.316 7.808 7.587 26.733c.298 4.426 1.027 8.26 1.958 11.524l4.45-2.628" />
      </g>
    </svg>
  </Box>
);

const Mark = ({ children }) => (
  <span style={{ color: theme.colors.tertiary }}>{children}</span>
);

const CenterBox = ({ children }) => (
  <Box position="relative" top="50%" margin="0 auto" style={{ transform: 'translateY(-50%)' }}>{children}</Box>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide backgroundImage={`url(${Intro})`} backgroundOpacity={0.5} backgroundColor="primary" alignItems="center">
      <FlexBox flexDirection="column" maxWidth="680px" justifySelf="center" alignSelf="center" position="relative" top="50%" style={{ transform: 'translateY(-50%)' }}>
        <FlexBox flexDirection="column" w="100%" padding="32px" justifySelf="center" alignSelf="center" border={`10px solid ${theme.colors.primary}`}>
          <Heading fontSize="72px" margin={0} lineHeight={1.15} color="secondary">
            JavaScript<br />Device API's
          </Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <SDHLogo />
            <Text fontSize="32px" fontFamily="header" color="tertiary">SDH Team<br />Force Pushers Weekly</Text>
          </FlexBox>
        </FlexBox>
        <FlexBox mt="10px" width="66%" height="10px" justifySelf="center" alignSelf="center" backgroundColor="tertiary"></FlexBox>
        <FlexBox mt="10px" width="33%" height="10px" justifySelf="center" alignSelf="center" backgroundColor="tertiary"></FlexBox>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Let's talk about...
      </Heading>
      <Box padding="24px">
        <Appear>
          <Text margin="64px 0 0" textAlign="left" fontSize="40px" color="secondary">
            What exactly JavaScript can do with <Mark>external devices?</Mark>
          </Text>
        </Appear>
        <Appear>
          <Text margin="32px 0 0" textAlign="left" fontSize="40px" color="secondary">
            What else can we expect in the <Mark>near future?</Mark>
          </Text>
        </Appear>
        <Appear>
          <Text margin="32px 0 0" textAlign="left" fontSize="40px" color="secondary">
            ... and what we should already <Mark>forget?</Mark>
          </Text>
        </Appear>
      </Box>
    </Slide>
    <Slide backgroundImage={`url(${Common})`} backgroundOpacity={0.99} backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="primary">
        Features for common devices
      </Heading>
      <CenterBox>
        <Image src={JS} size="100px" />
      </CenterBox>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Device Memory API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="0px 0px 12px 0px" textAlign="left" fontSize="34px" color="secondary">
            "The Device Memory API allows Web apps to assess the class of the device by the size of the <Mark>RAM memory</Mark> installed. It might be used to identify the lower-end devices to provide the reduced, lightweight experience of the website for performance reasons. The value provided by the API does not hint how much of the memory is actually available for the application to use - its purpose is only <Mark>to serve as a device class indication</Mark>." (whatwebcando.today)
          </Text>
          <CodePane language="jsx" width="100%">{`
            const RAM = navigator​.deviceMemory; // in GB
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Device Memory API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="0px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={DeviceMemorySupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Battery Status API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="48px 0 0" textAlign="left" fontSize="34px" color="secondary">
            "The Battery Status API allows Web applications to get the information about <Mark>the device's power source</Mark>, <Mark>battery charge level</Mark>, expected time of <Mark>charging or discharging</Mark>. It also exposes events whenever any of the information available changes.<br /><br />The API allows the applications to turn on/off its energy inefficient operations according to the power levels." (whatwebcando.today)
          </Text>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Battery Status API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <CodePane language="jsx" width="100%">{`
            // Check Battery Status API support
            if ('getBattery' in navigator) {
              const battery = await navigator.getBattery();

              console.log('Battery level: ', battery.level);
              console.log('Is battery charging?: ', battery.charging);

              battery.addEventListener('chargingchange', () => {
                // charging/uncharging
              });
              battery.addEventListener('levelchange', () => {
                // react on battery level
              });
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Battery Status API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="0px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={BatterySupport} width="960px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Network Information API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="48px 0 0" textAlign="left" fontSize="34px" color="secondary">
            "The Network Information API provides information about the system's connection in terms of <Mark>general connection type</Mark> (e.g., 'wifi', 'cellular', etc.).<br /><br />This can be used to select high definition content or low definition content based on the user's connection" (developer.mozilla.org)
          </Text>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Network Information API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <CodePane language="jsx" width="100%">{`
            // Check Network Information API support
            if ('connection️' in navigator) {
              const connectionType = navigator.connection.type; // cellular, wifi, none
              const effectiveType = navigator.connection.effectiveType // slow-2g, 2g, 3g, 4g

              navigator.connection.addEventListener('change', () => {
                // react when, for example, your internet connection has slowed down
              });
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Network Information API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={NetworkSupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Bluetooth API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="24px 0 20px" textAlign="left" fontSize="34px" color="secondary">
            "The Web Bluetooth API is a low-level API allowing Web applications <Mark>to pair with the nearby Bluetooth Low Energy-enabled peripheral devices</Mark> and <Mark>access their services exposed</Mark>." (whatwebcando.today)
          </Text>
          <CodePane language="jsx" width="100%">{`
            // Check Bluetooth API support
            if ('bluetooth' in navigator) {
              // Bluetooth connection supported
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Bluetooth API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="64px 24px 24px">
          <CodePane language="jsx" width="100%">{`
            const device = await navigator.bluetooth.requestDevice({
              filters: [{ services: ['battery_service'] },
            });
            const server = await device.gatt.connect();
            const service = await server.getPrimaryService('battery_service');
            const characteristic = await service.getCharacteristic('battery_level');
            const reading = await characteristic.readValue();

            console.log(reading);
          `}</CodePane>
          <Text textAlign="left" fontSize="16px" color="secondary" opacity={0.4}>source: https://medium.com/going-fullstack/interact-with-bluetooth-devices-using-the-web-bluetooth-api-7984b2509939</Text>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Bluetooth API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={BluetoothSupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Picture-in-Picture API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="4px 0 20px" textAlign="left" fontSize="34px" color="secondary">
            "The Picture-in-Picture API allow websites to create a <Mark>floating video window always on top of other windows</Mark> so that users may continue consuming media while they interact with other content sites, or applications on their device." (developer.mozilla.org)
          </Text>
          <CodePane language="jsx" width="100%">{`
            // Check Picture-in-Picture API support
            if ('pictureInPictureEnabled' in document) {
              video.requestPictureInPicture();
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Picture-in-Picture API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="0px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={PicInPicSupport} width="880px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundImage={`url(${Audio})`} backgroundOpacity={0.99} backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="primary">
        Audio capture and recognition
      </Heading>
      <CenterBox>
        <Image src={JS} size="100px" />
      </CenterBox>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Web Speech API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="48px 0 0" textAlign="left" fontSize="34px" color="secondary">
            "The Web Speech API provides two distinct areas of functionality — <Mark>speech recognition</Mark>, and <Mark>speech synthesis</Mark> (also known as text to speech, or tts) — which open up interesting new possibilities for accessibility, and control mechanisms." (MDN Web Docs)
          </Text>
          <Text margin="40px 0 0" textAlign="left" fontSize="34px" color="secondary">
            Web Speech API allows Web apps to access the device's <Mark>microphone</Mark> and produces a transcript of the voice being <Mark>recorded</Mark> (which can be used as an input for our apps).
          </Text>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Web Speech API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <CodePane language="jsx" width="100%">{`
            // Check Web Speech API support
            if (window.SpeechRecognition) {
              // Create speech recognizer object
              const recognizer = new SpeechRecognition();
              // Add event listener which will "listen" for speech
              recognizer.onresult = (event) => {
                console.log(event.results);
              }
              // start recognizer
              recognizer.start();
              // stop after 2 seconds
              setTimeout(() => {
                recognizer.stop();
              }, 2000);
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Web Speech API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px" margin="24px 0 0">
          <CodePane language="jsx" width="100%">{`
            // Check Speech Synthesis API support
            if ('speechSynthesis' in window) {
              // Create speech synthesis object
              const msg = new SpeechSynthesisUtterance('Say hello to my little friend!');

              // and speak!
              speechSynthesis.speak(msg);
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Web Speech API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={RecognizerSupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Web Speech API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={SynthesisSupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Media Capture API <span style={{ fontSize: '32px' }}><Mark>candidate</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="48px 0 0" textAlign="left" fontSize="34px" color="secondary">
            "The Media Capture API allows authorized Web apps to access the streams from the device's <Mark>audio and video capturing</Mark> interfaces, i.e. to use the data available from <Mark>the camera and the microphone</Mark>.<br /><br />The streams exposed by the API can be bound directly to the HTML &lt;audio&gt; or &lt;video&gt; elements or read and manipulated in the code, including further more specific processing via Image Capture API, Media Recorder API or Real-Time Communication." (whatwebcando.today)
          </Text>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Media Capture API <span style={{ fontSize: '32px' }}><Mark>candidate</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px" margin="24px 0 0">
          <CodePane language="jsx" width="100%">{`
            // Check Media Capture API support
            if (navigator.mediaDevices) {
              // Get audio stream
              const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

              // Get audio element, attach stream and play
              const audioElement = document.querySelector('audio');
              audioElement.src = window.URL.createObjectURL(stream);
              audioElement.play();
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Media Capture API <span style={{ fontSize: '32px' }}><Mark>candidate</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="0 0 10px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={CaptureSupport} width="920px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundImage={`url(${Gamepads})`} backgroundOpacity={0.66} backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Game controllers
      </Heading>
      <CenterBox>
        <Image src={JS} size="100px" />
      </CenterBox>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Gamepad API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="48px 0 0" textAlign="left" fontSize="34px" color="secondary">
            The Gamepad API provides a solution to interact with external <Mark>game controllers</Mark> like gamepads and joysticks in a consistent way, by specifying interfaces that allow web apps to directly <Mark>act on devices data</Mark>.
          </Text>
          <Text margin="40px 0 0" textAlign="left" fontSize="34px" color="secondary">
            Regardless of whether the controller is <Mark>wired or wireless</Mark> connected, the Gamepad API provides information about e.g. <Mark>pressed buttons</Mark> and allows e.g. <Mark>vibration</Mark> of the controller.
          </Text>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Gamepad API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <CodePane language="jsx" width="100%">{`
            // Check Gamepad API support
            if ('getGamepads' in navigator) {
              // Grab the first connected gamepad
              const gamepad = navigator.getGamepads()[0];

              // Check if the first button is pressed
              console.log(gamepad.buttons[0].pressed);

              // and vibrate!
              gamepad.vibrationActuator.playEffect('dual-rumble', {
                duration: 1000,
                weakMagnitude: 1.0,
                strongMagnitude: 1.0,
              });
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Gamepad API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <CodePane language="jsx" width="100%">{`
            window.addEventListener('gamepadconnected', (event) => {
              console.log('A gamepad connected: ', event.gamepad);
              const gamepadIndex = event.gamepad.index;

              const gamepad = navigator.getGamepads()[gamepadIndex];
              // ...
            });
            
            window.addEventListener('gamepaddisconnected', (event) => {
              console.log('A gamepad disconnected: ', event.gamepad);
            });
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Gamepad API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={GamepadSupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundImage={`url(${Mobile})`} backgroundOpacity={0.86} backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="primary">
        Mobile devices
      </Heading>
      <CenterBox>
        <Image src={JS} size="100px" />
      </CenterBox>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Vibration API <span style={{ fontSize: '32px' }}><Mark>recommendation</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="36px 0" textAlign="left" fontSize="34px" color="secondary">
            With the Vibration API, web apps are able to use device's <Mark>built-in vibration</Mark>.
          </Text>
          <CodePane language="jsx" width="100%">{`
            // Simple vibration
            navigator.vibrate(1000); // in ms

            // Vibration with pattern
            navigator.vibrate([100, 500, 200, 100]);
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Vibration API <span style={{ fontSize: '32px' }}><Mark>recommendation</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={VibrationSupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Web NFC API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="48px 0 0" textAlign="left" fontSize="34px" color="secondary">
            "The Web NFC API is a low-level API that provides sites the ability to <Mark>read and write to nearby NFC</Mark> (Near-Field Communication) devices.<br /><br />It allows starting up a <Mark>scan that informs</Mark> when an NFC tag has been tapped. It also provides a method to <Mark>write a message via NFC</Mark>." (whatwebcando.today)
          </Text>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Web NFC API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <CodePane language="jsx" width="100%">{`
            // Check Web NFC API support
            if ('NDEFReader' in window) {
              try {
                const ndef = new NDEFReader();
                await ndef.scan();
            
                ndef.addEventListener('readingerror', () => {
                  console.error('No device!');
                });
            
                ndef.addEventListener('reading', ({ serialNumber }) => {
                  console.log('serialNumber: ', serialNumber);
                });
              } catch (error) { //... }
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Web NFC API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={NFCSupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Screen Orientation API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="64px 0 0" textAlign="left" fontSize="34px" color="secondary">
            "The Screen Orientation API allows Web applications to get the information about <Mark>the current orientation of the document</Mark> (portrait or landscape) as well as to <Mark>lock the screen</Mark> orientation in a requested state." (whatwebcando.today)
          </Text>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Screen Orientation API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <CodePane language="jsx" width="100%">{`
            // Check Screen Orientation API support
            if ('orientation' in screen) {
              const orientationType = screen.orientation.type; //portrait-primary, portrait-secondary, landscape-primary and landscape-secondary

              screen.orientation.addEventListener('change', () => {
                console.log('New orientation: ', screen.orientation.type);
              });

              screen.orientation.lock('portrait-primary');
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Screen Orientation API <span style={{ fontSize: '32px' }}><Mark>experimental</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={OrientationSupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Shape Detection API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="64px 0 0" textAlign="left" fontSize="34px" color="secondary">
            "The Shape Detection API is a set of services exposing image processing like <Mark>OCR (text detection)</Mark>, <Mark>barcode/QR scanning</Mark> or <Mark>face detection</Mark> capabilities of the underlying system to the Web applications.<br /><br />The availability and quality of the detection varies on the OS &amp; hardware – the API exposes those services as-is." (whatwebcando.today)
          </Text>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Shape Detection API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <CodePane language="jsx" width="100%">{`
            // Check BarcodeDetector API support
            if ('BarcodeDetector' in window) {
              const barcodeDetector = new BarcodeDetector({ formats: ['qr_code', 'code_128'] });
              const barcodes = barcodeDetector.detect(imageEl);
            }
          `}</CodePane>
        </Box>
      </Appear>
      <Appear>
        <Box padding="24px">
          <CodePane language="jsx" width="100%">{`
            // Check TextDetector API support
            if ('TextDetector' in window) {
              const textDetector = new TextDetector();
              const text = await textDetector.detect(imageEl);
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Shape Detection API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Appear>
        <Box padding="64px 24px 24px 24px">
          <CodePane language="jsx" width="100%">{`
            // Check FaceDetector API support
            if ('FaceDetector' in window) {
              const faceDetector = new FaceDetector({
                maxDetectedFaces: 10,
              });

              const faces = await faceDetector.detect(image);
              faces.forEach(face => { //... });
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Shape Detection API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={BarcodeSupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Shape Detection API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={TextdecoderSupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Generic Sensor API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="12px 0 0" textAlign="left" fontSize="34px" color="secondary">
            "The Generic Sensor APIs are a set of interfaces built to a common design that expose <Mark>device sensors</Mark> in a consistent way to the web platform." (developer.mozilla.org)
          </Text>
          <Text margin="24px 0 0" textAlign="left" fontSize="30px" color="secondary">
            Sensor API includes, for example, the following sensors:
          </Text>
          <FlexBox>
            <UnorderedList color="secondary" fontSize="24px" margin="0px">
              <ListItem>
                <CodeSpan fontSize="24px">AmbientLightSensor</CodeSpan>
              </ListItem>
              <ListItem>
                <CodeSpan fontSize="24px">GravitySensor</CodeSpan>
              </ListItem>
              <ListItem>
                <CodeSpan fontSize="24px">Gyroscope</CodeSpan>
              </ListItem>
            </UnorderedList>
            <UnorderedList color="secondary" fontSize="24px" margin="0px">
              <ListItem>
                <CodeSpan fontSize="24px">Accelerometer</CodeSpan>
              </ListItem>
              <ListItem>
                <CodeSpan fontSize="24px">Magnetometer</CodeSpan>
              </ListItem>
              <ListItem>
                <CodeSpan fontSize="24px">ProximitySensor</CodeSpan>
              </ListItem>
            </UnorderedList>
          </FlexBox>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Generic Sensor API (ProximitySensor) <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Appear>
        <Box padding="64px 24px 24px 24px">
          <CodePane language="jsx" width="100%">{`
            // Check ProximitySensor support
            if ('ProximitySensor' in window) {
              const sensor = new ProximitySensor();

              sensor.addEventListener('reading', ({ distance, near }) => {
                console.log('distance', distance); // distance in cm
                console.log('near', near); // boolean value
              });

              sensor.start();
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Generic Sensor API (ProximitySensor) <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={ProximitySupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundImage={`url(${VR})`} backgroundOpacity={0.66} backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Virtual reality
      </Heading>
      <CenterBox>
        <Image src={JS} size="100px" />
      </CenterBox>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        WebXR Device API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <Text margin="48px 0 0" textAlign="left" fontSize="34px" color="secondary">
            A standard that derives from the abandoned <Mark>WebVR</Mark> standard.<br />It combines technologies of <Mark>virtual reality</Mark> and <Mark>augmented reality</Mark>.
          </Text>
          <Text margin="40px 0 0" textAlign="left" fontSize="34px" color="secondary">
            With this API, web apps are able to discover available <Mark>VR/AR devices</Mark>, establish a <Mark>session with the device</Mark> and read the device-specific <Mark>geometry data</Mark>. Everything is rendered on <Mark>&lt;canvas&gt;</Mark> element.
          </Text>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        WebXR Device API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Appear>
        <Box padding="24px">
          <CodePane language="jsx" width="100%">{`
            // Check WebXR API support
            if (navigator.xr) {
              let immersiveVr = false;
              // Check that 'immersive-ar' mode is available
              navigator.xr.isSessionSupported('immersive-ar').then((supported) => { ... });
              // Check that 'immersive-vr' mode is available
              navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
                immersiveVr = supported;
              });

              if (immersiveVr) {
                const session = await navigator.xr.requestSession('immersive-vr');
                //...
              }
            }
          `}</CodePane>
        </Box>
      </Appear>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        WebXR Device API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 0" textAlign="center" fontSize="32px" color="secondary">
          Mozilla to the rescue! Meet the <Mark>A-Frame</Mark>
        </Text>
        <Appear>
          <CodePane language="html" width="100%" showLineNumbers={false}>{`
            <html>
              <head>
                <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
              </head>
              <body>
                <a-scene>
                  <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
                  <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
                  <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
                  <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
                </a-scene>
              </body>
            </html>
          `}</CodePane>
        </Appear>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        WebXR Device API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          Mozilla to the rescue! Meet the <Mark>A-Frame</Mark>
        </Text>
        <iframe id="aframeIframe" width="100%" height="400px" frameBorder="no" scrolling="no" allowvr="yes" src="https://aframe.io/aframe/examples/boilerplate/hello-world/"></iframe>
      </Box>
    </Slide>
    <Slide backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        WebXR Device API <span style={{ fontSize: '32px' }}><Mark>draft</Mark></span>
      </Heading>
      <Box padding="0px 24px 24px 24px">
        <Text margin="4px 0 20px" textAlign="center" fontSize="32px" color="secondary">
          <Mark>Browser support</Mark> (caniuse.com)
        </Text>
        <FlexBox width="100%" alignItems="center">
          <Image src={WebXRSupport} width="1024px" />
        </FlexBox>
      </Box>
    </Slide>
    <Slide backgroundImage={`url(${NewPossibilities})`} backgroundOpacity={0.66} backgroundColor="secondary">
      <CenterBox>
        <Heading textAlign="center" fontSize="64px" lineHeight={1} color="primary">
          The possibilities are endless!
        </Heading>
      </CenterBox>
    </Slide>
    <Slide backgroundImage={`url(${Intro})`} backgroundOpacity={0.5} backgroundColor="primary" alignItems="center">
      <FlexBox flexDirection="column" maxWidth="680px" justifySelf="center" alignSelf="center">
        <FlexBox flexDirection="column" w="100%" padding="32px" justifySelf="center" alignSelf="center" border={`10px solid ${theme.colors.primary}`}>
          <Heading size={2} margin={0} lineHeight={1} color="secondary">
            Thanks!
          </Heading>
          <FlexBox alignItems="center" justifyContent="center">
            <SDHLogo />
            <Text fontSize="48px" fontFamily="header" color="tertiary">Q&A</Text>
          </FlexBox>
        </FlexBox>
        <FlexBox mt="10px" width="66%" height="10px" justifySelf="center" alignSelf="center" backgroundColor="tertiary"></FlexBox>
        <FlexBox mt="10px" width="33%" height="10px" justifySelf="center" alignSelf="center" backgroundColor="tertiary"></FlexBox>
      </FlexBox>
      <FlexBox flexDirection="column">
        <Text fontSize="24px" fontFamily="header" color="tertiary" margin="50px 0 0 0">Sources:</Text>
        <UnorderedList color="secondary" fontSize="20px" margin="0px">
          <ListItem>
            <CodeSpan fontSize="20px">https://developer.mozilla.org/en-US/docs/Web/API</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan fontSize="20px">https://whatwebcando.today/</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan fontSize="20px">https://www.w3.org/TR/?tag=webapi</CodeSpan>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
