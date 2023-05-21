// toggle icon navbar


// scroll sections
window.onscroll = () => {
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

function openComposeEmail() {
    var emailAddress = "rc17.10.05@gmail.com"; // Replace with your email address
    var url = "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(emailAddress);
    window.open(url);
  }