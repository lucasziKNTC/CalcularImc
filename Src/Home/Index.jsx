import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Calcular Imc!</Text>
      
      <StatusBar style="auto" />
      <TextInput
      style={styles.input}
      placeholder='Digite sua Altura'
      placeholderTextColor="#999"
      />
       <TextInput
      style={styles.input}
      placeholder='Digite sua Peso'
      placeholderTextColor="#999"
      />

      <TouchableOpacity
      activeOpacity={.7}
      style={styles.button}
      > 
          <Text style={styles.text}>Calcular</Text>

      </TouchableOpacity>


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