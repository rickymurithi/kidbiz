$('form#contactForm').submit(function (event) {
  event.preventDefault();
  var name = $('#name').val();
  var pass = $('#email').val();
  var mess = $('#mess').val();
  alert("Hi.. " + name + ",,Thank youfor reaching Kidbaz we have received your message and we will get in touch. Thank you for contacting us.");
});