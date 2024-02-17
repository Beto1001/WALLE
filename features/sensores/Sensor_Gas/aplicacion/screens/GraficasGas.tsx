import React, { useState } from 'react';
import { View, Text, Dimensions,TouchableOpacity, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const GraficaGas: React.FC = () => {
  // Datos de ejemplo para las ppm
  const ppmData = [20, 10, 30, 40, 50, 60];

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
    barPercentage: 0.8, // Ajusta este valor según tus preferencias
  };

  // Función para obtener las dimensiones de la pantalla
  const screenWidth = Dimensions.get('window').width;

  // Función para renderizar la gráfica de barras
  const renderGraficaBarras = () => {
    return (
      <TouchableOpacity>
      <BarChart
        data={{
          labels: ['Gas natural', 'Propano', 'Metano', 'Alcohol', 'Humo', 'Nivel General'],
          datasets: [{ data: ppmData }]
        }}
        width={screenWidth - 10}  // Utiliza el ancho de la pantalla menos algún margen
        height={250}  // Ajusta la altura según tus preferencias
        yAxisSuffix=" ppm"
        chartConfig={chartConfig}
        style={{
          marginVertical: 20,
          borderRadius: 16,
        }}
        yLabelsOffset={-10}
      />
      </TouchableOpacity>
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

const styles = StyleSheet.create({})