import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define the Props type for your component
type Props = {
  navigation: NavigationProp<any>; // Adjust this type according to your navigation setup
};

const image = require('./assets/BACKGROUND2.png');
const image1 = require('./assets/logo.webp');
const image2 = require('./assets/messageLeft.png');
const image3 = require('./assets/terms.png');
const image4 = require('./assets/PLATFORM4.png');

const InstaSlebScreen: React.FC<Props> = ({ navigation }) => {
  const navigateToNextScreen = () => {
    // Navigate to 'NextScreen'
    navigation.navigate('NextScreen');
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.background}>
      <View style={styles.container}>
        <Image source={image1} style={styles.image1} />
        <View style={styles.msgView}>
          <Image source={image2} style={styles.image2} />
          <Text style={styles.text14}>
            Are You 14 Years Or Older?
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'white', fontFamily: 'sans-serif' }}>
            By Clicking Continue, I Agree That I Am At Least 14 Years
          </Text>
          <TouchableOpacity
            style={styles.btn1}
            onPress={navigateToNextScreen}
          >
            <Text style={{ color: 'black', fontSize: 16,textAlign:'center' }}>Yes, Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              // Handle 'No, I'm Not 14' button press if needed
            }}
          >
            <Text style={{ color: '#d55b3e', fontSize: 16,textAlign:'center' }}>No, I'm Not 14</Text>
          </TouchableOpacity>
        </View>
        <Image source={image3} style={styles.image3} />
        <Image source={image4} style={styles.image4} />
      </View>
    </ImageBackground>
  );
};

export default InstaSlebScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    marginRight: 10,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  image1: {
    width: 150,
    height: 50,
    position: 'absolute',
    top: 40,
    left: 10
  },
  image2: {
    width: 170,
    height: 60,
    position: 'absolute',
  },
  msgView: {
    width: '100%',
    padding: 10,
    position: 'absolute',
    top: 200,
    left: 100
  },
  text14: {
    position: 'absolute',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    color: '#8E2DE2',
    fontFamily: 'sans-serif',
  },
  image4: {
    position: 'absolute',
    bottom: 0,
    width: 300,
    height: 90
  },
  main: {
    position: 'absolute',
    top: 320,
    alignItems: 'center',
    width: 220,
    height: 250,
    backgroundColor: '#ba78cd',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: 'yellow',
    borderWidth: 2,
    right: 15
  },
  image3: {
    width: 150,
    height: 450,
    position: 'absolute',
    top: 290,
    left: 0,
    zIndex: 4
  },
  btn1: {
    backgroundColor: '#cbf078',
    padding: 10,
    width: 170,
    borderRadius: 30,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 8,
    borderColor: '#024e51',
    marginVertical:5
  },
  btn2:{
    backgroundColor: '#fcff82',
    padding: 10,
    width: 170,
    borderRadius: 30,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 8,
    borderColor: '#024e51',
    marginVertical:5
  }
})
