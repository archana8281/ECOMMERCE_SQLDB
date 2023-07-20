import React, { useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

function Cash() {
  useEffect(() => {
    loadCaptchaEnginge(6, "white", "green", "numbers");
  }, []);

 const doSubmit = () => {
      // let's assume there is an HTML input text box with id 'user_captcha_input' to get user input   
         let user_captcha_value = document.getElementById('user_captcha_input').value;
    
         if (validateCaptcha(user_captcha_value)==true) {
             alert('Captcha Matched');
         }
    
         else {
             alert('Captcha Does Not Match');
         }
     };

  return (
    <div>
      <div className="cash">
        <div className="capcha">        
          < LoadCanvasTemplate reloadText="&#10227;" reloadColor="red" />
        </div>
        <input
          type="number"
          name="cash"
          id="user_captcha_input"
          placeholder="  Enter Charector"
        />
      </div>
      <a href="/fin"><button className="boxbutton" onClick={doSubmit}>Confirm Order</button></a>
    </div>
  );
}

export default Cash;
