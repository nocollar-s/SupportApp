import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import { PieChart } from 'react-native-svg-charts';
import { PieChart } from 'recharts';

import { Svg, Text as SvgText } from 'react-native-svg';

const data = [
  { key: 1, name: 'A', value: 20, svg: { fill: 'red' } },
  { key: 2, name: 'B', value: 30, svg: { fill: 'blue' } },
  { key: 3, name: 'C', value: 50, svg: { fill: 'green' } },
];

const FifthRoute = () => {
  const [selectedSlice, setSelectedSlice] = useState(null);

  const handleSlicePress = (item) => {
    setSelectedSlice(item);
  };

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { centroid, data } = slice;
      return (
        <SvgText
          key={index}
          x={centroid[0]}
          y={centroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={16}
        >
          {data.value}%
        </SvgText>
      );
    });
  };

  return (
    <View style={styles.container}>
      <PieChart
        style={{ height: 300 }}
        data={data}
        valueAccessor={({ item }) => item.value}
        outerRadius={'80%'}
        innerRadius={'40%'}
      >
        <Labels slices={data} />
      </PieChart>

      {selectedSlice && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>{selectedSlice.name}</Text>
          <Text style={styles.detailsText}>{selectedSlice.value}%</Text>
          <TouchableOpacity onPress={() => setSelectedSlice(null)}>
            <Text style={styles.closeText}>閉じる</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  detailsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeText: {
    color: 'blue',
    marginTop: 10,
  },
});

export default FifthRoute;
