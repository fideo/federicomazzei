---
title: Reaction Commerce usando propio servidor
link: http://fideox.federicomazzei.com.ar/reaction-commerce-usando-propio-servidor/
author: Fideo
description:
post_id: 1278
created: 2017/09/25 19:49:48
created_gmt: 2017/09/25 22:49:48
comment_status: open
name: 20170925-reaction-commerce-usando-propio-servidor
status: publish
post_type: post
---

# Reaction Commerce usando propio servidor

Les comparto este video que le prometí a Alexander Ditzend, el cual muestra como subo al servidor de hosting (en mi caso por el momento DonWeb) la plataforma de Reaction Commerce. [embed]https://youtu.be/du7gkeJniu8[/embed]

## Estos son los dos comandos que utilicé en el video.

#### deployreaction.sh

`#!/bin/sh echo "Generando el deploy de Reaction" echo "meteor build --server-only ../new_package/ && mv ../new_package/*.tar.gz ./reaction.tar.gz" fecha=$(date +%d-%m-%Y) fechahora=$(date +%Y%m%d%H%M%S) meteor build --server-only ../new_package/ && mv ../new_package/*.tar.gz ./reaction_$fechahora.tar.gz` Lo que hago es simplemente ejecutar el comando **[meteor build**](https://guide.meteor.com/deployment.html#custom-deployment) pero con el agregado de que cuando termine, mueva el .tar.gz que genera en ../new_package/ a mi directorio de proyecto insertandole la fecha de deploy al nombre del archivo .tzr.gz Esto es para tener un versionado de los deploys. Luego subo el .tar.gz generado al servidor ya sea por ftp, scp o algún otro método disponible para subirlo. Una vez arriba el archivo ejecuto el segundo comando `#!/bin/bash clear echo "Realizando el update del deploy de Reaction" echo "Descomprimo el archivo .tar.gz dejado en este mismo directorio" tar vxzf *.tar.gz echo "entrando al directorio /home/fideo/proyectos/reaction/tmp/bundle/programs/server" cd /home/fideo/proyectos/reaction/tmp/bundle/programs/server echo "npm install --production" npm install --production echo "npm prune --production" npm prune --production directorio="/home/fideo/proyectos/reaction/bundle.old" # Controlo que exista el $DIRECTORY . if [ -d "$directorio" ]; then rm -Rf /home/fideo/proyectos/reaction/bundle.old fi echo "cambio de nombre el bundle actual por bundle.old" mv /home/fideo/proyectos/reaction/bundle /home/fideo/proyectos/reaction/bundle.old echo "Cambio el nuevo bundle generado en /tmp al directorio de produccion" mv /home/fideo/proyectos/reaction/tmp/bundle /home/fideo/proyectos/reaction/bundle echo "" passenger-config restart-app /home/fideo/proyectos/reaction/bundle`   [caption id="" align="alignleft" width="499"]![Reaction Commerce](https://reactioncommerce.com/images/home/logo.svg) Reaction Commerce[/caption]
