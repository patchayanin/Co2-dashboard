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
class realtimeChart extends React.Component {
    constructor(props) {
        super(props);
        // this.onFetchData = this.onFetchData.bind(this);
        this.state = {
            chartConfigs : {
                type : "scrollarea2d",
                width : '90%',
                height : '400',
                containerBackgroundOpacity :0,
                dataFormat: 'json', // Data type
                dataSource : {
                "chart": {
                      "caption": "",
                      "subcaption": "",
                      "numberprefix": "$",
                      "numdisplaysets": "10",
                      "labeldisplay": "rotate",
                      "xAxisLineColor":"#ffffff",
                      "scrollColor":"#ffffff",
                      "showrealtimevalue": "0",
                      "theme": "fusion",
                      "bgAlpha": "0",
                      "canvasBgAlpha":"0", 
                      "plottooltext": "$label<br>Price: <b>$dataValue</b>",
                      "setadaptiveymin": "1",
                      "palettecolors":"#440A5B,#FFF3A2,#FFE600,",
                      "chartTopMargin":50,
                      "chartLeftMargin":50,
                },
                // Chart Data
                "categories": [
                    {
                      "category": [
                        {
                          "label": "1994"
                        },
                        {
                          "label": "1995"
                        },
                        {
                          "label": "1996"
                        },
                        {
                          "label": "1997"
                        },
                        {
                          "label": "1998"
                        },
                        {
                          "label": "1999"
                        },
                        {
                          "label": "2000"
                        },
                        {
                          "label": "2001"
                        },
                        {
                          "label": "2002"
                        },
                        {
                          "label": "2003"
                        },
                        {
                          "label": "2004"
                        },
                        {
                          "label": "2005"
                        },
                        {
                          "label": "2006"
                        },
                        {
                          "label": "2007"
                        },
                        {
                          "label": "2008"
                        },
                        {
                          "label": "2009"
                        },
                        {
                          "label": "2010"
                        },
                        {
                          "label": "2011"
                        },
                        {
                          "label": "2012"
                        },
                        {
                          "label": "2013"
                        },
                        {
                          "label": "2014"
                        },
                        {
                          "label": "2015"
                        },
                        {
                          "label": "2016"
                        },
                        {
                          "label": "2017"
                        }
                      ]
                    }
                  ],
                  "dataset": [
                    {
                      "data": [
                        {
                          "value": "15622"
                        },
                        {
                          "value": "10612"
                        },
                        {
                          "value": "15820"
                        },
                        {
                          "value": "26723"
                        },
                        {
                          "value": "35415"
                        },
                        {
                          "value": "25555"
                        },
                        {
                          "value": "81803"
                        },
                        {
                          "value": "47950"
                        },
                        {
                          "value": "42396"
                        },
                        {
                          "value": "19435"
                        },
                        {
                          "value": "9780"
                        },
                        {
                          "value": "23243"
                        },
                        {
                          "value": "28619"
                        },
                        {
                          "value": "8477"
                        },
                        {
                          "value": "3503"
                        },
                        {
                          "value": "14278"
                        },
                        {
                          "value": "30522"
                        },
                        {
                          "value": "61518"
                        },
                        {
                          "value": "24819"
                        },
                        {
                          "value": "16437"
                        },
                        {
                          "value": "21171"
                        },
                        {
                          "value": "1690"
                        },
                        {
                          "value": "2418"
                        },
                        {
                          "value": "11253"
                        }
                      ]
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

export default realtimeChart