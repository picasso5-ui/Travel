const Signup = () => {
    return ( 
        <>
        <section className="show login">
        <div className="overlay">
        <h3 className="signup-header">Create Account</h3>
        <form className="form">
        
        <input type="text" placeholder="Enter your Username" required />
        <input type="text" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
        <input className="btn-submit" type="submit" value="Log In"  />
        
        </form>
        </div>
        </section>
           </>
     );
}
 
export default Signup;