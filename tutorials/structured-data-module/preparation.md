---
layout: default
title: "Preparation"
has_children: false
nav_order: 1
parent: "Tutorial 3: Creating Machine Learning Models with Structured Data"
grand_parent: "Tutorials"
---
# Preparation
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

This section will prepare you with the background of the Smell Pittsburgh that we will use for this module. Smell Pittsburgh is a mobile application for crowdsourcing reports of bad odors, such as those generated from air pollution. The data is used to train a machine learning model to predict the presence of bad smell and create push notifications to inform citizens about the bad smell. You will need to read a paper and interact with the online visualization to explore data.

## Task 1

First, read the following paper to get an idea about the motivation, background, and design of the Smell Pittsburgh application.

- Yen-Chia Hsu, Jennifer Cross, Paul Dille, Michael Tasota, Beatrice Dias, Randy Sargent, Ting-Hao (Kenneth) Huang, and Illah Nourbakhsh. 2020. Smell Pittsburgh: Engaging Community Citizen Science for Air Quality. ACM Transactions on Interactive Intelligent Systems. 10, 4, Article 32. DOI:https://doi.org/10.1145/3369397. Preprint:https://arxiv.org/pdf/1912.11936.pdf.

<p style="color:red">At least you must read sections 1 (introduction), 2 (related work), 3 (design principles and challenges), and 4 (system) in the paper. Please note that If you come to the tutorial session without reading the paper, you will probably not be able to understand the entire machine learning pipeline well.</p>

When reading the paper, write down the answers to the following questions.

- Why is there a need to develop such an application in Pittsburgh?
- What are the data types that the Smell Pittsburgh application collects?
- How can the data be used potentially to help local people?
- What are the roles of machine learning in the Smell Pittsburgh project?

## Task 2

After you read the paper mentioned in the previous task, explore the data in the following URL that visualizes smell reports and air quality data. Please make sure you read the paper before doing this task.

- Link to Smell Pittsburgh data visualization: [https://smellpgh.org/visualization](https://smellpgh.org/visualization)

Specifically, please take a look at the following days to understand the distribution of data that have different conditions. For example, some days look good, some days have very bad odors, and some days are in the middle of these two extremes.

- [Example of a bad smell day](https://smellpgh.org/visualization?share=true&date=20200707&zoom=11&latLng=40.394,-79.914&city_id=1) (July 7, 2020)
- [Example of a good smell day](https://smellpgh.org/visualization?share=true&date=20210923&zoom=11&latLng=40.394,-79.914&city_id=1) (September 23, 2021)
- [Example of a not really good smell day](https://smellpgh.org/visualization?share=true&date=20210920&zoom=11&latLng=40.394,-79.914&city_id=1) (September 20, 2021)

Descriptions of the user interface are in section 4 of the paper mentioned in the previous task. Next, explore the data in the following days to find common patterns of bad smell days. You need to click the play button to animate the data to spot patterns.

- [July 7, 2020](https://smellpgh.org/visualization?share=true&date=20200707&zoom=11&latLng=40.394,-79.914&city_id=1)
- [Feb 16, 2022](https://smellpgh.org/visualization?share=true&date=20220216&zoom=11&latLng=40.394,-79.914&city_id=1)
- [Dec 3, 2017](https://smellpgh.org/visualization?share=true&date=20171203&zoom=11&latLng=40.394,-79.914&city_id=1)

When investigating the patterns of bad odors, write down your answers to the following questions, which will help you later do the assignments. We define “smell events” as the event within a specific time range that many people complained about bad odors.

- Are there common wind patterns (indicated by the blue arrows on the user interface near the circles) when smell events are about to happen or are happening?
- Are there common patterns in air quality sensor measurements (indicated by the circle on the user interface with colors) when smell events are about to happen or are happening?
- Can you use the patterns that you found to identify similar smell events on other days? Find at least three other days that have similar patterns.

## Task 3

Next, after you explore the data, go to the following web page to see the aggregated statistics to understand the distribution of users and smell reports temporally and spatially.

- Link to the data analysis page: [https://smellpgh.org/analysis](https://smellpgh.org/analysis)

When checking the analysis on the above-mentioned web page, answer the following questions and write your answers down.

- Are there any characteristics about the distribution of smell reports over time and geographical regions?
- What are the common descriptions of bad odors that people reported?
- What are the possible predictors (e.g., chemical compounds, weather data) of bad smell in the Pittsburgh region?

[Next: Tutorial]({{site.baseurl}}/tutorials/structured-data-module/tutorial){: .btn .btn-purple }
