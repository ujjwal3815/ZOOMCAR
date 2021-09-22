import React from 'react';

function Head() {
  return (
    <>
      <div class="head1">
        <div class="logo">
          <a href="https://www.zoomcar.com/bangalore/" class="link1">
            <img
              src="data:image/png;base64,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"
              alt="Zoomcar-Logo"
              width="150px"
              height="80px"
              id="logo1"
            ></img>
          </a>
        </div>
        <div class="menu">
          <nav>
            <a href="offers.html">OFFER</a>
            <a href="subscription.html">SUBSCRIPTION</a>
            <a href="amigo.html">AMIGO</a>
            <a href="zms.html">ZMS</a>
            <a href="mobileapp.html">MOBILE APP</a>
            <a href="signup.html">SIGN UP</a>
            <a href="login.html">LOGIN</a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Head;
