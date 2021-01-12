import React,{Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem,
        Form,FormGroup,Input,Label,Button,Modal,ModalBody,ModalHeader} from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state={
            isNavOpen:false,
            isMenuOpen:false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

	render(){
		return(

				<React.Fragment>
					<Navbar dark expand='md'>
      					<div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
        					<NavbarBrand className='mr-auto' herf='#'>
                                <img src='assets/images/logo.png' width='30' height='41' alt='Restaurant Logo'/>
                            </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <span className='fa fa-home fa-lg'></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutus'>
                                        <span className='fa fa-info fa-lg'></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/menu'>
                                        <span className='fa fa-list fa-lg'></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contact'>
                                        <span className='fa fa-address-card fa-lg'></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                            </Collapse>
      					</div>
        			</Navbar>
        			<Jumbotron>
        				<div className='container'>
        					<div className='row row-header'>
        						<div className='col-12 col-ms-6'>
        							<h1>This is Header</h1>
        							<p>you  can write any things over here, i'm just try too fill the lines.</p>
        						</div>
        					</div>
        				</div>
        			</Jumbotron>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>User Name</Label>
                                <Input type='text' id='username' name='username' 
                                innerRef={(input)=>this.username=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Input type='password' id='password' name='password'
                                    innerRef={(input)=>this.password=input}
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="warning">Login</Button>
                            <hr/>
                            <Label>
                               If you are new to this then,<Link to='/registration'>Sign-Up</Link>
                            </Label>
                        </Form>
                    
                    </ModalBody>
                </Modal>
				</React.Fragment>
			);
	}
} 

export default Header;