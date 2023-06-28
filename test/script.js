let loginForm = document.getElementById("registerForm");


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let name = document.getElementById("name");
    let address = document.getElementById("address");
    let number = document.getElementById("number");
    let email = document.getElementById("email");
    let category = document.getElementsByName("radio");
    let events = document.getElementsByName("check");
    var eventsDict = {}
    var radioDict = {}

    console.log(name.value);
    console.log(address.value);
    console.log(number.value);
    console.log(email.value);
    for(let i = 0;i<events.length;i++)
    {
        eventsDict[events[i].id] = events[i].checked;
    }
    for(let i = 0;i<category.length;i++)
    {
        radioDict[category[i].id] = category[i].checked;
    }
    console.log(eventsDict);
    console.log(radioDict);
  });
