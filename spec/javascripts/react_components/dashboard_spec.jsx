//= require application

var TestUtils = React.addons.TestUtils

describe('Dashboard', function () {

  it('is defined', function () {
    var dashboard = TestUtils.renderIntoDocument(
      <Dashboard />
    );

    var dashboardNode = ReactDOM.findDOMNode(dashboard);
    expect(dashboardNode).toBeDefined();

  });
});
