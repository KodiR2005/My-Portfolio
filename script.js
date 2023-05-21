// toggle icon navbar


// scroll sections
window.onscroll = () => {
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

function openGmail() {
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbhJNzrnZpPllQjbXvbCcpWnZlvlfhqccxvwZGXjnLvRSSwJdShLfMBGzPjnWNkZJzgRJF");
  }