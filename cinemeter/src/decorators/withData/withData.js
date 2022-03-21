import React, { PropTypes, Component } from 'react';
import { isRootContainer } from './utils';

function withData(options = {}) {
  return (ComposedComponent) => {
    const componentDisplayName = (
      ComposedComponent.displayName || ComposedComponent.name
    );

    return class Container extends Component {
      static displayName = `${componentDisplayName}Container`;

      static propTypes = {
        variables: PropTypes.object,
        onFetch: PropTypes.func,
        renderLoading: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
      };

      /* static contextTypes = {
        model: PropTypes.object.isRequired
      };*/

      static isRootContainer = !!options.initialVariables;

      static variables = options.initialVariables || {};

      static prepareVariables = options.prepareVariables || ((v) => v);

      static fragments = options.fragments || {};

      static getFragment(name, variables) {
        if (!Container.fragments[name]) {
          throw new Error(`${componentDisplayName} has no ${name} fragment`);
        }

        variables = Object.assign({}, Container.variables, variables || {});

        const fragment = Container.fragments[name](variables);

        return fragment;
      }

      static getAllFragments(variables, optionalFragmentNames = []) {

        if (typeof optionalFragmentNames === 'string') {
          optionalFragmentNames = [optionalFragmentNames];
        }

        const fetchedFragments = {};

        Object.keys(Container.fragments).forEach((fragmentName) => {
          if (optionalFragmentNames.length
            && optionalFragmentNames.indexOf(fragmentName) < 0) {
            return;
          }

          const fragment = {
            [fragmentName]: Container.getFragment(fragmentName, variables),
          };

          Object.assign(fetchedFragments, fragment);
        });

        return fetchedFragments;

          /* const promise = Container.getFragment(
            fragmentName, variables
          ).then((fragmentResult) => {
            return { [fragmentName]: fragmentResult };
          });

          promises.push(promise);
        });

        if (!promises.length) {
          promises.push(Promise.resolve(true));
        }

        return Promise.all(promises).then((promisedFragments) => {
          const fetchedFragments = {};

          promisedFragments.forEach((promisedFragment) => {
            if (typeof promisedFragment === 'object') {
              Object.assign(fetchedFragments, promisedFragment);
            }
          });

          return fetchedFragments;
        });*/
      }

      forceFetch(nextVariables = {}, optionalFragmentNames) {
        if (options.shouldContainerUpdate
          && Object.keys(nextVariables).length) {
          if (!options.shouldContainerUpdate.call(this, nextVariables)) {
            return false;
          }
        }

        const promise = new Promise((resolve, reject) => {
          Object.assign(this.variables, nextVariables);
          const fetchedFragments = Container.getAllFragments(
            this.variables, optionalFragmentNames
          );

          const promises = [];

          Object.keys(fetchedFragments).forEach((key) => {
            const fragment = fetchedFragments[key];

            promises.push(this.context.model.get(fragment).then((res) => {
              return { [key]: res };
            }));
          });

          const promise = Promise.all(promises).then((promiseResults) => {
            const result = {};

            promiseResults.forEach((promiseResult) => {
              Object.assign(result, promiseResult);
            });
            return result;
          });

          promise.then((fetchedFragments) => {
            /* if (!this.isMounted()) {
              return fetchedFragments;
            }*/


            try {
              this.setState(fetchedFragments);
            } catch (error) {
              if (!error.message || !error.message.match(/^document/)) {
                throw error;
              }
              reject(error);
            }

            return fetchedFragments;
          });

          resolve(promise);
        });

        if (this.props.onFetch) {
          this.props.onFetch.call(this, promise);
        }

        return promise;
      }

      hasFetched() {
        const state = this.state || {};
        const props = this.props || {};

        if (!Object.keys(Container.fragments).length) {
          return true;
        }

        for (const fragmentName in Container.fragments) {
          if (!Container.fragments.hasOwnProperty(fragmentName)
            || props.hasOwnProperty(fragmentName)
            || state.hasOwnProperty(fragmentName)) {
            continue;
          }

          return false;
        }

        return true;
      }

      componentWillMount() {
        const externalVariables = this.props && this.props.variables || {};

        this.variables = Object.assign(
          {}, Container.variables, externalVariables
        );
        this.variables = Container.prepareVariables(this.variables);

        if (!this.hasFetched()) {
          this.forceFetch();
        } else if (this.props.onFetch) {
          this.props.onFetch.call(this, Promise.resolve({}));
        }
      }

      componentWillReceiveProps() {
        if (isRootContainer(Container)) {
          this.forceFetch();
        }
      }

      render() {
        const state = this.state;
        const props = this.props;
        const data = {
          variables: this.variables,
          forceFetch: this.forceFetch,
          onFetch: undefined,
        };

        if (false && !this.hasFetched()) {
          return (typeof props.renderLoading === 'function')
            ? props.renderLoading()
            : props.renderLoading || null;
        }

        return <ComposedComponent {...props} {...state} data={data} />;
      }
    };
  };
}

export default withData;
