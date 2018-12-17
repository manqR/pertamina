import React, { Component } from 'react';

class Splash extends Component {
            
    componentDidMount(){
        this.$f7ready((f7)=>{
           
            let data = localStorage.getItem('loginData');            
            if(data){
                f7.views.create('.view-main', { url: '/home/' })
            }else{
                f7.views.create('.view-main', { url: '/login/' })
            }
        
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