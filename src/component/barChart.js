// Step 1 - Including react
import React from 'react';
import ReactDOM from 'react-dom';

// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations
 
// Step 8 - Creating the DOM element to pass the react-fusioncharts component
class barChart extends React.Component {
    constructor(props) {
        super(props);
        // this.onFetchData = this.onFetchData.bind(this);
        this.state = {
            chartConfigs : {
                type: 'column2d',// The chart type
                width: '300', // Width of the chart
                height: '280', // Height of the chart
                containerBackgroundOpacity :0,
                dataFormat: 'json', // Data type
                dataSource: {
                    // Chart Configuration
                    "chart": {
                        "caption": "",
                        "subCaption": "",
                        "xAxisName": "",
                        "yAxisName": "",
                        "numberSuffix": "K",
                        "showValues":1,
                        "valueFontColor":"#ffffff",
                        "theme": "fusion",
                        "palettecolors":"#FFC300",
                        "labelFontColor":"#ffffff",
                        "chartRightMargin":300,
                        "chartLeftMargin":50,
                        "bgAlpha": "0",
                        "canvasBgAlpha":"0", 
                        "showXAxisLine":0,
                        "showYAxisValues":0,
                        "divLineDashed":1,
                    },
                    // Chart Data
                    "data": [{
                        "label": "January",
                        "value": "290",
                        "alpha": "50"
                    }, {
                        "label": "Febuary",
                        "value": "260"
                    }]
                }
            }
        };
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("willReceiveProps--bar")  
    //     console.log(nextProps)
    //     const chartConfigsNew = Object.assign({}, this.state.chartConfigs);
    //     chartConfigsNew.dataSource.chart.defaultCenterLabel = "Total\n"+parseInt(nextProps.sum);
    //     this.setState({
    //         chartConfigs : chartConfigsNew,
    //     });
    // }
  render() {
     return (
     <ReactFC
        {...this.state.chartConfigs}/>
     );
  }
}

export default barChart