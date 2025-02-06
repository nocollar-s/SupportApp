import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Articles = () => {
  const navigation = useNavigation();
  const [standardMonthlySalary, setStandardMonthlySalary] = useState('');
  const [daysOff, setDaysOff] = useState('');
  const [salaryDuringAbsence, setSalaryDuringAbsence] = useState('');
  const [benefitAmount, setBenefitAmount] = useState('0');

  const calculateBenefit = () => {
    Keyboard.dismiss();

    // 入力値のバリデーション
    if (!standardMonthlySalary || isNaN(standardMonthlySalary) || standardMonthlySalary < 0) {
      Alert.alert('入力エラー', '標準報酬月額は0以上の数値を入力してください。');
      return;
    }
    if (!daysOff || isNaN(daysOff) || daysOff < 0) {
      Alert.alert('入力エラー', '休業日数は0以上の数値を入力してください。');
      return;
    }
    if (salaryDuringAbsence === '' || isNaN(salaryDuringAbsence) || salaryDuringAbsence < 0) {
      Alert.alert('入力エラー', '休業中に支給された給与は0以上の数値を入力してください。');
      return;
    }

    const parsedSalary = parseInt(standardMonthlySalary, 10);
    const parsedDaysOff = parseInt(daysOff, 10);
    const parsedAbsence = parseInt(salaryDuringAbsence, 10);

    const dailyAmount = (parsedSalary / 30) * (2 / 3);
    const calculatedAmount = dailyAmount * parsedDaysOff;

    if (isNaN(calculatedAmount)) {
      Alert.alert('計算エラー', '計算できませんでした。入力値を見直してください。');
      setBenefitAmount('0');
      return;
    }

    const roundedAmount = parseFloat(((calculatedAmount * 100).toFixed(0)) / 100);
    const formattedAmount = roundedAmount.toLocaleString();
    setBenefitAmount(formattedAmount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>傷病手当金計算</Text>
      <Text>標準報酬月額（円）</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setStandardMonthlySalary}
        value={standardMonthlySalary}
        placeholder="例：300000"
      />
      <Text>休業日数</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setDaysOff}
        value={daysOff}
        placeholder="例：30"
      />
      <Text>休業中に支給された給与（円）</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setSalaryDuringAbsence}
        value={salaryDuringAbsence}
        placeholder="例：0"
      />
      <Button title="計算" onPress={calculateBenefit} />
      <Text style={styles.result}>
        支給額：{benefitAmount} 円
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Kihonteate')}>
        <Text>次のページ</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 20,
    paddingBottom: 15,
  },
});

export default Articles;