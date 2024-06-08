import React,{useState} from 'react';
import { SafeAreaView,View,Text, TextInput,TouchableOpacity,StyleSheet } from "react-native";

const AddTwoNumber = () => {
    const [firstNumber, setFirstNumber] = useState<string>('');
    const [secondNumber, setSecondNumber] = useState<string>('');
    const [isFirstNumError,setIsFirstNumError] = useState<boolean>(false);
    const [firstNumError,setFirstNumError] = useState<string>('');
    const [isSecondNumError,setIsSecondNumError] = useState<boolean>(false);
    const [secondNumError,setSecondNumError] = useState<string>('');
    const [total,setTotal] = useState<number>();
    const [hideTotal,setHideTotal] = useState<boolean>(false);

    const handleSubmit = () =>{
            let fNumber =  !Number.isNaN(Number(firstNumber)) ?  Number(firstNumber) : setFirstNumError('Please Enter Valid Number');
            let sNumber  = !Number.isNaN(Number(secondNumber)) ? Number(secondNumber) : setSecondNumError('Please Enter Valid Number');
           
            if(fNumber === undefined){
                setIsFirstNumError(true);
                setHideTotal(true)
            }else{
                setIsFirstNumError(false);
            }

            if(sNumber === undefined){
                setIsSecondNumError(true);
                setHideTotal(true);
            }else{
                setIsSecondNumError(false);
            }

            if(fNumber !== undefined && sNumber !== undefined)
                {
                    setHideTotal(false);
                    let sum = fNumber + sNumber;
                    setTotal(sum);
                    
                }

    }   
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Adding Two Numbers</Text>
                <TextInput
                    style={styles.numberTextInput}
                    placeholder="Enter First numbers"
                    value={firstNumber}
                    onChangeText={val => setFirstNumber(val)}
                />
                {isFirstNumError ?<Text style={styles.errorText}>{firstNumError}</Text> : null}
                <TextInput
                    style={styles.numberTextInput}
                    keyboardType="numeric"
                    placeholder="Enter Second Number"
                    value={secondNumber}
                    onChangeText={val => setSecondNumber( val)}
                />
                {isSecondNumError ?<Text style={styles.errorText}>{secondNumError}</Text> : null}
                <TouchableOpacity style={styles.addButton} onPress={() => handleSubmit()}>
                    <Text style={styles.buttonText}>Add Two Numbers</Text>
                </TouchableOpacity>
                <Text style={styles.totalText}>Total : {!hideTotal && <Text>{total}</Text>}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    numberTextInput: {
        marginTop: 20,
        width: '100%',
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: '#0F8BF8',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '800',
    },
    addButton: {
        width: '100%',
        borderRadius: 10,
        height: 40,
        borderColor: 'gray',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0F8BF8',
    },
    totalText: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '800',
    },
    errorText: {
        marginTop: 10,
        fontSize: 12,
        color: 'red',
        fontWeight: '700',
    },
});
export default AddTwoNumber; 