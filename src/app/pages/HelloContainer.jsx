import { connect } from 'react-redux';
import Hello from './Hello';

import { loadRandonUser } from '../actions/loadRandomStuffActions';

const mapStateToProps = state => ({
    user: state.userStore.user
});

const mapDispatchToProps = dispatch => ({
    onLoadRandomUser: () => {
        dispatch(loadRandonUser());
    }
});

const HelloContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);

export default HelloContainer;
