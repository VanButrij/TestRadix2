import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import { choose } from '../../Redux/MainPageReducer';

class MainPageAPI extends React.Component {

    choose = (p) => {

        this.props.choose(p);
        
    }

    render = () => {
        return (
            <MainPage spacemen={this.props.spacemen} choosen={this.props.choosen} choose={this.choose}/>
        )
    }
}

let mapStateToProps = (state) => {
    return (
        {
            spacemen: state.MainPage.spacemen,
            choosen: state.MainPage.choosen,
            pageSize: state.MainPage.pageSize,
        }
    )
}

export default connect(mapStateToProps, { choose } )(MainPageAPI);