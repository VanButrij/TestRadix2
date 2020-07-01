import React from 'react';
import styles from './mainpage.module.css';

const MainPage = (props) => {
    return (
        <div>

            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Days</th>
                        <th>Mission</th>
                        <th>Multiple</th>
                    </tr>
                </thead>
                <tbody>
                {props.spacemen.map(s => {
                    if (s.show === 1) {
                        return (
                            <tr className={props.choosen === s.id && "table-active"}
                                onClick={(e) => { props.choose(s.id) }}>
                                <td>{s.name}</td>
                                <td>{s.date}</td>
                                <td>{s.days}</td>
                                <td>{s.mission}</td>
                                {s.isMultiple == true 
                                    ? <td>Yes</td> 
                                    : <td>No</td>}
                            </tr>
                                )
                            }
                        }
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default MainPage;