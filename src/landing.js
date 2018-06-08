landing = () => {
    let title = document.getElementById('gradIssueH1');
    let nav = document.getElementById('nav');
    let navbar = document.getElementById('navbar');
    let landingDiv = document.getElementById('landingDiv');
    let svg = document.getElementById('landingSvg');
    let timeline = document.getElementById('t2014');

    window.addEventListener('scroll', function(e) {
        let s = window.scrollY;
        console.log(s);
        // 230 start
        // 430 end
        // 9.4/1 = 9.4
        // 9.4/3.13 = 3
        // 9.4/(x) = fontSize vw
        // x = 0.01067*s - 1.453
        if (s < 10) {
            landingDiv.style.height = '100vh';
            navbar.style.height = 'auto';
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
        }
    });
};

if (window.innerWidth > 1010) {
    console.log(window);
    document.addEventListener("DOMContentLoaded", landing());
}