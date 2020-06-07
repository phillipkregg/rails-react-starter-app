import React from "react";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return <div> Howdy {name}, from the Index.html.erb page</div>;
  }
}

export default App;
