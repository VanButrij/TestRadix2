import React from 'react';
import AddPage from './AddPage';
import { connect } from 'react-redux';
import { addone } from '../../Redux/MainPageReducer';


class AddPageAPI extends React.Component {

    addone = (name, date, days, mission, isMultiple) => {
        this.props.addone(name, date, days, mission, isMultiple);
    }

    render () {
        return (
            <AddPage addone={this.addone}/>
        )
    }
}

let mapStateToProps = (state) => {

}

export default connect( mapStateToProps, { addone } )(AddPageAPI);