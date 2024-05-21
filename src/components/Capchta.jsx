import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function GoogleReCaptchaV2() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const onChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  // Fetch the reCAPTCHA script asynchronously on component mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script on unmount
    return () => document.body.removeChild(script);
  }, []);

  return (
    <ReCAPTCHA
      sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      onChange={onChange}
    />
  );
}

export default GoogleReCaptchaV2;
