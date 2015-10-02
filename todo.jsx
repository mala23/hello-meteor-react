if (Meteor.is Client) {
  Meteor.startup(function () {
    React.render(<App />, document.getElementById("render-target"));
  });
}

