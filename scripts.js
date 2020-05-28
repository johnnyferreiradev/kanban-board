const cards =  document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

// Card functions
function dragstart() {
    dropzones.forEach((dropzone) => dropzone.classList.add('highlight'));
    this.classList.add('is-dragging');
}

function drag() {
    // code...
}

function dragend () {
    dropzones.forEach((dropzone) => dropzone.classList.remove('highlight'));
    this.classList.remove('is-dragging');
}

// Dropzone functions
function dragenter() {
    // code...
}

function dragover() {
    this.classList.add('over');

    const cradBeingDragged = document.querySelector('.is-dragging');

    this.appendChild(cradBeingDragged);
}

function dragleave() {
    this.classList.remove('over');
}

function drop() {
    this.classList.remove('over');
}

cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});
