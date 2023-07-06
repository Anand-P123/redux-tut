import Home from "../components/Home";
import { connect } from "react-redux";
import {addToCart} from "../Services/Actions/actions"

const mapDispatchToProps=dispatch=>({

    addToCartHandler:data=>dispatch(addToCart(data))

})

const mapStateToProps=state=>({
    cardData:state
})
export default connect(mapStateToProps,mapDispatchToProps)(Home) 
//If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
//export default connect(null,mapDispatchToProps)(Home)