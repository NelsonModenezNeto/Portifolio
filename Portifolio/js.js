document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var originalBackgroundColor = getComputedStyle(navbar).backgroundColor;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
            
            navbar.classList.add("navbar-dark");
            navbar.style.backgroundColor = "black";
            imagemClara.style.display = "none";
            imagemEscura.style.display = "block";
        } else {
            navbar.classList.remove("navbar-dark");
            navbar.style.backgroundColor = originalBackgroundColor;
            imagemClara.style.display = "block";
            imagemEscura.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('palavrasCarousel');
    var carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 2000 // Defina o intervalo de tempo entre as palavras em milissegundos
    });
});

document.addEventListener('DOMContentLoaded', function () {
  var getProductHeight = document.querySelector(".product.active").offsetHeight;
  var productsContainer = document.querySelector(".products");
  productsContainer.style.height = getProductHeight + 'px';

  function calcProductHeight() {
    getProductHeight = document.querySelector(".product.active").offsetHeight;
    productsContainer.style.height = getProductHeight + 'px';
  }

  var productItem = document.querySelectorAll(".product");
  var productCurrentItem = document.querySelector(".product.active");

  document.getElementById("next").addEventListener("click", function (e) {
    e.preventDefault();

    var nextItem = productCurrentItem.nextElementSibling;

    productCurrentItem.classList.remove("active");

    if (nextItem) {
      productCurrentItem = nextItem;
      productCurrentItem.classList.add("active");
    } else {
      productCurrentItem = productItem[0];
      productCurrentItem.classList.add("active");
    }

    calcProductHeight();
  });

  document.getElementById("prev").addEventListener("click", function (e) {
    e.preventDefault();

    var prevItem = productCurrentItem.previousElementSibling;

    productCurrentItem.classList.remove("active");

    if (prevItem) {
      productCurrentItem = prevItem;
      productCurrentItem.classList.add("active");
    } else {
      productCurrentItem = productItem[productItem.length - 1];
      productCurrentItem.classList.add("active");
    }

    calcProductHeight();
  });

  // Ripple
  var rippleElements = document.querySelectorAll("[ripple]");
  for (var i = 0; i < rippleElements.length; i++) {
    rippleElements[i].addEventListener("click", function (e) {
      var rippleDiv = document.createElement('div');
      rippleDiv.className = 'ripple';
      var rippleSize = 60;
      var rippleOffset = this.getBoundingClientRect();
      var rippleY = e.pageY - rippleOffset.top;
      var rippleX = e.pageX - rippleOffset.left;

      rippleDiv.style.top = rippleY - rippleSize / 2 + 'px';
      rippleDiv.style.left = rippleX - rippleSize / 2 + 'px';
      rippleDiv.style.background = this.getAttribute("ripple-color");

      this.appendChild(rippleDiv);

      window.setTimeout(function () {
        rippleDiv.remove();
      }, 1900);
    });
  }
});
