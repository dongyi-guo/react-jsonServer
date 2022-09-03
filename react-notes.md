# RUNNING A CLONE PROJECT
# 👇️ delete node_modules and package-lock.json
rm -rf node_modules
rm -f package-lock.json

# 👇️ clean npm cache
npm cache clean --force

npm install
```
```

# JavaScript Library/Framework?

- ReactStrap -- provides prebuilt Bootstrap 4 components
- Flux architecture -- one approach for implementing the entire technology stack 
- Redux -- for implementing a state based storage for our Web application
- Fetch -- for interacting with our back-end server from our React application

* I will be using Bootstrap as a way of styling the views in my react application 

# Setting Up React
1. install yarn -- package manager (note you can also use npm instead of yarn, however yarn is better suited and faster to work with for React applications)
- to install, follow instructions on https://classic.yarnpkg.com/en/docs/install

2. setup a React application using create-react-app in terminal
- install create-react-app globally
```
yarn global add create-react-app
```
or use: npm install -g create-react-app

3. for react-app instructions, in terminal, type:
```
create-react-app --help
```

# Generating and Serving a React Project using create-react-app
1. navigate to dest folder and type create-react-app followed by the name of the folder (in this case the name of the folder is called confusion)
```
create-react-app confusion
```
2. CD to the confusion folder (react-app folder) and type:
- this will compile the project and then open a tab in your default browser at the address http://<Your Computer Name>:3000.
```
yarn start   (or npm start)
```
3. initialize your project to be a Git repository by typing:
* IMPORTANT NOTE: 
*Sometimes create-react-app will initialize git repo, add, and commit* 
- hence, _the following may not be needed_ !!!
```
git init
git add .
git commit -m "Initial Setup"
```
4. set up an online Git repository and synchronize your project to the online repository
- *manually create repo name to match local repo name on online repo(github)*
- next, set the local Git repository to set its remote origin
```
git branch -M main
git remote add origin <repository URL>
git push -u origin main
```
* random note : JSX allows us to write HTML in React
* note, if using _npm install_ dont forget _--save_
  
# Configure your React Project to use ReactStrap
- the JavaScript part of Bootstrap cannot be directly used together with React.
- instead, configure React application to use a Bootstrap-based package called Reactstrap
1. install bootstrap
```
yarn add bootstrap@4.0.0
```
1. next pull in ReactStrap
- the following will re-implement bootstrap js components to react components
```
yarn add reactstrap@5.0.0
yarn add react-popper@0.9.2
```
3. next, configure use of bootstrap in react application
- in index.js file import bootstrap before ./index.css
```
import 'bootstrap/dist/css/bootstrap.min.css';
```
4. next, go to app.js file and *add navigation bar*
- before import './App.css' add the following:
```
import { Navbar, NavbarBrand } from 'reactstrap';
```
5. next, in the app.js file, delete anything in between the className='App" div and add the following inside:
```
<Navbar dark color="primary">
 <div className="container">
   <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
 </div>
</Navbar>
```

_What Is 'State' in ReactJS?_ 
* The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

* SPECIAL NOTE:
# React: CLASS COMPONENTS
1. Extend React.Component to get class components
2. Need to implement the render() method to return the view
3. Can have local state
## Functional Component
1. simplest way to define React Components
2. JS function that returns a React element, or a collection of React elements that define the view
3. Receives a "props" object as a parameter
* NOTE: the con is Functional components cannot have local state or lifecycle hooks {like componentDidMount()}
* Therefore, if you have a React Application where one component is purely rendering based on props, then functional components is the way to go for designing the rest of the other components. 

* OTHER NOTES: User defined component names must *always start* with a capital letter
1. while names starting with a lowercase letter are treated as built-in Components

My presentational components:
- Are concerned with how things look.
- May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
- Often allow containment via this.props.children.
- Have no dependencies on the rest of the app, such as Flux actions or stores.
- Don’t specify how the data is loaded or mutated.
- Receive data and callbacks exclusively via props.
- Rarely have their own state (when they do, it’s UI state rather than data).
- Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.
- Examples: Page, Sidebar, Story, UserInfo, List.

