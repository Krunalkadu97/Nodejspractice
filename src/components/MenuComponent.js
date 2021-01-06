import React,{Component} from 'react';
import { Media } from 'reactstrap';

class Menu extends Component{
	constructor(props){
		super(props);

		this.state ={
		 dishes:[

		 		{
		 			id:0,
		 			name:'Uttapham',
		 			image:'assets/images/uthappizza.png',
		 			price:'50 Rs',
		 			category:'mains',
		 			label:'Hot',
		 			description:'This is an combination of south and northdis'
		 		},
		 		{
		 			id:1,
		 			name:'Elaicheese',
		 			image:'assets/images/elaicheesecake.png',
		 			price:'80 Rs',
		 			category:'desert',
		 			label:'Cold',
		 			description:'This is an Best Desert'
		 		}
		 ]
		}
	}

	render(){
		const menu=this.state.dishes.map((dish) =>{
			return(
				<div key={dish.id} className='col-12 mt-5'>
					<Media tag='li'>
						<Media left middle>

						  <Media object src={dish.image} alt={dish.name}/>
						</Media>
						<Media body className='ml-5'>
						   <Media heading>{dish.name}</Media>
						   <p>{dish.category}</p>
						   <p>{dish.label}</p>
						   <p>{dish.description}</p>
						   <p>{dish.price}</p>
						</Media>
					</Media>
				</div>
				);
		});
		return(
				<div className='container'>
					<div className='row'>
						<Media list>
							{menu}
						</Media>
					</div>
				</div>
			);
	}
}

export default Menu;
