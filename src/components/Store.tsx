import React, { useEffect, useState } from 'react';
import '../styles.css';
function getCookie(name:string):string|null{const value=`; ${document.cookie}`;const parts=value.split(`; ${name}=`);if(parts.length===2){const part=parts.pop();if(part)return decodeURIComponent(part.split(";").shift()||"");}return null}function setCookie(name:string,value:string):void{const expires="Fri, 31 Dec 9999 23:59:59 GMT";document.cookie=`${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`}interface ToggleClassBasedOnCookieParams{cookieName:string;className:string}function toggleClassBasedOnCookie({cookieName,className}:ToggleClassBasedOnCookieParams):void{const cookieValue=getCookie(cookieName)==="true";if(cookieValue){document.documentElement.classList.add(className)}else{document.documentElement.classList.remove(className)}}const Store:React.FC=()=>{const[isOverlayVisible,setIsOverlayVisible]=useState(false);const[isTicketOverlayVisible,setIsTicketOverlayVisible]=useState(false);const[isAlbumOverlayVisible,setIsAlbumOverlayVisible]=useState(false);const[quantity,setQuantity]=useState(1);const[selectedVenue,setSelectedVenue]=useState<string>("House of Blues, Houston");const[size,setSize]=useState<string>("M");useEffect(()=>{toggleClassBasedOnCookie({cookieName:"highcontrast",className:"high-contrast"});toggleClassBasedOnCookie({cookieName:"opendyslexic",className:"open-dyslexic"});const handleKeyDown=(e:KeyboardEvent)=>{if(e.key==='Escape'){setIsOverlayVisible(false);setIsTicketOverlayVisible(false);setIsAlbumOverlayVisible(false);}};document.addEventListener('keydown',handleKeyDown);return()=>{document.removeEventListener('keydown',handleKeyDown)}},[]);const handleMerchButtonClick=()=>{setIsOverlayVisible(true)};const handleTicketButtonClick=()=>{setIsTicketOverlayVisible(true)};const handleAlbumButtonClick=()=>{setIsAlbumOverlayVisible(true)};const handleQuantityChange=(e:React.ChangeEvent<HTMLInputElement>)=>{const value=parseInt(e.target.value,10);setQuantity(value>=1?value:1)};const handleVenueChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{setSelectedVenue(e.target.value)};interface CartItem{name:string;quantity:number;venue? :string;size? :string}const updateCartItems=(itemName:string,quantityToAdd:number,venue? :string,size? :string)=>{const currentCart=getCookie('cartitems');const itemsMap:Record<string, CartItem>={};if(currentCart){currentCart.split(',').forEach(item=>{const match=item.match(/^([A-Za-z' _-]+)(\d+)(?:_([A-Za-z' _-]+))?$/);if(match){const name=match[1];const quantity=parseInt(match[2],10);const venueName=match[3]?match[3].replace(/_/g,' '):undefined;const key=venueName?`${name}_${venueName}`:name;if(itemsMap[key]){itemsMap[key].quantity+=quantity}else{itemsMap[key]={name,quantity,venue:venueName}}}})}let key=itemName;if(itemName==='Tickets'&&venue){const formattedVenue=venue.replace(/ /g,'_').replace(/,/g,'');key+=`_${formattedVenue}`}if(itemName==='Merch'&&size){key+=`_${size}`}if(itemsMap[key]){itemsMap[key].quantity+=quantityToAdd}else{itemsMap[key]={name:itemName,quantity:quantityToAdd,venue,size}}const updatedCart=Object.values(itemsMap).map(cartItem=>{let itemString=`${cartItem.name}${cartItem.quantity}`;if(cartItem.venue){const formattedVenue=cartItem.venue.replace(/ /g,'_').replace(/,/g,'');itemString+=`_${formattedVenue}`}if(cartItem.size){itemString+=`_${cartItem.size}`}return itemString}).join(',');setCookie('cartitems',updatedCart)};const handleSubmitMerch=()=>{updateCartItems('Merch',quantity,undefined,size);console.log(`Added Merch${quantity}_${size} to cart.`);setIsOverlayVisible(false)};const handleSubmitTickets=()=>{updateCartItems('Tickets',quantity,selectedVenue);console.log(`Added Tickets${quantity}_${selectedVenue.replace(/ /g,'_')} to cart.`);setIsTicketOverlayVisible(false)};const handleSubmitAlbum=()=>{updateCartItems('S-Gate',quantity);console.log(`Added S-Gate${quantity} to cart.`);setIsAlbumOverlayVisible(false)};
  return (
    <div>
      <div className="products-container">
        <div className="product-tile">
          <div className="product-image">
            <button
              className="product-button merch-button"
              style={{
                backgroundImage: "url('/Images/stagefrightmerch.webp')"
              }}
              onClick={handleMerchButtonClick}
              aria-label="Stage Fright Merch"
            ></button>
          </div>
          <div className="product-info">
            <p>Stage Fright T-Shirt</p> 
          </div>
        </div>
        <div className="product-tile">
          <div className="product-image">
            <button
              className="product-button ticket-button"
              style={{
                backgroundImage: "url('/Images/ticket.webp')"
              }}
              onClick={handleTicketButtonClick} 
              aria-label="Stage Fright Tickets"
            ></button>
          </div>
          <div className="product-info">
            <p>Stage Fright Tickets</p> 
          </div>
        </div>
        <div className="product-tile">
          <div className="product-image">
            <button
              className="product-button album-button"
              style={{
                backgroundImage: "url('/Images/albumcover.webp')"
              }}
              onClick={handleAlbumButtonClick}
              aria-label="S-Gate Album"
            ></button>
          </div>
          <div className="product-info">
            <p>Album: S-Gate</p> 
          </div>
        </div>
      </div>

      
      <div className={`overlay ${isOverlayVisible ? 'active' : ''}`}>
        <button className="close-button" onClick={() => setIsOverlayVisible(false)}>X</button>
        <div className="overlay-left">
          <img src="/Images/stagefrightmerch.webp" alt="Stage Fright Merch" />
        </div>
        <div className="overlay-right">
          <div className="overlay-content">
          <p>Stage Fright Merch</p>
            <div className="size-container">
              <span>Size:</span>
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>
            </div>
            <div className="quantity-container">
              <span>Quantity:</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <button className="submit-button" onClick={handleSubmitMerch}>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className={`overlay ${isTicketOverlayVisible ? 'active' : ''}`}>
        <button className="close-button" onClick={() => setIsTicketOverlayVisible(false)}>X</button>
        <div className="overlay-left">
          <img src="/Images/ticket.webp" alt="Stage Fright Tickets" />
        </div>
        <div className="overlay-right">
          <div className="overlay-content">
            <p>Stage Fright Tickets</p>
            <div className="venue-container">
              <span>Venue:</span>
              <select value={selectedVenue} onChange={handleVenueChange}>
                <option value="House of Blues, Houston">House of Blues Houston</option>
                <option value="Emo's">Emo's</option>
                <option value="Ferris Wheeler's Backyard & BBQ">Ferris Wheeler's Backyard & BBQ</option>
                <option value="The Nile Theatre">The Nile Theatre</option>
                <option value="House of Blues San Diego">House of Blues San Diego</option>
              </select>
            </div>
            <div className="size-container">
              <span>Quantity:</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <button className="submit-button" onClick={handleSubmitTickets}>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className={`overlay ${isAlbumOverlayVisible ? 'active' : ''}`}>
        <button className="close-button" onClick={() => setIsAlbumOverlayVisible(false)}>X</button>
        <div className="overlay-left">
          <img src="/Images/albumcover.webp" alt="S-Gate Album" />
        </div>
        <div className="overlay-right">
          <div className="overlay-content">
            <p>S-Gate Album</p>
            <div className="quantity-container">
              <span>Quantity:</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <button className="submit-button" onClick={handleSubmitAlbum}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Store;