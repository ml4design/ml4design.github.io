---
layout: default
title: Task 1
parent: "Multimedia Processing"
---

# Task 1
{: .no_toc }


In this task, we will help you familiarize yourself with the Hugging Face tool. First, download the trash bin images from the link below on GitHub. The GitHub platform is a service for hosting code and data, largely used by the open-source community.

 - Link to code and images: [https://github.com/yenchiah/image-processing-tutorial](https://github.com/yenchiah/image-processing-tutorial)

<!-- TODO: add image -->
![creating new file]({{site.baseurl}}/assets/images/image7.png)

Second, go to the link below that contains a deployed machine learning model.

 - Link to the model: [https://huggingface.co/google/vit-base-patch16-224](https://huggingface.co/google/vit-base-patch16-224)

Next, use the web interface to classify one trash bin image in the "data/trash-bin/1/" folder that you just downloaded. You can use any image in the folder. *Please DO NOT use the images in the "data/trash-bin/2/" folder for this task*. Drag and drop the image to the area on the web interface, as shown in the following screenshot.

<!-- TODO: add image -->
![creating new file]({{site.baseurl}}/assets/images/image16.png)

The model that we just used is called **Vision Transformer**. It is a state-of-the-art model that takes images as input, and outputs the objects contained in the images - at least the ones recognized by the model. More information about the model is on the left side of the web page that we mentioned above.

After you drag and drop the image into the web interface, check the predictions from the model, as shown in the following screenshot.

<!-- TODO: add image -->
![creating new file]({{site.baseurl}}/assets/images/image10.png)

The output from the model has five predictions with corresponding numbers, which means the top five predictions. The numbers are probabilities, which indicates how confident the model is about the prediction, with 1 being the highest confidence and 0 being the lowest confidence. For example, in the above screenshot, the model predicts that the image has a trash bin with a 0.982 probability, which is very high.

To familiarize yourself with the web interface, repeat the above steps to use the Vision Transformer model to predict at least five images in the "data/trash-bin/1/" folder.

[Next: Task 2]({{site.baseurl}}/multimedia-processing/task2){: .btn .btn-purple }