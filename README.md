# 👁️ Computer Vision Engineer & Research Scientist

> *Teaching machines to see: from neurons, to insects, to satellites*

*For my full CV, see my [portfolio page](https://kalfasyan.github.io) or my [linktree](https://linktr.ee/kalfasyan) for a summary of links to my other online profiles.*  

## 🎯 About Me

I'm a **computer vision engineer and PhD** with **11 years of experience** building deep vision models and the systems that run them: image classification, object detection, semantic segmentation and neural image compression, deployed in the cloud, on the edge and on embedded hardware.

I started in **vision science**, comparing deep CNNs with how neurons in the primate visual cortex represent shape. Since then I've applied computer vision to industry, to **field imaging systems** for insect monitoring, and to **satellite imagery** for global land-cover mapping and on-board compression. Earth observation, agri-food and industry are the domains I work in, and **time-series and sensor signals** (optical wingbeats, predictive maintenance) are a strong supporting skill.

### 🧭 My professional journey
*One thread across 11 years: computer vision, applied to a new kind of image at each step. Full details under Background below.*

| Years | Vision domain | Role & highlights |
|:--|:--|:--|
| 2015–2017 | 🧠 **Biological vision**<br><sub>Vision neuroscience</sub> | **Doctoral Researcher**, KU Leuven neurophysiology lab · Deep CNNs as models of the primate visual cortex; predicting neuronal responses to images from CNN features |
| 2017–2018 | 🚀 **Industrial vision**<br><sub>Applied solutions</sub> | **Data Scientist**, Faktion · Computer vision for industrial clients (won a hackathon with video activity recognition), plus predictive maintenance on sensor data |
| 2018–2024 | 🐞 **Field & agri-food imaging**<br><sub>Edge devices</sub> | **PhD + Postdoc**, KU Leuven · Insect detection and classification from images and optical signals on Raspberry Pi devices, served through a production AWS platform; hyperspectral imaging |
| 2024– | 🛰️ **Satellite imagery**<br><sub>Earth observation</sub> | **R&D Engineer**, VITO · Cloud segmentation and global 10 m land-cover mapping for Copernicus (2024–26), now neural image compression (VQ-VAE) for edge and onboard hardware (2026–) |

## 🌍 Current & Recent Work

### 🛰️ R&D Engineer at [VITO Remote Sensing](https://remotesensing.vito.be/) (2024–present)

At VITO I build deep vision models for satellite imagery and the pipelines that run them at planetary scale. It is one continuous role in the Remote Sensing unit, with two workstreams so far.

**Now: efficient vision on the edge (2026–).** In the AGES (Applied GeoAI and Edge Solutions) team I optimize VITO's [CORSA model](https://blog.vito.be/remotesensing/democratising-eo-intelligence-corsa-and-major-tom-now-live-on-terrascope), a lightweight VQ-VAE that compresses satellite images on edge devices, trading model footprint against spatial and spectral fidelity. In parallel, I design custom MLOps tools for experiment tracking and on-prem GPU cluster job management.
```
📡 Satellite Images → 🔄 CORSA Compression (Edge) → 🖥️ On-Prem GPU Cluster
↳ 🔧 MLOps Tools: Experiment Tracking & Job Management
```
**Before: segmentation for global land cover (2024–2026).** In the team behind the [ESA WorldCover products](https://esa-worldcover.org/en), I developed AI models for the EU's Copernicus **[Land Cover and Forest Monitoring (LCFM)](https://land.copernicus.eu/en/news/lcfm-a-new-chapter-in-global-land-cover-monitoring)** project (**€11M budget**). I built multi-stage pipelines to process satellite data, producing global land cover maps at **10m resolution—ten times sharper than before**. My focus was on **cloud segmentation** models that identify usable observations, maintaining code repositories, and deploying the **classification models** that generate annual land cover maps, **directly supporting EU environmental policy and climate monitoring**.  

```
🛰️ Satellite Data → ☁️ AI Cloud Detection → 📊 Quality Composites → 🗺️ Global Land Cover Maps
                                    10m Resolution • Annual Updates • Planetary Scale
```  

### 🌊 ECMWF Code for Earth 2026

In the summer of 2026 I took part in [ECMWF Code for Earth](https://codeforearth.ecmwf.int), an innovation programme in which developer teams work with ECMWF mentors on open-source Earth-science software. Together with [Stylianos Lagaras](https://github.com/opageo), I worked on a **scalable STAC/Zarr pipeline for ML-ready, multi-source flood inundation observations**. The coding phase ran from May to August 2026.

#### <img src="https://github.com/opageo/atlantis/raw/main/docs/assets/logo.png" alt="Atlantis logo" height="30" align="absmiddle"> [Project Atlantis](https://github.com/opageo/atlantis)
<details>
<summary><strong>🌊 Project details & mentors</strong></summary>

ML-ready archive of satellite-derived flood inundation observations

* Harmonises flood observations from **VIIRS** (optical), **MODIS** (optical) and **GFM** (Sentinel-1 SAR) onto a common 1-arcmin grid.
* Offers a CLI, a Python API and a consolidated **Zarr/STAC archive** for ML workflows, with a worked example on the 2024 Valencia floods.

🙏 **Mentors**, with thanks for their guidance throughout:

* [Gianpaolo Balsamo](https://github.com/gpbalsamo) (ECMWF, ERA5 and land-surface modelling)
* [Calum Baugh](https://github.com/calumbaugh) (ECMWF, hydrology)
* [Kenza Tazi](https://github.com/kenzaxtazi) (ECMWF, ML)
* [Andreas Grafberger](https://github.com/andreas-grafberger) (ECMWF, DevOps)

```
🛰️ VIIRS + MODIS + GFM → 🧮 Harmonised 1-arcmin grid → 🗄️ Zarr/STAC archive → 🤖 ML-ready flood data
```

</details>

### 🏠 [selfhostit](https://selfhostit.org/): small apps you run at home

Outside my day job, I build **[selfhostit](https://github.com/selfhostit)**, a growing family of free, MIT-licensed apps for everyday household life that run on **your own hardware**, from a Raspberry Pi to a NAS. No subscriptions, no cloud accounts, no tracking: *your data never leaves the house.* It's where I get to own the whole stack, from product design and UX to backend, security and release engineering.

| App | What it does |
|:--|:--|
| 💸 **[Splitwiz](https://github.com/selfhostit/splitwiz)** | Split shared costs with a partner or roommate, with CSV import |
| 🗳️ **[should-we](https://github.com/selfhostit/should-we)** | Pick one option together: everyone weighs what matters and you get one ranking |
| 🌸 **[Flowy](https://github.com/selfhostit/flowy)** | A private period and cycle tracker with predictions and reminders, works offline |
| 🥗 **[Troye](https://github.com/selfhostit/troye)** | A private calorie and weight tracker; food photos are read by a vision model on your own GPU |
| 🛒 **[Shoppa](https://github.com/selfhostit/shoppa)** | A shared household shopping list with barcode scanning and Open Food Facts, works offline in the shop |
| 📅 **[Calio](https://github.com/selfhostit/calio)** | One household calendar for plans, pet sitting and trips, subscribable from Apple, Google or Outlook |

<details>
<summary><strong>🧱 How it's built</strong></summary>

* Every app grows from **[plasto](https://github.com/selfhostit/plasto)**, an open template I wrote with sign-in, a database, realtime sync, push notifications, scheduled jobs, nightly backups and a phone-installable web app already in place (**Go · PocketBase · Svelte 5 · Tailwind**, plus Python workers for ML).
* A **one-line installer** sets up Docker, installs pinned, checksummed releases and keeps them updated. Images ship for **amd64, arm64 and armv7**, so a Raspberry Pi 3 is enough.
* **Secure by default:** apps listen on localhost behind Tailscale or a reverse proxy, run unprivileged on a read-only filesystem, and are scanned with CodeQL, govulncheck, Grype and gitleaks, with signed build attestations.

```
🧩 plasto template → 📱 Household app → 🐳 Signed multi-arch images → 🏠 One-line install at home
```

</details>

## 🌐 Open Source Projects
Keywords: *Computer Vision, Image Processing, Satellite Data, Edge AI, CLI Tools, Web Development, DevOps, Python, Flask, NiceGUI, Solara, Streamlit*

**[`desto`](https://github.com/kalfasyan/desto)** - Web dashboard and CLI for managing scripts in tmux sessions  
![GitHub stars](https://img.shields.io/github/stars/kalfasyan/desto?style=flat-square&logo=github)  
- Full-stack web application with real-time system monitoring, live log viewing, script scheduling, and both web interface and command-line functionality.  

**[`vresto`](https://github.com/kalfasyan/vresto)** - Python interface for Copernicus Sentinel data discovery  
![GitHub stars](https://img.shields.io/github/stars/kalfasyan/vresto?style=flat-square&logo=github)
- Elegant interface featuring an interactive map for visual searching and high-resolution band visualization.
- Supports dual backends (OData/STAC), granular download management, and a professional CLI/API for programmatic satellite data retrieval.  

**[`filoma`](https://github.com/kalfasyan/filoma)** - File organization & management automation  
![GitHub stars](https://img.shields.io/github/stars/kalfasyan/filoma?style=flat-square&logo=github)
- Intelligent system designed to categorize and clean up large-scale research datasets based on metadata and content.
- Optimizes pre-processing workflows for ML environments by streamlining directory structures.

**[`plakakia`](https://github.com/kalfasyan/plakakia)** - Python image tiling library for computer vision tasks  
![GitHub stars](https://img.shields.io/github/stars/kalfasyan/plakakia?style=flat-square&logo=github)  
- High-performance image tiling tool for object detection and segmentation, utilizing multiprocessing and numpy for efficient processing.

**[`Home_Surveillance_with_Python`](https://github.com/kalfasyan/Home_Surveillance_with_Python)** - Motion detection surveillance system  
![GitHub stars](https://img.shields.io/github/stars/kalfasyan/Home_Surveillance_with_Python?style=flat-square&logo=github)
- End-to-end Edge AI product featuring real-time motion analysis on Raspberry Pi with cloud-notified alerts.

## 🛠️ Tech Stack

**Computer vision:** Semantic Segmentation • Image Classification • Object Detection (YOLO) • Neural Image Compression (VQ-VAE) • Video Activity Recognition • Multispectral & Hyperspectral Imaging • OpenCV  
**Earth observation:** Sentinel Data • Cloud Screening • Land-Cover Mapping • SAR & Optical EO • openEO • Zarr/STAC  
**Signals & time series:** Optical Sensor Signals • Predictive Maintenance • Signal Processing  
**Cloud:** AWS • Docker • FastAPI • Web GUIs (Streamlit, Solara, NiceGUI...)  
**Self-hosting & web apps:** Go • PocketBase • Svelte • Tailwind • PWAs • Multi-arch Docker • Tailscale  
**Data & MLOps:** PyTorch • MLflow • Hydra • Spark • Hadoop • xarray • IoT Sensors  

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=python,pytorch,github,sklearn,opencv,fastapi,go,svelte,tailwind,docker,ubuntu,linux,bash,vscode,aws,anaconda,raspberrypi" />
  </a>
</p>

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white) ![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white) ![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white) ![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white) ![Scipy](https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white) ![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white) ![Bash Script](https://img.shields.io/badge/bash_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Apache Hadoop](https://img.shields.io/badge/Apache%20Hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=black) ![Streamlit](https://img.shields.io/badge/Streamlit-%23FE4B4B.svg?style=for-the-badge&logo=streamlit&logoColor=white) ![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black) ![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white) ![OpenCV](https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![Raspberry Pi](https://img.shields.io/badge/-Raspberry_Pi-C51A4A?style=for-the-badge&logo=Raspberry-Pi) ![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white) 

## 🗂️ Background

### 💼 Professional Experience
  
<details>
<summary><strong>🛰️ Computer Vision for Earth Observation at VITO</strong> <em>(R&D Engineer; 2024–present)</em></summary>

One role in VITO's Remote Sensing unit, building deep vision models for satellite imagery:

- **Efficient vision on the edge (AGES team, 2026–):** Optimize [CORSA](https://blog.vito.be/remotesensing/democratising-eo-intelligence-corsa-and-major-tom-now-live-on-terrascope), VITO's lightweight VQ-VAE satellite image compression model for edge devices, and design custom MLOps tools for experiment tracking and on-prem GPU cluster job management
- **Global land cover (WorldCover & LCFM team, 2024–2026):** Developed cloud segmentation and land-cover classification models for the Copernicus [LCFM project](https://remotesensing.vito.be/services/copernicus-lcfm), producing annual global maps at 10 m
- Built distributed pipelines for multispectral satellite data with Hadoop, Spark and AWS, and inference workflows across local, AWS and openEO environments
- Contribute to EU Commission projects for sustainable development and climate change mitigation

</details>

<details>
<summary><strong>🐞 Computer Vision for Insect Monitoring at KU Leuven</strong> <em>(PhD & Postdoc, Bioscience Engineering; 2018-2024)</em></summary>

*PhD Focus:* [Optical Insect Identification using AI](https://kuleuven.limo.libis.be/discovery/fulldisplay?docid=lirias3887120&context=SearchWebhook&vid=32KUL_KUL:Lirias&lang=en&search_scope=lirias_profile&adaptor=SearchWebhook&tab=LIRIAS&query=any%2Ccontains%2CLIRIAS3887120&offset=0)

*Postdoc:* Productized research by developing a production-ready API and web dashboard, bridging the gap between raw AI models and end-user accessibility. Led AI projects, mentored PhD researchers, and specialized in hyperspectral imaging.

- Deployed production API server on AWS serving AI models and tools to **external companies** via a web interface ([demo-setup](https://www.veed.io/view/5147995d-7dad-44e0-b3c7-fd91f16699f0?panel=showcase), [demo-interface](https://www.veed.io/view/8efbeae2-e421-456a-9b50-30c968bcdf3e?panel=showcase), [demo-label-tool](https://www.veed.io/view/0cc62395-a29e-41f0-82ff-6218e6b28400?panel=share))
- Built image-based insect detection and classification (sticky-plate photos, Raspberry Pi imaging station) and CNNs on optical wingbeat signals (see [insect-trap](https://gitlab.kuleuven.be/mebios-dl/research/3e200920/flying_insect_trap), [wbai](https://gitlab.kuleuven.be/mebios-dl/research/3e181051/wbai), [stickybugs-ai](https://gitlab.kuleuven.be/mebios-dl/research/3e181051/stickybugs-ai))
- Developed software tools for IoT devices, desktop systems, and cloud infrastructure (see [photobox](https://gitlab.kuleuven.be/mebios-dl/research/3e181051/photobox), [example publication](https://www.sciencedirect.com/science/article/pii/S1574954123000663))
  
Created the [`plakakia`](https://github.com/kalfasyan/plakakia) library | **5 publications** in high-impact journals

</details>

<details>
<summary><strong>🚀 Data Scientist at Faktion</strong> <em>(1 year; 2017-2018)</em></summary>

Computer vision POCs for industry clients, alongside predictive maintenance on sensor data (Bridgestone) and sales analytics (Aliaxis).

**Achievement:** 🏆 Won hackathon on [Activity Recognition](https://youtu.be/zQ45C3eU1sg?t=80) (Vinci Energies)

</details>

<details>
<summary><strong>🧠 Vision Neuroscience & Deep Learning at KU Leuven</strong> <em>(Doctoral Researcher; 2 years; 2015-2017)</em></summary>

Studied deep CNNs as models of the primate visual system: compared how CNNs, macaque inferotemporal neurons and human observers represent shape, and built models that predict neuronal responses to images from CNN activations.

Specialized in the deep learning components of all published research | **4 publications** in top neuroscience journals | Presented [my work](https://jov.arvojournals.org/article.aspx?articleid=2651681) at VSS conference (Florida, USA). List of papers below:  
* **The ventral visual pathway represents animal appearance over animacy, unlike human behavior and deep neural networks.** Bracci, S., Ritchie, J. B., Kalfas, I., & Op de Beeck, H. P. (2019). *The Journal of Neuroscience*, 39(33), 6513-6525. [DOI](http://dx.doi.org/10.1523/JNEUROSCI.1714-18.2019)

* **Representations of regular and irregular shapes by deep Convolutional Neural Networks, monkey inferotemporal neurons and human judgments.** Kalfas, I., Vinken, K., & Vogels, R. (2018). *PLOS Computational Biology*, 14(10), e1006557. [DOI](http://dx.doi.org/10.1371/journal.pcbi.1006557)

* **Representation of semantic similarity in the left intraparietal sulcus: functional magnetic resonance imaging evidence.** Neyens, V., Bruffaerts, R., Liuzzi, A. G., Kalfas, I., Peeters, R., Keuleers, E., Vogels, R., De Deyne, S., Storms, G., Dupont, P., & Vandenberghe, R. (2017). *Frontiers in Human Neuroscience*, 11, 402. [DOI](http://dx.doi.org/10.3389/fnhum.2017.00402)

* **Shape selectivity of middle superior temporal sulcus body patch neurons.** Kalfas, I., Kumar, S., & Vogels, R. (2017). *eNeuro*, 4(3). [DOI](http://dx.doi.org/10.1523/ENEURO.0113-17.2017)  

</details>  

### 🎓 Education
  
<details>
<summary><strong>🐞 PhD in Bioscience Engineering</strong> <em>(KU Leuven, Belgium 🇧🇪; 4 years; 2018-2022)</em></summary>

Successfully completed doctoral research with a focus on optical insect identification using signal processing and computer vision with AI/ML/DL

</details>

<details>
<summary><strong>🧠 PhD Research* - Neurophysiology Lab (vision)</strong> <em>(KU Leuven, Belgium 🇧🇪; 2 years; 2015-2017)</em></summary>

**Fulfilled requirements early, but exited programme*

Studied object and shape representations in the primate visual cortex and how they compare with deep convolutional networks

</details>

<details>
<summary><strong>🎓 MSc. Machine Learning</strong> <em>(KTH Royal Institute of Technology, Stockholm, Sweden 🇸🇪; 2015)</em></summary>

Specialized in Computational Neuroscience and Spiking Neural Networks  
[Thesis research](https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A868833&dswid=-157) simulating neocortical structures using [NEST simulator in Python](https://nest-simulator.readthedocs.io/en/stable/index.html)

</details>

<details>
<summary><strong>🎓 BSc. Computer Science</strong> <em>(Aristotle University of Thessaloniki, Greece 🇬🇷; 2013)</em></summary>

Built a solid foundation in computing theory and educational information systems

</details>

## 📬 Contact

🌱 I'm always interested to learn about how computer vision and AI can improve our lives.  
💬 To reach out, send an email at kalfasyan[at]gmail[dot]com  
🔗 Check my [linktr.ee](https://linktr.ee/kalfasyan)  
  
📚 Researcher profiles:  
🧬 [orcid](https://orcid.org/0000-0002-9957-1502)  
🔬 [scholar](https://scholar.google.com/citations?user=WXHakDkAAAAJ&hl=en)  
📖 [researchgate](https://www.researchgate.net/profile/Ioannis-Kalfas-2)  
  
🌐 Stay connected through the following social media channels: [bluesky](https://bsky.app/profile/kalfasyan.bsky.social), [linkedin](https://www.linkedin.com/in/kalfasyan/), [github](https://github.com/kalfasyan/)
