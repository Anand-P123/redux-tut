import React from "react";
import Home from "../components/Home";
import {connect} from "react-redux"
import {addToCart} from '../Services/actions/actions'

const mapDispatchToProps=dispatch=>({

})

const mapStateToProps=state=>({

})

//export default Home;
export default connect(mapDispatchToProps,mapStateToProps)(Home)