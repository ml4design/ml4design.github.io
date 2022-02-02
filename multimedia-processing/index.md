---
layout: default
title: Multimedia Processing
has_children: true
nav_order: 1
---
# Multimedia Processing
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Learning Goals

Welcome to the multimedia processing module. This handout contains information for the image process tutorial, individual assignment, and group assignment. This module has the following learning goals:  

 - **Goal 1**: Understand how image processing can be applied to inform the design of product-service systems or to be integrated into such systems (i.e., what can we do using image processing techniques?)
 - **Goal 2**: Be able to critically reflect on model capability by understanding how the input image quality and conditions can affect model performance (i.e., why image processing techniques work or do not work as expected?)
 - **Goal 3**: Understand how to automate the image processing pipeline using Python, document how the code works, and have good code quality

## Preparation

This section prepares you for the module using image classification tasks. We will give you a hypothetical scenario about the requirement of building a product-service system to identify trash bins in cities using image processing.

Suppose you work with the city of Amsterdam to design an effective trash collection service. In order to design the service, the municipality must know where all the trash bins in the city are. Actually, the Amsterdam municipality knows where all the containers are, but this is not common for all cities in the world. More information about the location of trash bins in Amsterdam is in the following:

 - Trash bin locations: [https://kaart.amsterdam.nl/afvalcontainers](https://kaart.amsterdam.nl/afvalcontainers)

Your task is to design and build an application that is able to recognize a trash bin from images collected by the scan cars traveling around the city. In this way, the city can then calculate the location of trash bins. More information about the scan cars is in the following:

 - Scan car: [https://algoritmeregister.amsterdam.nl/en/automated-parking-control/](https://algoritmeregister.amsterdam.nl/en/automated-parking-control/)

To build the trash bin recognition application, we will use a pre-trained machine learning model hosted on [Hugging Face](https://huggingface.co). Hugging Face is an online service where pre-trained machine learning models are hosted and made available for use. A "pre-trained" model means that someone already trained the model using some datasets (could be very large) to find useful parameters. Modern models can be hard to train in terms of the amount of needed data and computation resources. The benefit of using a pre-trained model is that the hard work is done by someone else. So, you save time collecting a large dataset to train the model.

Machine learning models have many parameters that represent the distribution of the data. For example, think about a regression model *y=mx+b* where *y* and *x* represent blood pressure and age, respectively. In this case, m and b are the parameters of the model that represent the slope and interception. Typically, parameters in the machine learning models are initialized using random numbers. And “training” a model means finding the parameters that make the model fit the data well. Using the regression model that we mentioned before as an example, training the model means that we want to find a good pair of m and b that makes the model predict blood pressure from age reasonably well.

<p style="color:red">
Before attending the tutorial, complete the tasks listed in the following subsections. We will discuss the results at the beginning of the tutorial session.</p>

{: .no_toc }

[Next: Task 1]({{site.baseurl}}/multimedia-processing/task1){: .btn .btn-purple }