---
title: An overview of Kubernetes
date: 2019-01-07
published: true
tags: ['Markdown', 'Cover Image']
series: false
cover_image: ./images/kubernetes.png
canonical_url: false
description: "Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management."
---

It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation. It aims to provide a "platform for automating deployment, scaling, and operations of application containers across clusters of hosts". It works with a range of container tools and runs containers in a cluster, often with images built using Docker. Kubernetes originally interfaced with the Docker runtime through a "Dockershim"; however, the shim has since been deprecated in favor of directly interfacing with the container through containerd, or replacing Docker with a runtime that is compliant with the Container Runtime Interface (CRI) introduced by Kubernetes in 2016.

