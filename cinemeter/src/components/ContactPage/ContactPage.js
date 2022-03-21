import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './ContactPage.css';
import withStyles from '../../decorators/withStyles';
// import withData from '../../decorators/withData';
import { retrievePath } from '../../actions/falcor';

@withStyles(styles)
/* @withData({
  fragments: {
    items() {
      return 'items';
    }
  }
})*/
@connect(state => ({
  items: state.entities.get('items'),
}), { retrievePath })
class ContactPage extends Component {

  static propTypes = {
    items: PropTypes.string,
    retrievePath: PropTypes.func.isRequired,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    falcor: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { retrievePath } = this.props;
    const { falcor } = this.context;

    if (!this.props.items) {
      retrievePath(falcor, 'items');
    }
  }

  render() {
    const title = 'Contact Us';

    this.context.onSetTitle(title);
    return (
      <div className="ContactPage">
        <div className="ContactPage-container">
          <h1>{title}</h1>
          <p>{this.props.items}</p>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default ContactPage;
