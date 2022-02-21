<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="../img/favicon-wedding.svg"
    />
    <link rel="stylesheet" href="../css/style.css" />
    <title>Wendding Video Club</title>
  </head>
  <body>
  <?php 
$myemails = 'development@nerdmedia.pe, alonso@nerdmedia.pe';
$name = $_POST['name'];
$tel = $_POST['telephone'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = $myemails;
$email_subject = "Contacto Wedding Video Club";
$email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n 
Telefono: $tel \n Email: $email \n Mensaje: \n $message";
$headers = "From: $email";

mail($to, $email_subject, $email_body, $headers);
?>
    <section class="contactopage open thanks">
      <div class="containerContact">
        <div class="content">
          <div class="close">
            <a href="../index.html" class="btn-close cerrar"
              ><img src="../img/close.svg" alt="close"
            /></a>
          </div>
          <div class="center">
            <div class="contenido contenidoThnaks">
              <div class="textThank">
                <div class="titleThanks">
                  <h1>
                    ¡Gracias <br />
                    por escribirnos!
                  </h1>
                  <p>Nos contactamos en breve.</p>
                </div>
                <div class="btn">
                  <a href="../index.html" class="hvr-sweep-to-right">Ir la home</a>
                  <a href="#" class="instagram hvr-sweep-to-right"
                    >Ir a Instagram</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>
