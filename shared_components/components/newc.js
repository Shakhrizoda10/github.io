function New() {
    return (
        
      <div class="contain">

<div class="wrapper">

  <div class="form">
    <h4>GET IN TOUCH</h4>
    <h2 class="form-headline">Send us a message</h2>
    <form id="submit-form" action="" >
      <p>
        <input id="name" class="form-input" type="text" placeholder="Your Name*" />
        <small class="name-error"></small>
      </p>
      <p>
        <input id="email" class="form-input" type="email" placeholder="Your Email*" />
        <small class="name-error"></small>
      </p>
      <p class="full-width">
        <input id="company-name" class="form-input" type="text" placeholder="Company Name*" required />
        <small></small>
      </p>
      <p class="full-width">
        <textarea  minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required ></textarea >
        <small></small>
      </p>
      <p class="full-width">
        <input type="checkbox" id="checkbox" name="checkbox" checked /> Yes, I would like to receive communications by call / email about UNGM's actions.
      </p>
      <p class="full-width">
        <input type="submit" class="submit-btn" value="Submit" onclick="checkValidations()" />
        <button class="reset-btn" onclick="reset()">Reset</button>
      </p>
    </form>
  </div>

  <div class="contacts contact-wrapper">

    <ul>
      <li>Dear Visitors,

You can contact  <span class="highlight-text-grey">the Public Inquiries team </span> with general questions about the UN, or about the website, by using the form below.</li>
      <span class="hightlight-contact-info">
        <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> info@uno.com</li>
        <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+91 11 1111 2900</span></li>
      </span>
    </ul>
  </div>
</div>

        </div>
      );
}

export default New;

