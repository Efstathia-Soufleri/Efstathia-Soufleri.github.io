---
title: "Publications"
layout: gridlay
sitemap: false
permalink: /publications/
years: [2022, 2019, 2021]
---

<style>
.jumbotron{
    padding:3%;
    padding-bottom:10px;
    padding-top:10px;
    margin-top:10px;
    margin-bottom:30px;
}
</style>

<div class="jumbotron">
### Publications
{% bibliography --query @article, @inproceedings %}
</div>

<!-- <div class="jumbotron">
### Refereed journal articles
<!-- {% raw %} -->
{% bibliography --query @article %}
<!-- {% endraw %} -->
</div> -->

<!-- <div class="jumbotron">
### Refereed conference proceedings
{% raw %}
{% bibliography --query @inproceedings %}
{% endraw %}
</div> -->

