{% macro files(title, level, list) %}
  <h4>{{ title }}</h4>
  <ul>
    {% for file in list %}
      <li>{{ file }}</li>
    {% endfor %}
  </ul>
{% endmacro %}
