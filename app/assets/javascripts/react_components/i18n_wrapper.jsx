class I18nWrapper extends React.Component {
  render() {
    ReactIntl.addLocaleData(locale_de);
    return (
      <ReactIntl.IntlProvider locale={this.props.locale} messages={JSON.parse(this.props.messages)}>
        <Dashboard {...this.props}/>
      </ReactIntl.IntlProvider>
    );
  }
}
