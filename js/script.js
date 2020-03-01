  let cardNumber = 0;
  $('.closeM').hide();
  const dropMenu = () => {
	let x = document.querySelector(".phone-more");
	if (x.style.right == "0%") {
		x.style.right = "-100%";
		x.style.transition = "right .5s ease";
		$('.closeM').toggle(500);
		$('.open').toggle(500);
	  } else {
		x.style.right = "0%";
		x.style.transition = "right .5s ease";
		$('.open').toggle(500);
		$('.closeM').toggle(500);
	  }
  };
    function check(){
	if(cardNumber < 1) {
		$(".affA").text("C'est possible ?");
	}else {
		$(".affA").text("Afficher la réponse");
	}
  };
  $(document).ready(function () {
	  $(".nb-here").text(cardNumber);
  	$(".dropdown-btn").next().hide();
  	$(".dropdown-btn").click(function () {
  		$(this).next().slideToggle(400);
  		$(this).toggleClass("arrow-down");
		  $(this).toggleClass("arrow-up");
  	});
  	$(".prev-btn").click(function () {
		  cardNumber--
		  if (cardNumber < 0) {
			  cardNumber = 0;
		  }
		  $(".nb-here").text(cardNumber);
		  $('.FCAnswer').hide();
		  $('.FCNote').hide();
		  check();
		  load();
  	});
  	$(".next-btn").click(function (e) {
		  cardNumber++
		  $(".nb-here").text(cardNumber);
		  $('.FCAnswer').hide();
		  $('.FCNote').hide();
		  check();
		  load();
	  });
	$(".affA").click(function(e) {
		$('.FCAnswer').toggle(500);
	});
	  $(".dropdown-toggle").click(function () {
		  $(this).toggleClass("arrow-down");
		  $(this).toggleClass("arrow-up");
	  });
	  $(".menuicocontainer").click(function () {
		$(this).toggleClass("changetoN");
	  });
	});
$('.bars').click(dropMenu);
$('.question').click(() => {
	$('.FCNote').toggle(200);
});
$(".affA").text("C'est possible ?");
