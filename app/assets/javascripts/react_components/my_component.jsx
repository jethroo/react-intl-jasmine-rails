class MyComponent extends React.Component {
    render() {
        return (
          <div>
            <ReactIntl.FormattedMessage id="dashboard.hello"
              defaultMessage="translation missing!"
              values={{name: this.props.user}}
            >
              {(message) => <p>{message}</p>}
            </ReactIntl.FormattedMessage>
          </div>
        );
    }
}
