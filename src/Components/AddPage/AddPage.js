import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './addPage.module.css';

const AddPage = (props) => {

    let newName = React.createRef();
    let newDate = React.createRef();
    let newDays = React.createRef();
    let newMission = React.createRef();
    let newIsMultiple = React.createRef();

    let onAddone = () => {

        let insertName = newName.current.value;
        let insertDate = newDate.current.value;
        let insertDays = newDays.current.value;
        let insertMission = newMission.current.value;
        let insertIsMultiple = newIsMultiple.current.value;
        props.addone(insertName, insertDate, insertDays, insertMission, insertIsMultiple)
    }

    return (
        <div className='container'>
            <div className='block h3'>Add New</div>
            <form>
                <div className="form-group">
                    <label form="exampleInputEmail1">Name</label>
                    <input ref={newName} className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter Name"/>
                    <small id="emailHelp" className="form-text text-muted">Enter name and surname of the asthrounaft.</small>
                </div>
                <div className="form-group">
                    <label form="exampleInputEmail1">Date</label>
                    <input ref={newDate} className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter Date"/>
                    <small id="emailHelp" className="form-text text-muted">Enter date of the first flight.</small>
                </div>
                <div className="form-group">
                    <label form="exampleInputEmail1">Days</label>
                    <input ref={newDays} className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter Number of Days"/>
                    <small id="emailHelp" className="form-text text-muted">Enter number of days that the spaceman has been in the Space.</small>
                </div>
                <div className="form-group">
                    <label form="exampleInputEmail1">Mission</label>
                    <input ref={newMission} className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter Name of the Mission"/>
                    <small id="emailHelp" className="form-text text-muted">Enter name of the mission in austronafts's first flight.</small>
                </div>
                <div className="form-group">
                    <label form="exampleInputEmail1">Multiple Flights</label>
                    <input ref={newIsMultiple} className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter Yes or No"/>
                    <small id="emailHelp" className="form-text text-muted">Enter yes or no depending of number spaceman's flights.</small>
                </div>
                <button type='submit' className='btn btn-primary btn-lg btn-block' onClick={onAddone}><NavLink className={styles.addLink}to='/'>Add</NavLink></button>
            </form>
        </div>
    )
}

export default AddPage;