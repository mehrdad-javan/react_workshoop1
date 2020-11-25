import React, { Component } from 'react';

class TableStaticRow extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>Mehrdad</td>
                    <td>Javan</td>
                    <td>
                        <button type="submit" className="btn btn-info" >Details</button>
                    </td>
                </tr>
                <tr>
                    <td>Test</td>
                    <td>Javansson</td>
                    <td>
                        <button type="submit" className="btn btn-info" >Details</button>
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default TableStaticRow;
