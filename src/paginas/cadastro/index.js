import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Cadastrar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRAR ALUNO</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} />
      </View>

    </View>
  );
}
