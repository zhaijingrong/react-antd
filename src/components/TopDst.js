/**
 * Created by zjr on 2018/8/20.
 */

import React, { Component } from 'react';
import { Table, Button } from 'antd';


const columns = [{
  title: '目标地址',
  dataIndex: 'DstIPAddress',
}, {
  title: '上行流量',
  dataIndex: 'uploadFlow',
}, {
  title: '下行流量',
  dataIndex: 'downloadFlow',
}, {
  title: '总流量',
  dataIndex: 'totalFlow',
}];

const data = [];

for (let i = 0; i < 46; i++ ) {
    data.push({
        key: i,
        DstIPAddress: `Edward King ${i}`,
        uploadFlow: `${i}`,
        downloadFlow: `${i}`,
        totalFlow: `${i}`,
    });
}

class TopDstTable extends Component {
    state = {
        selectedRowKeys: [],
        loading: false,
    };

    start = () => {
        this.setState( {loading: true} );
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000)
    };

    onSelectChange = (selectedRowKeys) => {
        console.log('selectRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys })
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}>
                        Reload
                    </Button>
                    <span>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : '' }
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} size="small" />
            </div>
        );
    }
}


class TopDst extends Component {
  render() {
      return (
          <div>
            <TopDstTable/>
          </div>
      );
  }
}

export default TopDst;