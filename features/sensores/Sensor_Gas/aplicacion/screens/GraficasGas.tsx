// // sensor_gas/aplicacion/screens/GraficaGas.tsx

// import React from 'react';
// import { View, Text } from 'react-native';
// import { BarChart } from 'react-native-chart-kit';

// const GraficaGas: React.FC = () => {
//   // Datos de ejemplo para la gráfica
//   const data = {
//     labels: ['Gas natural', 'Propano', 'Metano', 'Alcohol', 'Humo', 'Nivel General'],
//     datasets: [
//       {
//         data: [100, 70, 20, 90, 110, 60], // Concentración de gases (ejemplo)
//       },
//     ],
//   };

//   // Configuración de la gráfica
//   const chartConfig = {
//     backgroundColor: '#ffffff',
//     backgroundGradientFrom: '#ffffff',
//     backgroundGradientTo: '#ffffff',
//     decimalPlaces: 2,
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     style: {
      
//     },
//     barPercentage: 2,
//   };

//   // Función para renderizar la gráfica de gas
//   const renderGraficaGas = () => {
//     return (
//       <BarChart
//         data={data}
//         width={700} 
//         height={300} 
//         yAxisSuffix=" ppm"
//         chartConfig={chartConfig}
//         style={{
//           marginVertical: 20,
//           borderRadius: 16,
        
//         }}
//         yLabelsOffset={-10} 
//       />
//     );
//   };

//   return (
//     <View>
//       {renderGraficaGas()}
//     </View>
//   );
// };

// export default GraficaGas;



import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const GraficaGas: React.FC = () => {
  // Datos de ejemplo para las ppm
  const ppmData = [20, 10, 30, 40, 50, 60];

  // Estados para los datos de las barras
  const [dataBarras, setDataBarras] = useState<number[]>([10, 20, 30, 40, 50]);

  // Configuración de la gráfica de barras
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    barPercentage: 2,
  };

  // Función para renderizar la gráfica de barras
  const renderGraficaBarras = () => {
    return (
      <BarChart
        data={{
          labels: ['Gas natural', 'Propano', 'Metano', 'Alcohol', 'Humo', 'Nivel General'],
          datasets: [{ data: ppmData }]
        }}
        width={700} 
        height={300} 
        yAxisSuffix=" ppm"
        chartConfig={chartConfig}
        style={{
          marginVertical: 20,
          borderRadius: 16,
        }}
        yLabelsOffset={-10} 
      />
    );
  };

  return (
    <View>
      <Text>Grafica de Gas</Text>
      {renderGraficaBarras()}
    </View>
  );
};

export default GraficaGas;












