//for the hover effect***********************************************************
let icons = document.querySelectorAll(".ico");
let length = icons.length;

icons.forEach((item, index) => {
  item.addEventListener("mouseover", (e) => {
    focus(e.target, index);
  });
  item.addEventListener("mouseleave", (e) => {
    icons.forEach((item) => {
      item.style.transform = "scale(1)  translateY(0px)";
    });
  });
});

const focus = (elem, index) => {
  let previous = index - 1;
  let previous1 = index - 2;
  let next = index + 1;
  let next2 = index + 2;

  if (previous == -1) {
    console.log("first element");
    elem.style.transform = "scale(1.5)  translateY(-10px)";
  } else if (next == icons.length) {
    elem.style.transform = "scale(1.5)  translateY(-10px)";
    console.log("last element");
  } else {
    elem.style.transform = "scale(1.5)  translateY(-10px)";
    icons[previous].style.transform = "scale(1.2) translateY(-6px)";
    icons[previous1].style.transform = "scale(1.1)";
    icons[next].style.transform = "scale(1.2) translateY(-6px)";
    icons[next2].style.transform = "scale(1.1)";
  }
};
//for the hover effect****************************************************************







//for the context menu**************************************************************
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  
  var customMenu = document.getElementById("custom-menu");
  customMenu.style.display = "block";
  
  var x = e.clientX;
  var y = e.clientY;
  var boxWidth = customMenu.offsetWidth;
  var boxHeight = customMenu.offsetHeight;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  
  if (x + boxWidth > windowWidth) {
    x -= boxWidth;
  }
  
  if (y + boxHeight > windowHeight) {
    y -= boxHeight;
  }
  
  customMenu.style.left = x + "px";
  customMenu.style.top = y + "px";
});

document.addEventListener("click", function(e) {
  var customMenu = document.getElementById("custom-menu");
  if (e.target !== customMenu && !customMenu.contains(e.target)) {
    customMenu.style.display = "none";
  }
});

document.addEventListener("blur", function(e) {
  var customMenu = document.getElementById("custom-menu");
  customMenu.style.display = "none";
});
//for the context menu*****************************************************************






