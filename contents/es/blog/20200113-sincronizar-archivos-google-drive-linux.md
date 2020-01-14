---
title: Sincronización con Google Drive en Linux usando grive
author: Fideo
description: Para poder tener sincronizado los archivos que tenes en tu google drive localmente en tu PC
post_id: 1257
created: 2020/01/13 11:00:00
created_gmt: 2020/01/13 11:00:00
comment_status: open
name: 20200113-sincronizar-archivos-google-drive-linux
id: 20200113-sincronizar-archivos-google-drive-linux
status: publish
post_type: post
---


## Sincronización con Google Drive en Linux

Lo saqué de [el baul del programador](https://elbauldelprogramador.com/sincronizar-google-drive-en-linux-en-4-pasos/){target=_blank} que el autor de esa nota a su vez lo sacó de una página que al momento de escribir esta nota da error 404, es decir no existe. [Howto: Auto-sync Google Drive to a local folder with Grive. Ubuntu & Debian >> http://openlinuxforums.org](https://openlinuxforums.org/index.php?topic=3144.0){target=_blank}

### Lo primero que necesitamos es instalar grive

Para esto si estamos con la distribución de Ubuntu 

```bash
$ sudo add-apt-repository ppa:nilarimogard/webupd8
$ apt-get update
$ apt-get install grive
```
una vez instalado creamos un directorio donde va a guardar toda la información que tenemos o sincronizaremos con google drive, para esto yo hice 

```bash
$ mkdir ~/Drive
$ cd ~/Drive
$ grive -a
```
con mkdir ~/Drive creo un directorio dentro de mi home "user" que se llame Drive, luego entro a ese directorio con cd ~/Drive y por último ejecuto el comando grive -a que este comando sirve para generar los permisos necesarios para poder utilizar la cuenta de google drive con grive.

Acá es donde a veces nos encontramos con un problema que no podemos autentificar contra google drive ya que nos dá un error el cual nos informa que tiene permisos o no se encuentra diponible.
Para solucionar esto lo que hice fue lo siguiente, entré al repositorio oficial de grive [https://github.com/vitalif/grive2](https://github.com/vitalif/grive2){target=_blank} en la sección que se llama *_Different OAuth2 client to workaround over quota and google approval issues_* y realicé los pasos del 1 al 9 tal cual los mensiona ahí.

Una vez realizado esos pasos cree un cron que llamara directamente a grive con el <client_id> y <client_secret> quedaría algo así:

```bash
grive --id <client_id> --secret <client_secret>
```
