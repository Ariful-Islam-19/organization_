        // Enable hidden nav bar
        {
            const nav = document.querySelector(".nav_up");
            let lastScrollY = window.scrollY;
          
            window.addEventListener("scroll", () => {
              if (lastScrollY < window.scrollY) {
                nav.classList.add("nav--hidden");
              } else {
                nav.classList.remove("nav--hidden");
              }
          
              lastScrollY = window.scrollY;
            });
          }


          
                  // Enable hidden nav bar
                  {
            const nav = document.querySelector(".nav_down");
            let lastScrollY = window.scrollY;
          
            window.addEventListener("scroll", () => {
              if (lastScrollY < window.scrollY) {
                nav.classList.add("nav--hidden_1");
              } else {
               nav.classList.remove("nav--hidden_1");
              }
          
             lastScrollY = window.scrollY;
            });
          }