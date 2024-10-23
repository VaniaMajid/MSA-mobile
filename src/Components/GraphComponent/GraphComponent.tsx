import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { useStyles } from './GraphComponent.styles';
import { useTheme } from '~Contexts/ThemeContext';

interface GraphData {
  day: string;
  orders: number;
  revenue: number;
}

interface GraphComponentProps {
  data: GraphData[];
}

export const GraphComponent: React.FC<GraphComponentProps> = ({ data }) => {
  const styles = useStyles();
  const theme = useTheme();

  // Prepare data for the area chart
  const chartData = data.map((item) => ({
    value: item.orders,
    label: item.day,
    customDataPoint: () => (
      <View
        style={{
          width: 15,
          height: 15,
          backgroundColor: 'white',
          borderWidth: 5,
          borderRadius: 10,
          borderColor: theme.colors.black,
        }}
      />
    ),
    customLabel: () => (
        <Text style={[theme.fonts.paragraphSmallSemiBold, { color: theme.colors.black }]}>
            {item.orders}
        </Text>
        ),
    labelComponent: () => (
        <View style={{ width: 70, marginLeft: 7 }}>
            <Text style={theme.fonts.allCapsSubtext}>{item.day}</Text>
        </View>
        ),
  }));

  return (
    <View style={styles.container}>
      <LineChart
        areaChart
        thickness={3}
        data={chartData}
        width={350} // Set the width according to your layout
        height={220}
        isAnimated
        animationDuration={2000}
        startFillColor={theme.colors.primaryColor}
        startOpacity={0.7}
        endOpacity={0.3}
        curved
        hideYAxisText
        hideDataPoints
        
        color={theme.colors.blue}
        xAxisColor={'rgba(0,0,0,0)'}
        yAxisColor={'rgba(0,0,0,0)'}
        pointerConfig={{
          pointerStripWidth: 5,
          pointerColor: theme.colors.secondaryColor,
          radius: 10,
          pointerStripColor: theme.colors.primaryColor,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          pointerVanishDelay: 3000,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: (items) => {
            // Ensure items are defined and have length
            if (items.length > 0) {
              return (
                
                <View
                  style={[styles.pointerLabelContainer]}
                >
                  {items.map((item) => (
                    <View key={item.index}>
                      {/* Accessing day using the index */}
                      <Text style={[theme.fonts.paragraphSmallSemiBold, styles.pointerLabelText]}>
                        {item.value}
                      </Text>
                    </View>
                
                  ))}
                  <View style={styles.triangle} />
                </View>
                
              );
            }
            return null; // Return null if items are empty
          },
        }}
      />
    </View>
  );
};
