
myFunction = function() {
    var fullNameVar = document.getElementById("fullName").value;
    var heightVar = document.getElementById("myHeight").value;
    var countryVar = document.getElementById ("myCountry").value;

    document.getElementById("nameResult").innerHTML = "My Name is: " +fullNameVar;

    document.getElementById("heightResult").innerHTML = "My Height is: " +heightVar+ " Feet";

    document.getElementById("countryResult").innerHTML = "My Country is: " +countryVar;

}