---
layout: default
title: Individual Assignment
nav_order: 1
grand_parent: "Assignments"
parent: "Assignment 1: Image Processing"
---

# Individual Assignment
In the individual assignment, you need to edit the Python script to make it work for counting the number of bikes in an image, as this will prepare you for the group assignment.

## Hugging Face
We have provided a **count_objects** function in the script to help you count bikes. The usage of the function is documented inside the function in the script. **Your first task is to use the function and edit the code to count bikes in images.**

After that, **your next task is to explore the object detection model** using all the bike images that we provided in the “data/bike” folder. You should already have downloaded the images. In this task, feel free to use the script or the web interface, as shown below:

 - Link to the object detection model: [https://huggingface.co/facebook/detr-resnet-50](https://huggingface.co/facebook/detr-resnet-50){:target="_blank"}

Specifically, use the knowledge and method that you learned in the preparation and the tutorial to reflect on the model capability. Is the model detecting bikes correctly? If not, under what conditions does the model fail? And what are the possible reasons that lead to such failure? Write down your findings and thoughts. Then, discuss your findings and thoughts with your group members.

## Teachable Machine
### Imperfect Dataset
To better understand the effects of various issues that datasets can have, such as **missing labels, inconsistent labels, incomplete datasets, and imbalanced datasets**, please follow the tutorial and create a dataset with these issues. Afterward, upload the imperfect datasets to Teachable Machine and observe the resulting outcomes.

### Noisy Images
In the repository for replit that can be found in the given link ([https://replit.com/@machine-learning-for-design/teachable-machine](https://replit.com/@machine-learning-for-design/teachable-machine)), we have included functions that can modify the **"Noise", "Brightness", and "Part"** aspects of an image. You can use these functions to make changes to an image, and then test the resulting performance by uploading the modified image to Teachable Machine.

> How to save the modified image through python code? Please copy the following code block to main.py:
> ```python
> # save_image is the parameter to indicate whether you would like to save the image (True or False)
> # image_name is the parameter to set the name of the image, which you could modify by yourself (with .png extension)
> # By default, you will find the saved image with the name 'saved_image.png' shown in 'Files' tab
> tm.plot(noise, save_image=True, image_name='saved_image.png')
> ```

Also, please combine different adjustments by changing the input image of these modification functions, and observe the effects.
For example, 
``` python
# you could change the input parameter (image) from the original image to a modified image (with noise)
partial = tm.adjust_partial(noise, percentage=0)
```

After completing the tasks mentioned above, please take some time to document your observations. Once you have written them down, you can then share your thoughts and findings with the rest of the members of your group.