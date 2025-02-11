---
layout: default
title: Coding Environment
nav_order: 1
parent: "Tutorials"
---

# Software Development Environment
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
---

Software development is an _iterative process_. Software developers continuously iterate and evaluate their code. It takes place in a software development environment providing tools to achieve the desired goal. In comparison, designers iteratively sketch their design in their (mobile) design studio with different sheets of paper, pencils and colour, refining their work to achieve the desired goal.

In this environment, software developers:

- **Write code** -- It requires a text editor. It is an intelligent text editor that understands the fundamentals of programming languages. Thus, it supports developers by highlighting syntax errors or making suggestions. For example, MS Word provides similar support for English by highlighting grammar errors. MS Word also suggests auto-complete the date of the day.
- **Test code** -- It requires a way to tell the computer to run the code and show the results.
- **Document code** -- It requires a way to add plain text to describe what the code does.

There are many software development environments available. Each supports one or several programming languages and different functionalities, including the three mentioned above. We need an **environment that supports the language Python** and does not require any setup or installation on our computer.

Thus, we will use [Google Colab](https://colab.research.google.com/){:target="_blank"}, a software development environment that you access directly from your favourite web browser. 

<!-- [TODO video hands-on guided tour] -->

# Sign Up / Sign In

To use _Google Colab_, we need a Google account. Open [Google Colab](https://colab.research.google.com/){:target="_blank"} and click on the button **Sign in** (top-right corner). If you don't have a Google account then click on "Create account" and follow the account creation steps.

<!-- ![Replit Signup]({{site.baseurl}}/assets/images/ide_signup.png) -->
![Colab Signup]({{site.baseurl}}/assets/images/colab/signup.png)

# _Colab_ Notebook

A Google Colab notebook is a type of Python notebook, often referred to as a Jupyter Notebook. It is an interactive computing environment that allows users to write, execute, and document Python code in a single document. These notebooks are widely used in data science, machine learning, research, and education because they combine code, visualizations, and explanatory text all in one place.
Once you have logged in using your _Google_ account, you land on the _Colab_ welcome page. Now let's explore this online software development environment by opening a "Notebook" that gives an overview of Colab features and a few examples of code. Open that notebook [here](https://colab.research.google.com/notebooks/basic_features_overview.ipynb){:target="_blank"}.  


# Explore the _Colab_ Layout
![Colab Show]({{site.baseurl}}/assets/images/colab/colab_show.png)
Once you have created or opened a notebook you can see the software development environment, composed of two vertical panels:  

* on the left, there are several logos arranged vertically that indicate `Table of contents`, `Find and replace`, `Variables`, `Secrets`, and `Files`. Clicking on a logo selects that option to be displayed in the left column.
![Colab Show]({{site.baseurl}}/assets/images/colab/colab_show1.png)
* on the right, this is the `Notebook`: an interactive computing environment that allows users to write, execute, and document Python code in a single document. In the top left of this column you can see the two buttons `+ Code` and `+ Text`, for inserting code and text cells respectively.
![Colab Show]({{site.baseurl}}/assets/images/colab/colab_show2.png)

<!-- ![Explore code editor layout]({{site.baseurl}}/assets/images/explore_repl_layout.png) -->

# Execute Code

Let's take [this](https://colab.research.google.com/drive/1kdin9pLwJ7oPdepTAyHdABG_qWslMcN4?usp=sharing){:target="_blank"} notebook for example.
Now that we have a notebook open, let's run a code example. 

To start the programme (i.e. to execute the code), click on the Play icon on the felt of the code cell.
![Colab Example]({{site.baseurl}}/assets/images/colab/tutorial_example.png)

The output of the code will appear below the code cell.  
In this example, it will ask for your name along with a place where you can write your answer. Write it down and press the `ENTER` key. Obeserve the output from the code cell.

# Edit Code

Software development requires a rigorous syntax. Therefore, it is easy to make mistakes by misspelling a word or Python syntax. While a reader can tolerate mistakes to a certain degree, the computer does not. The editor is here to help and highlight some of these mistakes. For example, remove a letter from the word `print`. The editor will signal this error with red lines because this is not a correct Python syntax. Moving your cursor on red or yellow lines will also show a short description of this error.

![Colab Error]({{site.baseurl}}/assets/images/colab/tutorial_error2.png)

Running this code cell will make the color of the Play icon red and the output under the code cell will display an error.
<!-- ![Example of an error]({{site.baseurl}}/assets/images/error-message-example.gif) -->
![Colab Error]({{site.baseurl}}/assets/images/colab/tutorial_error.png)

<!-- # Embed your code in Discourse

Note: To include your Replit directly into your post on Discourse, just paste the link of your Replit project and it will be automatically embedded in your post.
{: .fs-5 .ls-10 .code-example .bg-yellow-000}

![embed code in discourse]({{site.baseurl}}/assets/images/embed_example.gif) -->

<!-- [Next Step: Assignment 1 - Calculator]({{site.baseurl}}/computational-thinking/01-calculator){: .btn .btn-purple } -->

# Text

In notebooks, text cells are used to add explanations, descriptions, titles, and other non-code content to a notebook. These cells are written in Markdown, a lightweight markup language that allows you to format text in various ways. Read more about text cells and markdown [here](https://colab.research.google.com/notebooks/markdown_guide.ipynb){:target="_blank"}.  

---  

There are more buttons and functionalities on Google Colab. But this is all we need to know to get started. 
Refer back to the overview of the basics in [this Notebook](https://colab.research.google.com/notebooks/basic_features_overview.ipynb){:target="_blank"}.  
So let’s jump in the first Python programming assignment!