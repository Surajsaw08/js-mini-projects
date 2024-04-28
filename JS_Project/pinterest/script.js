var arr = [
  { name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
]

function showTheCards() {
  var clutter = "";
  arr.forEach((obj) => {
    clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
  })

  document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality() {
  var input = document.querySelector("#searchinput");
  var searchData = document.querySelector(".searchdata");

  document.querySelector("#searchinput").addEventListener('focus', () => {
    document.querySelector(".overlay").style.display = "block";
  });

  document.querySelector("#searchinput").addEventListener('blur', () => {
    document.querySelector(".overlay").style.display = "none";
  });

  document.querySelector("#searchinput").addEventListener('input', () => {
    const filterarray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));

    var clutterr = "";
    filterarray.forEach(function (obj) {
      clutterr += `<div class="res flex px-8 py-3">
        <i class="ri-search-line font-semibold mr-5"></i>
        <h3 class="font-semibold">${obj.name}</h3>
    </div>`;
    });

    if (input.value.trim() === '') {
      searchData.classList.add('hidden'); // Add 'hidden' class
    } else {
      searchData.classList.remove('hidden'); // Remove 'hidden' class
      searchData.innerHTML = clutterr;
    }

    var clutter = "";
    filterarray.forEach((obj) => {
      clutter += `<div class="box">
    <img class="cursor-pointer" src="${obj.image}" alt="image" onclick="showImage('${obj.image}')">
    <div class="caption">Lorem ipsum </div>
</div>`;
    });

    document.querySelector(".container").innerHTML = clutter;
  });

  // Add event listener for search data options
  searchData.addEventListener('click', (event) => {
    if (event.target.classList.contains('font-semibold')) {
      const optionName = event.target.innerText;
      const option = arr.find(obj => obj.name === optionName);
      if (option) {
        showImage(option.image);
        input.value = optionName; // Update input field value with selected option
      }
      searchData.classList.add('hidden'); // Add 'hidden' class to hide search data
    }
  });

  // Hide search data when clicking outside input or search data
  document.addEventListener('click', (event) => {
    if (!event.target.matches('#searchinput') && !event.target.matches('.searchdata')) {
      searchData.classList.add('hidden'); // Add 'hidden' class to hide search data
    }
  });
}

function showImage(imageSrc) {
  var clutter = `<div class="box">
    <img class="cursor-pointer" src="${imageSrc}" alt="image">
    <div class="caption">Lorem ipsum </div>
</div>`;
  document.querySelector(".container").innerHTML = clutter;
}

handleSearchFunctionality();
showTheCards();










