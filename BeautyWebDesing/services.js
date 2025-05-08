function services_Item(event) {
    document.querySelectorAll('.div-close').forEach(function(item) {
        item.classList.add('item_none');
    });
    var targetText = event.currentTarget.innerText.trim();
    var targetClass = targetText.replace(/\s+/g, '_') + '_about';
    var targetElement = document.querySelector('.' + targetClass); 
    if (targetElement) {
        targetElement.classList.remove('item_none');
    } else {
        console.error('Hedef öğe bulunamadı: ' + targetClass);
    }
}
const whatsappDiv = document.createElement('div');
const whatsappText = document.createElement('div');
whatsappText.id = '#whatsapp-icon-text';
whatsappDiv.id = 'whatsapp-icon';
whatsappDiv.innerHTML = '<i class="fab fa-whatsapp"></i>';
whatsappText.innerHTML='Randevu Al';
whatsappDiv.addEventListener("click",function(){
    const phonenumber = `05419577989`;
    const WhatsappUrl = `https://wa.me/${phonenumber}?text=Merhaba%20web%20indiriminden%20yararlanabilirmiyim?`;
    window.open(WhatsappUrl,`_blank`);
})
whatsappDiv.appendChild(whatsappText);
document.body.appendChild(whatsappDiv);



