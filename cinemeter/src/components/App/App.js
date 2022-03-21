import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

// import { fetchProfile } from '../../actions/auth';

@withContext
@withStyles(styles)
/* @connect(state => ({
  auth: state.auth,
  router: state.router
}))*/
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
    store: PropTypes.object,

    // auth: PropTypes.object.isRequired
  }

  static contextTypes = {
    router: PropTypes.object,
    store: PropTypes.object,
    falcor: PropTypes.object,
  }

  /* static fillStore(redux) {
    return redux.dispatch(fetchProfile());
  }*/

  render() {
    if (!this.props.error) {
      return (
        <div>
          <Header />
          {this.props.children}
          <Feedback />
          <Footer />
          { __DEV__ && !__SERVER__ && <DebugPanel top right bottom>
            <DevTools store={this.context.store} monitor={LogMonitor} />
          </DebugPanel>}
        </div>
      );
    }

    return this.props.children;
  }

}

export default App;
