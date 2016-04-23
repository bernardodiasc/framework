<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <title>{% block title %}Framework{% endblock %}</title>
    <link rel="stylesheet" href="./index.css"/>
    {% block head %}{% endblock %}
  </head>
  <body class="page-{{ page }}">
    {# include '../components/header.html' #}
    {% block body %}{% endblock %}
    {% block footer %}{% endblock %}
    <script src="./index.js"></script>
  </body>
</html>
