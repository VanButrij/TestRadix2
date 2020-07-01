import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    let newSearch = React.createRef();

    let onReset = () => {
        props.resetSearch();
    }

    let onSearch = () => {
        let inputSearch = newSearch.current.value;
        props.searchOne(inputSearch);
    }

    return (
        <div>
            <div id={styles.wrapper} className='bordered'>
                <div id={styles.search}>

                    <form id='joy'> <input className='form-control forma' ref={newSearch} placeholder='Insert'></input></form>
                    { props.searchKey === 0
                    ? <button className='btn btn-outline-primary' onClick={onSearch}>Search</button>
                    : <button form='joy' type='reset' className='btn btn-outline-warning' onClick={onReset}>Reset</button>}
                </div>
                <div id='but1'>
                    <button id={styles.addbut} className='btn btn-outline-primary'>
                        <NavLink to='/add' className={styles.addLink}>Add</NavLink>
                    </button>
                </div>
                <div id='but2'>
                    <button id='delbut' className='btn btn-outline-danger' onClick={props.deleteone}>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default Header;
