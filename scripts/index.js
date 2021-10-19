const containerCompositionImg = document.querySelector('.composition');
const containerAlbum = document.querySelector('.albums');


containerAlbum.addEventListener('click', function(e) {
    const link = e.target.closest('.album').dataset.link;
    // location.href = link;
    window.open(link, '_blank').focus();
});


function handleCompositionShrink(e) {
    [...e.target.parentElement.children].forEach(img => {
        if (!(e.target === img)) {
            (e.type === 'mouseover') ? img.classList.add('composition__img--shrink') : 
                img.classList.remove('composition__img--shrink');
        }
    });
}

containerCompositionImg.addEventListener('mouseover', handleCompositionShrink);
containerCompositionImg.addEventListener('mouseout', handleCompositionShrink);
