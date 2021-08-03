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
    <Slide backgroundImage={`url(${Audio})`} backgroundOpacity={0.99} backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="primary">
        Audio capture and recognition
      </Heading>
      <CenterBox>
        <Image src={JS} size="100px" />
      </CenterBox>
    </Slide>
    <Slide backgroundImage={`url(${Gamepads})`} backgroundOpacity={0.66} backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Gamepads
      </Heading>
      <CenterBox>
        <Image src={JS} size="100px" />
      </CenterBox>
    </Slide>
    <Slide backgroundImage={`url(${Mobile})`} backgroundOpacity={0.86} backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="primary">
        Mobile devices
      </Heading>
      <CenterBox>
        <Image src={JS} size="100px" />
      </CenterBox>
    </Slide>
    <Slide backgroundImage={`url(${VR})`} backgroundOpacity={0.66} backgroundColor="primary">
      <Heading textAlign="left" fontSize="64px" lineHeight={1} color="secondary">
        Virtual reality
      </Heading>
      <CenterBox>
        <Image src={JS} size="100px" />
      </CenterBox>
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
