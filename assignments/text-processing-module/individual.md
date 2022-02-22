---
layout: default
title: Individual Assignment
nav_order: 1
grand_parent: "Assignments"
parent: "Assignment 2: Text Processing"
---

# Individual Assignment

In the individual assignment we will use the same design brief we used in the tutorial. Your goal is to gain insights from analyzing the student’s answers regarding their needs during the COVID-era. Following the same steps, we saw in the tutorial try to answer the following questions. *Hint: To answer the questions you will need to change some of the parameters we used, understand their effect and importance, and reflect on the results.*  

## Task 1
Experiment with changing some of the variables from “True” to “False”. Try to answer the following questions:
1. Why do we remove capitalization? When it can be important to leave capitalization be?
2. What is tokenization and why do we use it?
3. Why do we remove punctuation and numbers? What will happen if we don’t remove it? Are there cases in which it is better not to remove them?
4. What are stop words? What happens if we do not remove them?
5. What is stemming and why do we use it?

## Task 2
The main goal of this task is to learn how to work with Wordcloud visualization. For that purpose try to follow the following steps:
1. Draw a wordcloud on preprocessed data
2. Draw a wordcloud on data with different preprocessing protocol  
    * (a) Get back to the preprocessing  
    * (b) Remove stemming (argument **stem=False**) from preprocessing  
    * (c) Draw a new wordcloud and save it under a different name  
3. What’s different?
4. Try increasing the number of shown words. Are additional words give you meaningful information about text collection?

## Task 3
The tricky part about sentiment analysis is to understand its limitations and the origin of sentiment score (i.e. which words affect the score the most). To practice working with sentiment analysis, try to do the following steps:  
1. Calculate the sentiment scores for your text collection
2. Find top-3 most positive documents
3. Find top-3 most negative documents
4. What’s different about these documents? Why do you think the algorithms finds some sentences negative? What words give away the sentiment? What about the positive sentences?
5. How sentiment analysis of this collection can help decision-makers improve the life of the students?

## Task 4
The main task here is to experiment with different parameters and explore how they affect the outcome of the LDA model. 
1. How does the outcome of the model change when you change the number of topics?
2. What happens when you change the number of words per topic?
3. Play again with the parameters of the **preprocessing** function and see how this affects the results of the LDA model. For instance, what happens would the topics make sense if you had not removed the stopwords? You can also add new stopwords inside the *extra_stopwords* list  if you feel that some words that appear in your topics do not provide much information.
4. Now change the ***num_of_topics*** and the ***word_num_per_topic***. How does this affect the results?
5. After you have tuned the above parameters try to interpret 3 of the identified topics. 
    * (a) Did you encounter any challenges with interpreting the topics?
