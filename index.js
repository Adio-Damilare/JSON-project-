let allUser = []
submit = () => {
    let f = document.getElementById("fN").value
    let e = document.getElementById("eM").value
    let p = document.getElementById("pS").value
    let pN = document.getElementById("pN").value
    if (f == "" || e == "" || p == "" || pN == "") {
        document.getElementById("error").innerText = "This field are mandatory"
        return
    }
    let newUser = { "firstName": f, "email": e, "password": p, "phoneNumber": pN }

    if (localStorage.json != null) {
        allUser = JSON.parse(localStorage.getItem("json"))
    }

    allUser.push(newUser);
    localStorage.setItem("json", JSON.stringify(allUser))
    document.getElementById("fN").value = ""
    document.getElementById("eM").value = ""
    document.getElementById("pS").value = ""
    document.getElementById("pN").value = ""
showUser();
}


showUser = () => {
    let allUser = JSON.parse(localStorage.getItem("json"));
    let innerHtml = ""
    allUser.map((user, index) => {
        innerHtml += `<tr><td> ${index + 1}</td><td>${user.firstName}</td><td>${user.email}</td><td>${user.phoneNumber}</td></tr>`
    })
    document.getElementById("table").innerHTML = innerHtml
}


