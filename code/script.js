console.log('Script is running')

// fetch info
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {


    data.forEach(data => {
      const titleDiv = document.createElement('div');
      titleDiv.classList.add('title');
      titleDiv.textContent = data.title;

      const bodyDiv = document.createElement('div');
      bodyDiv.classList.add('description');
      bodyDiv.textContent = data.body;

      const accordion = document.getElementById('accordion');
      const sectionDiv = document.createElement('div');
      sectionDiv.classList.add('section');
      sectionDiv.appendChild(titleDiv);
      sectionDiv.appendChild(bodyDiv);
      accordion.appendChild(sectionDiv);

      const titleElements = document.querySelectorAll(".title");
      titleElements.forEach(element => {
        element.addEventListener("click", toggle);
      });
    });
  })

  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });


// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.


