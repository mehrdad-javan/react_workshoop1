import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableStaticRow from './TableStaticRow';

class TableView extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card bg-secondary text-white">
                        <div className="card-body"><h4>Person List</h4></div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered">
                            <TableHeader />
                            <TableRow />
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableView;
