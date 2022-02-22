---
layout: default
title: "Preparation"
has_children: false
nav_order: 1
parent: "Tutorial 2: Text Processing"
grand_parent: "Tutorials"
---
# Preparation
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

In the next four Tasks, we will help you familiarize yourself with some simple text-processing techniques. Remember that for each task, it is important to reflect on the advantages and disadvantages of such techniques.

## Task 1
### Warm-up Game: Before everything let’s try to think like a … machine!  
  

 - Go to [https://huggingface.co/gpt2](https://huggingface.co/gpt2). Remember, you have already used the Hugging Face tool in the image-processing tutorial. Here, we will see how we could use it for text-processing tasks.
 - On the right side of your screen, you will see written “**Hosted Inference API**” and below a text box where you can insert  **TEXT**. If you insert some text in the text box and press “**Compute**” a  GPT-2 model will try to guess the next words and sentences.
 - Your first task is simple: **make the model say “design”** (as indicated in the model output in the following screenshot). Keep in mind that you are not allowed to use the word “design” or any of its derivatives. If you succeed, note down the text you used so you can share it during the tutorial session.
 - Reflect on the reasoning you followed in order to accomplish this task.

 ![huggingface]({{site.baseurl}}/assets/images/text-processing/task1-1.png)

### Before the next tasks…a short introduction to Voyant
This section prepares you for the text-processing tutorial. As a designer, you are often faced with the task of analyzing large collections of textual data towards gaining an improved understanding of people’s opinions and experiences. Occasionally, you might not know what you are looking for. Instead, you need to go through the textual data and explore potential emerging patterns. What are people talking about most often? How do they feel about their experience with a product, service, or system they used?  

In tasks 2-4 we learn how to easily analyze a collection of texts. This tool allows you to understand the content of the collection without a lot of preparation. But keep in mind! Everything comes at a cost. With relative ease, you lose the opportunity to obtain deeper insights and tailor the tool for your needs.  

We would like you to use a web-based reading and analysis environment for digital texts called **voyant** ([https://voyant-tools.org](https://voyant-tools.org)) to explore different types of texts. When you go to the voyant web page you will see a box where you could type in text or the url of another website. Additionally, it has an “upload” button which you could use to upload a document you already have.

 ![voyant]({{site.baseurl}}/assets/images/text-processing/task1-2.jpg)

When you press “Reveal” you will see how your text is analyzed. In the middle, you can see the whole text that is being analyzed. On the top of your text, there is a button called **TermsBerry**. The **TermsBerry** tool provides a way of exploring high frequency terms and their collocates (words that occur in proximity).  

On the left, you will see a *word cloud*. A world cloud is a visual representation of words that give greater prominence to words that appear more frequently. Below the word cloud, there is a slider named “Terms” which you can set to the number of words you want to include in your world cloud. On the right, you can see the **Trends** of the different words included in your text. **Trends** is a visualization that represents the frequencies of terms across documents in a corpus or across segments in a document, depending on the mode. If you press the button next to the “Trends” named “**Document Terms**” you will see how many times each word occurs in your text.

 ![voyant]({{site.baseurl}}/assets/images/text-processing/task1-3.jpg)

## Task 2
Go to [https://voyant-tools.org](https://voyant-tools.org) and load the following text:  

|“In this essay, I explore several facets of research through design in order to contribute to discussions about how the approach should develop. The essay has three parts. In the first, I review two influential theories from the Philosophy of Science to help reflect on the nature of design theory, concluding that research through design is likely to produce theories that are provisional, contingent, and aspirational. In the second part, I discuss three possible interpretations for the diversity of approaches to research through design, and suggest that this variation need not be seen as a sign of inadequate standards or a lack of cumulative progress in the field, but may be natural for a generative endeavour. In the final section, I suggest that, rather than aiming to develop increasingly comprehensive theories of design, practice based research might better view theory as annotation of realised design examples, and particularly portfolios of related pieces. Overall, I suggest that the design research community should be wary of impulses towards convergence and standardisation, and instead take pride in its aptitude for exploring and speculating, particularising and diversifying, and - especially - its ability to manifest the results in the form of new, conceptually rich artefacts.”|  

This text is an abstract of a paper you could find [here](https://doi-org.tudelft.idm.oclc.org/10.1145/2207676.2208538), if you want to experiment you can actually upload the entire paper in Voyant (or any other document you wish to analyze).  

Try to understand how the Voyant tool could be useful when you analyze large amounts of textual data. Reflect on the following:
 1. How do **word clouds** help you to get a quick idea of the subject of the text? How do you understand it?
 2. How do **links** help you to understand a collection's content? 
 3. How do **trends** help you to understand a collection's content?
 4. What limitations do you see in such a tool? What else would you like to see there?  

*Suggestion: Feel free to use your own text sample. It can be a paper you (don’t) want to read, blog post in social media, a couple of tweets. Whatever you find interesting in the form of the text.*  

Text processing is a complex task. Usually, you work with frequencies of words/phrases and you track the prevalence of particular words/phrases. Sometimes, you’re interested in connections between words/phrases. What you’re looking for depends on your goals and analysis procedure. But here is one crucial step you do regardless of your goals and methods: during text analysis, we work a lot with examples. Meanings of words are contextual, and without finding examples in the text, you risk misunderstanding your findings.

## Task 3

Download the document named “*task_3.txt*” by clicking <a href="{{site.baseurl}}/assets/task_3.txt" download="task_3.txt">here</a>.

Upload the document “*task_3.txt*” on the **Voyant** tool and press “Reveal”. Look at the results and use the different options you familiarized yourself with, in the previous task.  Remember to use the different options offered by the tool (e.g. work cloud, TermsBerry, Document Terms). Try to reflect on the following questions:

1. Where do you think this text originates from (e.g. interviews, online forums etc)? 
2. Is it written by one person or multiple?
3. Does the text revolve around a common subject or is it a combination of different completely disconnected subjects? 
4. Can you name some advantages and disadvantages of analyzing this kind of data using  the Voyant tool? 
5. Open the *task_3.txt*, read several texts 

## Task 4
Download the document named “*task_4.txt*” by clicking <a href="{{site.baseurl}}/assets/task_4.txt" download="task_4.txt">here</a>.  
Try to answer again the following questions:

1. Where do you think this text originates from? 
2. Is it written by one person or multiple?
3. Does the text revolve around a common subject or is it a combination of different completely disconnected subjects? If it’s one subject, which one do you think that is?
4. Can you name some advantages and disadvantages of analyzing this kind of data using  the Voyant tool? 
5. Compare the results of the analysis of this document with the previous one. Which one seemed more suitable for this kind of analysis?


[Next: Tutorial]({{site.baseurl}}/tutorials/text-processing-module/tutorial){: .btn .btn-purple }