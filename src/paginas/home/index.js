import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebase/firebaseConnection";
import { styles } from "./styles";

export default function Home() {
  // const navigation = useNavigation();
  const [alunos, setAlunos] = useState([]);
  const [nota1, setNota1] = useState([]);
  const [nota2, setNota2] = useState([]);
  const [nota3, setNota3] = useState([]);

  //   function irDetalhes(name,n1,n2,n3,img){
  //     navigation.navigate("Detalhes",{nome:name,nota1:n1,nota2:n2,nota3:n3,imagem:img})
  //  }

  useEffect(() => {
    async function buscarAlunos() {
      await firebase
        .database()
        .ref("aluno/1")
        .on("value", (snapshot) => {
          setAlunos(snapshot.val().nome);
          setNota1(snapshot.val().nota1);
          setNota2(snapshot.val().nota2);
          setNota3(snapshot.val().nota3);
        });
    }

    buscarAlunos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> LISTA DE ALUNOS </Text>

      <Text style={styles.text}>{alunos}</Text>
      <Text style={styles.text}>{nota1}</Text>
      <Text style={styles.text}>{nota2}</Text>
      <Text style={styles.text}>{nota3}</Text>
    </View>
  );
}
