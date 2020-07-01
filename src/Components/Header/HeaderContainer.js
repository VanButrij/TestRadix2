import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { deleteone, resetSearch, searchOne, setSearch, dayFilter } from '../../Redux/MainPageReducer';

class HeaderAPI extends React.Component {



    setSearch = (searchKey) => {
        this.props.setSearch(searchKey);
    }

    searchOne = (inputSearch) => {
        this.props.setSearch();
        this.props.searchOne(inputSearch);
    }

    resetSearch = () => {
        this.props.setSearch();
        this.props.resetSearch();
    }

    deleteone = () => {

        this.props.deleteone();
    }

    render = () => {
        return (
            <Header searchKey={this.props.searchKey} pageSize={this.props.pageSize}  deleteone={this.deleteone} resetSearch={this.resetSearch} searchOne={this.searchOne}/>           
        )
    }
}

let mapStateToProps = (state) => {

    return (
        {
            searchKey: state.MainPage.searchKey,
        }
    )
}

export default connect( mapStateToProps, { deleteone, resetSearch, searchOne, setSearch })(HeaderAPI);