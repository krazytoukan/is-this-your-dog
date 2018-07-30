import React, {Fragment} from "react"
import {Link} from "react-router-dom"
import {Menu} from "semantic-ui-react"

const NavBar = (props) => {
    return(
        <Menu>
           <Menu.Item header><Link to='/'> Home </Link></Menu.Item>
            {props.currentUser 
            ?  (
                <Fragment>
                   <Menu.Item header> <Link to ='/DogFound'> Pooch Found 🐶 ! </Link> </Menu.Item>
                   <Menu.Item header> <Link to ='/logout'> Log Out </Link> </Menu.Item>
                </Fragment>
            )
            : (
                <Fragment>
                <Menu.Item header> <Link to ='/login'> Log In </Link> </Menu.Item>
                <Menu.Item header> <Link to ='/signup'> Sign Up </Link> </Menu.Item>
                </Fragment>
            )
            }
        </Menu>
    )
}

export default NavBar