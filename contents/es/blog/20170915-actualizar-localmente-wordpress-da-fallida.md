---
title: Actualizar localmente wordpress da fallida
link: http://fideox.federicomazzei.com.ar/actualizar-localmente-wordpress-da-fallida/
author: Fideo
description: 
post_id: 1254
created: 2017/09/15 11:23:47
created_gmt: 2017/09/15 14:23:47
comment_status: open
post_name: actualizar-localmente-wordpress-da-fallida
status: publish
post_type: post
---

# Actualizar localmente wordpress da fallida

![Actualizar localmente WordPress da fallida](/wp-content/uploads/2017/09/wordpress-logo-stacked-rgb.png) Tengo algunos clientes que usan WordPress como CMS de su sitio y para actualizarles los plugins o  a la versión mas reciente de este CMS prefiero hacerlo localmente (es decir en una máquina que no sea producción) para / por si hay errores que no impacten directamente al cliente que estaría visitando la página. También de esta forma logramos que no se pierda acceso al sitio. Cuando lo quería actualizar, ya sea plugins o versión de wordpress, me encontraba con un error que dice conexión fallida. Esto se debe a que no está habilitado en el servidor php la ![](http://fideox.federicomazzei.com.ar/wp-content/uploads/2017/09/php_logo.png)extensión php_curl que permite por este medio descargar esas actualizaciones. Para esto lo que necesitamos es editar el php.ini que se encutra en la raiz de nuestro php en windows en mi caso es c:\php\php.ini 

## Editar el php.ini

` ;extension=php_curl.dll ` y lo dejamos así ` extension=php_curl.dll ` [caption id="attachment_925" align="aligncenter" width="300"]![](/wp-content/uploads/2015/09/ubuntu-logo112.png) Sistema Operativo Linux[/caption] Para los que usan linux el php.ini se encuentra en /etc/php/7.0/apache2/php.ini para los que usan Ubuntu como yo. Mismo caso que Windows para editar este archivo, buscamos ` ;extension=php_curl.dll ` y lo dejamos así ` extension=php_curl.dll ` En ambos casos (Windows y Linux) una vez realizada esta modificación hay que reiniciar el servidor. Esto va a depender si tienen instalado Apache o nginx. **_Enjoy!!!_**