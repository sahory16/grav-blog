---
title: Contacto
form:
    name: my-nice-form
    fields:
        -
            name: name
            label: Nombre
            placeholder: 'Ingrese su nombre'
            autofocus: 'on'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: email
            label: Email
            placeholder: 'Ingrese su sorreo electronico'
            type: text
            validate:
                rule: email
                required: true
        -
            name: message
            label: Mensaje
            size: long
            placeholder: 'Ingresa el mensaje'
            type: textarea
            validate:
                required: true
    buttons:
        -
            type: submit
            value: Enviar
            classes: 'gdlr-button with-border excerpt-read-more'
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to:
                    - '{{ config.plugins.email.from }}'
                    - '{{ form.value.email }}'
                subject: '[Feedback] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: feedback-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Gracias por contactarte con nosotros!'
        -
            display: thankyou
---

