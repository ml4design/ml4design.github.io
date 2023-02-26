---
layout: default
title: Group Assignment
nav_order: 2
grand_parent: "Assignments"
parent: "Assignment 1: Image Processing"
---

# Group Assignment
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

In the preparation, tutorial, and individual assignment, we have used various tasks to guide you in image classification and object detection, using examples of trash bins and bikes. In this group assignment, you will apply image classification and object detection to a scenario that is extended from the tutorial session, as shown below:


|**Background** |
|The Delft Municipality has contracted you and your firm to design a new type of scan car that will enable the city to gain insights into the usage patterns of public parking spaces. Your task is to 1. use Hugging Face models that can automatically identify different types of vehicles and count their numbers, including bikes, motorcycles, and cars; and 2. create Teachable Machine models to supplement the Hugging Face model observations. The municipality wants to use the data obtained from the system to study the distribution of vehicles in different areas of Delft.|
|However, the municipality is unsure if using the current scan car system, which has standard state-of-the-art image classification and object recognition models, would be effective. They have asked for your expertise to analyze the performance of images taken from the car under varying environmental conditions such as weather and lighting in different parts of the city. Additionally, they want you to explore if installing cameras in different positions on the car can improve the overall performance of the system.|
|![replit how to]({{site.baseurl}}/assets/images/image8.png)|
|Unfortunately, you have no data from the scan cars since many places in Delft are hard for the scan cars to enter. You are on your own this time to collect your data, and you need to do your best to apply image classification and object detection models to help you analyze the collected photos.|

## Tasks
In the group assignment, you need to do the following tasks:

1. Collect your own data (as if you were a scan car) in the wild
    > For example, take pictures of bikes, motorcycles, or cars in Delft. Make sure that you take pictures in multiple locations. Make sure that you also take pictures that have a good variety, which means that they should have different angles, orientations, scales, and lighting conditions.

2. Examine the **Hugging Face** model performance with different image conditions
    - Perform experiments and reflect critically on how images with different conditions (e.g., orientation, scale, occlusion, weather, etc.) affect the output from BOTH the image classification and object detection model. In this way, you can help the municipality to decide which machine learning model to use and how to further improve these models by finetuning them with new data.
        > For example, find images that the model fails and think about why. You can use some creativity, such as taking photos in an untypical way or unusual environmental conditions. You can even post-edit the images, such as adding random noise, blurring the image, rotating the image, cropping the image, erasing a part of the image, modifying the color spectrum, etc.

    - Experiment with different points of view, using the pictures you take to simulate alternative locations for putting cameras on the scan car. Provide insights about how to collect a good image dataset and what are the good characteristics in the dataset for training machine learning models. In this way, you can inform the design of the camera system on the scan cars.
        > For example, think about the situation when the entire dataset only has bike images from the side angle (and without the front or back angles)? Also, what if the entire dataset only has cars that are manufactured in one country, have the same type, or have the same brand? What if all images are taken in the daytime on a sunny day?

3. Train a **Teachable Machine** model to supplement the Hugging Face model observations
    > For example, you could use Teachable Machine to develop a computer vision model that can automatically detect if a car is parked correctly inside a parking slot. The model will be trained using images of cars parked in different slots under various lighting and weather conditions, and it should be able to accurately detect and analyze the images.
    > ![improper parking]({{site.baseurl}}/assets/images/teachable-machine/assignment/parking_slot.png)

4. Design an application based on the model observations
    
    Provide detailed application design, including its functionalities and user interface, in the context of public parking spaces. (For example, provide visualized examples in Adobe XD or Figma).
    - **Hugging Face** model
        > For example, visualize the distribution of bikes on a map may inform the municipality about where to put bike racks. 
    - Self-defined **Teachable Machine** model
        > For example, visualize the distribution of improper parking on a map may inform the municipality about where to arrange more parking slots or assign parking authorities.

    Quantifying the number of bikes or cars in a region may help the municipality decide how large the parking space should be to accommodate the needs.

## Deliverable

Your final deliverable is the technical report that will be sent to the municipality to help them improve the design of the new scan car system. Always keep the design brief mentioned above in mind when writing the report. In the report, you need to explain how you completed the above-listed tasks and what the results are. <span style="color:red">**Specifically and importantly, your report MUST have the following sections, where we will assess your learning outcome based on the grading rubric at the end of this handout. Failing to have these sections will significantly and negatively impact your score.**</span>

1. **Summary**
    - Provide a summary of what you did and your findings. Maximum 150 words.

2. **Data Collection and Processing**
    - Explain how you collect the data. For example, where were the locations that you took the photos? When did you take the photos?
    Show what data you collect. For example, by including images in the report, providing a valid link (that is publicly accessible) to a repository such as GitHub or Google Drive.
    Show and explain how you process the data. For example, by including code in the report and explaining how the code works in a good detail.

3. **Model Capability Experiments and Reflections**
    - Describe the procedure of the experiments that you did to understand the capability of the model. For example, what are the images that you used in the experiment? What are the model outputs from these images? What are the aspects (e.g., lighting conditions, orientation and scale of the objects, etc.) that you considered during the experiment?
    - Describe your findings from the experiment and reflect on the model’s capability to process images with different conditions. For example, what happened to the images with many bikes crowded together? Is the model working when the photos are blurry?

4. **Problem Identification and Model Training**
    - Describe the specific challenges and limitations of the problem which cannot be implemented in the provided Hugging Face model. For example, the Hugging Face model may not be sufficient to identify improper parking, making a Teachable Machine model necessary.
    - Describe the training procedure and the nature of the data utilized in the model, and assess how well the model performs. For example, determine the number of correct and incorrect identifications of improper parking in a set of parking images.

5. **Application Design**
    - Describe how you design the application based on the observations of Hugging Face and Teachable Machine models. Provide visualized examples of how the application will look like.
        > The example structure could be as follows:
        > - a user interface where individuals can either take a picture or upload an image of public parking spots.
        > - a dataflow that transfers the collected images to the trained model in order to detect the number of cars, the presence of cars, and whether there is proper parking in the image.
        > - a flowchart of how the application should react accordingly based on the identified observations. This may include generating a heat map displaying parking slot popularity or providing alerts for improper parking.

6. **Distribution of Group Collaboration**
    - Describe the distributions of effort in the groups. Make sure that you keep track of this information. It is not acceptable to simply say “all members work together” or “all members contributed equally”. If there are any problems with collaboration, please inform the course coordinator as soon as possible.


In addition, if you read articles (e.g., online blogs, academic papers) and take their ideas, make sure that you cite and attribute the works in your technical report. It is essential to keep this integrity in scientific research.
