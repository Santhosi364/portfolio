AOS.init();
      function toggleTheme() {
        document.body.classList.toggle('dark-mode');
      }

      const footerMsg = document.getElementById("footer-msg");
      const footerMessages = [
        "Made with 💻 and ☕ in 2025.",
        "Connect with me — I'm always open to new opportunities!",
        "Thanks for scrolling! 😊",
        "Check out my projects on GitHub!",
        "Let’s build something great together."
      ];

      let msgIndex = 0;
      function rotateFooterMessage() {
        footerMsg.textContent = footerMessages[msgIndex];
        msgIndex = (msgIndex + 1) % footerMessages.length;
      }

      rotateFooterMessage(); 
      setInterval(rotateFooterMessage, 4000); 

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });

      function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
      }

      window.onload = () => {
        if (localStorage.getItem('theme') === 'dark') {
          document.body.classList.add('dark-mode');
        }
      };
