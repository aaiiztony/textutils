import React from 'react'

export default function Contact(props) {
  return (
    <>    
  <div>
      <div className={`m-5 h-50 contact-box text-${props.mode==='white'?'dark':'white'}`}>
        <div className="contact-page">
            <h2 className='text-center'>Feel Free to Say Hi!</h2>
            <div className="flex-row text-center">
              <form action="/contact_form_data">
              <input type="text"  className="inp border-0 py-1 rounded shadow font-p my-2 text-center w-50" placeholder="What should we call you?"/><br />
                
                <input type="email" className="inp border-0 py-1 shadow rounded font-p my-2 text-center w-50" id="email"  placeholder="May we have your email?" required/><br />
                
                <input type="text" className="inp border-0 py-1 rounded shadow my-2 w-50 text-center" id="concern"  placeholder="How may we be of assistance?"/> <br />
                <input type="submit" className="my-2 w-auto" value= "Submit"/>
              </form>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
