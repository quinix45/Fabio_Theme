// zoom animation without menu

document.addEventListener('DOMContentLoaded', function () {
  const zoomClasses = ['zoom1xJS',
    'zoom1_25xJS',
    'zoom1_5xJS',
    'zoom1_75xJS',
    'zoom2xJS',
    'zoom2_5xJS',
    'zoom3xJS',
    'zoom4xJS'];



  const activeClasses = ['zoom1xJS-active',
    'zoom1_25xJS-active',
    'zoom1_5xJS-active',
    'zoom1_75xJS-active',
    'zoom2xJS-active',
    'zoom2_5xJS-active',
    'zoom3xJS-active',
    'zoom4xJS-active'];


  zoomClasses.forEach((zoomClass, index) => {
    document.querySelectorAll(`.${zoomClass}`).forEach(function (element) {
      element.addEventListener('click', function () {
        this.classList.toggle(activeClasses[index])

      });
    });
  });
});


function onClassChange(element, callback) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'class'
      ) {
        callback(mutation.target);
      }
    });
  });
  observer.observe(element, { attributes: true });
  return observer.disconnect;
}

const decorationMarkup = `<svg id="mySVG" height="100vh" width="100vw">
<polygon points="129.9038105676658,74.99999999999999 9.184850993605149e-15,150 -129.90381056766577,75.00000000000006 -129.90381056766583,-74.99999999999996 -2.7554552980815446e-14,-150 129.90381056766583,-74.99999999999994"  class="decoration" style="stroke-width:3;"/>
<polygon points="129.9038105676658,74.99999999999999 9.184850993605149e-15,150 -129.90381056766577,75.00000000000006 -129.90381056766583,-74.99999999999996 -2.7554552980815446e-14,-150 129.90381056766583,-74.99999999999994"  class="decoration" style="stroke-width:3;" />
</svg>`

document.addEventListener('DOMContentLoaded', function() {
  appendSVGToTitleElements();
  function appendSVGToTitleElements() {
    // Select all elements with the class "title"
    const titleElements = document.querySelectorAll('.title');
  
    // SVG content as a string
    const svgContent = `<svg class="title-separator" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  height="41px" viewBox="-0.5 -0.5 923 41" content="&lt;mxfile&gt;&lt;diagram id=&quot;2TYFnY0_VJDJ40RJej4Q&quot; name=&quot;Page-1&quot;&gt;zZXfb5swEMf/Gl4rfgSiPbZZuj1sUqVM2rODr2DVcMhcCNlfv3NsIIR03SpN6hP2h7uz73t3ECSbqv9iRFN+Rwk6iEPZB8nnII7jMM74YcnJkXWWOlAYJR2KJrBTv8DD0NODktDODAlRk2rmMMe6hpxmTBiDx7nZM+r5qY0oYAF2udBL+lNJKh1dheHEv4IqSn/y2vNKDKYetKWQeLxAyTZINgaR3KrqN6CtdIMqzu/xlbfjtQzU9DcOiXPohD74zPy96DSkCrW8t4rxrsaa4UNJleZdxMuWDL6MEiSWlKKxnlrVL27rEgx5A3p/XndgSLGYjNxxIBdyTxlEoy7cToAVkDmxyXHSPfVqlheSD8yAFqS6eXjhy1+M4cYTnlDxwXHoWzVb+Ti+UVdpOg/R4sHk4L0ulb4KFIXZG5FImAJoEYkXF3lP6FzJ21VN367qUIJvYg/6CVtFCmt+tUcirLgwQqvCgpzrAGZe9cH53tsQNkwbe3Mw2449Wm8pRVuC9OUfWqPqC/tVuGuUjPmOHbR354eNbJ8/TmezvbAJPkh43pEgS3KNLUdzyfEdoP/XpvEO6fqqFomX7KKpshtNNTTDrf6Z1esPxfn0v0fuo49UtBip1ftGKl1M1FWgd08Ub6dvsDOf/mPJ9jc=&lt;/diagram&gt;&lt;/mxfile&gt;">
        <defs/>
        <g>
          <path d="M 501 17 L 981 17 M 981 23 L 501 23 M 921 23" fill="none"  stroke-width="3" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all"/>
          <ellipse cx="461" cy="20" rx="12." ry="12.8" fill="rgb(255, 255, 255)"  pointer-events="all"/>
          <path d="M 431 0 L 461 20 L 431 40 Z M 491 0 L 461 20 L 491 40 Z"  stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all"/>
          <ellipse cx="461" cy="20" rx="12" ry="12.8" fill="rgb(255, 255, 255)"  pointer-events="all"/>
          <path d="M -60 16 L 421 16 M 421 22 L -60 22 M 421 22" fill="none"  stroke-width="3" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all"/>
        </g>
      </svg>`;
  
    // Iterate through each element
    titleElements.forEach(function(element) {
      // Create a new div element to contain the SVG
      const svgWrapper = document.createElement('div');
      svgWrapper.innerHTML = svgContent;
  
      // Append the SVG to the title element
      element.appendChild(svgWrapper.firstChild);
    });
  } });

