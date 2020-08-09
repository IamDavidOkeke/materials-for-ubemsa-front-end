import React from 'react';

const Contact = () =>{
    return(
        <div>
            <main className="pa4 black-80">
               <form className="measure center" method="POST" action="mailto:iamdavonokeke@gmail.com" encType="text/plain">
                   <fieldset className="ba b--transparent ph0 mh0">
                   <legend className="f4 fw6 ph0 mh0">Contact us</legend>
                   <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name" >Your Name</label>
                    <input className="pa2 input-reset ba bg-transparent w-100" type="text" name="name" required ></input>
                    </div>
                   <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Your Email</label>
                    <input className="pa2 input-reset ba bg-transparent  w-100" type="email" name="email-address" required id="email-address"/>
                   </div>
                   <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="Message">Your Message</label>
                        <input className="message pa2 input-reset ba bg-transparent w-100" type="text" name="message" textarea="true"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="button ph3 pv2 input-reset ba white grow pointer f6 dib" type="submit" value="Submit"/>
                    </div>
                </form>
                </main>
        </div>
    )
}





export default Contact