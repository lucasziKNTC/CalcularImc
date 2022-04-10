import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';


export default function Home() {

    const[altura, setAltura] = useState(0)
    const[peso, setPeso] = useState(0)
    const[resultado, setResultado] =  useState(0)
    const[mensagem, setMensagem] = useState('')

   function handleCalculateImc(){ 

    const Calculate = (peso / (altura * altura)).toFixed(2)
    if(Calculate < 18.5) {
      setResultado(Calculate)
      setMensagem("Abaixo do Peso")
  }
      
  else if (Calculate > 18.5 && Calculate < 24.9) {
    setResultado(Calculate)
    setMensagem("Normal")
  }
  else if (Calculate > 25 && Calculate < 29.9) {
    setResultado(Calculate)
    setMensagem("Sobrepeso")
  }
  else if (Calculate > 30 && Calculate < 34.9) {
    setResultado(Calculate)
    setMensagem("Obesidade")
  }
  else if (Calculate > 35 && Calculate < 39.90) {
    setResultado(Calculate)
    setMensagem("Obesidade Grau 2")
  }
  else if (Calculate > 40) {
    setResultado(Calculate)
    setMensagem("Obesidade Grau 3")
  }
}


  return (
    <View style={styles.container}>

      <Text>Calcular Imc!</Text>
      
      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        placeholder='Digite sua Altura'
        placeholderTextColor="#999"
        onChangeText={setAltura}
      />
       <TextInput
        style={styles.input}
        placeholder='Digite sua Peso'
        placeholderTextColor="#999"
        onChangeText={setPeso}
      />

      <TouchableOpacity
        activeOpacity={.7}
        style={styles.button}
        onPress={handleCalculateImc}
      > 
          <Text style={styles.text}>Calcular</Text>

      </TouchableOpacity>

      <Text>{resultado}</Text>
      <Text>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
    paddingHorizontal:20,
    paddingVertical:70,
    paddingHorizontal:30,
  },
  input:{
      marginTop:20,
    backgroundColor:'black',
    padding:10,
    borderRadius:5,
    color:'white',

  },
  button:{
      backgroundColor:'black',
      padding:10,
      borderRadius:6,
      marginTop:30,

},
text:
{
textAlign:'center',
color:'#fff',
}
});