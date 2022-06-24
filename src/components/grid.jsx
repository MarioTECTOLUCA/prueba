import React, { useState, useEffect } from 'react'
import { apiClient } from '../helpers/apiClient';

export const Grid = () => {

    const [resp, setresp] = useState([]);

    useEffect(() => {
        apiClient().then((results) => setresp(results));
    }, [])

    return (
        <div>
            <table>
                <tbody>
                    {
                        resp.map(({ id, indexes, location, name, source_id },i) => (
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{indexes}</td>
                                <td>{location}</td>
                                <td>{name}</td>
                                <td>{source_id}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
