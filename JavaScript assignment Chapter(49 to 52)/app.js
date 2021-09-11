//  QUESTION___1
// function display() {
//     var firstName = document.getElementById("lname2").value
//     document.write(firstName)
//     var lastName = document.getElementById("lname2")
//     // var birthDate = document.getElementById("dob").value
//     // document.write(birthDate)
//     // var mobile = document.getElementById("Mobile").value
//     // document.write(mobile)
//     // var email = document.getElementById("email").value
//     // document.write(email)
//     // console.log(firstName,lastName)
// }


function data() {

    var firstName = document.getElementById("fname").value
    var lastName = document.getElementById("lname2").value
    var dateOfBirth = document.getElementById("dob").value
    var mobileNo = document.getElementById("mobile").value
    var email = document.getElementById("email").value
    document.write(firstName + "<br>" + lastName + "<br>" + dateOfBirth + "<br>" + mobileNo + "<br>" + email)
    // console.log(firstName)
    // console.log(lastName)
    // console.log(dateOfBirth)
    // console.log(mobileNo)
    // console.log(email)
}
//  QUESTION___2

function readMore() {
    var text = " Whether you want a natural or dramatic look can depend heavily on your eye makeup. For a natural look, stick to mascara, a very light eyeshadow (if any) and a boy brow. Make sure to get a good lengthening and volumizing mascara for extra lash definition. For a dramatic look, the options are endless. You’ll definitely need some liquid eyeliner, the perfect palette and all of the brushes necessary to get started. Try some of the top eye makeup brands like Urban Decay, KVD Vegan Beauty and Too Faced."
    var para = document.getElementById("para")
    para.innerHTML = text
}



//  QUESTION___3
function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var name = document.getElementById("name_row" + no);
    var country = document.getElementById("country_row" + no);
    var age = document.getElementById("age_row" + no);

    var name_data = name.innerHTML;
    var country_data = country.innerHTML;
    var age_data = age.innerHTML;

    name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    country.innerHTML = "<input type='text' id='country_text" + no + "' value='" + country_data + "'>";
    age.innerHTML = "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
}

function save_row(no) {
    var name_val = document.getElementById("name_text" + no).value;
    var country_val = document.getElementById("country_text" + no).value;
    var age_val = document.getElementById("age_text" + no).value;

    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("country_row" + no).innerHTML = country_val;
    document.getElementById("age_row" + no).innerHTML = age_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var new_name = document.getElementById("new_name").value;
    var new_country = document.getElementById("new_country").value;
    var new_age = document.getElementById("new_age").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='country_row" + table_len + "'>" + new_country + "</td><td id='age_row" + table_len + "'>" + new_age + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_name").value = "";
    document.getElementById("new_country").value = "";
    document.getElementById("new_age").value = "";
}