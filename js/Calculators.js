addEventListener("load", init, false);
const RegExp = /^[0-9]/;

function init() {
    let input = document.getElementById("Calculator1");
    input.addEventListener("click", Calculator1EU, false);
    let input2 = document.getElementById("Calculator2");
    input2.addEventListener("click", Calculator1NA, false);
    let input3 = document.getElementById("Calculator3");
    input3.addEventListener("click", Calculator1UK, false);
}

function Calculator1EU(event) {
    let feedback = document.getElementById("SpanReturnCalculator1");
    let inputHeight = document.getElementById("Calculator1Height");
    let inputLength = document.getElementById("Calculator1Length");
    feedback.innerHTML = "";

    if ((RegExp.test(inputHeight.value) && RegExp.test(inputLength.value)) === true) {
        let length = inputLength.value / 128.403;
        let height = inputHeight.value / 128.403;
        length = length.toFixed(1);
        height = height.toFixed(1);
        feedback.innerHTML = feedback.innerHTML + "<p>Height = " + height + "mb. <br> Length = " + length + "mb.</p>";
        event.preventDefault();
    } else if (RegExp.test(inputHeight.value)) {
        let height = inputHeight.value / 128.403;
        height = height.toFixed(1);
        feedback.innerHTML = feedback.innerHTML + "<p>Height = " + height + "mb.</p>";
        event.preventDefault();
    } else if (RegExp.test(inputLength.value)) {
        let length = inputLength.value / 128.403;
        length = length.toFixed(1);
        feedback.innerHTML = feedback.innerHTML + "<p>Length = " + length + "mb.</p>";
        event.preventDefault();
    } else {
        feedback.innerHTML = feedback.innerHTML + "<p class='feedback'>All values entered must be numerical</p>";
        feedback.innerHTML = feedback.innerHTML + "<style> p.feedback {color: red}</style>";
        event.preventDefault();
    }
}

function Calculator1NA(event1) {
    let feedback = document.getElementById("SpanReturnCalculator2");
    let inputHeight = document.getElementById("Calculator2Height");
    let inputLength = document.getElementById("Calculator2Length");
    feedback.innerHTML = "";

    if ((RegExp.test(inputHeight.value) && RegExp.test(inputLength.value)) === true) {
        let length = inputLength.value / 143.51;
        let height = inputHeight.value / 143.51;
        length = length.toFixed(1);
        height = height.toFixed(1);
        feedback.innerHTML = feedback.innerHTML + "<p>Height = " + height + "mb. <br> Length = " + length + "mb.</p>";
        event1.preventDefault();
    } else if (RegExp.test(inputHeight.value)) {
        let height = inputHeight.value / 143.51;
        height = height.toFixed(1);
        feedback.innerHTML = feedback.innerHTML + "<p>Height = " + height + "mb.</p>";
        event1.preventDefault();
    } else if (RegExp.test(inputLength.value)) {
        let length = inputLength.value / 143.51;
        length = length.toFixed(1);
        feedback.innerHTML = feedback.innerHTML + "<p>Length = " + length + "mb.</p>";
        event1.preventDefault();
    } else {
        feedback.innerHTML = feedback.innerHTML + "<p class='feedback'>All values entered must be numerical</p>";
        feedback.innerHTML = feedback.innerHTML + "<style> p.feedback {color: red}</style>";
        event1.preventDefault();
    }
}

function Calculator1UK(event2) {
    let feedback = document.getElementById("SpanReturnCalculator3");
    let inputHeight = document.getElementById("Calculator3Height");
    let inputLength = document.getElementById("Calculator3Length");

    feedback.innerHTML = "";

    if ((RegExp.test(inputHeight.value) && RegExp.test(inputLength.value)) === true) {
        let length = inputLength.value / 124.46;
        let height = inputHeight.value / 124.46;
        length = length.toFixed(1);
        height = height.toFixed(1);
        feedback.innerHTML = feedback.innerHTML + "<p>Height = " + height + "mb. <br> Length = " + length + "mb.</p>";
        event2.preventDefault();
    } else if (RegExp.test(inputHeight.value)) {
        let height = inputHeight.value / 124.46;
        height = height.toFixed(1);
        feedback.innerHTML = feedback.innerHTML + "<p>Height = " + height + "mb.</p>";
        event2.preventDefault();
    } else if (RegExp.test(inputLength.value)) {
        let length = inputLength.value / 124.46;
        length = length.toFixed(1);
        feedback.innerHTML = feedback.innerHTML + "<p>Length = " + length + "mb.</p>";
        event2.preventDefault();
    } else {
        feedback.innerHTML = feedback.innerHTML + "<p class='feedback'>All values entered must be numerical</p>";
        feedback.innerHTML = feedback.innerHTML + "<style> p.feedback {color: red}</style>";
        event2.preventDefault();
    }
}