My container components:
- Are concerned with how things work.
- May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
- Provide the data and behavior to presentational or other container components.
- Call Flux actions and provide these as callbacks to the presentational components.
- Are often stateful, as they tend to serve as data sources.
- Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.
- Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.

Benefits of This Approach
- Better separation of concerns. You understand your app and your UI better by writing components this way.
- Better reusability. You can use the same presentational component with completely different state sources, and turn those into separate container components that can be further reused.
- Presentational components are essentially your app’s “palette”. You can put them on a single page and let the designer tweak all their variations without touching the app’s logic. You can run screenshot regression tests on that page.
- This forces you to extract “layout components” such as Sidebar, Page, ContextMenu and use this.props.children instead of duplicating the same markup and layout in several container components.

* OTHER NOTES: to store images go to public folder and *mkdir assets*, inside assets *mkdir images*, upload all images inside images folder

# Constructing React Components using JSX and JavaScript  
1. to store all react Components in one place, go to src folder and 
```
mkdir components
```
2. cd to components folder and touch
```
touch MenuComponent.js
```
* IMPORTANT NOTE ONE
for reference, the basic structure for a Component is as follows:
```
import React, { Component } from "react";

class Menu extends Component {

    constructor(props) {
        super(props); //required whenever you define a class Component
    }

    render() { //implement this method called render() which will return the corresponding view for this Component
        return (

        );
    }
}

export default Menu;
```
* IMPORTANT NOTE TWO
- whenever you construct a list of items in React, every item requires a key attribute to be specified for it.

3. in MenuComponent.js in order to create a react Component import the following and add the following code:
```
import React, { Component } from "react";
import { Media } from "reactstrap";

class Menu extends Component {

    constructor(props) {
        super(props); //required whenever you define a class component\

        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name: 'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label: '',
                    price: '2.99',
                    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
            ],
        };
    }

    render() { //implement this method called render() which will return the corresponding view for this component

        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <div className='d-flex align-items-center'>
                        <div className="flex-shrink-0">
                            <img src={dish.image} alt={dish.name} />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h3>{dish.name}</h3>
                            <p>{dish.description}</p>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;
```
4. next, open App.js file and update it as follows:
- import Menu before app.css
- inside div tag add <Menu /> to use Component
```
. . .

import Menu from './components/MenuComponent';

. . .

    <Menu />
    
    . . .
```
5. next, open App.css file and *delete all its contents*

# Using Font-Awesome Icons Bootstrap-Social
```
yarn add font-awesome@4.7.0
```
```
yarn add bootstrap-social@5.1.1
```
- update index.js to import above modules as follows:
```
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
```

# For Footer code, see node_and_bootstrap.md

# For app.css code, see node_and_bootstrap.md
- dont forget to import './App.css'; in app.js

* React Router is the most popular routing library for React

# React Router
- Set up the router module to enable navigation among multiple component views
- 
You might have multiple pages and you want to be able to navigate among the views that are rendered by these various pages. So, this is where the React Router comes to our aid. 
1. To install and configure React-Router
```
yarn add react-router-dom@4.2.2
```
2. update app.js ad follows:
```
. . .

import { BrowserRouter } from 'react-router-dom';

. . .

    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    
. . .
```
3. Create a new file named HomeComponent.js in the components folder and add the following to it:
```
import React from 'react';

function Home(props) {
    return(
      <div className="container">
        <h4>Home</h4>
      </div>
    );
}

export default Home;   
```
4. To confugure the router, Open MainComponent.js file and update it as follows:
```
. . .

import Home from './HomeComponent';

. . .

import { Switch, Route, Redirect } from 'react-router-dom';

. . .

  render() {


    const HomePage = () => {
      return(
          <Home 
          />
      );
    }

. . .

          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>

. . .
```
5. Open HeaderComponent.js and update its contents with the following:
```
import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this); //by doing this code it allows the toggleNav method to be bound to "this"... hence, you can call this.toggleNav as such in render()
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src='./assets/images/log.png' height="30" width="41" alt='Ristorante con Fusion' />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to='/home'>
                    <span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/aboutus'>
                    <span className="fa fa-info fa-lg"></span> About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/menu'>
                    <span className="fa fa-list fa-lg"></span> Menu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/contactus'>
                    <span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
```
6. Then, open FooterComponent.js and update it as follows:
```
. . .

import { Link } from 'react-router-dom';

. . .

                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                        
. . .
```
7. Open MenuComponent.js and remove the onClick() from the Card in the RenderMenuItem() function.
8. Save all the changes and do a Git commit with the message "React Router".

