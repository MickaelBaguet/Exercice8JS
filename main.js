function verifyAge()
{
  var age = document.getElementById("age").value;
  // Si age n'est pas vide et que c'est un nombre
  if (age && !isNaN(age))
  {
    // Si vous avez 18 ans ou plus
    if (age >= 18)
    {
      alert("Vous êtes majeur");
    }
    else
    {
      alert("Vous êtes mineur");
    }
  }
  else
  {
    alert("Entrez votre age !");
  }
}
