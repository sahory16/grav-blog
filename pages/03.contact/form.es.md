---
title: Contacto
cache_enable: false
form:
    name: my-nice-form
    fields:
        -
            name: name
            label: Nombre
            classes: form-control
            placeholder: 'Ingrese su nombre'
            autofocus: 'off'
            autocomplete: 'on'
            type: text
            validate:
                required: true
                classes: form-control
        -
            name: email
            label: Email
            classes: form-control
            placeholder: 'Ingrese su sorreo electronico'
            type: email
            validate:
                required: true
                message: 'Email no válido'
        -
            name: tel
            label: Teléfono
            classes: form-control
            placeholder: 'Ingrese su número celular'
            autofocus: 'off'
            autocomplete: 'on'
            type: text
            validate:
                required: true
                message: 'Celular no válido! Debe tener 10 dígitos'
                pattern: '^[0-9]{10}$'
        -
            name: dateb
            label: 'Fecha de Nacimiento'
            classes: form-control
            autofocus: 'off'
            autocomplete: 'on'
            type: date
            validate:
                required: true
                message: 'Fecha no válida, de ser mayor de edad!'
                min: '1960-01-01'
                max: '2001-06-03'
        -
            name: message
            label: Mensaje
            size: long
            placeholder: 'Ingresa el mensaje'
            type: textarea
            classes: form-control
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
                subject: 'Formulario de Contacto'
                body: '{% include ''forms/data.html.twig'' %}'
                process_markdown: true
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