# Controlled Forms
- controlled forms use states, therefore you will need to use a class component
- With controlled inputs, there is always some sort of change going on. The value of the input field will almost always be a prop of the class component (usually a state). Going along with this, there will also be a callback that is necessary to handle the changes going on with the input field.
- for reactstrap you define col as such-- <Col md={2}>
- or you can use size to specify how many columns as such-- 
<Col md={{size:6, offset:2}}>

# Uncontrolled Forms
- With uncontrolled input values, there is no updating or changing of any states. What you submit is what you get.

# Install and Configure Redux for React Application
- Redux is a realization of the flux architecture (a way of structuring your React application)
- install Redux and React-Redux into your application as follows:
```
yarn add redux@4.2.0
yarn add react-redux@8.0.2
```
* Use the react-redux package for bindings between React and Redux
- use connect() in MainComponent to subscribe to store architecture
- Surround your App.js root with <provider>  -- this will make store accessible to all connected components (reducer.js file in redux folder will be imported in configureStore.js)

1. create new folder in src folder and name it as "redux"
- all redux related files will go in this folder

* Redux enables powerful techniques such as:
1. API handling
2. Logging of changes to state becomes easy through pure functions
3. undo/redo
4. state persistence
5. Time-travel debugging

# Configure and use react-redux-form to create Controlled forms
* Store the form state in the Redux store

## Installing react-redux Form
```
yarn add react-redux-form@1.16.14
```
- next update the feedback form in contact component

# Redux Action
* have separate reducers managing parts of the state, and how they can be combined together to manage the whole state.

## Implement reducers that are responsible for only part of the state
1. In the redux folder, create a new file named dishes.js and add the following to it:
```
import { DISHES } from '../shared/dishes';

export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        default:
          return state;
      }
};
```
2. Then, create a file named comments.js and add the following to it:
```
import { COMMENTS } from '../shared/comments';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {

        default:
          return state;
      }
};
```
3. Similarly, create a new file named promotions.js and add the following to it:
```
import { PROMOTIONS } from '../shared/promotions';

export const Promotions = (state = PROMOTIONS, action) => {
    switch (action.type) {
        default:
          return state;
      }
};
```
4. And finally, create a new file named leaders.js and add the following to it:
```
import { LEADERS } from '../shared/leaders';

export const Leaders = (state = LEADERS, action) => {
    switch (action.type) {
        default:
          return state;
      }
};
```
### Combine the reducers to manage the entire state
- Now that we have split the management of state into different reducers that manage partial state, we need to combine them together. Open configureStore.js and update it as follows:
```
import {createStore, combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}
```

### Redux Actions
* define various Redux actions and implement the action creators to dispatch the actions to the Redux store. 
1. In the redux folder create a new file named ActionTypes.js and add the following to it:
```
export const ADD_COMMENT = 'ADD_COMMENT';
```
2. Then, create a file named ActionCreators.js and add the following to it:
```
import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
```
3. Next, update comments.js to initiate action when the action is dispatched by the ActionCreator as follows:
```
import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);

        default:
          return state;
      }
};
```
4. Now update MainComponent.js to make the action available for use within the DishdetailComponent as follows:
```
. . .

import { addComment } from '../redux/ActionCreators';

. . .

  const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  
  });

. . .

      <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        addComment={this.props.addComment}
      />

. . .

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
```
5. Finally, update DishdetailComponent.js as follows to initiate the action upon the user submitting the comment form:
```
. . .

  function RenderComments({comments, addComment, dishId}) {



. . .

      <CommentForm dishId={dishId} addComment={addComment} />


. . .

        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);



. . .

      <RenderComments comments={props.comments}
        addComment={props.addComment}
        dishId={props.dish.id}
      />

. . .
```

