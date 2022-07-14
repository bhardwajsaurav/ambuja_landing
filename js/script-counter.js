var o,
	t,
	h,
	th = undefined;

function increment_counter() {
	var counter = localStorage.getItem("counter");

	counter++;
	if (th != Math.trunc((counter % 10000) / 1000)) {
		calcValuesThousand(Math.trunc((counter % 10000) / 1000));
	}
	if (h != Math.trunc((counter % 1000) / 100)) {
		calcValuesHundred(Math.trunc((counter % 1000) / 100));
	}
	if (t != Math.trunc((counter % 100) / 10)) {
		calcValuesTens(Math.trunc((counter % 100) / 10));
	}
	if (o != counter % 10) {
		calcValuesOnes(counter % 10);
	}

	o = counter % 10;
	t = Math.trunc((counter % 100) / 10);
	h = Math.trunc((counter % 1000) / 100);
	th = Math.trunc((counter % 10000) / 1000);
	localStorage.setItem("counter", counter);
}

function getSec(next) {
	// var placeValue = counter / 10;
	// console.log(counter / 10);

	var d = new Date();
	var sec = 60 - d.getSeconds();
	if (next) {
		sec--;
		if (sec < 0) {
			sec = 59;
		}
	} else if (sec == 60) {
		sec = 0;
	}
	return sec;
}

function calcValuesThousand(val) {
	$(".counter_thousand .to")
		.addClass("hide")
		.removeClass("to")
		.addClass("from")
		.removeClass("hide")
		.addClass("n")
		.find("span:not(.shadow)")
		.each(function (i, el) {
			$(el).text(val);
		});
	$(".counter_thousand .from:not(.n)")
		.addClass("hide")
		.addClass("to")
		.removeClass("from")
		.removeClass("hide")
		.find("span:not(.shadow)")
		.each(function (i, el) {
			$(el).text(val);
		});
	$(".counter_thousand .n").removeClass("n");
}

function calcValuesHundred(val) {
	$(".counter_hundred .to")
		.addClass("hide")
		.removeClass("to")
		.addClass("from")
		.removeClass("hide")
		.addClass("n")
		.find("span:not(.shadow)")
		.each(function (i, el) {
			$(el).text(val);
		});
	$(".counter_hundred .from:not(.n)")
		.addClass("hide")
		.addClass("to")
		.removeClass("from")
		.removeClass("hide")
		.find("span:not(.shadow)")
		.each(function (i, el) {
			$(el).text(val);
		});
	$(".counter_hundred .n").removeClass("n");
}

function calcValuesTens(val) {
	$(".counter_tens .to")
		.addClass("hide")
		.removeClass("to")
		.addClass("from")
		.removeClass("hide")
		.addClass("n")
		.find("span:not(.shadow)")
		.each(function (i, el) {
			$(el).text(val);
		});
	$(".counter_tens .from:not(.n)")
		.addClass("hide")
		.addClass("to")
		.removeClass("from")
		.removeClass("hide")
		.find("span:not(.shadow)")
		.each(function (i, el) {
			$(el).text(val);
		});
	$(".counter_tens .n").removeClass("n");
}

function calcValuesOnes(val) {
	$(".counter_ones .to")
		.addClass("hide")
		.removeClass("to")
		.addClass("from")
		.removeClass("hide")
		.addClass("n")
		.find("span:not(.shadow)")
		.each(function (i, el) {
			$(el).text(val);
		});
	$(".counter_ones .from:not(.n)")
		.addClass("hide")
		.addClass("to")
		.removeClass("from")
		.removeClass("hide")
		.find("span:not(.shadow)")
		.each(function (i, el) {
			$(el).text(val);
		});
	$(".counter_ones .n").removeClass("n");
}
