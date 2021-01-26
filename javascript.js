// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();


//scroll link interno
$('nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - 220
    }, 500);
});




var res = document.getElementsByName('resp')
var bt = document.getElementsByName('btn')
var can = document.getElementsByName('cancel')
var ul = document.getElementsByName('ul')
/*if(res[0].checked){
if(bt.style.display=='block'){
    ul.style.opacity='0';
    can.style.display=='none'
}else if(can.style.display=='block'){
    ul.style.opacity='1';
    bt.style.display=='none'
}*/





function btale(){//Aledrethur Malhas
    var a = document.getElementById('ale')
    var b = document.getElementById('cine')
    var c = document.getElementById('luta')
    var d = document.getElementById('bar')
    var e = document.getElementById('glass')
    var f = document.getElementById('brafe')
    var g = document.getElementById('ani')
    var h = document.getElementById('caravan')
    if(a.style.display='none'){
        a.style.display='block';
        b.style.display='none';
        c.style.display='none';
        d.style.display='none';
        e.style.display='none';
        f.style.display='none';
        g.style.display='none';
        h.style.display='none';
    }else if(a.style.display='block'){
        a.style.display='none';
    }
}

function btcine(){//CINEFILÓSOFO
    var a = document.getElementById('cine')
    var b = document.getElementById('ale')
    var c = document.getElementById('luta')
    var d = document.getElementById('bar')
    var e = document.getElementById('glass')
    var f = document.getElementById('brafe')
    var g = document.getElementById('ani')
    var h = document.getElementById('caravan')
    if(a.style.display='none'){
        a.style.display='block';
        b.style.display='none';
        c.style.display='none';
        d.style.display='none';
        e.style.display='none';
        f.style.display='none';
        g.style.display='none';
        h.style.display='none';
    }else if(a.style.display='block'){
        a.style.display='none';
    }
}

function btluta(){//2 CENTAVOS DE LUTA
    var a = document.getElementById('luta')
    var b = document.getElementById('cine')
    var c = document.getElementById('ale')
    var d = document.getElementById('bar')
    var e = document.getElementById('glass')
    var f = document.getElementById('brafe')
    var g = document.getElementById('ani')
    var h = document.getElementById('caravan')
    if(a.style.display='none'){
        a.style.display='block';
        b.style.display='none';
        c.style.display='none';
        d.style.display='none';
        e.style.display='none';
        f.style.display='none';
        g.style.display='none';
        h.style.display='none';
    }else if(a.style.display='block'){
        a.style.display='none';
    }
}

function btbar(){//CASA PRAIA, BAR E RESTAURANTE
    var a = document.getElementById('bar')
    var b = document.getElementById('cine')
    var c = document.getElementById('luta')
    var d = document.getElementById('ale')
    var e = document.getElementById('glass')
    var f = document.getElementById('brafe')
    var g = document.getElementById('ani')
    var h = document.getElementById('caravan')
    if(a.style.display='none'){
        a.style.display='block';
        b.style.display='none';
        c.style.display='none';
        d.style.display='none';
        e.style.display='none';
        f.style.display='none';
        g.style.display='none';
        h.style.display='none';
    }else if(a.style.display='block'){
        a.style.display='none';
    }
}

function btcaravan(){//Caravan
    var a = document.getElementById('caravan')
    var b = document.getElementById('cine')
    var c = document.getElementById('luta')
    var d = document.getElementById('bar')
    var e = document.getElementById('ale')
    var f = document.getElementById('brafe')
    var g = document.getElementById('ani')
    var h = document.getElementById('glass')
    if(a.style.display='none'){
        a.style.display='block';
        b.style.display='none';
        c.style.display='none';
        d.style.display='none';
        e.style.display='none';
        f.style.display='none';
        g.style.display='none';
        h.style.display='none';
    }else if(a.style.display='block'){
        a.style.display='none';
    }
}

function btglass(){//GOOGLE GLASS
    var a = document.getElementById('glass')
    var b = document.getElementById('cine')
    var c = document.getElementById('luta')
    var d = document.getElementById('bar')
    var e = document.getElementById('ale')
    var f = document.getElementById('brafe')
    var g = document.getElementById('ani')
    var h = document.getElementById('caravan')
    if(a.style.display='none'){
        a.style.display='block';
        b.style.display='none';
        c.style.display='none';
        d.style.display='none';
        e.style.display='none';
        f.style.display='none';
        g.style.display='none';
        h.style.display='none';
    }else if(a.style.display='block'){
        a.style.display='none';
    }
}

function btbrafe(){//BRAFÉ
    var a = document.getElementById('brafe')
    var b = document.getElementById('cine')
    var c = document.getElementById('luta')
    var d = document.getElementById('bar')
    var e = document.getElementById('glass')
    var f = document.getElementById('ale')
    var g = document.getElementById('ani')
    var h = document.getElementById('caravan')
    if(a.style.display='none'){
        a.style.display='block';
        b.style.display='none';
        c.style.display='none';
        d.style.display='none';
        e.style.display='none';
        f.style.display='none';
        g.style.display='none';
        h.style.display='none';
    }else if(a.style.display='block'){
        a.style.display='none';
    }
}

function btani(){//ANIMAIS FANTÁSTICO
    var a = document.getElementById('ani')
    var b = document.getElementById('cine')
    var c = document.getElementById('luta')
    var d = document.getElementById('bar')
    var e = document.getElementById('glass')
    var f = document.getElementById('brafe')
    var g = document.getElementById('ale')
    var h = document.getElementById('caravan')
    if(a.style.display='none'){
        a.style.display='block';
        b.style.display='none';
        c.style.display='none';
        d.style.display='none';
        e.style.display='none';
        f.style.display='none';
        g.style.display='none';
        h.style.display='none';
    }else if(a.style.display='block'){
        a.style.display='none';
    }
}