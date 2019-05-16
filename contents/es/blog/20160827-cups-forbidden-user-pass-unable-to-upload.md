---
title: CUPS forbidden user pass unable to upload
link: http://fideox.federicomazzei.com.ar/cups-forbidden-user-pass-unable-to-upload/
author: Fideo
description:
post_id: 1087
created: 2016/08/27 17:29:11
created_gmt: 2016/08/27 20:29:11
comment_status: open
name: 20160827-cups-forbidden-user-pass-unable-to-upload
status: publish
post_type: post
---

# CUPS forbidden user pass unable to upload

Cuando intentás instalar una impresora en Linux a través de **CUPS** (que significa Common _Unix Printing System_) y te encontrás con errores del tipo **forbidden unable to upload cupsd.conf file** \--> cuando intentás grabar el archivo cupsd.conf **Login forbidden** \--> cuando intentas poner user y pass **Print Test Page** u otra acción esto se debe a que el usuario que estas ingresando no tiene permisos o no pertenece al grupo lpadmin, es decir **CUPS forbidden**. Para poder corregir esto tenes que ejecutar la siguiente linea en una consola `sudo adduser "usuario" lpadmin` Donde: sudo es el superusuario adduser es el comando para agregar un usuario "usuario" va a ser el usuario que intentas agregar al grupo lpadmin lpadmin es el grupo al que estamos interesados agregar el "usuario" Digamos que si tu usuario para iniciar sesión en linux es pepito y pones la contraseña 123456 tu comando quedaría así: sudo adduser pepito lpadmin También quiero aclarar que en mi caso estaba instalando una **HP laserjet Profesional 1102 w** y para que funcione correctamente en linux tuve que bajarme el driver de este sitio <http://hplipopensource.com/hplip-web/index.html> porque cuando lo estaba instalando me dijo linux que no tenía el driver correcto. Espero que les sirva, sino me escriben un comentario acá mismo y trataré de ayudar.
