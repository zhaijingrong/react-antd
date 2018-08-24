/**
 * Created by zjr on 2018/8/20.
 */
import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { Row, Col } from 'antd';

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const pie = {
  labels: [
    'Red',
    'Green',
    'Yellow',
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
};

const doughnut = {
  labels: [
    'Red',
    'Green',
    'Yellow',
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
};

class LineChart extends Component {
    render() {
        return (
            <div>
                <Line data={line} />
            </div>
        )
    }
}

class BarChart extends Component {
    render() {
        return (
            <div>
                <Bar data={bar}/>
            </div>
        )
    }
}

class PieChart extends Component {
    render() {
        return (
            <div>
                <Pie data={pie}/>
            </div>
        )
    }
}


class DoughnutChart extends Component {
    render() {
        return (
            <div>
                <Doughnut data={doughnut}/>
            </div>
        )
    }
}

class Dashboard extends Component {
  render() {
      return (
          <div>
              <Row gutter={128}>
                  <Col span={12} className="gutter-row">
                      <div className="gutter-box">
                          <LineChart/>
                      </div>
                  </Col>
                  <Col span={12} className="gutter-row">
                      <div className="gutter-box">
                          <BarChart/>
                      </div>
                  </Col>
              </Row>
              <Row gutter={128} style={{ marginTop: '100px' }}>
                  <Col span={12} className="gutter-row">
                      <div className="gutter-box">
                          <DoughnutChart/>
                      </div>
                  </Col>
                  <Col span={12} className="gutter-row">
                      <div className="gutter-box">
                          <PieChart/>
                      </div>
                  </Col>
              </Row>
          </div>
      );
  }
}

export default Dashboard;