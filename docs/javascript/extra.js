const links = document.querySelectorAll('a');
const previousLabels = ['Previous', '« Previous'];
const nextLabels = ['Next', 'Next »'];

links.forEach(link => {
    var linkContent = link.textContent.trim()
    if (previousLabels.includes(linkContent)) {
        link.innerHTML = '<span class="icon icon-circle-arrow-left"></span> Anterior';
    }
    if (nextLabels.includes(linkContent)) {
        link.innerHTML = 'Próximo <span class="icon icon-circle-arrow-right"></span>';
    }
});

const footer = document.querySelector('footer');
footer.innerHTML = footer.innerHTML + "<br><br>Desenvolvido por Alex Rocha."