//Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters. Example output: “The name Thomas is longer than John by 2 characters”
var name1 = "Adam"   //variable 1
var name2 = "Rhino"  //variable 2
var e = (name2.length - name1.length)   //varible that subtracts name2 to name1
var t = (name1.length - name2.length)

if (name1.length < name2.length) {
    console.log(name1, "name is shorter than", name2, "by", e, "character");
}
else if (name1.length > name2.length) {
    console.log(name1,'is longer than', name2, "by", t, "characters")
}

