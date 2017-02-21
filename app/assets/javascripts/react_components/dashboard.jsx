class Dashboard extends React.Component {
  sayHello(user) {
    ReactIntl.injectIntl(MyComponent).bind(this)
    return (<MyComponent user={user}/>)
  }

  render() {
    return (
      <div>
        {this.sayHello(this.props.user)}
      </div>
    );
  }
}
