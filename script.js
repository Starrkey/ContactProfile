'use strict';


        let tabLinks = document.getElementsByClassName("tab-links");
        let tabContents = document.getElementsByClassName("tab-contents");
        let activeLink = document.getElementsByClassName("active-link");
        let activeTab = document.getElementsByClassName("active-tab")

        function openTab(tabName) {
            for (let tabLink of tabLinks) {
                tabLink.classList.remove("active-link");
            }
            for (let tabContent of tabContents) {
                tabContent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabName).classList.add("active-tab");
        }

        

        let sideMenuEl = document.querySelector('#sidemenu');
        let closeBtn = document.querySelector('.fa-xmark');
        let openBtn = document.querySelector('.fa-burger');

        closeBtn.addEventListener('click', closeMenu);
        openBtn.addEventListener('click', openMenu);

        function openMenu() {
            sideMenuEl.classList.remove('hidden');
            console.log('zdzd')
        }
        function closeMenu() {
            sideMenuEl.classList.add('hidden');
        }

        // let previousScroll = 0;
        // const sections = document.querySelectorAll("section");
        // let currentSection = 0;
        // let isScrolling;

        // function throttle(callback, delay) {
        //     let previousCall = new Date().getTime();
        //     return function () {
        //         const time = new Date().getTime();

        //         if (time - previousCall >= delay) {
        //             previousCall = time;
        //             callback.apply(null, arguments);
        //         }
        //     };
        // }

        // function switchSection(event) {
        //     if (isScrolling) return;
        //     isScrolling = true;

        //     // Increase current section if scrolling down and decrease if scrolling up
        //     if (event.deltaY > 0) {
        //         currentSection = (currentSection + 1) % sections.length;
        //     } else {
        //         currentSection =
        //             (currentSection - 1 + sections.length) % sections.length;
        //     }

        //     // Disable scrolling for 1 second
        //     setTimeout(function () {
        //         isScrolling = false;
        //     }, 1600);

        //     // Animate scrolling to the next section
        //     sections[currentSection].scrollIntoView({
        //         behavior: "smooth",
        //         block: "start",
        //     });
        // }

        // window.addEventListener(
        //     "wheel",
        //     throttle(switchSection, 1000)
        // );