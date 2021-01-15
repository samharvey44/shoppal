<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta name="description" content="Shopping list application.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="client-secret" content="{{ $clientSecret }}">
        <meta charset="utf-8">

        <title>{{ config('app.name') }}</title>

        <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        <script src="/js/manifest.js" defer></script>
        <script src="/js/vendor.js" defer></script>
        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>

    <body style="margin: 0">
        <div id="app" style="overflow-x: hidden"></div>
    </body>
</html>
