import UsersComponent from "./UsersComponent";
import { connect } from "react-redux";
import { getUsers, handleSelected } from "./duck/actions";

const mapStateToProps = state => {
    return ({
        items: state.UsersState.ListState.items,
        pagination: state.UsersState.ListState.pagination,
        isFetching: state.UsersState.ListState.isFetching
    });
};

const mapDispatchToProps = {
    getUsers,
    handleSelected
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersComponent);
