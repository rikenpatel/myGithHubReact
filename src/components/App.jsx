import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import RepoList from './github/RepoList.jsx';
import Search from './github/Search.jsx';

class App extends Component{


	constructor(props){
		super(props);
		this.state = {
			username: 'rikenpatel',
			userData: [],
			userRepos: [],
			perPage: 10
		}
	}

	//get user data from github

	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userData: data});
				console.log(data);
			}.bind(this),
			error: function(xhr,status,err){
				this.setState({userName: null});
				alert(err);
			}.bind(this)
		});
	}

	//get user repos from github

	getUserRepos(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userRepos: data});
				console.log(data);
			}.bind(this),
			error: function(xhr,status,err){
				this.setState({userName: null});
				alert(err);
			}.bind(this)
		});
	}

	handleFormSubmit(username){
		this.setState({username: username}, function(){
			this.getUserData();
			this.getUserRepos();
		});

	}

	componentDidMount(){
		this.getUserData();
		this.getUserRepos();
	}
	render(){
		return(
				<div>
					<search onFormSubmit = {this.handleFormSubmit.bind(this)} />
					<Profile {...this.state} />
				</div>
			)
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
App.defaultProps = {
	clientId: '9d018e11804452780216',
	clientSecret: 'f4acfd020c6c10874f2c395b2041de4140354da9'
}
export default App