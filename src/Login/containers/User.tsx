import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { UserState } from '../_user/types';
import * as UserActions from '../_user/actions';
import Login from '../Login';

const mapStateToProps = (state: UserState) => ({
    userData: state.user
});


const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators(
        UserActions,
        dispatch
    )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
