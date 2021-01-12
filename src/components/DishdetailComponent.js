import React from 'react';
import { UncontrolledCollapse,Card, CardImg,Button,CardSubtitle, CardBody, CardText, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


    function RenderComments({comments}) {
        if (comments == null) {
            return (<div></div>)
        }
        const comment = comments.map((comment) => {
            return (
<>


      <h6>{comment.author}</h6>
      <Card>
        <CardBody>
          <CardSubtitle>
          {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
          </CardSubtitle>
          <CardText>{comment.comment}</CardText>
        </CardBody>
      </Card>
    <br/>
</>
                
                
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
            <div class='container'>
                <h4> Comments </h4>
                <hr/>
                <ul className='list-unstyled'>
                    {comment}
                </ul>
             </div>
            </div>
        )
    }

    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    const DishDetail = (props) => {
        const dish = props.dish
        if (dish == null) {
            return (<div></div>)
        }
        
        return (
        <div className='col-12'>
            <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr/>
                    </div>
            </div>
            <div className='row'>
               <RenderDish dish={props.dish}/>
               <RenderComments comments={props.comments}/>
            </div>
        </div>
        )
    }


export default DishDetail;