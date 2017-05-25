import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
	render() {
		var name = 'Subratta Mohanty';
    	var friends = ['Devesh Pandit', 'Jaswant Gupta', 'Sagar Daundkar'];
    	return (
      		<div>
        		<h3> Name: {name} </h3>
        		<ShowList names={friends} />
      		</div>
    	);
	}
}

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {this.props.names.map(function(friend, i){
            return <li key={i}> {friend} </li>;
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);