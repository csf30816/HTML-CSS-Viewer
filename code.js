function run() {
    var type = document.getElementById("select").value;
    var report = document.getElementById("return");
    var input = document.getElementById("input").value;
    
    if (type === "h") {
        report.innerHTML = input;
    } else if (type === "c") {
        report.innerHTML = "<style>" + input + "</style>";
    } else if (type === "j") {
        report.innerHTML = "<script>" + input + "</script>";
    }
}
