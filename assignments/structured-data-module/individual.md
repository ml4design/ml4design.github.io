---
layout: default
title: Individual Assignment
nav_order: 1
grand_parent: "Assignments"
parent: "Assignment 3: Creating Machine Learning Models with Structured Data"
---

# Individual Assignment

For the individual assignment, we will be utilizing the same design instructions as the tutorial. Your objective is to respond to the questions we posed during the tutorial, which involve analyzing the dataset, pinpointing how machine learning can assist with their work, and clarifying the challenges and potential benefits associated with implementing this approach to tackle heart diseases.

## Data analysis
- Question: Do you understand what each column inside dataset represents?
  - Hint: [https://archive.ics.uci.edu/ml/datasets/Heart+Disease](https://archive.ics.uci.edu/ml/datasets/Heart+Disease)
- Question: How does the distribution look like for both labels and features?
  ```python
  # Hint 1: Visualize label distribution through pandas function
  data.hist(column='label')
  plt.savefig('img/hist.pdf')
  # Hint 2: Get numeric summarization of data through pandas function
  print(data.describe())
  ```

## Model training
- Question: How do we know which model and parameters work better for our problem?
What are your expectations?
  - Hint 1: [Classification vs Regression](https://ml4design.com/lectures/Lecture-2/)
  - Hint 2: [Supervised vs Unsupervised](https://ml4design.com/lectures/Lecture-2/)
  - Hint 3: [Model selection](https://scikit-learn.org/stable/model_selection.html)

## Model evaluation
- Question: Can you calculate the Precision and Recall of each class based on the confusion matrix? What’s more important when designing a system for predicting if a person has heart disease or not?
  - Hint: For the confusion matrix under the binary scenario, we have learnt from first tutorial at [Task 5: Evaluation](https://ml4design.com/tutorials/teachable-machine-module/tutorial/#task-5-evaluation)
  - Hint: Definition of [precision and recall](https://scikit-learn.org/stable/auto_examples/model_selection/plot_precision_recall.html)
- Question:  What do the different columns and rows represent? Are the ''macro'' and ''weighted'' really needed? What do they show? Which evaluation metric fits our problem better?
  - Hint 'micro': Calculate metrics globally by counting the total true positives, false negatives and false positives.
  - Hint 'macro': Calculate metrics for each label, and find their unweighted mean. This does not take label imbalance into account.
  - Hint 'weighted': Calculate metrics for each label, and find their average weighted by support (the number of true instances for each label). This alters ‘macro’ to account for label imbalance; it can result in an F-score that is not between precision and recall.
- Cross-validation
  - Question 1: Do you see a difference in your results? Do you understand the impact the way you split your data could have on your model performance?
  - Question 2: Why do we see three scores for each metric and not 4 (i.e., one for each of our class)? Which evaluation metric fits our problem better?
  - Hint: [https://scikit-learn.org/stable/modules/cross_validation.html](https://scikit-learn.org/stable/modules/cross_validation.html)