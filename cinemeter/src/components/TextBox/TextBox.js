import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './TextBox.css';

@withStyles(styles)
class TextBox extends Component {

  static propTypes = {
    maxLines: PropTypes.number,
  };

  static defaultProps = {
    maxLines: 1,
  };

  render() {
    return (// eslint-disable-line no-extra-parens
      <div className="TextBox">
        {this.props.maxLines > 1
          ? <textarea {...this.props} className="TextBox-input" ref="input"
            key="input" rows={this.props.maxLines} />
          : <input {...this.props} className="TextBox-input" ref="input"
            key="input" />}
      </div>
    );
  }

}

export default TextBox;
