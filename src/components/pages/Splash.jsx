import React, { Component } from 'react';

class Splash extends Component {
            
    componentDidMount(){
        this.$f7ready((f7)=>{
           
           f7.views.create('.view-main', { url: '/login/' })
            // f7.router.routes.push('/login/')
        })
    }    
    render() {
        return (
            <div>
                XXXXXXX
            </div>
        );
    }
}

export default Splash;