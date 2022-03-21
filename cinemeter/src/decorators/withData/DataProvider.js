import { PropTypes, Component, Children } from 'react';

let didWarnAboutReceivingModel = false;

function warnAboutReceivingModel() {
  if (didWarnAboutReceivingModel) {
    return;
  }

  didWarnAboutReceivingModel = true;
  console.error(// eslint-disable-line no-console
    '<DataProvider> does not support changing `model` on the fly. '
  );
}

class DataProvider extends Component {
  static childContextTypes = {
    model: PropTypes.object.isRequired,
  };

  static propTypes = {
    model: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
  };

  getChildContext() {
    return { model: this.model };
  }

  constructor(props, context) {
    super(props, context);
    this.model = props.model;
  }

  componentWillReceiveProps(nextProps) {
    const { model } = this;
    const { model: nextStore } = nextProps;

    if (model !== nextStore) {
      warnAboutReceivingModel();
    }
  }

  render() {
    const { children } = this.props;

    return Children.only(children);
  }
}

export default DataProvider;
