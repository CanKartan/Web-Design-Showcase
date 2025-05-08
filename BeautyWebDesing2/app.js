
    document.addEventListener('DOMContentLoaded', function() {
        var myOffcanvas = document.getElementById('offcanvasExample');
        myOffcanvas.addEventListener('hidden.bs.offcanvas', function (event) {
            var target = event.relatedTarget;
            if (target && target.tagName === 'A') {
                var href = target.getAttribute('href');
                var targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
        var navLinks = document.querySelectorAll('#OffCanvas .nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                var href = link.getAttribute('href');
                var targetElement = document.querySelector(href);
                if (targetElement) {
                    myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }, { once: true });
                }
            });
        });
    });

    const whatsappDiv = document.createElement('div');
    const whatsappText = document.createElement('div');
    whatsappText.id = '#whatsapp-icon-text';
    whatsappDiv.id = 'whatsapp-icon';
    whatsappDiv.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappText.innerHTML='Randevu Al';
    whatsappDiv.addEventListener("click",function(){
        const phonenumber = `905010982326`;
        const WhatsappUrl = `https://wa.me/${phonenumber}?text=Merhaba%20web%20indiriminden%20yararlanabilirmiyim?`;
        window.open(WhatsappUrl,`_blank`);
    })
    whatsappDiv.appendChild(whatsappText);
    document.body.appendChild(whatsappDiv);