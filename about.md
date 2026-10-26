---
layout: page
title: about
permalink: /about/
---

i’m dorian marié, the individual entrepreneur behind dorianmarie.com, based in montmagny, france.

my business focuses on providing software, including its hosting and operation, primarily for automated messaging, alerts, and notifications.

## business information

- **registered name:** Dorian Michel MARIÉ
- **trading name:** dorianmarie.com
- **business registration:** 752 681 742 R.C.S. Pontoise
- **registration date:** september 17, 2026
- **recorded activity start date:** october 1, 2026
- **principal establishment:** montmagny, 95360, france
- **operation:** directly operated by the proprietor

these details are drawn from the kbis extract issued by the commercial court registry of pontoise, current as of september 17, 2026.

## contact

you can reach me at [dorian@dorianmarie.com](mailto:dorian@dorianmarie.com).

or send a message using the form below. after you select “send message”, you’ll complete a captcha before your message is sent.

<form class="contact-form" action="https://formsubmit.co/{{ site.email | escape }}" method="post" aria-label="contact dorian">
  <input type="hidden" name="_subject" value="new message from dorianmarie.com">
  <input type="hidden" name="_captcha" value="true">
  <p>
    <label for="contact-name">name</label>
    <input id="contact-name" type="text" name="name" autocomplete="name" maxlength="200" required>
  </p>
  <p>
    <label for="contact-email">email address</label>
    <input id="contact-email" type="email" name="email" autocomplete="email" maxlength="254" required>
  </p>
  <p>
    <label for="contact-message">message</label>
    <textarea id="contact-message" name="message" rows="6" maxlength="10000" required></textarea>
  </p>
  <p class="contact-form-note">this form uses <a href="https://formsubmit.co/">FormSubmit</a> and Google reCAPTCHA to deliver your message and prevent spam. see the <a href="{{ '/privacy/' | relative_url }}">privacy policy</a>.</p>
  <button type="submit">send message</button>
</form>

see also the [privacy policy]({{ "/privacy/" | relative_url }}) and [terms]({{ "/terms/" | relative_url }}).
