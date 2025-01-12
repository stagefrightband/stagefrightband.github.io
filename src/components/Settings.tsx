import React, { useLayoutEffect, useEffect, useState } from 'react';
import '../styles.css'; 
const getCookie=(name:string):string|null=>{const value=`; ${document.cookie}`;const parts=value.split(`; ${name}=`);if(parts.length===2){const part=parts.pop();if(part)return decodeURIComponent(part.split(";").shift()||"");}return null};const setCookie=(name:string,value:string,days=365):void=>{const expires=new Date(Date.now()+days*864e5).toUTCString();document.cookie=`${name}=${value}; expires=${expires}; path=/; SameSite=Lax`};const toggleClassBasedOnCookie=(cookieName:string,className:string):void=>{const cookieValue=getCookie(cookieName)==='true';if(cookieValue){document.body.classList.add(className)}else{document.body.classList.remove(className)}};const Settings:React.FC=()=>{const[highContrast,setHighContrast]=useState(getCookie('highcontrast')==='true');const[openDyslexic,setOpenDyslexic]=useState(getCookie('opendyslexic')==='true');const[fontSize,setFontSize]=useState<number>(getCookie('fontsize')?parseInt(getCookie('fontsize')!,10):100);useLayoutEffect(()=>{toggleClassBasedOnCookie('highcontrast','high-contrast');toggleClassBasedOnCookie('opendyslexic','open-dyslexic');document.documentElement.style.fontSize=`${fontSize}%`},[]);useEffect(()=>{document.documentElement.style.fontSize=`${fontSize}%`},[fontSize]);useEffect(()=>{setCookie('highcontrast',highContrast.toString());toggleClassBasedOnCookie('highcontrast','high-contrast')},[highContrast]);useEffect(()=>{setCookie('opendyslexic',openDyslexic.toString());toggleClassBasedOnCookie('opendyslexic','open-dyslexic')},[openDyslexic]);const handleFontSizeChange=(value:number)=>{setFontSize(value);setCookie('fontsize',value.toString());document.documentElement.style.fontSize=`${value}%`};
  return (
    <div className="settings-container fade-in">
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>Settings</h1>
      <div className="setting high-contrast slide-in">
        <div className="setting-header">
          <strong>High Contrast</strong>
          <label className="switch">
            <input
              type="checkbox"
              id="highcontrast-toggle"
              checked={highContrast}
              onChange={() => setHighContrast(!highContrast)}
              aria-label="Toggle High Contrast"
            />
            <span className="slider round"></span>
          </label>
        </div>
        <p>
          Makes text easier to read by increasing the difference between the text and its background color. Useful for people with low vision or color blindness.
        </p>
      </div>
      <div className="setting open-dyslexic open-dyslexic-font slide-in">
        <div className="setting-header">
          <strong>Open Dyslexic Font</strong>
          <label className="switch">
            <input
              type="checkbox"
              id="opendyslexic-toggle"
              checked={openDyslexic}
              onChange={() => setOpenDyslexic(!openDyslexic)}
              aria-label="Toggle Open Dyslexic Font"
            />
            <span className="slider round"></span>
          </label>
        </div>
        <p>Uses a font that makes reading easier for people with dyslexia.</p>
      </div>
      <div className="setting fontsize slide-in">
        <div className="setting-header">
          <strong>Font Size</strong>
        </div>
        <p>Changes how large or small text is throughout the website.</p>
        <select
          value={fontSize}
          onChange={(e) => handleFontSizeChange(parseInt(e.target.value, 10))}
          aria-label="Font Size Dropdown"
        >
          {Array.from({ length: 16 }, (_, i) => 50 + i * 10).map((size) => (
            <option key={size} value={size}>
              {size}%
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Settings;