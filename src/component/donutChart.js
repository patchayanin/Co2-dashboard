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
class Donut extends React.Component {
    constructor(props) {
        super(props);
        // this.onFetchData = this.onFetchData.bind(this);
        this.state = {
           chartConfigs : {
                type: 'doughnut2d',
                renderAt: 'chart-container',
                width: '400',
                height: '300',
                containerBackgroundOpacity :0,
                dataFormat: 'json',
                dataSource: {
                    // Chart Configuration
                    "chart": {
                        "caption": "",
                        "defaultCenterLabel": "Total\n"+parseInt(props.sum),
                        "numberSuffix": "K",
                        "theme": "fusion", 
                        "centerLabelFontSize":30,
                        "centerLabelColor":"#ffffff",
                        "palettecolors":"#FFC300,#440A5B,#FF0000",
                        "labelAlpha":0,
                        "labelBorderPadding":0,
                        "legendItemFontColor":"#ffffff",
                        "enableSmartLabels":0,
                        "showLegend":1,
                        "legendPosition":"Bottom",
                        "logoPosition": "TL",
                        "plotFillAlpha":80,
                        "bgAlpha": "0",
                        "canvasBgAlpha":"0", 
                        "pieRadius" : 85,               
                        "doughnutRadius" : 65,
                        "chartRightMargin" : 110,
                        "chartBottomMargin" : 60, 
                    },
                    // Chart Data
                    "data": [{
                        "label": "walk",
                        "value": "290",
                        "labelFontColor":"#ffffff",
                    }, {
                        "label": "Sleep",
                        "value": "260",
                        "labelFontColor":"#ffffff"
                    }]
                }
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("willReceiveProps--donut")  
        console.log(nextProps)
        const chartConfigsNew = Object.assign({}, this.state.chartConfigs);
        chartConfigsNew.dataSource.chart.defaultCenterLabel = "Total\n"+parseInt(nextProps.sum);
        this.setState({
            chartConfigs : chartConfigsNew,
        });
    }
  render() {
     return (
     <ReactFC
        {...this.state.chartConfigs}/>
     );
  }
}

export default Donut