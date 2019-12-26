import React, { Component } from "react"
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Tutorials</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>The online Tutorial Library</h1>
                                <p>We provide the tutorials on different and latest technologies with POC
                                    Example:<br />
                                    1. Scala<br />   2. Play Framework<br />    3. Gatling<br />      4. ReactJS<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment >

        )
    }
}
export default Header;