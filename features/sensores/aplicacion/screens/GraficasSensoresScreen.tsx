//aplicacion/screens/GraficasSensores.tsx

import React from 'react';
import { View} from 'react-native';
import GraficaGas from '../../Sensor_Gas/aplicacion/screens/GraficasGas';

const GraficasSensoresScreen: React.FC = () => {
  return (
    <View>
      <GraficaGas />
    </View>
  );
};

export default GraficasSensoresScreen;
