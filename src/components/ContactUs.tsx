import React, { useEffect, useState } from "react";
import "../styles.css";
import { createClient } from '@supabase/supabase-js';
const getCookie=(name:string):string|null=>{const value=`; ${document.cookie}`;const parts=value.split(`; ${name}=`);if(parts.length===2)return parts.pop()?.split(";").shift()||null;return null};const toggleClassBasedOnCookie=(cookieName:string,className:string):void=>{const cookieValue=getCookie(cookieName)==="true";if(cookieValue){document.documentElement.classList.add(className)}else{document.documentElement.classList.remove(className)}};const ContactUs:React.FC=()=>{const supabaseUrl=process.env.REACT_APP_SUPABASE_URL||'';const supabaseAnonKey=process.env.REACT_APP_ANON_KEY||'';const supabase=createClient(supabaseUrl,supabaseAnonKey);const[name,setName]=useState('');const[email,setEmail]=useState('');const[message,setMessage]=useState('');const[overlay,setOverlay]=useState<{visible:boolean;type:'success'|'error'}>({visible:false,type:'success'});const[isCooldown,setIsCooldown]=useState(false);const isFormValid=name.trim()!==""&&email.trim()!==""&&message.trim()!=="";const handleSubmit=async(e:React.FormEvent)=>{e.preventDefault();if(!isFormValid||isCooldown){return}const{error}=await supabase.from('Bookings').insert([{name,'e-mail':email,message}]);if(error){console.error(error);setOverlay({visible:true,type:'error'})}else{setName('');setEmail('');setMessage('');setOverlay({visible:true,type:'success'});setIsCooldown(true);setTimeout(()=>{setIsCooldown(false)},5000);}};const closeOverlay=()=>{setOverlay({...overlay,visible:false})};useEffect(()=>{toggleClassBasedOnCookie("highcontrast","high-contrast");toggleClassBasedOnCookie("opendyslexic","open-dyslexic")},[]);
  return (
    <>
    <h1 style={{ textAlign: "center" }}>Contact Us</h1>
    <div className="contact-container">
      <div className="contact-left">
        <h2>Email Us/Customer Support</h2>
        <a
          style={{ textDecoration: "underline" }}
          href="mailto:stagefrightbandemail@gmail.com"
        >
          stagefrightbandemail@gmail.com
        </a>
      </div>
      <div className="contact-right">
        <h2>Bookings</h2>
        <form onSubmit={handleSubmit}>
          <div className="booking-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="booking-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="booking-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className="message-textarea" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit" className="submit-button" disabled={!isFormValid || isCooldown}>
            {isCooldown ? 'Please wait...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
    {overlay.visible && (
      <div className="overlay active contactusoverlay">
        <div className="overlay-content">
          <h2>{overlay.type === 'success' ? 'Submitted!' : 'Error!'}</h2>
          <p>{overlay.type === 'success' ? 'Your form was successfully submitted.' : 'There was an error submitting your form. Please try again.'}</p>
          <button onClick={closeOverlay}>Ok</button>
        </div>
    </div>
    )}
    </>
  );
};
export default ContactUs;
