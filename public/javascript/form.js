const bottomInlet = document.querySelector('#bottomInlet');
const backInlet = document.querySelector('#backInlet');
const inletHieight = document.querySelector('#inletHeight');
const inletOffset = document.querySelector('#inletOffset');

bottomInlet.addEventListener('click', function () {
    this.checked = true;
    backInlet.checked = false;
    inletHieight.disabled = true;
    inletOffset.disabled = true;
});

backInlet.addEventListener('click', () => {
    this.checked = true;
    bottomInlet.checked = false;
    inletHieight.disabled = false;
    inletOffset.disabled = false;
});
