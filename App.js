import {StyleSheet, ImageBackground} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameOver, setGameOver] = useState(true)

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameOver(false);
    }

    const gameOverHandler = () => setGameOver(true)

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;

    if (gameOver && userNumber) screen = <GameOverScreen/>

    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
            <ImageBackground
                source={require('./assets/background.png')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.imageStyle}
            >
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    imageStyle: {
        opacity: 0.20
    }
});