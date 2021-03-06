document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form')
  const deleteAll = document.querySelector('#delete-all');

  const handleFormSave = function(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const species = form.species.value;
    const continent = form.continent.value;
    const result = document.querySelector('#endangered-animals');

    const paragraph = document.createElement('p');
    paragraph.textContent = `Name: ${name}, Species: ${species}, Continent: ${continent}`
    result.appendChild(paragraph);

    form.reset()
  }

  const handleDeleteAll = function(event){
    const animals = document.querySelector('#endangered-animals');
    animals.innerHTML = ''
  }

  form.addEventListener('submit', handleFormSave);
  deleteAll.addEventListener('click',handleDeleteAll);

});
