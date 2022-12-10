$('form#contactForm').submit(function (event) {
  event.preventDefault();
  let name = $('#name').val();
  let pass = $('#email').val();
  let mess = $('#mess').val();
  alert("Hi.. " + name + ",,Thank youfor reaching Kidbaz we have received your message and we will get in touch. Thank you for contacting us.");
});