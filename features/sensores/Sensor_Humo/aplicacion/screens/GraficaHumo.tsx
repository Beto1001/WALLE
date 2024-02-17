// sensor_humo/aplicacion/screens/GraficaHumo.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

// Constantes de datos de ejemplo para la gráfica
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

// Estilos de la gráfica
const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const GraficaHumo: React.FC = () => {
  // Función para renderizar la gráfica de humo
  const renderGraficaHumo = () => {
    return (
      <LineChart
        data={data}
        width={300}
        height={200}
        yAxisSuffix=" ppm"
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    );
  };

  return (
    <View>
      <Text>Gráfica de Humo</Text>
      {renderGraficaHumo()}
    </View>
  );
};

export default GraficaHumo;