// First JavaScript code
function initializeFirstCode() {

    const myButton = document.getElementById('myButton');
    const myDiv = document.getElementById('myDiv');
    let isDivVisible = false;
    myButton.classList.add('button-style');
    myButton.addEventListener('click', () => {
      if (isDivVisible) {
        myDiv.style.display = 'none';
        isDivVisible = false;
      } else {
        const buttonRect = myButton.getBoundingClientRect();
        const divTop = buttonRect.top - 600;
        const divLeft = buttonRect.left - 250;
        myDiv.style.top = `${divTop}px`;
        myDiv.style.left = `${divLeft}px`;
        myDiv.style.display = 'block';
        isDivVisible = true;
      }
    });

    
const myButton1 = document.getElementById('myButton1');
const myDiv1 = document.getElementById('myDiv1');
let isDiv1Visible = false;

myButton1.addEventListener('click', () => {
  if (isDiv1Visible) {
    myDiv1.style.display = 'none';
    isDiv1Visible = false;
  } else {
    const button1Rect = myButton1.getBoundingClientRect();
    const div1Top = button1Rect.top - 600;
    const div1Left = button1Rect.left - 250;
    myDiv1.style.top = `${div1Top}px`;
    myDiv1.style.left = `${div1Left}px`;
    myDiv1.style.display = 'block';
    isDiv1Visible = true;
  }
});

const myButton2 = document.getElementById('myButton2');
const myDiv2 = document.getElementById('myDiv2');
let isDiv2Visible = false;
myButton2.addEventListener('click', () => {
  if (isDiv2Visible) {
    myDiv2.style.display = 'none';
    isDiv2Visible = false;
  } else {
    const button2Rect = myButton2.getBoundingClientRect();
    const div2Top = button2Rect.top - 600;
    const div2Left = button2Rect.left - 250;
    myDiv2.style.top = `${div2Top}px`;
    myDiv2.style.left = `${div2Left}px`;
    myDiv2.style.display = 'block';
    isDiv2Visible = true;
  }
});

const myButton3 = document.getElementById('myButton3');
const myDiv3 = document.getElementById('myDiv3');
let isDiv3Visible = false;
myButton3.addEventListener('click', () => {
  if (isDiv3Visible) {
    myDiv3.style.display = 'none';
    isDiv3Visible = false;
  } else {
    const button3Rect = myButton3.getBoundingClientRect();
    const div3Top = button3Rect.top - 600;
    const div3Left = button3Rect.left - 250;
    myDiv3.style.top = `${div3Top}px`;
    myDiv3.style.left = `${div3Left}px`;
    myDiv3.style.display = 'block';
    isDiv3Visible = true;
  }
});


const myButton4 = document.getElementById('myButton4');
const myDiv4 = document.getElementById('myDiv4');
let isDiv4Visible = false;
myButton4.addEventListener('click', () => {
  if (isDiv4Visible) {
    myDiv4.style.display = 'none';
    isDiv4Visible = false;
  } else {
    const button4Rect = myButton4.getBoundingClientRect();
    const div4Top = button4Rect.top - 600;
    const div4Left = button4Rect.left - 250;
    myDiv4.style.top = `${div4Top}px`;
    myDiv4.style.left = `${div4Left}px`;
    myDiv4.style.display = 'block';
    isDiv4Visible = true;
  }
});

const myButton5 = document.getElementById('myButton5');
const myDiv5 = document.getElementById('myDiv5');
let isDiv5Visible = false;
myButton5.addEventListener('click', () => {
  if (isDiv5Visible) {
    myDiv5.style.display = 'none';
    isDiv5Visible = false;
  } else {
    const button5Rect = myButton5.getBoundingClientRect();
    const div5Top = button5Rect.top - 600;
    const div5Left = button5Rect.left - 250;
    myDiv5.style.top = `${div5Top}px`;
    myDiv5.style.left = `${div5Left}px`;
    myDiv5.style.display = 'block';
    isDiv5Visible = true;
  }
});


const myButton6 = document.getElementById('myButton6');
const myDiv6 = document.getElementById('myDiv6');
let isDiv6Visible = false;
myButton6.addEventListener('click', () => {
  if (isDiv6Visible) {
    myDiv6.style.display = 'none';
    isDiv6Visible = false;
  } else {
    const button6Rect = myButton6.getBoundingClientRect();
    const div6Top = button6Rect.top - 600;
    const div6Left = button6Rect.left - 250;
    myDiv6.style.top = `${div6Top}px`;
    myDiv6.style.left = `${div6Left}px`;
    myDiv6.style.display = 'block';
    isDiv6Visible = true;
  }
});


const myButton7 = document.getElementById('myButton7');
const myDiv7 = document.getElementById('myDiv7');
let isDiv7Visible = false;
myButton7.addEventListener('click', () => {
  if (isDiv7Visible) {
    myDiv7.style.display = 'none';
    isDiv7Visible = false;
  } else {
    const button7Rect = myButton7.getBoundingClientRect();
    const div7Top = button7Rect.top - 600;
    const div7Left = button7Rect.left - 250;
    myDiv7.style.top = `${div7Top}px`;
    myDiv7.style.left = `${div7Left}px`;
    myDiv7.style.display = 'block';
    isDiv7Visible = true;
  }
});


const myButton8 = document.getElementById('myButton8');
const myDiv8 = document.getElementById('myDiv8');
let isDiv8Visible = false;
myButton8.addEventListener('click', () => {
  if (isDiv8Visible) {
    myDiv8.style.display = 'none';
    isDiv8Visible = false;
  } else {
    const button8Rect = myButton8.getBoundingClientRect();
    const div8Top = button8Rect.top - 600;
    const div8Left = button8Rect.left - 250;
    myDiv8.style.top = `${div8Top}px`;
    myDiv8.style.left = `${div8Left}px`;
    myDiv8.style.display = 'block';
    isDiv8Visible = true;
  }
});



const myButton9 = document.getElementById('myButton9');
const myDiv9 = document.getElementById('myDiv9');
let isDiv9Visible = false;

myButton9.addEventListener('click', () => {
  if (isDiv9Visible) {
    myDiv9.style.display = 'none';
    isDiv9Visible = false;
  } else {
    const button9Rect = myButton9.getBoundingClientRect();
    const div9Top = button9Rect.top - 600;
    const div9Left = button9Rect.left - 250;
    myDiv9.style.top = `${div9Top}px`;
    myDiv9.style.left = `${div9Left}px`;
    myDiv9.style.display = 'block';
    isDiv9Visible = true;
  }
});
}

