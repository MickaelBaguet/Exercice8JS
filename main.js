function majeur()
{
  var age = document.getElementById("age").value;
  // Si age n'est pas un nombre (NaN = Not an Number)
  if (isNaN(age))
  {
    alert("Entrez votre age !");
  }
  else
  {
    if (age >= 18)
    {
      alert("Vous êtes majeur");
    }
    else
    {
      alert("Vous êtes mineur");
    }
  }
}
