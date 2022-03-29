// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   $('.viewport').attr('content', 'width=1300');
// }

$(document).ready(function() {
	// remove placeholder after click
	$('input, textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input, textarea').blur(function(){
		$(this).attr('placeholder', $(this).data('placeholder'));
	});

	$('.scroll').click( function(){
	var scrollEl = $(this).attr('href');
		if ($(scrollEl).length != 0) {
			$('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 800);
		}
		return false;
	});


	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});

	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});


	$('.video img').on('click', removePoster);
	$('.video svg').on('click', removePoster);

	function removePoster() {
		$('.video img').hide();
		$('.video svg').hide();
	}
	//slick carousel
	$('.slider-1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.slider-1-next',
		prevArrow: '.slider-1-prev'
	});
	$('.slider-2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.slider-2-next',
		prevArrow: '.slider-2-prev'
	});
	$('.slider-rev').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: '.slider-rev-next',
		prevArrow: '.slider-rev-prev',
		dots: true,
		appendDots: '.review .controls',
		customPaging: function() {
			return '<div class="dot"></div>';
		},
		responsive: [
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
			}
		]
	});
	
	//validation
		var locationURL = window.location.pathname;
	if (locationURL == "/ua.html") {
		var validationName = "Обов'язково для заповнення";
		var validationNameMax = "Введіть правильне ім'я";
		var validationPhone = "Введіть вірний номер";
	}
	else if (locationURL == "/en.html") {
		var validationName = "Required to fill";
		var validationNameMax = "Please enter a valid name";
		var validationPhone = "Please enter a valid number";
	}
	else if (locationURL == "/pl.html") {
		var validationName = "Wymagane do wypełnienia";
		var validationNameMax = "Proszę wpisać prawidłowe imię";
		var validationPhone = "Proszę wprowadzić poprawny numer";
	}
	else {
		var validationName = "Обязательно для заполнения";
		var validationNameMax = "Введите корректное имя";
		var validationPhone = "Введите корректный номер";
	}


	$('#topForm1').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#topForm2').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#sliderForm1').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#sliderForm2').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#sliderForm3').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#sliderForm4').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#serviceForm1').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#serviceForm2').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#serviceForm3').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#serviceForm4').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#promForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#contactForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#h-48-form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#specialForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			phone: {
				required: validationPhone
			}
		}
	});


});