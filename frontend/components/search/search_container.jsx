import { connect } from 'react-redux';
import Search from './search';

const mSTP = state => { 
    return {
        projects: Object.values(state.projects)
    }
}

export default connect(mSTP, null)(Search);
