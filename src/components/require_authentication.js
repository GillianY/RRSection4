import React, { Component } from 'react';

export default function(ComposedComponent) {
    class Authentication extends Component {
        render(){
            // console.log( this.props.resources);
            return <ComposedComponent {...this.props} />;
        }
    }
    return Authentication;
}


// // In some other location ... not in this file ..
// // We want to use this HOC
// import Authentication  // this is my HOC
// import Resources // This is the component I want to wrap

// const ComposedComponent = Authentication(Resources);

// //In some render method...
// <ComposedComponent resources={resourceList} />