* IMPORTANT NOTE: THE ABOVE REDUX ACTION data IS NOT PERSISTENT

* for PERSISTENT STATE code see beyond line 920 and * 1272 *

# Redux Thunk -- for logging application -- (code written below is for "loading" application when screen is refreshed)
- Redux Thunk middleware allows you to write action creators that return a function instead of an action.
1. Install Redux Thunk and Logger as shown below:
```
yarn add redux-thunk@2.2.0
yarn add redux-logger@3.0.6
```
2. Then open configureStore.js and update it to use the Thunk and Logger as follows:
```
import {createStore, combineReducers, applyMiddleware } from 'redux';

. . .

import thunk from 'redux-thunk';
import logger from 'redux-logger';
 
. . .

        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
        
. . .
```
3. Next, open ActionTypes.js and add new action types as follows:
```
. . .

export const DISHES_LOADING = 'DISHES_LOADING';
export const DISHES_FAILED = 'DISHES_FAILED';
export const ADD_DISHES = 'ADD_DISHES';
```
4. Then open ActionCreators.js and add new actions:
```
. . .

import { DISHES } from '../shared/dishes';

. . .


export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
```
5. Next, open dishes.js and add the code to respond to actions as follows:
```
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
```
6. Add a new component named LoadingComponent.js to display a loading message as follows:
```
import React from 'react';

export const Loading = () => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
};
```
7. Now we will update the remaining components to use the actions. First, open MainComponent.js and update it as follows:
```
. . .

import { addComment, fetchDishes } from '../redux/ActionCreators';

. . .

  fetchDishes: () => { dispatch(fetchDishes())}
  
. . .

  componentDidMount() {
    this.props.fetchDishes();
  }
  
. . .

    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment}
          />
      );
    };
    
. . .
```
8. Open DishdetailComponent.js and update it as follows:
```
. . .

import { Loading } from './LoadingComponent';

. . .

            
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) 
        
. . .
```
9. Open HomeComponent.js and update it as follows:
```
. . .

import { Loading } from './LoadingComponent';

. . .


function RenderCard({item, isLoading, errMess}) {
    
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );

}

. . .

                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />

. . .
```
10. Finally, update MenuComponent.js as follows:
```
. . .

import { Loading } from './LoadingComponent';

. . .

        const menu = props.dishes.dishes.map((dish) => {
          
. . .


        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
        
. . .
```

# React-Redux-Form Revisited
- say you partially fill in the feedback form and navigate to other components--the feedback form will remain filled in when you come back to the contactus page
- react-redux-form to interact with Redux store and store the state of the form in the store. (he state of the form will be PERSISTED in the store until page is REFRESHED)

1. Add a new file named forms.js in the redux folder and add the following to it:
```
export const InitialFeedback = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: ''
};
```
2. Then, open configureStore.js and update it to add the form to the reducers:
```
. . .

import { createForms } from 'react-redux-form';

. . .

import { InitialFeedback } from './forms';

. . .

        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        
. . .
```
3. Next, open MainComponent.js and update it as follows:
```
. . .

import { actions } from 'react-redux-form';

. . .

  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
  
. . .

              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              
. . .
```
4. Open ContacttComponent.js and update it as follows:
```
. . .

import { Control, Form, Errors, actions } from 'react-redux-form';

. . .

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
        // event.preventDefault();
    }

. . .

                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                          
                          . . .
                          

                        </Form>

. . .
```

# Client-Server Communication
- Set up a simple server that makes data available for clients
- Access the data from the server using a browser.
- Use the json-server as a simple static web server.

