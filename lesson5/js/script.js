const btnSubmit = document.querySelector('button[type="submit"]');
const inptFavChapter = document.querySelector('#favchap');
const ulList = document.querySelector('ul[class="list"]');

const addChapter = () => {
    let newChapter = document.createElement('li');
    let deleteChapter = document.createElement('button');

    newChapter.innerHTML = inptFavChapter.value;
    deleteChapter.innerHTML = '❌';
    deleteChapter.ariaLabel = `Remove ${inptFavChapter.value}`;
    deleteChapter.addEventListener('click', () => {
        ulList.removeChild(newChapter);
    });

    newChapter.appendChild(deleteChapter);
    ulList.appendChild(newChapter);

    cleanForm();
}

const cleanForm = () => {
    inptFavChapter.value = '';
    inptFavChapter.focus();
}

btnSubmit.addEventListener('submit', addChapter);
btnSubmit.addEventListener('click', addChapter);