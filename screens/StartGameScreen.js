import {TextInput, View, Text, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const inputHandler = (enteredText) => setEnteredNumber(enteredText)

    const resetInputHandler = () => setEnteredNumber('')

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            return Alert.alert('Invalid number', 'Number has to be number between 0 to 99', [{
                text: 'okay',
                style: 'destructive',
                onPress: resetInputHandler
            }]);
        }
        onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter A number</InstructionText>
                <TextInput
                    style={styles.textInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={inputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}><PrimaryButton
                        onPress={resetInputHandler}>Reset</PrimaryButton></View>
                    <View style={styles.buttonContainer}><PrimaryButton
                        onPress={confirmInputHandler}>Confirm</PrimaryButton></View>
                </View>
            </Card>
        </View>
    )
}
export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})