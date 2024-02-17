//aplicacion/screens/GraficasSensores.tsx

import React from 'react';
import { View, Text } from 'react-native';
import GraficaGas from '../../Sensor_Gas/aplicacion/screens/GraficasGas';

const GraficasSensores: React.FC = () => {
  return (
    <View>
      <GraficaGas />
    </View>
  );
};

export default GraficasSensores;
