import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default function ControlScreen() {
  const bUp = [styles.button, styles.upRow];
  const bLe = [styles.button, styles.leftRow];
  const bRi = [styles.button, styles.rightRow];
  const bDo = [styles.button, styles.downRow];

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>
        Control Screen
      </Text>
      <View style={styles.buttonsBox} >
        <TouchableOpacity style={bUp}>
          <Text style={styles.textButton} >UP</Text>
        </TouchableOpacity>

        <View style={styles.lr}>
          <TouchableOpacity style={bLe}>
            <Text style={styles.textButton} >left</Text>
          </TouchableOpacity>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
            <TouchableOpacity style={bRi}>
              <Text style={styles.textButton} >right</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={bDo}>
          <Text style={styles.textButton} >down</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.verticallySpaced}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    backgroundColor: '#A18262',
    borderRadius: 9,
    marginTop: 20,
    color: '#6D4C38',
    fontSize: 40,
    textAlign: 'center',
    maxWidth: 300,
    marginLeft: '9%',
    fontWeight: 'bold'
  },
  container: {
    marginTop: 40,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  lr: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 90,
    padding: 10,
    margin: 5,
    width: 100,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonsBox: {
    margin: 9,
    marginTop: 50,
    maxHeight: 800,
    maxWidth: 400,
  },
  upRow: {
    marginLeft: '36%',
    marginBottom: 20,
  },
  leftRow: {
    marginLeft: 10,
  },
  rightRow: {
    marginRight: 10,
  },
  downRow: {
    marginLeft: '36%',
    marginTop: 20,
  },
});