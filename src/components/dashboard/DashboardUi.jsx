import React, { Component } from 'react';
import Dashboard from './Dashboard';

class DashboardUi extends Dashboard {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h3>Welcome {this.props.match.params.id}</h3>
            </div>
        );
    }
}

export default DashboardUi;