// Second JavaScript code
function initializeSecondCode() {
  const menuItems = document.querySelectorAll(".menu-item");
  const menuItemsRight = document.querySelectorAll(".menu-item-right");
  const searchBtn = document.querySelector(".fa-search");
  const searchMenu = document.querySelector(".search-menu");
  const notification = document.querySelector(".notification");
  const todayBtn = document.querySelector(".today-btn");
  const notificationsBtn = document.querySelector(".notifications-btn");
  const modalBody = document.querySelector(".modal-body");
  const modalBodyNotifications = document.querySelector(".text");
  const modalHeader = document.querySelector(".modal-header");

  let isClicked = false;

  menuItems.forEach((menu) => {
    menu.addEventListener("click", () => {
      isClicked = !isClicked;
      menu.classList.toggle("active");
    });
    menu.addEventListener("mouseover", (e) => {
      if (isClicked) {
        menuItems.forEach((menuItem) => {
          menuItem.classList.remove("active");
        });
        menu.classList.add("active");
      }
    });
  });

  menuItemsRight.forEach((menu) => {
    let previousTarget = null;
    menu.addEventListener("click", function () {
      menuItemsRight.forEach((menuItem) => {
        menuItem.classList.remove("active");
      });
      menu.classList.add("active");

      if (this === previousTarget) {
        menu.classList.toggle("active");
        previousTarget = null;
        return false;
      }
      previousTarget = this;
    });
  });

  searchBtn.addEventListener("click", () => {
    searchMenu.classList.toggle("show");
  });

  notificationsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    todayBtn.classList.remove("active");
    modalBody.classList.remove("active-tab");
    notificationsBtn.classList.add("active");
    modalBodyNotifications.classList.add("active-tab");
  });

  todayBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    notificationsBtn.classList.remove("active");
    modalBodyNotifications.classList.remove("active-tab");
    todayBtn.classList.add("active");
    modalBody.classList.add("active-tab");
  });

  // Rest of the second code...

  // Add event listeners for other buttons and divs
}

// Call the functions to initialize the code
initializeFirstCode();
initializeSecondCode();









// Select all elements with class 'window'
const windows = document.querySelectorAll('.window');

// Loop through each window element
windows.forEach((window, index) => {
  const dragHandle = window.querySelector('.drag-handle');
  const minimizeButton = window.querySelector('.minimize');
  const closeButton = window.querySelector('.close');
  const resizableWindow = window.querySelector('.resizable');

  let isDragging = false;
  let mouseOffset = { x: 0, y: 0 };

  // Add event listener for drag handle
  dragHandle.addEventListener('mousedown', e => {
    isDragging = true;
    mouseOffset = { x: e.offsetX, y: e.offsetY };
  });

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      const newX = e.clientX - mouseOffset.x;
      const newY = e.clientY - mouseOffset.y;
      window.style.top = newY + 'px';
      window.style.left = newX + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  let isResizing = false;
  let lastDownX = 0;
  let lastDownY = 0;

  // Add event listener for resizable window
  resizableWindow.addEventListener('mousedown', (e) => {
    isResizing = true;
    lastDownX = e.clientX;
    lastDownY = e.clientY;
    resizableWindow.style.userSelect = 'none';
    resizableWindow.classList.add('resizing');
  });

  document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;

    const width = resizableWindow.offsetWidth;
    const height = resizableWindow.offsetHeight;
    const newWidth = width + (e.clientX - lastDownX);
    const newHeight = height + (e.clientY - lastDownY);

    resizableWindow.style.width = newWidth + 'px';
    resizableWindow.style.height = newHeight + 'px';

    lastDownX = e.clientX;
    lastDownY = e.clientY;
  });

  document.addEventListener('mouseup', () => {
    isResizing = false;
    resizableWindow.style.userSelect = 'auto';
    resizableWindow.classList.remove('resizing');
  });

  // Add event listener for minimize button
  minimizeButton.addEventListener('click', () => {
    window.classList.toggle('minimized');
  });

  // Add event listener for close button
  closeButton.addEventListener('click', () => {
    windows[index].style.display = 'none';
  });
});













  //change wallpaper*****************************************************
  // An array of background images
