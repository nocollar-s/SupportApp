import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, Alert } from 'react-native';

const Keisan10 = () => {
  const [standardMonthlySalary, setStandardMonthlySalary] = useState('');
  const [daysOff, setDaysOff] = useState('');
  const [salaryDuringAbsence, setSalaryDuringAbsence] = useState('');
  const [benefitAmount, setBenefitAmount] = useState('');

  const calculateBenefit = () => {
    Keyboard.dismiss();
    const dailyAmount = (parseInt(standardMonthlySalary) / 30) * (2 / 3);
    const calculatedAmount = dailyAmount * parseInt(daysOff) - parseInt(salaryDuringAbsence);
    
    if (isNaN(calculatedAmount)) {
        Alert.alert('計算エラー', '計算できませんでした。入力値を見直してください。');
        setBenefitAmount('');
        return;
      }

    const roundedAmount = Math.floor(calculatedAmount); // 小数点以下を切り捨て
    const formattedAmount = roundedAmount.toLocaleString(); // 3桁ごとに「,」を追加
    setBenefitAmount(formattedAmount);

  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>「計算10ページ」基本手当　支給額</Text>
      <Text>標準報酬月額（円）</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setStandardMonthlySalary}
        value={standardMonthlySalary}
      />
      <Text>休業日数</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setDaysOff}
        value={daysOff}
      />
      <Text>休業中に支給された給与（円）</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setSalaryDuringAbsence}
        value={salaryDuringAbsence}
      />
      <Button title="計算" onPress={calculateBenefit} />
      <Text style={styles.result}>支給額：{benefitAmount} 円</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',

  },
  title:{
    fontSize: 20,
    paddingBottom: 15
    
  }
});

export default Keisan10;
