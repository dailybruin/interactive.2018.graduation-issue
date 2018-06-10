popup = () => {
    let popupDOM = document.getElementById('recapPop');
    let nav = document.getElementById('navbar').getBoundingClientRect();
    const paddingAmount = 0;
    
    let doPop = true;

    function addPopIn() {
        return new Promise(resolve => {
            popupDOM.classList.add('pop-in');
            setTimeout(() => {
                console.log('pop in resolving');
                resolve();
            }, 4000)
        });
    }

    function addFadeOut() {
        return new Promise(resolve => {
            popupDOM.animate([
                { opacity: 0.5},
                { opacity: 0}], 1000);
            setTimeout(() => {
                popupDOM.style.opacity = 0;
                popupDOM.style.display = 'none';
                console.log('fade out resolving');
            }, 1000)
        });
    }

    window.addEventListener('scroll', function(e) {
        let s = window.scrollY;
        popupDOM.style.top = s + nav.bottom + paddingAmount + 'px';
        if (s > 840 && s < 910) {
            navHeight = document.getElementById('navbar').offsetHeight;
            if (doPop) {
                doPop = false;
                popupDOM.style.opacity = 1;
                popupDOM.style.display = 'flex';
                addPopIn().then(() => addFadeOut());
            }
        }
    });

}

if (window.innerWidth > 1010) {
    document.addEventListener("DOMContentLoaded", popup());
}