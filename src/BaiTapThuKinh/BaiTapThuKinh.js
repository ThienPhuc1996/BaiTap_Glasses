import React, { Component } from 'react'
import dataGlasses from '../dataGlasses.json'

export default class BaiTapThuKinh extends Component {
   
   state = {
    glassesCurrent: {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
   }
   
   
    renderGlassessList = () => {
       return dataGlasses.map((glassesItem,index) => {
         return <img onClick={() => {this.changeGlasses(glassesItem)}} className="ml-2 p-2 border border-width-1" style={{width:'110px', cursor:'pointer'}} key={index} 
         src={glassesItem.url}/>
       })
   }

   changeGlasses = (newGlasses) => {
       this.setState({
        glassesCurrent: newGlasses
       })
   }
  
    render() {
      const styleGlasses = {
          position: 'absolute',
          width: '150px',
          top: '75px',
          right: '85px',
          opacity: '0.7',
      }

    return (
         <div style={{backgroundImage: 'url(./glassesImage/background.jpg)',minHeight:'2000px',backgroundSize:'2000px'}}>
         <div style ={{backgroundColor: 'rgba(0,0,0,.3)', minHeight:'2000px'}}> 

         <h3 className="text-center text-light p-5" style={{backgroundColor:'rgba(0,0,0,.4)'}} 
         > Try Glasses App Online </h3>

         <div className="container">
         <div className="row mt-5 text-center">
             <div className="col-6">
                 <div style={{positon:'relative'}}>
               <img style={{width:'250px', position:'absolute'}} src="./glassesImage/model.jpg" alt='model.jpg'/>
               <img style={styleGlasses} className="postion-absolute" src={this.state.glassesCurrent.url} />

               <div className="position-relative" style={{width:'250px', left:'270px', top:'200px',backgroundColor:'rgba(255,127,0,.5)', textAlign:'left',paddingLeft:'15px', height:'105px'}}>
                   <span style={{color:'#AB82FF', fontSize:'14px',paddingRight:'5px'}} className="font-weight-bold"> {this.state.glassesCurrent.name} </span>
                   <br/>
                   <span style={{color:'#AB82FF',fontSize:'13px', fontWeight:'400'}} className="font-weight-bold"> {this.state.glassesCurrent.desc} </span>
               </div>
             </div>
             </div>

             <div className="col-6">
             <img style={{width:'250px'}} src="./glassesImage/model.jpg" alt='model.jpg'/>
            
                 </div>
         </div>
         </div>
         {/* Div chứa các kính dc chọn */}
        <div className='bg-light container text-center mt-5 d-flex justify-content-center p-5'>
            {this.renderGlassessList()}
        </div>

         </div>
         </div>

    )
  }
}
