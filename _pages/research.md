---
title: "Research"
layout: gridlay
sitemap: true
description: "Research in memorization, differential privacy, language model evaluation, quantization, and multimodal learning."
permalink: /research/
---

# Research

I develop methods to understand, audit, and improve machine learning systems. My work spans **theory and empirical methods**, from training-data memorization and privacy guarantees to evaluation in language, vision, and multimodal applications.

<a href="#privacy">Privacy & memorization</a> · <a href="#evaluation">Language model evaluation</a> · <a href="#efficiency">Efficient & multimodal learning</a>

<section markdown="0" id="privacy" class="research-theme">
<h2>Privacy & memorization</h2>
<p class="lead">What do models remember, and what does that reveal about their training data?</p>
<p>I study the connections between memorization, generalization, and privacy, and develop efficient methods for estimating memorization and auditing data exposure. I also work on differentially private learning and synthetic data.</p>
<ul><li><strong>Foundations:</strong> theoretical links between differential privacy, memorization, and input loss curvature (ICML 2024).</li><li><strong>Auditing:</strong> black-box membership inference using input loss curvature (NeurIPS 2024, Spotlight).</li><li><strong>Practical methods:</strong> efficient memorization estimates (ICML 2025; ICLR 2026), private image synthesis (TMLR 2024), and mental-health classification (Frontiers in Digital Health 2025).</li></ul>
<details><summary>Explore the papers and methods</summary>
<div markdown="1">
I investigate the relationships between memorization, generalization, differential privacy, and the geometry of a model's loss around individual samples. In [Unveiling Privacy, Memorization, and Input Curvature Links](https://openreview.net/forum?id=4dxR7awO5n){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (ICML 2024), we establish theoretical connections between these quantities. [Curvature Clues](https://openreview.net/forum?id=ZEVDMQ6Mu5){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (NeurIPS 2024, Spotlight) uses input loss curvature for black-box membership inference, examining whether a sample belonged to a model's training set.

Our subsequent work develops efficient, theoretically grounded memorization estimates: [Towards Memorization Estimation: Fast, Formal and Free](https://openreview.net/forum?id=KZlQEoEtiu){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (ICML 2025) and [Memorization Through the Lens of Sample Gradients](https://openreview.net/forum?id=jeTiBeW3iZ){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (ICLR 2026). These methods help make analysis of training-data influence and memorization practical at scale. I also study out-of-distribution detection, including [additive angular margin loss](https://openaccess.thecvf.com/content/CVPR2025W/WiCV/papers/Ravikumar_Improved_Out-of-Distribution_Detection_with_Additive_Angular_Margin_Loss_CVPRW_2025_paper.pdf){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (CVPR Workshops 2025).

### Privacy-preserving learning and synthetic data

I develop approaches for learning from sensitive data while controlling what models and released datasets reveal. [DP-ImgSyn](https://openreview.net/forum?id=KleJZ9ZzYw){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (TMLR 2024) combines dataset alignment and visual obfuscation with differential privacy for image synthesis.

In [DP-CARE](https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2025.1709671/full){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (Frontiers in Digital Health 2025), we apply differentially private learning to mental-health classification of social media posts. Together, these projects connect privacy analysis with practical methods for data sharing and model training.

</div>
</details>
</section>

<section markdown="0" id="evaluation" class="research-theme">
<h2>Language model evaluation</h2>
<p class="lead">How well do models perform across languages and specialized tasks?</p>
<p>I contribute to benchmarks and evaluation studies that test language models in financial and healthcare settings, including Greek-language tasks and expert assessment of medical summaries.</p>
<ul><li><strong>Financial NLP:</strong> Plutus for Greek finance (EMNLP 2025) and MultiFinBen for multilingual, multimodal evaluation (ACL 2026).</li><li><strong>Healthcare:</strong> multimodal stress detection (BioNLP 2025) and psychiatrists’ evaluation of LLM-generated systematic-review summaries (CL4Health 2026).</li></ul>
<details><summary>Explore the papers and methods</summary>
<div markdown="1">
I contribute to benchmarks that test language models across languages, modalities, and specialized tasks. [Plutus](https://aclanthology.org/2025.emnlp-main.1535/){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (EMNLP 2025) evaluates financial language understanding in Greek. [MultiFinBen](https://aclanthology.org/2026.acl-long.770/){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (ACL 2026) extends financial evaluation across languages and text, vision, and audio, with tasks of varying difficulty.

My healthcare NLP work includes [multimodal stress detection](https://aclanthology.org/2025.bionlp-1.4/){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (BioNLP 2025), combining social media text with synthesized visual information, and [expert evaluation of LLM-generated medical evidence summaries](https://aclanthology.org/2026.cl4health-1.18/){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (CL4Health @ LREC 2026). The latter examines whether summaries preserve clinically important information and meet psychiatrists' criteria for professional acceptability.

</div>
</details>
</section>

<section markdown="0" id="efficiency" class="research-theme">
<h2>Efficient & multimodal learning</h2>
<p class="lead">How can models use less computation while learning from richer signals?</p>
<p>I investigate model compression, hardware-aware learning, and representations that exploit the structure of compressed video. I also study generative augmentation across modalities.</p>
<ul><li><strong>Model and hardware efficiency:</strong> mixed-precision quantization (IEEE Access 2021) and hybrid RRAM–SRAM computing (DATE 2022).</li><li><strong>Video understanding:</strong> progressive knowledge distillation and unified spatio-temporal representations (WACV 2026).</li><li><strong>Cross-modal learning:</strong> generative augmentation for biological classification (TMLR 2026).</li></ul>
<details><summary>Explore the papers and methods</summary>
<div markdown="1">
My work on efficient models spans [mixed-precision quantization](https://doi.org/10.1109/ACCESS.2021.3116418){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (IEEE Access 2021), [hybrid RRAM–SRAM in-memory computing](https://doi.org/10.23919/DATE54114.2022.9774549){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (DATE 2022), and compressed-video understanding. For video, I investigate [progressive knowledge distillation](https://arxiv.org/abs/2407.02713){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} and [unified spatio-temporal representations](https://doi.org/10.1109/WACV61042.2026.00462){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (WACV 2026) that exploit motion vectors, residuals, and intra-frames to reduce computation.

I also work on [cross-modal generative augmentation for biological classification](https://openreview.net/forum?id=bowYeHa8dn){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (TMLR 2026), exploring how information from one modality can support learning in another. My earlier research on [recurrent-network stability](https://doi.org/10.1109/IJCNN.2019.8852181){:target="_blank" rel="noopener noreferrer" title="Opens in a new tab"} (IJCNN 2019) uses eigenvalue spectra to analyze training dynamics.

</div>
</details>
</section>

[Full publication list]({{ site.baseurl }}/publications/) · [Curriculum vitae]({{ site.baseurl }}/cv/cv.pdf) · [Discuss research or collaborations](mailto:{{ site.email }})

## Implementation expertise

I build prototypes and evaluation pipelines in Python and PyTorch, with experience in C/C++, Bash, Linux, Docker, and MATLAB. My work includes mixed-precision quantization with up to **6× network-size reduction** on evaluated models, knowledge distillation and early exits for compressed-video recognition, and hardware–software co-design. Results are specific to the experimental settings described in the linked papers.

**Code:** [DP-ImgSyn](https://github.com/Efstathia-Soufleri/DP-ImgSyn) · [Additive angular margin out-of-distribution detection](https://github.com/DeepakTatachar/Additive-Angular-Margin-OoD)
