---
title: "Home"
layout: gridlay
sitemap: true
description: "Machine learning researcher developing privacy auditing methods, language model evaluations, and efficient multimodal systems."
permalink: /
---

<section markdown="0" class="profile-hero">
<div markdown="0">
<p class="eyebrow">Trustworthy & efficient machine learning</p>
<h1>Efstathia Soufleri</h1>
<p class="role-line">Postdoctoral Researcher · Archimedes Unit, Athena Research Center</p>
<p class="lead">I study what machine learning models memorize, how to protect sensitive data, and how to evaluate models beyond benchmark scores.</p>
<p>My work connects theoretical analysis with practical methods for privacy auditing, language-model evaluation, and efficient multimodal learning. Ph.D. in Electrical and Computer Engineering, Purdue University.</p>
<div markdown="0" class="profile-links"><a class="btn btn-success" href="{{ site.baseurl }}/cv/cv.pdf">Curriculum vitae</a><a href="mailto:{{ site.email }}">Contact</a><a href="{{ site.data.pi[0].dblp }}">DBLP</a><a href="{{ site.data.pi[0].github }}">GitHub</a></div>
</div>
<img class="profile-photo" src="{{ site.baseurl }}/images/headshot.jpg" alt="Efstathia Soufleri" />
</section>

## Research at a glance

<div markdown="0" class="research-grid">
<section markdown="0" class="research-card"><h3>Privacy & memorization</h3><p>Understand training-data exposure and develop efficient methods for memorization estimation and privacy auditing.</p><a href="{{ site.baseurl }}/research/#privacy">Explore this work →</a></section>
<section markdown="0" class="research-card"><h3>Language model evaluation</h3><p>Evaluate models across languages, modalities, and specialized financial and healthcare tasks.</p><a href="{{ site.baseurl }}/research/#evaluation">Explore this work →</a></section>
<section markdown="0" class="research-card"><h3>Efficient & multimodal learning</h3><p>Reduce computation through quantization and compressed-video representations, and learn across modalities.</p><a href="{{ site.baseurl }}/research/#efficiency">Explore this work →</a></section>
</div>

## Selected contributions

<div markdown="0" class="work-list">
<section><p class="eyebrow">NeurIPS 2024 · Spotlight</p><h3><a href="https://openreview.net/forum?id=ZEVDMQ6Mu5">Curvature Clues</a></h3><p><strong>Problem:</strong> audit whether models expose their training data.<br /><strong>My contribution:</strong> co-developed curvature-based privacy attacks and analysis connecting loss geometry with memorization.<br /><strong>Outcome:</strong> black-box membership inference; NeurIPS Spotlight.</p></section>
<section><p class="eyebrow">ICLR 2026</p><h3><a href="https://openreview.net/forum?id=jeTiBeW3iZ">Memorization Through the Lens of Sample Gradients</a></h3><p><strong>Problem:</strong> memorization estimates can be expensive to compute.<br /><strong>My contribution:</strong> developed sample-gradient-based proxies and fast, formal estimators.<br /><strong>Outcome:</strong> scalable methods reported at ICLR 2026 and ICML 2025.</p></section>
<section><p class="eyebrow">ACL 2026</p><h3><a href="https://aclanthology.org/2026.acl-long.770/">MultiFinBen</a></h3><p><strong>Problem:</strong> standard benchmarks miss multilingual financial tasks.<br /><strong>My contribution:</strong> built evaluation pipelines for Greek finance and multilingual, multimodal benchmarks.<br /><strong>Outcome:</strong> Plutus (EMNLP 2025) and MultiFinBen (ACL 2026).</p></section>
<section><p class="eyebrow">TMLR 2024</p><h3><a href="https://openreview.net/forum?id=KleJZ9ZzYw">DP-ImgSyn</a></h3><p><strong>Problem:</strong> share useful image data while protecting privacy.<br /><strong>My contribution:</strong> designed a discriminative synthesis framework with formal differential privacy guarantees.<br /><strong>Outcome:</strong> evaluated synthetic-data utility through downstream classification.</p><a href="https://github.com/Efstathia-Soufleri/DP-ImgSyn">Code & reproducibility →</a></section>
</div>

[View all publications]({{ site.baseurl }}/publications/) · [Research overview]({{ site.baseurl }}/research/)

## Methods & implementation

I develop research prototypes and training and evaluation pipelines in **Python and PyTorch**. My expertise includes differential privacy, membership inference, memorization estimation, benchmark development, model compression, and knowledge distillation.

## Recognition

**ICML 2026 Gold Reviewer** · **NeurIPS 2025 Top Reviewer** · **NeurIPS 2024 Spotlight**

[Background, awards & outreach]({{ site.baseurl }}/about/)

## Research opportunities

I am interested in research positions in academia and industry focused on trustworthy machine learning, privacy, model evaluation, and efficient learning. [Get in touch](mailto:{{ site.email }}) to discuss opportunities and collaborations.
