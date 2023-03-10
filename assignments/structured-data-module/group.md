---
layout: default
title: Group Assignment
nav_order: 2
grand_parent: "Assignments"
parent: "Assignment 3: Creating Machine Learning Models with Structured Data"
---

# Group Assignment
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

We have used different tasks to guide you in creating machine learning models using examples from the heart disease dataset. These tasks were part of the preparation, tutorial, and individual assignment. Now, in the group assignment, you will apply the machine learning models you created to a scenario that builds upon what you learned in the tutorial session.

|**Design brief.** |
|Doctors specialising in heart diseases decided that it is time to experiment with the technological advancements of Machine Learning. However, they do not know how Machine Learning could assist them in their work.|
|![module-3-heart]({{site.baseurl}}/assets/images/structured-data/heart.jpg)|
|To start with, decided to hire a team of designers - which is you - who have a good understanding of ML models. They want you to help them integrate such a system into their daily activities. They have provided you with some of their data and asked for your assistance. Your main objective is to explore the dataset, understand how machine learning can benefit their work, and explain to them the challenges and opportunities that come with implementing this approach.|
|You did a great job in the tutorial by completing tasks on time and achieving impressive results. Some doctors in Switzerland and Hungary have heard about your work from their colleagues and now they want your help with processing data. They have given you two new datasets with information about 123 and 294 patients, respectively.|

## Task
**Please analyze the datasets located in the data folder on Replit, which are named "processed.switzerland.csv" and "processed.hungarian.csv".** Then, train machine learning models using the data and assess their respective performances.

1. Please conduct a data analysis on the new datasets to answer the following questions:
   1. provide a thorough description of how the new data is distributed, including information about both the features and labels;
   2. based on what you learned from the lectures and the feature description ([https://archive.ics.uci.edu/ml/datasets/Heart+Disease](https://archive.ics.uci.edu/ml/datasets/Heart+Disease)), do you think there are any features that need to be reconstructed and explain why;

      > Hint: One-hot encoding for categorical data
   3. based on how the labels are distributed, do you want to redefine the labels and provide a reason for your decision.

      > Hint: Consider how we can address class imbalance in the tutorial
2. Using the datasets (features and labels) you modified in task 1, please develop machine learning models and respond to the following questions:
   1. build models for each dataset, and give information about the models you selected as well as the hyper-parameters you adjusted to optimize the models. Additionally, clarify your reasoning for choosing those models and hyper-parameters;
   2. assess the machine learning models you developed using the evaluation metrics taught in the tutorial. Choose the model with the highest performance and explain why you selected that particular evaluation metric;
   3. evaluate how well the models you constructed perform on two additional datasets to determine if they are effective in handling new, unseen data. Provide an explanation of why they are functioning well or not.
3. Please reflect on the process of analyzing the data and training the models and answer the following questions:
   1. does the feature importance produced by the random forests classifier correspond with your data analysis from Task 1? Explain how and why.

      > Hint: Feature variance or [https://scikit-learn.org/stable/modules/feature_selection.html](https://scikit-learn.org/stable/modules/feature_selection.html)
    2. [***optional***] what is the method for balancing a skewed dataset in order to enhance classifier accuracy?

       > Hint: Data resample [https://towardsdatascience.com/heres-what-i-ve-learnt-about-sklearn-resample-ab735ae1abc4](https://towardsdatascience.com/heres-what-i-ve-learnt-about-sklearn-resample-ab735ae1abc4)

## Deliverable
Your final deliverable is the technical report that will be sent to the doctors. Always keep the design brief mentioned above in mind when writing the report. In the report, you need to explain how you completed the above-listed tasks and what the results are. **Specifically and importantly, your report MUST have the following sections, where we will assess your learning outcome based on the grading rubric at the end of this handout. Failing to have these sections will significantly and negatively impact your score.**

1. Introduction
   - provide a summary of what you did and your findings. Maximum 150 words.
2. Data Preprocessing
   - describe how you compute the distribution of the data. This could include calculating the mean, median, standard deviation, and other relevant measures (or visualize through a histogram);
   - explain in detail which features need to be preprocessed and what changes will be made to the features after preprocessing;
   - provide a detailed explanation of whether or not you changed the label of the dataset and why you made that decision.
3. Model Training
   - describe in detail which models you are using to fit the dataset, how you adjusted their hyper-parameters to improve model performance, and why you made those adjustments;
   - provide a detailed description of which evaluation metrics you are using to assess the model's performance and explain why you selected those specific metrics;
   - explain any additional steps you are taking to evaluate the models, such as cross-validation and random splitting, and describe why you chose those particular validation methods;
   - describe the model's performance on two additional datasets and provide an explanation for any increases or decreases in performance;
4. Discussion
   - provide a detailed description of your observations regarding the relationship between feature importance and feature statistical analysis, and give a specific example to illustrate their relationship;
   - [***optional***] describe in detail the method you are using to enhance the model's performance and explain why you chose this particular method.
5. Distribution of Group Collaboration
   - describe the distributions of effort in the groups. Make sure that you keep track of this information. It is not acceptable to simply say ''all members work together'' or ''all members contributed equally''. If there are any problems with collaboration, please inform the course coordinator as soon as possible.
  
In addition, if you read articles (e.g., online blogs, academic papers) and take their ideas, make sure that you cite and attribute the works in your technical report. It is essential to keep this integrity in scientific research.

 