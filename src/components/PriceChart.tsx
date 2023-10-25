import { Dimensions } from "react-native";

const data = {
    labels: ["1/01/2023", "1/01/2023", "1/01/2023", "1/01/2023", "1/01/2023", "1/01/2023"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2
      }
    ]
};

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};

export { data, screenWidth, chartConfig };
