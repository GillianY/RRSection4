import React, { Component } from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {
        render(){
            // console.log( this.props.resources);
            //console.log('rendering...', ComposedComponent);
            console.log(this.props.authenticated);
            return <ComposedComponent {...this.props} />;
        }
    }



    function mapStateToProps(state){
        return { authenticated : state.authenticated};
    }

    return connect(mapStateToProps)(Authentication);
}


// // In some other location ... not in this file ..
// // We want to use this HOC
// import Authentication  // this is my HOC
// import Resources // This is the component I want to wrap

// const ComposedComponent = Authentication(Resources);

// //In some render method...
// <ComposedComponent resources={resourceList} />