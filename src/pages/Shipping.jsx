import React from "react";
import { useLocation } from "react-router-dom";
import Map from "../components/Map.js";


export const Shipping = () => {
  const location = useLocation();
  const { shippingMethod, warehouse } = location.state;

  if(shippingMethod === 'pickup') {
    if(warehouse === '1') { 
      console.log('pickup on warehouse 1', warehouse);
      return (
        <div> 
          <h1> Pickup Information</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25379.353862093725!2d-121.88057599999999!3d37.3325824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccd4f21df13d%3A0x45d9bee310def4b8!2sWalmart%20Supercenter!5e0!3m2!1sen!2sus!4v1681338387840!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0, marginLeft: "28%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Warehouse 1 Location"
          ></iframe>
        </div>
      );
    }
    else if (warehouse === '2'){
      
      console.log('pickup on warehouse 2');
      return(
        /*
      <div> 
        <h1> Pickup Information</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.649929235053!2d-121.86324388821839!3d37.32891718662735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e32e126db5191%3A0x9c5c13faae9ed5ef!2sCostco%20Wholesale!5e0!3m2!1sen!2sus!4v1681616967720!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0, marginLeft: "28%", }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Warehouse 2 Location"
        ></iframe>
      </div>
      */
    <div>
        <h1> Pickup Information </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25379.353862093725!2d-121.88057599999999!3d37.3325824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccd4f21df13d%3A0x45d9bee310def4b8!2sWalmart%20Supercenter!5e0!3m2!1sen!2sus!4v1681338387840!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Warehouse 1 Location"
      ></iframe>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.649929235053!2d-121.86324388821839!3d37.32891718662735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e32e126db5191%3A0x9c5c13faae9ed5ef!2sCostco%20Wholesale!5e0!3m2!1sen!2sus!4v1681616967720!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Warehouse 2 Location"
      ></iframe>
    </div>
      );
    }
    else{ //pickup on either warehouses; show both maps - have to put maps side by side
      return (
        <div>
          <h1> Pickup Information </h1>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25379.353862093725!2d-121.88057599999999!3d37.3325824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccd4f21df13d%3A0x45d9bee310def4b8!2sWalmart%20Supercenter!5e0!3m2!1sen!2sus!4v1681338387840!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Warehouse 1 Location"
        ></iframe>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.649929235053!2d-121.86324388821839!3d37.32891718662735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e32e126db5191%3A0x9c5c13faae9ed5ef!2sCostco%20Wholesale!5e0!3m2!1sen!2sus!4v1681616967720!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Warehouse 2 Location"
        ></iframe>
      </div>
      );
    }
  }
  else if(shippingMethod === 'drone' || shippingMethod === 'truck') {
    console.log('not pickup');
    //show two maps from warehouse 1 to user and from warehouse 2 to user
    //get user's address
    //get warehouse address 
    // hardcode into map api 
    return(
    <div>
      <h1> Delivery Information</h1>
      <Map/>
    </div>
    );
  }
  
  return null;
};

export default Shipping;
