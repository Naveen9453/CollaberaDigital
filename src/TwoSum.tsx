import React,{useState} from "react";
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
const regex = /^-?\d+(,-?\d+)*$/;
const TwoSum = () =>{
    const [arrayValues,setArrayValues] = useState<string>('');
    const [arrayValuesError,setArrayValuesError] = useState<string>('');
    const [isArrayError,setIsArrayError] = useState<boolean>(false);
    const [targetValue,setTargetValue] = useState<string>('');
    const [targetValueError,setTargetValueError] = useState<string>('');
    const [isTargetError,setIsTargetError] = useState<boolean>(false);
    const [indexes, setIndexes] = useState<string>();

    const validateInput = (val:string) =>{
       setArrayValues(val);
       if(!regex.test(val)){
            setIsArrayError(true);
            setArrayValuesError('Please enter valid numeric value with comma separated.')
       }else{
        setIsArrayError(false);
        setArrayValuesError('')
       }
    }
const handleTargetValue = () =>{
    if(targetValue ===''){
        setIsTargetError(true);
        setTargetValueError('Please enter number');
    }else if(!Number(targetValue)){
        setIsTargetError(true);
            setTargetValueError('Please enter valid number');
    }else{
        setIsTargetError(false);
    }
}

    const handleSubmit = () => {
        handleTargetValue();
        const numbers = arrayValues.split(',');
        let firstIndex = 0;
        let secondIndex = 0;
        for (firstIndex = 0; firstIndex < numbers.length; firstIndex++) {
            let firstNumber = numbers[firstIndex];
            for (secondIndex = firstIndex + 1; secondIndex < numbers.length; secondIndex++) {
                let secondNumber = numbers[secondIndex];
                if (Number(firstNumber) + Number(secondNumber) === Number(targetValue)) {
                    setIndexes(`[${firstIndex + 1}, ${secondIndex + 1}]`);
                    return;
                }
            }
        }

        setIndexes('No indexes found');
    
    }
    return(
        <SafeAreaView>
                  <View style={styles.container}>
                      <Text style={styles.title}>Two Sum</Text>
                      <TextInput
                          style={styles.textInput}
                          placeholder="Enter numbers with comma separated"
                          value={arrayValues}
                          onChangeText={val => validateInput(val)}
                      />
                    {isArrayError && <Text style={styles.errorText}>{arrayValuesError}</Text>}
                      <TextInput
                          style={styles.textInput}
                          keyboardType="numeric"
                          placeholder="Target Number"
                          value={targetValue}
                          onChangeText={val => setTargetValue(val.trim())}
                      />
                      {isTargetError && <Text style={styles.errorText}>{targetValueError}</Text>}
                      <TouchableOpacity style={styles.checkButton} onPress={() => handleSubmit()}>
                          <Text style={styles.buttonText}>Calculate Two Sum</Text>
                      </TouchableOpacity>
                      <Text style={styles.twoSumText}>Two Sum Indexes :{ !isArrayError && !isTargetError ? indexes : null}</Text>
                  </View>
              </SafeAreaView>
    )
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
    subtitle: {
        fontSize: 14
    },
    textInput: {
        marginTop: 20,
        width: '100%',
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: '#0F8BF8',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '800',
    },
    checkButton: {
        width: '100%',
        borderRadius: 10,
        height: 40,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0F8BF8',
    },
    twoSumText: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '800',
    },
    errorText: {
        marginTop: 10,
        fontSize: 12,
        color: 'red',
        fontWeight: '500',
    },
  });
export default TwoSum;