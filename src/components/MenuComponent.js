import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from './dishes';

class Menu extends Component {

    constructor(props) {
        super(props); //required whenever you define a class component\

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
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
            return(<h3>Comments</h3>);
            
            // comments.map((comment) => {
            //     return (
            //         <li key={comment.id}>
            //             <p>{comment.comment}</p>
            //             <p>-- {comment.author}, {comment.date}</p>
            //         </li>
            //     );
            // });
        }

        else {
            return (
                <div></div>
            );
        }
    }

    render() { //implement this method called render() which will return the corresponding view for this component

        const menu = this.state.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });



        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDishComments(this.state.selectedDish)}
                    </div>
                </div>
            </div >
        );
    }
}

export default Menu;