const formElements = [
    "[ENVIRONMENT]\nSoftware:",
    "[STEPS]",
    "[REPRODUCTION RATE]",
    "[EXPECTED RESULT]",
    "[ADDITIONAL INFO]",
];

const browserData = navigator.userAgent;
var regex = /Chrome[\/]\d{2}[.]\d[.]\d{4}[.]\d{3}|Safari[\/]\d{3}[.]\d{2}|Firefox[\/]\d{2}[.]\d{1}/;
var regex2 = /Windows[\s]NT[\s]\d{2}[.]\d{1}|Windows[\s]NT[\s]\d{1}[.]\d{1}/;
var systemVersion = browserData.match(regex2);
var browserVersion = browserData.match(regex);
console.log(systemValidate());
console.log(browserVersion[0]);

var DataObject = {
    browserVersion: browserVersion[0],
    systemVersion: systemValidate(),
};

function systemValidate() {
    switch (systemVersion[0]) {
        case "Windows NT 10.0":
            return "Windows 10";
        case "Windows NT 7.0":
            return "Windows 7";
        default:
            break;
    }
}
document.getElementById("submit").addEventListener("click", function () {
    console.log(document.getElementsByClassName("container__text-input"));
    document.getElementById("result-textarea").innerHTML = generateOutput();
});

document.getElementById("reset").addEventListener("click", resetForm);

function resetForm() {
    document.getElementById("result-textarea").innerHTML = "";
}

function generateOutput() {
    console.log(document.getElementById("expected-result-text-input").value);
    var result =
        formElements[0] +
        "\n" +
        DataObject.systemVersion +
        "\n" +
        DataObject.browserVersion +
        "\n" +
        document.getElementById("software-input").value +
        "\n" +
        "\n" +
        formElements[1] +
        "\n" +
        document.getElementById("steps-text-input").value +
        "\n" +
        "\n" +
        formElements[2] +
        "\n" +
        document.getElementById("reproduction-text-input").value +
        "\n" +
        "\n" +
        formElements[3] +
        "\n" +
        document.getElementById("expected-result-text-input").value +
        "\n" +
        "\n" +
        formElements[4];

    return result;
}

document.getElementById("copy-btn").addEventListener("click", copyToClipboard);

function copyToClipboard() {
    const el = document.createElement("textarea");
    el.value = document.getElementById("result-textarea").innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("skopiowano do schowka");
}
