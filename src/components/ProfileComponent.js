import React,{Component} from 'react';
import {Card,Jumbotron,Button,Media} from 'reactstrap';

class Profile extends Component{
	constructor(props){
		super(props);

		this.state={
			profile:[
				{
					id:0,
					name:'Krunal',
					city:'Nagpur',
					images:'assets/images/profile/Kruk.jpg',
					country:'India',
					pincode:'441103',
					age:'23'
				},
				{
					id:1,
					name:'Taher',
					city:'Indore',
					images:'assets/images/profile/Kruk.jpg',
					country:'India',
					pincode:'453340',
					age:'23'
				}
			]
		}
	}

	render(){
		const details=this.state.profile.map((prof) =>{
			return(
				<div>
      				<Media tag='li'>
	<Media left middle>

		<Media object src={prof.images} alt={prof.name}/>
	</Media>
						

	<Media body className='ml-5'>
		<Jumbotron>
			<h1 className="display-1">{prof.name}</h1>
			<p className="lead">{prof.city}</p>
			<p className="lead">{prof.country}</p>
			<p className="lead">{prof.pincode}</p>
			<hr className="my-2" />
			<Button color="primary">Edit</Button>
          	<Button color="warning">Update</Button>
          	<Button color="danger">Delete</Button>
		</Jumbotron>
	</Media>
</Media>
    			</div>
				);
			
		});
		return(
			<div className='container'>
					<div className='row'>
						<Media list>
							{details}
						</Media>
					</div>
				</div>
			);
	}
}

export default Profile;


