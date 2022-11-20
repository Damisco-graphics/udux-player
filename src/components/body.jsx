import '../css/body.css' 
 import  Jene from './images/jene.jpg';
 import Lojay from './images/lojay.jpg'
 import Koffee from './images/koffee.jpg'
 import Burna from './images/burna.jpg'
 import {gsap} from 'gsap'
 
 import {useLayoutEffect, useRef} from 'react'

function Body (){
    const body=useRef();

    
    useLayoutEffect(()=>{

        let ctx=gsap.context(()=>{
            gsap.to(".udux h1",{
                y: 10,
                repeat: -1,
                scale: 1.05,                
                yoyo: true})
    
            gsap.to(".udux h1", {
                rotate: "+=360",
                repeat: 2,
                y: 10,
                repeat: -1,
                repeatDelay:3
            });
        }, body);

        return ()=>ctx.revert()
    })

    const onEnter=({currentTarget})=>{
        gsap.to(currentTarget, {color:"white",fontWeight:"bolder", scale: 1.3})
    }
    const onLeave=({currentTarget})=>{
        gsap.to(currentTarget,{color: "white", scale: 1})
    }

    
     return(
                 
             <div ref={body} id='Body'>
                 <div className='udux'>
                 <img src={Jene} alt='Jene' />
                 <h1 onMouseEnter={onEnter} onMouseLeave={onLeave}>Udux</h1>
                <h2>Omah Lay</h2> 

                 </div>
                 <h2>Welcome Back!</h2>
                 
                 <div className='trends1'>
                 <div className='container'>
                 <div className='colored1'> </div>
                 <div className='innercontainer'>
                <img src={Burna}  alt='BurnaBoy' /> 
                 <div className='drkcolored'>
                 <h4>Daily Vibes 1</h4>
                 <h5>Burna Boy, Oxlade, Davido</h5>
                  </div> 
                 </div>
                <div className='colored2'> </div>    
                 </div>

                 
                 <div className='container'>
                 <div className='colored1 wnecolor'> </div>
                 <div className='innercontainer'>    
                 <img src={Lojay} alt='Lojay'/>
                  <div className='drkcolored wnecolor'> 
                  <h4>Daily Vibes 2</h4>
                 <h5>Lojay, Oxlade, Ama Rae, Rema</h5>
                  </div> 
                  </div>                 
                 <div className='colored2 wnecolor'> </div>
                 </div>

                 
                 <div className='container'>
                 <div className='colored1 blucolor'> </div>
                 <div className='innercontainer'>
                 <img src={Koffee} alt='Koffee' />
                  <div className='drkcolored blucolor'> 
                  <h4>Daily Vibes 3</h4>
                 <h5>Koffee,Chris Brown, WSTRN</h5>
                  </div>
                   </div>                 
                 <div className='colored2 blucolor'> </div>
                 </div>

                 <div className='container'>
                 <div className='colored1'> </div>
                 <div className='innercontainer'>
                <img src={Burna}  alt='BurnaBoy' /> 
                 <div className='drkcolored'> 
                 <h4>Daily Vibes 1</h4>
                 <h5>Burna Boy, Oxlade, Davido</h5>
                 </div> 
                 </div>
                <div className='colored2'> </div>    
                 </div>

                 
                 
                 </div>

                

<h2>Cheers to the Weekend</h2>
                 <div className='trends1'>

                 <div className='container'>
                 <div className='colored1'> </div>
                 <div className='innercontainer'>
                <img src={Burna}  alt='BurnaBoy'  /> 
                 <div className='drkcolored'> 
                 <h4>Daily Vibes 1</h4>
                 <h5>Burna Boy, Oxlade, Davido</h5></div> 
                 </div>
                <div className='colored2'> </div>    
                 </div>

                 
                 <div className='container'>
                 <div className='colored1 wnecolor'> </div>
                 <div className='innercontainer'>    
                 <img src={Lojay} alt='Lojay' />
                  <div className='drkcolored wnecolor'>
                  <h4>Daily Vibes 2</h4>
                 <h5>Lojay, Oxlade, Ama Rae, Rema</h5> </div> 
                  </div>                 
                 <div className='colored2 wnecolor'> </div>
                 </div>

                 
                 <div className='container'>
                 <div className='colored1 blucolor'> </div>
                 <div className='innercontainer'>
                 <img src={Koffee} alt='Koffee' />
                  <div className='drkcolored blucolor'> 
                  <h4>Daily Vibes 3</h4>
                 <h5>Koffee,Chris Brown, WSTRN</h5>
                  </div> </div>                 
                 <div className='colored2 blucolor'> </div>
                 </div>
                 <div className='container'>
                 <div className='colored1'> </div>
                 <div className='innercontainer'>
                <img src={Burna}  alt="BurnaBoy" />            
                 <div className='drkcolored'>
                 <h4>Daily Vibes 1</h4>
                 <h5>Burna Boy, Oxlade, Davido</h5> </div> 
                 </div>
                <div className='colored2'> </div>    
                 </div>

                 </div>
                 
             </div>
         
     ) 
 }


 export default Body;