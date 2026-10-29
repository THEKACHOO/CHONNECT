(function () {
    'use strict';
   const HEADER_HTML = `
        <div id="splash" class="splash">
            <img src="logochonnect1.png" alt="CHONNECT logo" class="splash-logo"
                 onerror="this.src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22%23f0f0f0%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22420%22%20font-family%3D%22Outfit%22%20font-size%3D%2270%22%20fill%3D%22%23333%22%20text-anchor%3D%22middle%22%3ECHONNECT%3C%2Ftext%3E%3C%2Fsvg%3E'">
        </div>

        <div id="imageModal" class="image-modal" onclick="closeModal()">
            <span class="modal-close" onclick="closeModal()">&times;</span>
            <img class="modal-image" id="modalImage" src="" alt="Zoomed Logo">
        </div>

        <header>
            <div class="container header-content">
                <div class="logo-container" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                    <img src="logochonnect1.png" alt="CHONNECT Logo" class="logo-img">
                </div>

                <div class="search-wrapper">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" class="search-input" id="globalSearchInput" placeholder="Cari">
                        <button class="search-clear" id="searchClearBtn"><i class="fas fa-times-circle"></i></button>
                    </div>
                </div>

                <button class="menu-toggle-btn" id="mobileMenuBtn" aria-label="Menu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </header>

        <!-- DESKTOP MENU OVERLAY -->
        <div class="desktop-menu-overlay" id="desktopMenuOverlay"></div>

        <!-- DESKTOP MENU -->
        <div class="desktop-menu" id="desktopMenu">
            <ul class="desktop-menu-list">
                <li class="desktop-menu-item">
                    <a href="About.html" class="desktop-menu-link">About Chonnect</a>
                </li>
                <li class="desktop-menu-item">
                    <a href="https://thekachoo.github.io/Office/About.html" class="desktop-menu-link" target="_blank" rel="noopener">About Kachoo</a>
                </li>
                <li class="desktop-menu-item">
                    <a href="DaftarChonnect.html" class="desktop-menu-link">Registration</a>
                </li>
            </ul>
        </div>

        <!-- MOBILE MENU -->
        <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
        <div class="mobile-menu" id="mobileMenu">
            <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close">
                <i class="fas fa-times"></i>
            </button>
            <ul class="mobile-menu-list">
                <li class="mobile-menu-item">
                    <a href="About.html" class="mobile-menu-link">About Chonnect</a>
                </li>
                <li class="mobile-menu-item">
                    <a href="https://thekachoo.github.io/Office/About.html" class="mobile-menu-link" target="_blank" rel="noopener">About Kachoo</a>
                </li>
                <li class="mobile-menu-item">
                    <a href="DaftarChonnect.html" class="mobile-menu-link">Registration</a>
                </li>
            </ul>
        </div>
    `;

    const FOOTER_HTML = `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>CHONNECT</h3>
                        <p style="color: rgba(255,255,255,0.7); margin-top: 16px; max-width: 300px;">
                            A space dedicated to connecting base of roleplayers. This website and all its contents are created for fictional purposes. KACHOO does not receive any financial compensation from this project.
                        </p>
                        <div class="social-links">
                            <a href="mailto:ohkachoo@gmail.com" class="social-link"><i class="fas fa-envelope"></i></a>
                            <a href="https://twitter.com/thekachoo" target="_blank" class="social-link"><span class="x-logo">𝕏</span></a>
                        </div>
                    </div>

                    <div class="featured-support">
                        <h4>Support By</h4>
                        <div class="support-links">
                            <a href="https://x.com/txtdrreizei" target="_blank" class="support-link-item"><i class="fa-brands fa-x-twitter"></i>Shout Out Confess</a>
                            <a href="https://x.com/Outer_Cosmo" target="_blank" class="support-link-item"><i class="fa-brands fa-x-twitter"></i>Outer Cosmo</a>
                            <a href="https://x.com/Indecentpals" target="_blank" class="support-link-item"><i class="fa-brands fa-x-twitter"></i>Indecent Pals</a>
                            <a href="https://x.com/PromptIdeas" target="_blank" class="support-link-item"><i class="fa-brands fa-x-twitter"></i>Prompt Ideas</a>
                            <a href="https://x.com/AuRoleplayID" target="_blank" class="support-link-item"><i class="fa-brands fa-x-twitter"></i>AU Roleplay ID</a>
                        </div>
                    </div>

                    <div class="footer-section">
                        <h3>Contact</h3>
                        <ul class="footer-links">
                            <li>
                                <span class="x-logo" style="color: #000000; background: white; border-radius: 3px; padding: 2px 4px; font-size: 14px; margin-right: 8px;">𝕏</span>
                                <a href="https://twitter.com/TheKachoo" target="_blank">@TheKachoo (Official)</a>
                            </li>
                            <li>
                                <span class="x-logo" style="color: #000000; background: white; border-radius: 3px; padding: 2px 4px; font-size: 14px; margin-right: 8px;">𝕏</span>
                                <a href="https://twitter.com/HaiKachoo" target="_blank">@HaiKachoo (Contact Person)</a>
                            </li>
                            <li>
                                <i class="fas fa-envelope" style="color: rgba(255,255,255,0.7);"></i>
                                <a href="mailto:ohkachoo@gmail.com">ohkachoo@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Address</h3>
                        <ul class="footer-links">
                            <li style="color: rgba(255,255,255,0.7); margin-bottom: 20px;">
                                <i class="fas fa-map-marker-alt" style="margin-right: 10px;"></i>
                                Jenderal Sudirman Avenue,<br>
                                Lots 61–62,<br>
                                South Jakarta 12930,<br>
                                Indonesia
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="copyright">
                    &copy; 2026 CHONNECT by KACHOO. All rights reserved. For Roleplay Purpose Only.
                </div>
            </div>
        </footer>
    `;

    function injectHeaderFooter() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');

        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = HEADER_HTML;
        }
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = FOOTER_HTML;
        }
    }

    window.openModal = function (imgSrc) {
        const modal = document.getElementById('imageModal');
        document.getElementById('modalImage').src = imgSrc;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function () {
        document.getElementById('imageModal').style.display = 'none';
        document.body.style.overflow = '';
    };

    function initSplashAndModal() {
        const splash = document.getElementById('splash');
        if (splash) {
            function hideSplash() {
                splash.classList.add('fade-out');
                splash.addEventListener('transitionend', () => splash.style.display = 'none', { once: true });
            }
            window.addEventListener('load', () => setTimeout(hideSplash, 1500));
        }

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') window.closeModal();
        });
    }

    function initMenus() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const desktopMenu = document.getElementById('desktopMenu');
        const desktopMenuOverlay = document.getElementById('desktopMenuOverlay');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        const mobileMenuClose = document.getElementById('mobileMenuClose');

        if (!menuBtn) return;

        let desktopMenuOpen = false;
        let mobileMenuOpen = false;

        function isMobile() {
            return window.innerWidth <= 768;
        }

        function openDesktopMenu() {
            desktopMenu.classList.add('active');
            desktopMenuOverlay.classList.add('active');
            desktopMenuOpen = true;
        }

        function closeDesktopMenu() {
            desktopMenu.classList.remove('active');
            desktopMenuOverlay.classList.remove('active');
            desktopMenuOpen = false;
        }

        function toggleDesktopMenu() {
            if (desktopMenuOpen) closeDesktopMenu();
            else openDesktopMenu();
        }

        function openMobileMenu() {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            mobileMenuOpen = true;
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            mobileMenuOpen = false;
            document.body.style.overflow = '';
        }

        function toggleMobileMenu() {
            if (mobileMenuOpen) closeMobileMenu();
            else openMobileMenu();
        }

        menuBtn.addEventListener('click', () => {
            if (isMobile()) toggleMobileMenu();
            else toggleDesktopMenu();
        });

        if (desktopMenuOverlay) {
            desktopMenuOverlay.addEventListener('click', closeDesktopMenu);
        }

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMobileMenu);
        }
        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        }

        document.addEventListener('click', (e) => {
            if (desktopMenuOpen && desktopMenu && !desktopMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                closeDesktopMenu();
            }
        });

        window.addEventListener('resize', () => {
            if (isMobile() && desktopMenuOpen) closeDesktopMenu();
            if (!isMobile() && mobileMenuOpen) closeMobileMenu();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (desktopMenuOpen) closeDesktopMenu();
                if (mobileMenuOpen) closeMobileMenu();
            }
        });
    }

   function initHeaderScroll() {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (!header) return;
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.08)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }


    function init() {
        injectHeaderFooter();
        initSplashAndModal();
        initMenus();
        initHeaderScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
