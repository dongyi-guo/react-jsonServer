import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props); //required whenever you define a class component\

        this.state = {
            
        };
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }

        else {
            return (
                <div></div>
            );
        }
    }

    renderDishComments(dish) {
        if (dish != null) {
            return(
                <h3>Comments</h3>
            //     {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            );
        }

        else {
            return (
                <div></div>
            );
        }
    }

    render() { //implement this method called render() which will return the corresponding view for this component

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDishComments(this.props.dish)}
                        {/* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} */}
                    </div>
                </div>
            </div >
        );
    }
}

export default DishDetail;