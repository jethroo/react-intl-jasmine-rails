class Dashboard extends React.Component {
  foo() {
    ReactIntl.injectIntl(MyComponent).bind(this)
    return (<MyComponent />)
  }

  render() {
    return (
      <div>
        <ReactIntl.FormattedMessage id="dashboard.hello"
          defaultMessage="translation missing!" values={{name: this.props.user}}
        />
        {this.foo()}
      </div>
    );
  }
}
