import React, { Component } from 'react';

class Splash extends Component {
            
    componentDidMount(){
        this.$f7ready((f7)=>{
           
            f7.views.create('.view-main', { url: '/home/' })
            f7.router.routes.push('/about/')
        })
    }    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Splash;