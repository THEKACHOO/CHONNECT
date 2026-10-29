const HEADER_HTML = `
    <header>
        <div class="container header-content">
            <div class="logo-container" onclick="window.scrollTo({top:0,behavior:'smooth'})">
                <img src="logochonnect1.png" alt="CHONNECT" class="logo-img">
            </div>
        </div>
    </header>
`;

const FOOTER_HTML = `
    <footer>
        <div class="container">
            <div class="footer-content">

                <!-- Kolom 1: CHONNECT -->
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

                <!-- Kolom 2: Support By -->
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

                <!-- Kolom 3: Contact -->
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

                <!-- Kolom 4: Address -->
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

document.addEventListener('DOMContentLoaded', function () {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = HEADER_HTML;
    }
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = FOOTER_HTML;
    }
});