function appendSVGToTitleElements() {
  // Select all elements with the class "title"
  const titleElements = document.querySelectorAll('.title');

  // Iterate through each element
  titleElements.forEach(function(element) {
    // Create a new div element
    const svgDiv = document.createElement('div');

    // Style the div to include the SVG background (customize as needed)
    svgDiv.style.background = "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20width%3D%221223px%22%20height%3D%2241px%22%20viewBox%3D%22-0.5%20-0.5%20923%2041%22%20content%3D%22%26lt%3Bmxfile%26gt%3B%26lt%3Bdiagram%20id%3D%26quot%3B2TYFnY0_VJDJ40RJej4Q%26quot%3B%20name%3D%26quot%3BPage-1%26quot%3B%26gt%3BzZXfb5swEMf%2FGl4rfgSiPbZZuj1sUqVM2rODr2DVcMhcCNlfv3NsIIR03SpN6hP2h7uz73t3ECSbqv9iRFN%2BRwk6iEPZB8nnII7jMM74YcnJkXWWOlAYJR2KJrBTv8DD0NODktDODAlRk2rmMMe6hpxmTBiDx7nZM%2Br5qY0oYAF2udBL%2BlNJKh1dheHEv4IqSn%2Fy2vNKDKYetKWQeLxAyTZINgaR3KrqN6CtdIMqzu%2FxlbfjtQzU9DcOiXPohD74zPy96DSkCrW8t4rxrsaa4UNJleZdxMuWDL6MEiSWlKKxnlrVL27rEgx5A3p%2FXndgSLGYjNxxIBdyTxlEoy7cToAVkDmxyXHSPfVqlheSD8yAFqS6eXjhy1%2BM4cYTnlDxwXHoWzVb%2BTi%2BUVdpOg%2FR4sHk4L0ulb4KFIXZG5FImAJoEYkXF3lP6FzJ21VN367qUIJvYg%2F6CVtFCmt%2BtUcirLgwQqvCgpzrAGZe9cH53tsQNkwbe3Mw2449Wm8pRVuC9OUfWqPqC%2FtVuGuUjPmOHbR354eNbJ8%2FTmezvbAJPkh43pEgS3KNLUdzyfEdoP%2FXpvEO6fqqFomX7KKpshtNNTTDrf6Z1esPxfn0v0fuo49UtBip1ftGKl1M1FWgd08Ub6dvsDOf%2FmPJ9jc%3D%26lt%3B%2Fdiagram%26gt%3B%26lt%3B%2Fmxfile%26gt%3B%22) center/contain no-repeat";
    svgDiv.style.marginTop = '10px';
    svgDiv.style.width = '100%';
    svgDiv.style.height = '41px'; // Adjust height to match the SVG's viewBox height

    // Append the new div to the title element
    svgDiv.className = 'decoration-container';
    element.appendChild(svgDiv);
  });
}


function updatePolygonPositions() {
  const svg = document.getElementById('mySVG');
  if (!svg) return;  // Make sure the SVG exists

  const width = window.innerWidth;
  const height = window.innerHeight;

  const polygons = svg.getElementsByClassName('decoration');
  if (polygons.length >= 2) {
    polygons[0].setAttribute('transform', `translate(${width}, 0) rotate(180)`);
    polygons[1].setAttribute('transform', `translate(0, 0)`);
  }
}




