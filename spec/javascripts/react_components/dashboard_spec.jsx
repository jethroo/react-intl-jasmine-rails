//= require application

var TestUtils = React.addons.TestUtils

describe('Dashboard', function () {

  it('renders english message', function () {
    var dashboard = TestUtils.renderIntoDocument(
      <ReactIntl.IntlProvider locale={'en'} messages={{ "dashboard.hello": "Hello, {name}! How are you today?"}}>
        <Dashboard user='Testuser' />
      </ReactIntl.IntlProvider>
    );

    var dashboardNode = ReactDOM.findDOMNode(dashboard);
    expect(dashboardNode.textContent).toEqual('Hello, Testuser! How are you today?');
  });

  it('renders german message', function () {
    ReactIntl.addLocaleData(locale_de);

    var dashboard = TestUtils.renderIntoDocument(
      <ReactIntl.IntlProvider locale={'de'} messages={{ "dashboard.hello": "Hallo, {name}! Wie geht es dir heute?"}}>
        <Dashboard user='Testuser' />
      </ReactIntl.IntlProvider>
    );

    var dashboardNode = ReactDOM.findDOMNode(dashboard);
    expect(dashboardNode.textContent).toEqual('Hallo, Testuser! Wie geht es dir heute?');
  });
});
