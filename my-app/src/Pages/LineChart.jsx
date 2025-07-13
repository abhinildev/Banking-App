import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as Chartjs,LineElement , CategoryScale ,LinearScale,PointElement,Tooltip} from 'chart.js'
Chartjs.register(LineElement,CategoryScale,LinearScale,PointElement,Tooltip);
const LineChart = () => {
    const data={
            labels:['30.10.24','31.10.24','01.11.24','02.11.24'],
            datasets:[
                {
                    label:'Donations',
                    data:[25841.2,19473,16520.5,61834.7],
                    borderColor:'#6366f1',
                    backgroundColor:'rgba(99, 102, 241, 0.1)',
                    tension:0.4,
                    fill:true,
                },
            ],
        }
    
  return <Line data={data}/>
}

export default LineChart
