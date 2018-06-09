landing = () => {
    let title = document.getElementById('gradIssueH1');
    let nav = document.getElementById('nav');
    let navbar = document.getElementById('navbar');
    let landingDiv = document.getElementById('landingDiv');
    let svg = document.getElementById('landingSvg');
    let timeline = document.getElementById('t2014');

    window.addEventListener('scroll', function(e) {
        let s = window.scrollY;
        // 230 start
        // 430 end
        // 9.4/1 = 9.4
        // 9.4/3.13 = 3
        // 9.4/(x) = fontSize vw
        // x = 0.01067*s - 1.453
        if (s < 10) {
            landingDiv.style.height = '100vh';
            navbar.style.height = 'auto';
            landingDiv.classList.remove('landingDivPost');
        }
        else if (s > 10 && s < 330) {
            let v = -0.2813*s + 102.8;
            landingDiv.style.height = v + 'vh';
            navbar.style.height = v + 'vh';
            // 100 --> 10vh
            let f = -0.0625*s + 100.6;
            timeline.style.marginTop = f + 'vh';

            let w = -0.3226*s + 6.452;
            svg.style.transform = 'translateY(' + w + '%)';
            if (w < -72) {
                svg.style.display = 'none';
            } else {
                svg.style.display = 'block';
            }
            // 0 --> -100%

            let x = -0.0200*s + 9.600;
            title.style.fontSize = x + 'vw';
            // 9.4 --> 3vw

            let y = 0.1906*s - 2.906;
            title.style.marginRight = y + '%';
            // -1 --> 60%

            let z =  0.0009375*s - 0.009375;
            title.style.marginTop = z + 'em';
            // 0 --> 0.3em

            landingDiv.style.justifyContent = 'center';
        } else if (s >= 330) {
            // navbar.style.height = '10vh';
            svg.style.display = 'none';
            landingDiv.style.height = '15vh';
            landingDiv.style.zIndex = '2';
            landingDiv.style.justifyContent = 'flex-start';
            // landingDiv.style.background = 'inherit';
            title.style.fontSize = '3vw';
            title.style.marginRight = '60%';
            title.style.marginTop = '0.3em';
            nav.style.paddingTop = '0.3em';
            timeline.style.marginTop = '80vh';
            landingDiv.classList.add('landingDivPost');
        }
    });
};

landingMobile = () => {
    let navbar = document.getElementById('navbar');
    let nav = document.getElementById('nav');
    let landingDiv = document.getElementById('landingDiv');
    
    window.addEventListener('scroll', function(e) {
        let s = window.scrollY;
        if (s > 570) {
            nav.style.display = 'none';
            landingDiv.style.justifyContent = 'flex-start';
            navbar.style.width = '100%';
            navbar.style.textAlign = 'center';
            navbar.style.padding = '0.5em 0';
            navbar.style.zIndex = '3';
            navbar.style.backgroundImage = 'inherit';
            navbar.style.position = 'fixed';
        } else {
            nav.style.display = 'flex';
            landingDiv.style.justifyContent = 'center';
            navbar.style.backgroundImage = 'initial';
            navbar.style.position = 'static';
            navbar.style.width = '90%';
            navbar.style.textAlign = 'right';
        }
    });

};

if (window.innerWidth > 1010) {
    document.addEventListener("DOMContentLoaded", landing());
} else {
    document.addEventListener("DOMContentLoaded", landingMobile());
}