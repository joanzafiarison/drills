import React , {useState, useEffect} from 'react';
import { StyleSheet, View } from "react-native";
import { Svg, G, Rect, Line, Text } from 'react-native-svg';
import * as  d3 from 'd3';

const GRAPH_MARGIN = 20; 
const GRAPH_BAR_WIDTH = 5;
const colors = {
    axis : 'black',
    bars : 'coral'
};


const data = [
    { label: 'Jan', value: 14 },
    { label: 'Feb', value: 20 },
    { label: 'Mar', value: 11 },
    { label: 'Apr', value: 24 },
    { label: 'May', value: 24 },
    { label: 'Jun', value: 26 },
    { label: 'Jul', value: 26 },
    { label: 'Aug', value: 18 },
    { label: 'Sep', value: 16 },
    { label: 'Oct', value: 22 },
    { label: 'Nov', value: 23 },
    { label: 'Dec', value: 28 }
]

const Graph = ( {round} ) => {
    const SVGHeight = 150;
    const SVGWidth = 300;
    const  graphHeight = SVGHeight - 2 * GRAPH_MARGIN; 
    const  graphWidth = SVGWidth - 2 * GRAPH_MARGIN;

//X scale point
    const xDomain = data.map(item => item.label);//objet (Array) de Labels
    const xRange = [0, graphWidth] //Array
    const x = d3.scalePoint() //function
        .domain(xDomain)
        .range(xRange)
        .padding(1)

    //Y scale point
    const maxValue = d3.max(data, d => d.value) // Récupérer la valeur max
    const topValue = Math.ceil(maxValue / round) * round;
    const yDomain = [0,  topValue] //objet Array
    const yRange = [0, graphHeight] // Array
    const y = d3.scaleLinear() 
        .domain(yDomain)
        .range(yRange)
    
    const middleValue = topValue/ 2


  return (
    <Svg width={SVGWidth} height={SVGHeight}>
        <G y={graphHeight}>
            {/*Top Value label */}
            <Text
                x={graphWidth}
                textAnchor="end"
                y={y(topValue) * -1 - 5}
                fontSize={12}
                fill="black"
                fillOpacity={0.4}
                >
                {topValue.toString()}
            </Text>
            {/* Top Axis */}
            <Line
                x1="0"
                y1={y(topValue) * -1}
                x2={graphWidth}
                y2={y(topValue) * -1}
                stroke={colors.axis}
                strokeDasharray={[3, 3]}
                strokeWidth="0.5"
            />
            {/* Middle Axis*/}
            <Line
                x1="0"
                y1={y(middleValue) * -1}
                x2={graphWidth}
                y2={y(middleValue) * -1}
                stroke={colors.axis}
                strokeDasharray={[3, 3]}
                strokeWidth="0.5"

            />
             {/* bottom axis */}
             <Line
                x1="0"
                y1="2"
                x2={graphWidth}
                y2="2"
                stroke={colors.axis}
                strokeDasharray={[3, 3]}
                strokeWidth="0.5"
            />
            {/* bars */}
            {data.map( item => (
                <Rect
                    key={item.label}
                    x={x(item.label) - (GRAPH_BAR_WIDTH / 2)}
                    y={y(item.value) * -1}
                    rx={2.5}
                    width={GRAPH_BAR_WIDTH}
                    height={y(item.value)}
                    fill={colors.bars}
                />
            ))}
            {/*Labels */}
            {data.map(item => (
                <Text
                    key={'label' + item.label}
                    fontSize="8"
                    x={x(item.label)}
                    y="10"
                    textAnchor="middle">
                    {item.label}           
                </Text>
            ))}

           
        </G>
    </Svg>
  )
}

export default Graph