## Setting up a Server using json-server
- The Node module, json-server, provides a very simple way to set up a web server that supports a full-fledged REST API server. It can also serve up static web content from a folder. This lesson will leverage these two features to provide the back-end for your React application.

* In this exercise, you will:
- Configure and start a simple server using the json-server module
- Configure your server to serve up static web content stored in a folder named public

### Installing json-server
- json-server is a node module, and hence can be installed globally by typing the following at the command prompt:
```
npm install json-server -g
```
### Configuring the Server
- At any convenient location on your computer, create a new folder named json-server, and move to this folder
- Download the db.json file and move it to this folder.
- Move to this folder in your terminal window, and type the following at the command prompt to start the server:
```
json-server --watch db.json -p 3001 -d 2000
```
- dash d 2000 is for delivering content after dynamic web page is updated
- dash p is for specifying the port (default is 3000, but I chose port 3001 since my react application is running on port 3000) 
- This should start up a server at port number 3001 on your machine. The data from this server can be accessed by typing the following addresses into your browser address bar:
```
http://localhost:3001/dishes
http://localhost:3001/promotions
http://localhost:3001/leaders
http://localhost:3001/feedback
```
- Type these addresses into the browser address and see the JSON data being served up by the server. This data is obtained from the db.json file
- The json-server also provides a static web server. Any resources that you put in a folder named public in the json-server folder above, will be served by the server at the following address:
```
http://localhost:3001/
```
### Serving up the Images
- Create a public folder in your json-server folder.
- Download the images.zip file that is provided, unzip it and move the images folder containing the images to the public folder.
- Restart the json-server as we did before. Now your server will serve up the images for our React app. You can view these images by typing the following into your browser address bar:
```
http://localhost:3001/images/<image name>.png
```
- Shut down the server by typing ctrl-C in the terminal window

* IMPORTANT 
* The below code is for implementing Fetch from Server

(until line 1266)

# Fetch
- In this exercise you will:
1. Install Fetch in your React application
2. Use Fetch to communicate from your React application with a REST API server

1. As a first step, let us install Fetch into our project as follows:
```
yarn add cross-fetch@2.1.0
```
2. Now that we have installed Fetch, let us configure your application to connect to the server. First, create a file named baseUrl.js in the shared folder and add the following to it:
```
export const baseUrl = 'http://localhost:3001/';
```
4. Make sure that the json-server is running and serving up the data as illustrated in the previous exercise
5. Next, open ActionTypes.js and add the following:
```
. . .

export const ADD_COMMENTS = 'ADD_COMMENTS';
export const COMMENTS_FAILED = 'COMMENTS_FAILED';
export const PROMOS_LOADING = 'PROMOS_LOADING';
export const ADD_PROMOS = 'ADD_PROMOS';
export const PROMOS_FAILED = 'PROMOS_FAILED';
```
6. Then, open ActionCreators.js and update it as follows:
```
. . .

import { baseUrl } from '../shared/baseUrl';

. . .

    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
    
. . .


export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
```
7. Next, open comments.js and update it as follows:
```
import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_COMMENT:
        var comment = action.payload;
        comment.id = state.comments.length;
        comment.date = new Date().toISOString();
        return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};
```
8. Similarly, open promotions.js and update it as follows:
```
import * as ActionTypes from './ActionTypes';

export const Promotions = (state  = { isLoading: true,
                                        errMess: null,
                                        promotions:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
        return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};
```
9. Now that the Redux actions are all updated, it's time to update the components.
10. Open MainComponent.js and update it as follows:
```
. . .

import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

. . .


const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

. . .

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  
. . .

          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
          
. . .

          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            addComment={this.props.addComment}
          />
          
. . .
```
11. Then, open MenuComponent.js and update it as follows:
```
. . .

import { baseUrl } from '../shared/baseUrl';

. . .

                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    
. . .
```
12. Then, open HomeComponent.js and update it as follows:
```
. . .

import { baseUrl } from '../shared/baseUrl';

. . .

                <CardImg src={baseUrl + item.image} alt={item.name} />
                
. . .

                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                    
. . .
```
13. Then, open DishdetailComponent.js and update it as follows:
```
. . .

import { baseUrl } from '../shared/baseUrl';

. . .

                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                
. . .
```

