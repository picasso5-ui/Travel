
import image4 from '../Images/image4.jpg'
import image3 from '../Images/image3.jpg'
import image2 from '../Images/image2.jpg'
import image1 from '../Images/image1.jpg'


const Destination = () => {
    return ( 
        <>
        <section className="grid">
        <h3>We are currently in 46 countries!</h3>

        <div className="grid-items">
        <div>
        
        <img src={image4} alt=""  />
        <h4>Fly to China</h4>
        <p>Lorem ipsum, dolor sit amet conrum nimaiores, esse iste. Sequi illo, debitis, veritatis modi nemo consequuntur eligen.</p>
        </div>
        <div>
        
        <img src={image3} alt=""  />
        <h4>Go and have fun! </h4>
        <p>Lorem ipsum, dolor sit amet conrum nimaiores, esse iste. Sequi illo, debitis, veritatis modi nemo consequuntur eligen.</p>
        </div>
        <div>
        
        <img src={image1} alt=""  />
        <h4>Your comfortability is our priority</h4>
        <p>Lorem ipsum, dolor sit amet conrum nimaiores, esse iste. Sequi illo, debitis, veritatis modi nemo consequuntur eligen.</p>
        </div>
        </div>
        </section>
        
        </>
     );
}
 
export default Destination;