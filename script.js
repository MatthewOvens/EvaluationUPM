// Get all the box elements
const boxes = document.querySelectorAll('.box');

// Get the dialog element and its children
const dialog = document.getElementById('dialog');
const dialogTitle = document.getElementById('dialog-title');
const dialogDescription = document.getElementById('dialog-description');
const closeButton = document.getElementById('close-button');

// Add a click event listener to each box
boxes.forEach(box => {
  box.addEventListener('click', () => {
    // Get the title and description of the box that was clicked
    const title = box.querySelector('h2').textContent;
    const description = box.querySelector('.article').textContent;

    // Set the title and description in the dialog
    dialogTitle.textContent = title;
    dialogDescription.textContent = description;

    // Show the dialog
    dialog.style.display = 'flex';
  });
});

// Add a click event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the dialog
  dialog.style.display = 'none';
});
