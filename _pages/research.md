---
title: "Research"
layout: gridlay
sitemap: false
permalink: /research/
---

<style>
img{
border-radius: 10px;
}
.col-md-3 {
margin-top:10px;
margin-bottom:10px;
padding:0px;
display:block;
overflow:hidden;
text-align:center;
display: table-cell;
background: white;
border-radius: 20px;
height: auto;
}
iframe {
margin:0;
padding:0;
width: 175px;
display: inline;
vertical-align: middle;
}
</style>

## Research

I work on making machine learning models more trustworthy — understanding what they memorize, whether that leaks private data, and how to evaluate them rigorously before deployment.

<div class="jumbotron">
<div class="col-md-12 col-sm-12">
<h4>Privacy, Memorization &amp; Trustworthy ML</h4>

I study the connections between memorization, generalization, and privacy in deep neural networks, using input loss curvature as a lens for understanding how models behave differently on training versus unseen data. This work led to a black-box membership inference attack based on input loss curvature (NeurIPS 2024, Spotlight) and a follow-up study formally linking privacy, memorization, and curvature (ICML 2024). More recently, this line of work has extended into fast, formal memorization estimation (ICML 2025) and sample-gradient-based memorization proxies (ICLR 2026), alongside out-of-distribution detection methods (CVPR 2025) — framing memorization as a general-purpose diagnostic tool for both privacy auditing and dataset quality. I also work on differentially private generative modeling: DP-ImgSyn releases synthetic images with formal DP guarantees while remaining visually dissimilar to the private data they're derived from, and DP-CARE (led by mentee Dimitris Karpontinis) applies differentially private fine-tuning to mental-health classification on social media text.
</div>
</div>

<div class="jumbotron">
<div class="col-md-12 col-sm-12">
<h4>Scalable Evaluation for Large Language Models</h4>

I build evaluation pipelines for large language models in low-resource domains, including Plutus, a benchmark for Greek-language financial NLP, and MultiFinBen, a multilingual and multimodal benchmark for financial LLMs. This extends to cross-modal generative augmentation for biological classification (led by mentee Hyunwoo Yoo, TMLR 2026), applying similar rigor to evaluating models on scientific and biomedical data.
</div>
</div>

<div class="jumbotron">
<div class="col-md-12 col-sm-12">
<h4>Efficient Neural Networks &amp; Multi-Modal Learning</h4>

Earlier work in my PhD focused on making deep learning more efficient and hardware-friendly: a mixed-precision quantization method that uses a multi-layer perceptron to predict layer-wise bit-widths, achieving up to 6x compression with no accuracy loss (IEEE Access 2021); a hybrid RRAM-SRAM system for energy-efficient, error-resilient in-memory computing (DATE 2022); and compressed-video action recognition pipelines using progressive knowledge distillation to significantly speed up inference while retaining accuracy.
</div>
</div>