* IMPORTANT
Fetching Post code is typed below

* THE BELOW CODE IS PERSISTENT (it will update json data on server) even after window is closed

# Fetch Post Comment 
1. Open ActionCreators.js and update it as follows:
```
. . .

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

. . .
```
2. Open comments.js and remove the following two lines from it:
```
. . .

       comment.id = state.comments.length;
       comment.date = new Date().toISOString();
 
 . . .
```
3. Open MainComponent.js and update it as follows:
```
. . .

import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

. . .

  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))

. . .

            postComment={this.props.postComment}
            
. . .
```
4. Finally, open DishdetailComponent.js and update it as follows:
```
. . .

    function RenderComments({comments, postComment, dishId}) {
      
. . .

                    <CommentForm dishId={dishId} postComment={postComment} />
                    
. . .

            this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
            
. . .

                            postComment={props.postComment}
                            
. . .
```

* NOTE: 
You can do the above (fetch post) similarly for feedback form, the only difference is point number 4, where only one-line of code is appended (in the handleSubmit function)
```
this.props.postFeedback(values.firstname, values.lastname, values.telnum, values.email, values.agree, values.contactType, values.message);
```

# React Animations
2 animation libraries I will use is:
react-transition-group
react-animation-components

## Configure your app to use react-transition-group for animations
1. Install react-transition-group in your React project as follows:
```
yarn add react-transition-group@2.3.0
```
2. Configure CSS classes for use in animation. Open App.css and add the following classes:
```
. . .

.page-enter {
    opacity: 0.01;
    transform: translateX(-100%);
}

.page-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: all 300ms ease-in;
}

.page-exit {
    opacity: 1;
    transform: translateX(0%);
}

.page-exit-active {
    opacity: 0.01;
    transform: translateX(100%);
    transition: all 300ms ease-out;
}
```
3. Then, open MainComponent.js and add in the following to configure the animation:
```
. . .

import { TransitionGroup, CSSTransition } from 'react-transition-group';

. . .

        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
          
. . .
```

## Use react-animation-components to add more subtle animations
1. Install react-animation-components into your React app as follows:
```
yarn add react-animation-components@3.0.0
yarn add prop-types@15.6.0
```
2. Open HomeComponents.js and update as follows:
```
. . .

import { FadeTransform } from 'react-animation-components';

. . .

            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
            
. . .
```
3. Open DishdetailComponents.js and update it as follows:
```
. . .

import { FadeTransform, Fade, Stagger } from 'react-animation-components';

. . .

            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
            
. . .

                    <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade in>
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                                </Fade>
                            );
                        })}
                        </Stagger>
                        
. . .
```

# Building and Deployment
- Use react-scripts to build a distribution folder with your React application bundled using Webpack
1. To build the distribution folder containing your React application, type the following at the prompt:
```
npm run build
```
2. This should build a distribution folder named build containing all your application files.

## Deploying your React Application
1. To deploy your React application you need a server. Fortunately we already have the json-server available on our computer.
2. Copy the contents of the build folder to the public folder of your json-server
3. Now your React application can be accessed at the link http://localhost:3001/
4. If you are setting up a server on the cloud or anywhere, all that you need to do is copy the contents of the build folder to the server side to deploy your React application. The exact procedure depends on the cloud service provider that you choose to use. Please consult their documentation to see the procedure to set up the server.
              
### Firebase Hosting
1. first create distribution folder
```
yarn build
```
2. install firebase-tools globally
```
curl -sL https://firebase.tools | bash
```

* Do the following from root folder, NOT build folder

3. login to firebase (for auth)
```
firebase login
```
3. configure hosting
```
firebase init
```
4. deploy app
```
firebase deploy
```              
