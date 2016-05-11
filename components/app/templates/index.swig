{% extends 'layout.swig' %}

{% set page = 'index' %}

  {% import "list.swig" as list %}
{% block body %}

  <h1>{{ title }}</h1>
  {% for component in components %}
    <h2>{{ component.component }}</h2>
    <h3>Compilers</h3>
    <ul>
      <li>Data: {{ component.data }}</li>
      <li>HTML: {{ component.html }}</li>
      <li>CSS: {{ component.css }}</li>
      <li>JS: {{ component.js }}</li>
    </ul>
    <h3>Files</h3>
    {{ list.files("Data", 4, component.files.data) }}
    {{ list.files("Templates", 4, component.files.templates) }}
    {{ list.files("Styles", 4, component.files.styles) }}
    {{ list.files("Scripts", 4, component.files.scripts) }}
    {{ list.files("Tests", 4, component.files.tests) }}
  {% endfor %}

{% endblock %}
