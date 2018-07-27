import {connect} from 'react-redux'
import {bindActionCreators, Dispatch} from 'redux'
import * as userActions from '../_user/actions';
import {State} from '../_user/reducer';
import {UserActions} from "../_user/actions";


const mapStateToProps = (state: State) => ({
    userData: state.user
});


const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators(
        userActions,
        dispatch
    )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)()