document.addEventListener('DOMContentLoaded', function () {
  var firstSlide = document.querySelector('.reveal .slides > section');

  if (firstSlide) {
    var decorationContainer = document.createElement('div');
    decorationContainer.className = 'decoration-container';
    decorationContainer.innerHTML = decorationMarkup;
    firstSlide.parentElement.parentElement.appendChild(decorationContainer);

    updatePolygonPositions();  // Initial positioning after insertion

    window.addEventListener('resize', updatePolygonPositions);

    onClassChange(firstSlide, (node) => {
      if (node.classList.contains('present')) {
        decorationContainer.style.display = "block";
      } else {
        decorationContainer.style.display = "none";
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Function to automatically apply the .image classes to all <img> elements
  function applyImageClass() {
      const images = document.querySelectorAll('div img');
      images.forEach(img => {
          img.classList.add('image');
          //img.classList.add('draggable');
      });
  }

  // Call the function to apply the class
  applyImageClass();

  let currentImage = null;
  let contextMenu = null;

  // List of zoom classes
  const zoomClasses = [
      'zoom1xJS-active', 'zoom1_25xJS-active', 'zoom1_5xJS-active', 
      'zoom1_75xJS-active', 'zoom2xJS-active', 'zoom2_5xJS-active', 
      'zoom3xJS-active', 'zoom4xJS-active', 'zoom6xJS-active', 
      'zoom8xJS-active'
  ];

  // Function to create the context menu
  function createContextMenu() {
      contextMenu = document.createElement('div');
      contextMenu.id = 'contextMenu';
      contextMenu.className = 'custom-menu';

      // Reset button added for tablet/mobile users convenience

      contextMenu.innerHTML = `
          <a href="#" data-class="zoom1xJS-active"> 🔍 1x</a>
          <a href="#" data-class="zoom1_25xJS-active"> 🔍 1.25x</a>
          <a href="#" data-class="zoom1_5xJS-active"> 🔍 1.5x</a>
          <a href="#" data-class="zoom1_75xJS-active"> 🔍 1.75x</a>
          <a href="#" data-class="zoom2xJS-active"> 🔍 2x</a>
          <a href="#" data-class="zoom2_5xJS-active"> 🔍 2.5x</a>
          <a href="#" data-class="zoom3xJS-active"> 🔍 3x</a>
          <a href="#" data-class="zoom4xJS-active"> 🔍 4x</a>
          <a href="#" data-class="zoom6xJS-active"> 🔍 6x</a>
          <a href="#" data-class="zoom8xJS-active"> 🔍 8x</a>
          <a href="#" data-class="unzoom">🔍 Reset</a>
      `;
      document.body.appendChild(contextMenu);

      // Add event listeners to menu items
      contextMenu.querySelectorAll('a').forEach(menuItem => {
          menuItem.addEventListener('click', function(e) {
              e.preventDefault();
              if (currentImage) {
                  // Remove all previously applied classes
                  contextMenu.querySelectorAll('a').forEach(item => {
                      const className = item.getAttribute('data-class');
                      currentImage.classList.remove(className);
                  });

                  // Apply the new class
                  const newClassName = menuItem.getAttribute('data-class');
                  if (newClassName) {
                      currentImage.classList.add(newClassName);
                  }

                  // Hide the context menu
                  contextMenu.style.display = 'none';
              }
          });
      });
  }

  // Function to check if any zoom class is applied
  function hasZoomClass(img) {
      return zoomClasses.some(zoomClass => img.classList.contains(zoomClass));
  }

  // Event listener for image clicks
  document.querySelectorAll('.image').forEach(img => {
      img.addEventListener('click', function(e) {
          e.preventDefault();
          currentImage = e.target;

          if (!contextMenu) {
              createContextMenu();
          }

          contextMenu.style.display = 'block';
          contextMenu.style.left = `${e.pageX}px`;
          contextMenu.style.top = `${e.pageY}px`;
      });

      // Event listener for right-click (context menu) to handle zoom class removal
      img.addEventListener('contextmenu', function(e) {
          if (hasZoomClass(img)) {
              e.preventDefault(); // Prevent the default context menu if zoom classes are present
              zoomClasses.forEach(zoomClass => {
                  img.classList.remove(zoomClass);
              });
          }
      });
  });

  // Hide the context menu when clicking outside
  document.addEventListener('click', function(e) {
      if (contextMenu && !contextMenu.contains(e.target) && e.target !== currentImage) {
          contextMenu.style.display = 'none';
      }
  });
});





// drag on hold

document.addEventListener('DOMContentLoaded', function() {
  let selectedElement = null;
  let offsetX = 0;
  let offsetY = 0;

  // Prevent default image dragging behavior
  document.querySelectorAll('.draggable').forEach((element) => {
      element.setAttribute('draggable', 'false'); // Disable default drag behavior
  });

  // Mouse down event handler
  function onMouseDown(e) {
      if (e.button === 0 && e.target.classList.contains('draggable')) { // Ensure it's the left mouse button
          selectedElement = e.target;

          // Calculate the offset to center the cursor on the image
          const rect = selectedElement.getBoundingClientRect();
          offsetX = e.clientX - (rect.left + rect.width / 14);
          offsetY = e.clientY - (rect.top + rect.height / 14);

          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
      }
  }

  // Mouse move event handler
  function onMouseMove(e) {
      if (selectedElement) {
          // Calculate new position based on cursor position and offsets
          const x = e.clientX - offsetX;
          const y = e.clientY - offsetY;
          selectedElement.style.left = `${x}px`;
          selectedElement.style.top = `${y}px`;
      }
  }

  // Mouse up event handler
  function onMouseUp() {
      selectedElement = null;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
  }

  // Prevent the default dragstart behavior
  document.addEventListener('dragstart', function(e) {
      if (e.target.classList.contains('draggable')) {
          e.preventDefault();
      }
  });

  // Add mousedown event listener to the document
  document.addEventListener('mousedown', onMouseDown);
  
  // Prevent dragging when the mouse button is not held down
  document.addEventListener('mouseup', function() {
      selectedElement = null;
  });
});
