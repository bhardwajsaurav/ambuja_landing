function test() {
        document.getElementById("modal-main").style.opacity = "0"
        document.getElementById("modal-main").style.pointerEvents  = "none";
    }
    function down() {
        console.log("joji2")
        document.getElementById("modal-main").style.opacity = "1"
        document.getElementById("modal-main").style.pointerEvents  = "visible";
         document.getElementById("bubble-Tag").classList.remove("activeB")
        document.getElementById("nameInField").classList.remove("activeB")
}

 const textToMODAL = (e)=>{
    increment_counter(1234)
     document.getElementById("nameInField").innerText = document.getElementById("inputName").value
     document.getElementById("inputName").value = ""
     document.getElementById("bubbleDIV").style.opacity = "1"
     document.getElementById("bubbleDIV").style.pointerEvents  = "visible";
     document.getElementById("modal-main").style.opacity  = "0";
     document.getElementById("bubble-Tag").style.transform = "scale(1)"
     document.getElementById("nameInField").style.fontSize = "40px"
   
     setTimeout(()=>{
        document.getElementById("bubble-Tag").style.transform = "scale(0.1)"
        document.getElementById("nameInField").style.fontSize = "2px"

        document.getElementById("bubble-Tag").classList.add("activeB")
        document.getElementById("nameInField").classList.add("activeB")
         
     },2000)


    //  setTimeout(()=>{
    //     document.getElementById("bubbleDIV").style.opacity = "0"
    //     document.getElementById("bubbleDIV").style.pointerEvents  = "none";
    //     document.getElementById("modal-main").style.pointerEvents  = "none";
        
    //  },3000)
 }


 async function fetchData() {
	const response = await fetch(
		"https://api.airtable.com/v0/appwmTp9J3afKQ6pu/Table%201/reczqyRK8JY3J8U2d",
		{
			method: "GET",
			headers: {
				Authorization: "Bearer keyjjd5EU0mDTIyh8",
			},
		}
	)
		.then((response) => response.json())
		.then((data) => {
			return data.fields.value;
		});
	localStorage.setItem("counter", response);
    calcValuesThousand(Math.trunc((response % 10000) / 1000));
    calcValuesHundred(Math.trunc((response % 1000) / 100));
    calcValuesTens(Math.trunc((response % 100) / 10));
    calcValuesOnes(response % 10);
}
fetchData();

async function updateData(counter) {
	const response = await fetch(
		"https://api.airtable.com/v0/appwmTp9J3afKQ6pu/Table%201",
		{
			method: "PUT",
			headers: {
				Authorization: "Bearer keyjjd5EU0mDTIyh8",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				records: [
					{
						id: "reczqyRK8JY3J8U2d",
						fields: {
							key: "counter",
							value: counter,
						},
					},
				],
			}),
		}
	)
		.then((response) => response.json())
		.then((data) => console.log(data));
}


 
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
    updateData(counter);
}

// function getSec(next) {
//     // var placeValue = counter / 10;
//     // console.log(counter / 10);

//     var d = new Date();
//     var sec = 60 - d.getSeconds();
//     if (next) {
//         sec--;
//         if (sec < 0) {
//             sec = 59;
//         }
//     } else if (sec == 60) {
//         sec = 0;
//     }
//     return sec;
// }

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

            setTimeout(()=>{

                $(el).text(val);
            },500)
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
            setTimeout(()=>{

                $(el).text(val);
            },1000)
        });
    $(".counter_ones .from:not(.n)")
        .addClass("hide")
        .addClass("to")
        .removeClass("from")
        .removeClass("hide")
        .find("span:not(.shadow)")
        .each(function (i, el) {
            setTimeout(()=>{

                $(el).text(val);
            },1000)
        });
    $(".counter_ones .n").removeClass("n");
}
