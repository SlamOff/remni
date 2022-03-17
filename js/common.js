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

	

	function updater(d, h, m, s) {
	  // День сброса - 5 августа 2017 года (и далее каждые три дня)
	  var baseTime = new Date(2017, 07, 8);
	  // Период сброса — 3 дня
	  var period = 2*24*60*60*1000;

	  function update() {
	    var cur = new Date();
	    // сколько осталось миллисекунд
	    var diff = period - (cur - baseTime) % period;
	    // сколько миллисекунд до конца секунды
	    var millis = diff % 1000;
	    diff = Math.floor(diff/1000);
	    // сколько секунд до конца минуты
	    var sec = diff % 60;
	    if(sec < 10) sec = "0"+sec;
	    diff = Math.floor(diff/60);
	    // сколько минут до конца часа
	    var min = diff % 60;
	    if(min < 10) min = "0"+min;
	    diff = Math.floor(diff/60);
	    // сколько часов до конца дня
	    var hours = diff % 24;
	    if(hours < 10) hours = "0"+hours;
	    var days = Math.floor(diff / 24);
	    d.innerHTML = days;
	    h.innerHTML = hours;
	    m.innerHTML = min;
	    s.innerHTML = sec;
	  
	    // следующий раз вызываем себя, когда закончится текущая секунда
	    setTimeout(update, millis);
	  }
	  setTimeout(update, 0);
	}
	updater(document.getElementById("days"),
document.getElementById("hours"), document.getElementById("minutes"),
document.getElementById("seconds"));



	

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
	
	// photo magnific gallery
	$('.photo_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
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
		var locationURL = window.location.search;
	if ( locationURL == "?p=179&lang=ua" ) {
		var validationName = "Обов'язково для заповнення";
		var validationNameMax = "Від 2 до 16 літер";
		var validationPhone = "Введіть вірний номер";
		var validationEmail = "Введіть вірний E-mail";
	}
	else {
		var validationName = "Обязательно для заполнения";
		var validationNameMax = "От 2 до 16 букв";
		var validationPhone = "Введите корректный номер";
		var validationEmail = "Введите корректный E-mail";
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