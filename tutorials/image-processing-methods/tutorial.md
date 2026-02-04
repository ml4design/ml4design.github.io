---
layout: default
title: "Tutorial"
has_children: false
nav_order: 2
parent: "Tutorial 1a: Image Processing Methods for IPPSs"
grand_parent: "Tutorials"
---

# Tutorial
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

This section explains the tasks that we will give to you with the guidance of course coaches. In the tutorial session, we will first discuss your findings in the tasks in the “Preparation” section. Next, we will introduce another scenario, where you will use a different set of images to build another application.


|**Design brief.** Suppose you are working on designing a parking service with the municipality, and you want to build an application to understand the distribution of bikes in cities using image processing techniques. Since the scan cars (as mentioned in the “Preparation” section) take a huge amount of photos, we need a scalable approach to process these photos.|

## Task 5

In this task, we will teach you how to automate the image processing pipeline using Python and the Google Colab online tool [https://colab.research.google.com](https://colab.research.google.com){:target="_blank"}. We will give you a script that can process an image using a deployed Hugging Face model. We will guide you through editing the script on Colab to make it work for the bike images that we will provide.

![colab how to]({{site.baseurl}}/assets/images/coding-pipeline.png)

The above figure shows the pipeline. The Python code and the bike image data sit on your coding environment, which is the Colab online tool in our case. Then, when running the code from Colab, the computer that hosts your code will request the Hugging Face API to send and process your data. Once the request is confirmed valid (for example, through the API token), the Hugging Face API will tell a deployed machine learning model to process your data. Finally, the Hugging Face API will collect the results returned by the model and return the results to your coding environment.

First, [check the code on Colab](https://colab.research.google.com/drive/1IYWjg66TZbSWr_xboAhUn_VTwN4uKJZT?usp=sharing){:target="_blank"}. This notebook contains the code and images that we want to use in this task. Press the `Copy to Drive` button and it will copy the notebook to your own Google drive. 

![colab how to]({{site.baseurl}}/assets/images/fork_button_2025.png)

<!-- First, download the bike images from the link below. The bike images are in the “data/bike” folder. You should already have downloaded the data in the Preparation section. -->

 - The code and images can also be found here: [https://github.com/ml4design/image-processing-tutorial](https://github.com/ml4design/image-processing-tutorial){:target="_blank"}

<!-- Next, create a new project on Replit and name it “image-processing”, as shown in the following screenshot. Remember to use the “Python” template. -->

<!-- ![replit how to]({{site.baseurl}}/assets/images/replit1.png) -->

<!-- Then, copy the code from the following script on the GitHub repository. -->

 <!-- - [https://github.com/yenchiah/image-processing-tutorial/blob/main/main.py](https://github.com/yenchiah/image-processing-tutorial/blob/main/main.py)  -->

<!-- ![replit how to]({{site.baseurl}}/assets/images/image13.png) -->

<!-- Next, paste the code that you just copied from GitHub to the Replit project (to the “main.py” file) that you just created, as shown below. -->

<!-- ![replit how to]({{site.baseurl}}/assets/images/image19.png) -->

<!-- Next, upload the entire “data” folder to Replit, as shown below. -->

<!-- ![replit how to]({{site.baseurl}}/assets/images/image12.png) -->

<!-- After that, your replit folder structure should look like the following: -->

<!-- ![replit how to]({{site.baseurl}}/assets/images/image17.png) -->

Then, go to the following page to copy your Hugging Face API token. You should already have an API token ready, as indicated in the Preparation section.

 - Link to the API token: [https://huggingface.co/settings/token](https://huggingface.co/settings/token){:target="_blank"}

![replit how to]({{site.baseurl}}/assets/images/image18.png)

<!-- Next, find the following line in the Python script. Replace the [PLACE_HOLDER] part with the copied API token. You need to also replace everything inside the quotation marks. -->
Next, let's input the API Token into Colab. Go to your Colab notebook and on the left of your screen press the key logo to display the "Secrets" panel. 

![replit how to]({{site.baseurl}}/assets/images/image-processing/tools-secret_2025.png)  
Click on the "Add new secret" button and it will ask you to fill in a Name and a Value. In the Name field input `API_TOKEN` and in the Value field input your HuggingFace API Token. Also toggle "Notebook access".

<!-- ![replit how to]({{site.baseurl}}/assets/images/image-processing/secrets.gif) -->

<!-- |API_TOKEN = "[PLACE_HOLDER]"|  -->

<!-- ```python
API_TOKEN = "[PLACE_HOLDER]"
``` -->
More information about how to use the API can be found in the following page:

 - [https://huggingface.co/docs/inference-providers/en/providers/hf-inference](https://huggingface.co/docs/inference-providers/en/providers/hf-inference){:target="_blank"}

After finishing the above steps, click on the play button of the first few code cells to copy files into the workspace, import packages, and define the query function.
After that go to the "Query"  section of the notebook and run this code block there:

![colab how to]({{site.baseurl}}/assets/images/image20_2025.png)

It should give you the following result below the code cell:

```
[{'label': 'Egyptian cat', 'score': 0.9374415874481201}, {'label': 'tabby, tabby cat', 'score': 0.03844254091382027}, {'label': 'tiger cat', 'score': 0.01441141776740551}, {'label': 'lynx, catamount', 'score': 0.003274336690083146}, {'label': 'Siamese cat, Siamese', 'score': 0.0006795947556383908}]
```

Seeing the above result means that the code is running correctly. The result is the output from a deployed machine learning model that is specified in the following line in the code:

```python
API_URL = "https://api-inference.huggingface.co/models/google/vit-base-patch16-224"
```

And the input image is specified in the following line in the code. It is a path that points to an image file, where you uploaded in the “data” folder on Colab.

```python
my_image = "/content/image-processing-tutorial/data/000000039769.jpeg"
```

Here is the image that we just used as the input of the machine learning model:

![replit how to]({{site.baseurl}}/assets/images/image21.jpg)

Now, to explain the output, it is an array of five dictionaries that represent the top 5 predictions from the model. Arrays and dictionaries are both data structures.

- An array looks like [0, 1, 2, 3], which represents a list of elements (such as numbers).
- A dictionary looks like {"key1": "value1", "key2": "value2"}, which represents pairs of keys and values.

In this case, the first element in the array {'label': 'Egyptian cat', 'score': 0.9374415874481201} is the first prediction. It means that the model thinks there are Egyptian cats in the image, with 0.9374415874481201 probability (which is very high).

In the next step, we are going to teach you how to feed the bike images into the model. First, we go to a new code cell where we define the variable `my_image`, but this time point to an image with bikes.

```plain
my_image = "/content/image-processing-tutorial/data/bike/1/271758547_496887881809012_1375450742634622577_n.jpg"
```

Here is the bike image for this file path:
![colab how to]({{site.baseurl}}/assets/images/image14.jpg)

Run the model again, and you should see the following output:

```
[{'label': 'mountain bike, all-terrain bike, off-roader', 'score': 0.2128317803144455},   
{'label': 'bicycle-built-for-two, tandem bicycle, tandem', 'score': 0.11649926006793976},   
{'label': 'minibus', 'score': 0.04489859566092491}, {'label': 'tricycle, trike, velocipede',   
'score': 0.026173599064350128}, {'label': 'moving van', 'score': 0.024126119911670685}]
```

Now, try different bike images in the “data/bike” folder and check the output from the model. You can use the web interface (by dragging and dropping images) or the provided code. After that, reflect on the following questions:
- To what extent does this model help understand the distribution of bikes in the city?
- In this task, we have shown how to do image classification, which means giving predictions for the entire image. Are there other ways that you can imagine to help better understand the distribution of bikes in different locations?


## Task 6

In the Preparation section and also in the previous task, you have seen image classification, which is a technique to categorize images into multiple types, such as trash bins and bikes. In this task, we will teach you how to use a different model to detect objects in an image, where the model will use bounding boxes to mark the objects to indicate their locations in the image. **The difference is that image classification makes predictions for the entire image, while object detection processes multiple parts of the image and gives predictions for each part where an object is identified.**

First, go to the following page and use the same bike image that we showed in the previous task as the input of the model.

- Link to the object detection model: [https://huggingface.co/facebook/detr-resnet-50](https://huggingface.co/facebook/detr-resnet-50){:target="_blank"}

The output should look similar to the screenshot below. Notice that, different from the task that you did before, this model gives bounding boxes with different colors. And each bounding box has a corresponding prediction, such as “bicycle” or “person”.

![replit how to]({{site.baseurl}}/assets/images/image9.png)

You have interacted with the web interface of the object detection model. Now, we are going to teach you how to change the model to get its output in the Python code on Colab.

First, we go to a new code cell and define the `API_URL` which indicates the URL that points to the model that we use, and use the query function invoke the use of the model.

```python
API_URL = "https://router.huggingface.co/hf-inference/models/facebook/detr-resnet-50"
my_image = "/content/image-processing-tutorial/data/bike/1/271758547_496887881809012_1375450742634622577_n.jpg"
data = query(my_image, API_URL, API_TOKEN)
print(data)
```

Run the code by clicking on the Play icon on the left of the code cell. The output of the code cell should appear below and print the model output, as shown below:

```
[{'score': 0.6458637714385986, 'label': 'bicycle', 'box': {'xmin': 72, 'ymin': 256,   'xmax': 274, 'ymax': 533}}, {'score': 0.771637499332428, 'label': 'car', 'box': {'xmin': 291, 'ymin': 157, 'xmax': 377, 'ymax': 194}}, {'score': 0.9968470931053162, 'label': 'bicycle', 'box': {'xmin': 333, 'ymin': 216, 'xmax': 522, 'ymax': 531}}, {'score': 0.9547538757324219, 'label': 'bicycle', 'box': {'xmin': 695, 'ymin': 227, 'xmax': 813, 'ymax': 507}}, {'score': 0.6936916708946228, 'label': 'car', 'box': {'xmin': 10, 'ymin': 156, 'xmax': 57, 'ymax': 188}}, {'score': 0.9529551863670349, 'label': 'truck', 'box': {'xmin': 11, 'ymin': 154, 'xmax': 60, 'ymax': 187}}, {'score': 0.8967233896255493, 'label': 'car', 'box': {'xmin': 0, 'ymin': 170, 'xmax': 15, 'ymax': 193}}, {'score': 0.5774039030075073, 'label': 'car', 'box': {'xmin': 10, 'ymin': 171, 'xmax': 53, 'ymax': 201}}, {'score': 0.9960638880729675, 'label': 'person', 'box': {'xmin': 14, 'ymin': 171, 'xmax': 40, 'ymax': 227}}, {'score': 0.9935134053230286, 'label': 'car', 'box': {'xmin': 605, 'ymin': 156, 'xmax': 640, 'ymax': 179}}, {'score': 0.9795882701873779, 'label': 'truck', 'box': {'xmin': 289, 'ymin': 157, 'xmax': 380, 'ymax': 195}}, {'score': 0.9957656860351562, 'label': 'bicycle', 'box': {'xmin': 175, 'ymin': 220, 'xmax': 356, 'ymax': 540}}, {'score': 0.9895235896110535, 'label': 'bicycle', 'box': {'xmin': 73, 'ymin': 255, 'xmax': 226, 'ymax': 529}}, {'score': 0.944420576095581, 'label': 'bicycle', 'box': {'xmin': 574, 'ymin': 211, 'xmax': 711, 'ymax': 523}}, {'score': 0.8902162909507751, 'label': 'bicycle', 'box': {'xmin': 443, 'ymin': 232, 'xmax': 579, 'ymax': 492}}, {'score': 0.9557524919509888, 'label': 'bicycle', 'box': {'xmin': 576, 'ymin': 211, 'xmax': 797, 'ymax': 523}}, {'score': 0.6270663738250732, 'label': 'truck', 'box': {'xmin': 607, 'ymin': 156, 'xmax': 640, 'ymax': 180}}]
```

The model output is similar to the one that we got before, except that now we get an extra “box” field in the returned data, which means the location of an object in the image. For example, the first item in the array shows that the model predicts a bicycle at the location {'xmin': 72, 'ymin': 256,   'xmax': 274, 'ymax': 533} with probability 0.64586377143859861. The numbers in the “box” field mean pixel coordinates, with the top-left point of the image being the origin. So, “xmin” and “ymin” represent the top-left corner of the bounding box, and “xmax” and “ymax” represent the bottom-right corner of the bounding box.

<!-- [Next: Tutorial 1b]({{site.baseurl}}/tutorials/teachable-machine-module/){: .btn .btn-purple } -->
