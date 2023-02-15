---
layout: default
title: "Preparation"
has_children: false
nav_order: 1
parent: "Tutorial 1b: Teachable Machine"
grand_parent: "Tutorials"
---

- [Preparation](#preparation)
  - [Introduction of Teachable Machine](#introduction-of-teachable-machine)
  - [Task 1: How to use Teachable Machine - Image](#task-1-how-to-use-teachable-machine---image)
    - [How to Train it](#how-to-train-it)
  - [Task 2: How to use Teachable Machine - Audio](#task-2-how-to-use-teachable-machine---audio)
    - [How to Train it](#how-to-train-it-1)
  - [Conclusion](#conclusion)
  - [Extra Resources](#extra-resources)


# Preparation
In the previous tutorial, we delved into using a pre-trained model from Hugging Face to recognize different image classes. This allowed us to get started with image classification quickly, without having to train a model from scratch. However, pre-trained models may not always perform optimally on your specific dataset. That's why in this tutorial, we will be focusing on building our own custom image classification model using a tool called Teachable Machine.

Teachable Machine is a web-based machine learning tool. With Teachable Machine, you can easily create and train your own machine learning models without writing any code. The tool provides a simple and intuitive interface that guides you through the process of selecting a type of model, uploading your training data, and training the model to recognize specific patterns or objects. Once the model is trained, you can evaluate its accuracy by testing it on new data.

Building your own model with Teachable Machine is an excellent way to learn about how machine learning models are trained and how they can be used to recognize patterns in data. With just a few clicks, you can train a model that is tailored to your specific use case, improving its accuracy and performance. Additionally, by creating your own model, you have complete control over the data and the results, making it easier to understand how the model is making its predictions.

## Introduction of Teachable Machine
An introduction video for Teachable Machine:
<!-- [![Introduction](https://teachablemachine.withgoogle.com/assets/img/contentpage/home/poster.jpg)](https://www.youtube.com/embed/T2qQGqZxkD0) -->
<iframe width="500" height="281" src="https://www.youtube.com/embed/T2qQGqZxkD0" title="Teachable Machine 2.0: Making AI easier for everyone" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

> Question: How does Teachable Machine work?

> Hint: Teachable Machine uses transfer learning, which is a simplified version of deep learning. This allows users to train effective machine learning models with limited training data, making it possible for beginners to create models even if they don't have a lot of data to work with. More details could be found at [https://codelabs.developers.google.com/tensorflowjs-transfer-learning-teachable-machine#0](https://codelabs.developers.google.com/tensorflowjs-transfer-learning-teachable-machine#0)

In this preparation, we will assist you to become acquainted with Teachable Machine. Please open the following link ([https://teachablemachine.withgoogle.com/](https://teachablemachine.withgoogle.com/)). The link will direct you to the website shown in the following picture, and press the button "Get Started".
![Start Page]({{site.baseurl}}/assets/images/teachable-machine/images-Preparation/1-front_page.png)

Before attending the tutorial, complete the tasks listed in the following subsections. We will discuss the results at the beginning of the tutorial session. In the upcoming tasks, we will tackle two different types of classification - image classification and audio classification. The image classification task will be represented by a red frame, while the audio classification task will be represented by a green frame. 
![Task Selection]({{site.baseurl}}/assets/images/teachable-machine/images-Preparation/2-tasks.png)

## Task 1: How to use Teachable Machine - Image
This following tutorial is originated from [Bananameter](https://medium.com/@warronbebster/teachable-machine-tutorial-bananameter-4bfffa765866).

### How to Train it
1. To train the machine, the first step involves defining the various categories or classes that it will learn to differentiate. In this instance, we will create two classes - one for pens and another for scissors. These classes form the basis for the machine's learning journey. By establishing these categories, we are giving the machine a clear direction on what it needs to identify and what features or patterns it should focus on.
![Define Classes]({{site.baseurl}}/assets/images/teachable-machine/images-Preparation/3-task_1-class_name.png)

2. Now that the classes have been defined, it's time to give the machine some examples to learn from. I will provide examples for both classes through webcam, including pens and scissors.
![Collect Images]({{site.baseurl}}/assets/images/teachable-machine/images-Preparation/3-task_1-class_image.png)

3. With all of the classes ready, it's time to begin the training process. I simply need to hit the train button and the machine will start learning from the examples I have given for each class. 
![Train Model]({{site.baseurl}}/assets/images/teachable-machine/images-Preparation/3-task_1-train.png)

4. Additionally, you can preview the performance of the model on the right-hand side of the screen. The model will provide you with an output indicating how confident it is in its predictions for each of the classes. 
![Test Result]({{site.baseurl}}/assets/images/teachable-machine/images-Preparation/3-task_1-result.png)

## Task 2: How to use Teachable Machine - Audio
This following tutorial is originated from [Snap, Clap, Whistle](https://medium.com/@warronbebster/teachable-machine-tutorial-snap-clap-whistle-4212fd7f3555).

### How to Train it
1. This task at hand involves detecting snaps and claps from a mixture of background noises. This means that the machine will have to be trained to recognize certain patterns in audio inputs and distinguish between different sounds.
![Define Classes]({{site.baseurl}}/assets/images/teachable-machine/images-Preparation/4-task_2-class_name.png)

2. Now that the classes have been defined, it's time to give the machine some examples to learn from. I will provide examples for all classes through microphone, including background noise, snap, and clap.
![Collect Images]({{site.baseurl}}/assets/images/teachable-machine/images-Preparation/4-task_2-class_audio.png)

3. With all of the classes ready, it's time to begin the training process. I simply need to hit the train button and the machine will start learning from the examples I have given for each class. 
![Train Model]({{site.baseurl}}/assets/images/teachable-machine/images-Preparation/4-task_2-train.png)

4. Additionally, you can preview the performance of the model on the right-hand side of the screen. The model will provide you with an output indicating how confident it is in its predictions for each of the classes. 
![Test Result]({{site.baseurl}}/assets/images/teachable-machine/images-Preparation/4-task_2-result.png)

> Question: Why is it necessary to capture background noise as a class in the audio classification task?

> Answer: The reason for recording background noise as a separate class in the audio classification task is to enhance the machine's understanding of the context in which the audio is recorded. Background noise, such as traffic sounds, music, or people talking, can often interfere with the audio recording and affect the machine's ability to accurately classify the audio. By having background noise as a distinct class, the machine can learn to distinguish between the actual audio and the background noise, which can result in improved performance and accuracy.

> Question: What about the image classification task?

## Conclusion
In this preparation, we have gained an understanding of how to use Teachable Machine for both image and audio classification. We have learned how to build and train models that are capable of recognizing patterns and objects within these two data formats. By following this preparation, we now have the skills and knowledge to create custom machine learning models that are tailored to specific use cases.

## Extra Resources
- Frequently asked questions: [https://teachablemachine.withgoogle.com/faq](https://teachablemachine.withgoogle.com/faq)
- Teachable Machine Tutorials: [https://www.youtube.com/playlist?list=PLJfHZtseuscuTQfodmFnbZ3rBgCWsRT9t](https://www.youtube.com/playlist?list=PLJfHZtseuscuTQfodmFnbZ3rBgCWsRT9t)
- Predict poses with Teachable Machine: [https://medium.com/@warronbebster/teachable-machine-tutorial-head-tilt-f4f6116f491](https://medium.com/@warronbebster/teachable-machine-tutorial-head-tilt-f4f6116f491)


[Next: Tutorial]({{site.baseurl}}/tutorials/teachable-machine-module/tutorial/){: .btn .btn-purple }