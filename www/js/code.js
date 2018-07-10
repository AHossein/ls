function ajouter()
  {
    var produit = document.getElementById("prod").value;
    var quantite = document.getElementById("qty").value;
    localStorage.setItem(produit,quantite); //dans la paranthese on a la clé et la value
    document.getElementById("prod").value="";
    document.getElementById("qty").value="";

    afficher()
  }

  function modifier()
  {
    var produit = document.getElementById("prod").value;
    document.getElementById("qty").value = localStorage.getItem(produit);

    afficher()
  }

function supprimer()
{
  var produit = document.getElementById("prod").value;
  localStorage.removeItem(produit);
  document.getElementById("prod").value="";

  afficher()
}

function doclear()
{
  localStorage.clear();

  afficher()
}

function afficher()
{
  var key = "";
  var paires = "<tr class=\"first\"><td><b>Produit</b></td><td><b>Quantité</b></td></tr><br/>";
  for (var cpt = 0; cpt < localStorage.length; cpt++)
  {
    var key = localStorage.key(cpt);
    paires +="<tr><td>"+key+"</td><td>"+localStorage.getItem(key)+"</td></tr><br/>";
  }
  if (paires == "<tr class=\"first\"><td><b>Produit</b></td><td><b>Quantité</b></td></tr><br/>")
  {
    paires += "<tr><td><i>VIDE</i></td><td><i>VIDE</i></td></tr><br/>";
  }
  document.getElementById("paires").innerHTML = paires;
}
