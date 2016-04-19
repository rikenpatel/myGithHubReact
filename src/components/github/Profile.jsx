import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RepoList from './RepoList.jsx';

class Profile extends Component{


	
	render(){
		return(
				<div>
					<img src={this.props.userData.avatar_url} /> <br/>
					<hr/>
					<span className="label label-primary">  name: {this.props.userData.name}</span><br/>
					<span className="label label-success"> public repos : {this.props.userData.public_repos}</span>
					<span className="label label-success"> public gists : {this.props.userData.public_gists}</span>
					<span className="label label-success"> followers : {this.props.userData.followers}</span>
					<span className="label label-success"> following : {this.props.userData.following}</span> <br/> <br/>
					<hr/>

					<ul className="list-group">
						<li className="list-group-item"> UserName : {this.props.userData.login}</li>
						<li className="list-group-item"> Last Update : {this.props.userData.updated_at}</li>
					</ul>

					<a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}> Visit Profile </a>
					<hr/>
					<h3> User Repositories </h3>

					<RepoList userRepos={this.props.userRepos} />
				</div>
			)
	}
}


export default Profile