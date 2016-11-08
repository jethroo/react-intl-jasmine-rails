class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <ReactIntl.FormattedMessage id="dashboard.hello"
          defaultMessage=">Oh no!" values={{name: this.props.user}}
        />
      </div>
    );
  }
}