var images = [
  "download (6).jpg",
  "Night.jpg",
  ""
];

// Get the button element
var changeBtn = document.getElementById("changeBtn");

// Add click event listener to the button
changeBtn.addEventListener("click", changeBackgroundImage);

// Function to change the background image
function changeBackgroundImage() {
  // Get a random image from the array
  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];

  // Set the new background image
  document.body.style.backgroundImage = "url('" + randomImage + "')";
}





//search bar*********************************************************
function handleInput(event) {
  const searchInput = event.target;
  const autocompleteResults = document.getElementById('autocomplete-results');

  // Clear previous results
  autocompleteResults.innerHTML = '';

  const searchTerm = searchInput.value;
  if (searchTerm.length > 0) {
    fetchAutocompleteResults(searchTerm)
      .then(results => {
        if (results && results.length > 0) {
          results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            li.addEventListener('click', () => {
              searchInput.value = result;
              autocompleteResults.style.display = 'none';
            });
            autocompleteResults.appendChild(li);
          });

          autocompleteResults.style.display = 'block';
        } else {
          autocompleteResults.style.display = 'none';
        }
      })
      .catch(error => {
        console.error('Error fetching autocomplete results:', error);
      });
  } else {
    autocompleteResults.style.display = 'none';
  }
}

function fetchAutocompleteResults(searchTerm) {
  return new Promise((resolve, reject) => {
    const callbackName = 'autocompleteCallback';
    const script = document.createElement('script');
    const apiUrl = `https://suggestqueries.google.com/complete/search?client=firefox&q=${searchTerm}&jsonp=${callbackName}`;

    window[callbackName] = response => {
      resolve(response[1]);
      document.body.removeChild(script);
      delete window[callbackName];
    };

    script.src = apiUrl;
    document.body.appendChild(script);
  });
}

//search bar*********************************************************










//autocomplete**************************************
function handleKeyUp(event) {
  if (event.key === 'Enter') {
    searchGoogle();
  } else {
    handleInput(event);
  }
}

function searchGoogle() {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.trim();

  if (searchTerm !== '') {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.location.href = googleSearchUrl;
  }
}

function handleInput(event) {
  const searchInput = event.target;
  const autocompleteResults = document.getElementById('autocomplete-results');

  // Clear previous results
  autocompleteResults.innerHTML = '';

  const searchTerm = searchInput.value;
  if (searchTerm.length > 0) {
    fetchAutocompleteResults(searchTerm)
      .then(results => {
        if (results && results.length > 0) {
          results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            li.addEventListener('click', () => {
              searchInput.value = result;
              autocompleteResults.style.display = 'none';
            });
            autocompleteResults.appendChild(li);
          });

          autocompleteResults.style.display = 'block';
        } else {
          autocompleteResults.style.display = 'none';
        }
      })
      .catch(error => {
        console.error('Error fetching autocomplete results:', error);
      });
  } else {
    autocompleteResults.style.display = 'none';
  }
}

function fetchAutocompleteResults(searchTerm) {
  return new Promise((resolve, reject) => {
    const callbackName = 'autocompleteCallback';
    const script = document.createElement('script');
    const apiUrl = `https://suggestqueries.google.com/complete/search?client=firefox&q=${searchTerm}&jsonp=${callbackName}`;

    window[callbackName] = response => {
      resolve(response[1]);
      document.body.removeChild(script);
      delete window[callbackName];
    };

    script.src = apiUrl;
    document.body.appendChild(script);
  });
}
//autocomplete**************************************




//time***************************************************
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  var meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var dayOfWeek = daysOfWeek[now.getDay()];
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var monthName = monthNames[month - 1];
  document.getElementById('clock').textContent = dayOfWeek + ' ' + day + ' ' + monthName + ' ' + hours + ':' + minutes + ' ' + meridiem;
}

updateClock();
setInterval(updateClock, 1000);
//time***************************************************

//button style


//button style




