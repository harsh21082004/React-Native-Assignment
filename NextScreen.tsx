import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const App: React.FC = () => {
    const [displaySize, setDisplaySize] = useState(1);

    const { width, height } = Dimensions.get('window');

    const dWidth = width / 5;
    const dHeight = height / 10;

    const message = displaySize === 1 ? '100%' : displaySize === 1.25 ? '125%' : displaySize === 1.5 ? '150%' : displaySize === 1.75 ? '175%' : displaySize === 2 ? '200%':'Huge';

    const handleDisplaySizeChange = (newSize: number) => {
        setDisplaySize(newSize);
    };
    return (
        <ScrollView style={styles.container}>
            <View >
                <Text style={styles.name}>Display Size {message}</Text>
                <View style={{
                    backgroundColor: "#0078fe", padding: 10, marginLeft: '45%', borderRadius: 5, marginTop: 5, marginRight: "5%", minWidth: displaySize * dWidth, minHeight: displaySize * dHeight
                }}>
                    <Text style={{ fontSize: 16, color: "#fff", }} >Hi Pete!</Text>
                    <Text style={{ fontSize: 10, color: "white", justifyContent: "center" }} >Tue 05:25</Text>
                    <View style={styles.rightArrow}></View>
                    <View style={styles.rightArrowOverlap}></View>
                </View>
                <View style={{
                    backgroundColor: "#dedede", padding: 10, borderRadius: 5, marginTop: 5, marginRight: '45%', marginLeft: "5%",
                    alignSelf: 'flex-start', minWidth: displaySize * dWidth, minHeight: displaySize * dHeight
                }}>
                    <Text style={{ fontSize: 16, color: "#000", justifyContent: "center" }} >Hey, want to grab up a coffee and catch up today?</Text>
                    <Text style={{ fontSize: 10, color: "black", justifyContent: "center" }} >Tue 05:26</Text>
                    <View style={styles.leftArrow}>
                    </View>
                    <View style={styles.leftArrowOverlap}></View>
                </View>
                <View style={{
                    backgroundColor: "#0078fe", padding: 10, borderRadius: 5, marginLeft: '45%', marginTop: 5, marginRight: "5%", minWidth: displaySize * dWidth, minHeight: displaySize * dHeight
                }}>
                    <Text style={{ fontSize: 16, color: "#fff", }} >Sounds great, I know of a good place not too far from here.</Text>
                    <Text style={{ fontSize: 10, color: "white", justifyContent: "center" }} >Tue 05:27</Text>
                    <View style={styles.rightArrow}></View>
                    <View style={styles.rightArrowOverlap}></View>
                </View>
                <View style={{
                    backgroundColor: "#dedede", padding: 10, borderRadius: 5, marginRight: '45%', marginTop: 5, marginLeft: "5%",
                    alignSelf: 'flex-start', minWidth: displaySize * dWidth, minHeight: displaySize * dHeight
                }}>
                    <Text style={{ fontSize: 16, color: "#000", justifyContent: "center" }} >Perfect!</Text>
                    <Text style={{ fontSize: 10, color: "black", justifyContent: "center" }} >Tue 05:28</Text>
                    <View style={styles.leftArrow}>
                    </View>
                    <View style={styles.leftArrowOverlap}></View>
                </View>
            </View>
            <View style={styles.settingsButton}>
                <TouchableOpacity>
                    <Text style={styles.settingsButtonText}>
                        Preview
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.displaySizeSlider}>
                <TouchableOpacity
                    style={[styles.displaySizeButton]}
                    onPress={() => handleDisplaySizeChange(1)}
                >
                    <Text style={[styles.displaySizeButtonText, displaySize === 1 && styles.active]}>100%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.displaySizeButton]}
                    onPress={() => handleDisplaySizeChange(1.25)}
                >
                    <Text style={[styles.displaySizeButtonText, displaySize === 1.25 && styles.active]}>125%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.displaySizeButton]}
                    onPress={() => handleDisplaySizeChange(1.5)}
                >
                    <Text style={[styles.displaySizeButtonText, displaySize === 1.5 && styles.active]}>150%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.displaySizeButton]}
                    onPress={() => handleDisplaySizeChange(1.75)}
                >
                    <Text style={[styles.displaySizeButtonText, displaySize === 1.75 && styles.active]}>175%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.displaySizeButton]}
                    onPress={() => handleDisplaySizeChange(2)}
                >
                    <Text style={[styles.displaySizeButtonText, displaySize === 2 && styles.active]}>200%</Text>
                </TouchableOpacity>
            </View>
            <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={2}
                step={0.25}
                value={displaySize}
                onValueChange={handleDisplaySizeChange}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 150,
        paddingTop: 50,
        backgroundColor: '#F5FCFF',
    },
    time: {
        fontSize: 12,
        color: '#999999',
        marginBottom: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    messageText: {
        color: 'white',
        fontSize: 16,
    },
    settingsButton: {
        marginTop: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#008CBA',
        padding: 10,
    },
    settingsButtonText: {
        color: '#008CBA',
        fontSize: 16,
    },
    settingsButtonTextBold: {
        fontWeight: 'bold',
    },
    rightArrow: {
        position: "absolute",
        backgroundColor: "#0078fe",
        //backgroundColor:"red",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomLeftRadius: 25,
        right: -10
    },
    rightArrowOverlap: {
        position: "absolute",
        backgroundColor: "white",
        //backgroundColor:"green",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomLeftRadius: 18,
        right: -20
    },
    leftArrow: {
        position: "absolute",
        backgroundColor: "#dedede",
        //backgroundColor:"red",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomRightRadius: 25,
        left: -10
    },

    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: "white",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomRightRadius: 18,
        left: -20
    },
    displaySizeSlider: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    displaySizeButton: {
        marginHorizontal: 15,
        marginTop:20
    },
    displaySizeButtonText: {
        fontSize: 15
    },
    active: {
        color: 'blue',
    },
    slider:{
        paddingBottom:150,
        paddingTop:0,
    }
});

export default App;