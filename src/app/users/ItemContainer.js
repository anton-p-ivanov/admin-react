import ItemComponent from "./ItemComponent";
import { connect } from "react-redux";
import { getUser, changeUser } from "./duck/actions";

const mapStateToProps = state => {
    return ({
        attributes: state.UsersState.ItemState.attributes,
        isFetching: state.UsersState.ItemState.isFetching
    });
};

const mapDispatchToProps = {
    getUser,
    changeUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemComponent);
