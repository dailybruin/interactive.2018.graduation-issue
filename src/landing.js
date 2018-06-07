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
        if (s > 10 && s < 330) {
            let v = -0.2813*s + 102.8;
            landingDiv.style.height = v + 'vh';
            // 100 --> 10vh
            timeline.style.marginTop = v + 'vh';

            let w = -0.3226*s + 6.452;
            svg.style.transform = 'translateY(' + w + '%)';
            // 0 --> -100%

            let x = -0.0200*s + 9.600;
            title.style.fontSize = x + 'vw';
            // 9.4 --> 3vw

            let y = 0.1906*s - 2.906;
            title.style.marginRight = y + '%';
            // -1 --> 60%

            let z = 0.001563*s - 0.01563;
            title.style.marginTop = z + 'em';
            // 0 --> 0.5em
        } else if (s >= 330) {
            navbar.style.height = '10vh';
            navbar.style.position = 'fixed';
            title.style.fontSize = '3vw';
            title.style.marginRight = '60%';
            title.style.marginTop = '0.5em';
            nav.style.paddingTop = '0.3em';
            timeline.style.marginTop = landingDiv.getBoundingClientRect().bottom + 'px';
        }
    });
};

document.addEventListener("DOMContentLoaded", landing());