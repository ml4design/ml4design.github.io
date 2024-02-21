---
layout: default
title: "Assignment 4: AILIXR"
has_children: false
nav_order: 3
parent: "Assignments"
---

# AILIXR (Max +1 **Extra** Point in Final Portfolio) 
{: .no_toc }

Groups of 4-5 people

1. TOC
{:toc}

This Group Assignment consists of 3 Sub-assignments, which can get you an extra point in the final grading in the ML4Design course. Each of the three assignments is graded either with **Pass** or **Fail**.

**Pass** is providing all the required deliverables for that assignment. 

---

## Applying Models to a Product Service System (50%)
**Objective**: Learn to apply Ailixr pipelines with multiple models to a PSS, focusing on applying mock data in a valuable way for users.
### Final Assignment:
#### Task: Designing an AI-Pipeline for a Smart Household Product.
* Select a household product that can be enhanced with intelligence. Conceptualize new and valuable ways users can interact with this PSS and which data is necessary  
Example: “smart fridge“ - adjusts temperature in the fridge based on food (data collected through camera input) —> food stays fresh longer for users
* Create one or multiple pipelines in Ailixr with min. 8 different models to represent the functionality of your idea. If you don’t have specific data you can use mock data, if there is no model for your proposed functionality, you can describe it in a note in text.  

### Deliverable
* Develop a one or multiple pipelines in Ailixr using at least 8 different model nodes creating a original approach for a smart product
* Short text (max. 250 words) on how the PSS creates benefits for the users and which data needs to be collected
* A video explanation of the PSS, showing the pipelines, selection of models and explaining the rationale behind its design (Max. 3 mins;  The video does not have to be high quality, don’t spend a lot of time editing, but focus on the explanation.)

---

## Ridiculous Software Tournament (25%)

```
“All Software Is Ridiculous, But Some of It Is Useful.”
- taken from the Ridiculous Software Manifesto
```

Ridiculous Software solves problems you didn't know the world had. 
Get familiar with ridiculous software: [https://ridiculous.software](https://ridiculous.software/)

### Final Assignment:
Create/model your own ridiculous software in groups using Ailixr. Then, present your ridiculous software to the rest of the class. Afterwards, everyone will vote to select the winners of the following categories:

1. Most creative RS
2. Most thought-provoking RS (makes one reflect on our world and AI)
3. Most technically impressive RS

Winner will receive a prize.  

### Deliverable
**Graded Assignment:** Create a piece of ridiculous software in Ailixr and present the to the class:
* Your RS must have a name
* In the presentation
    * Explain the ‘problem’ your RS solves and how
    * Argue its ridiculousness
    * Show the Ailixr Canvas you made using a live demo (but have some screenshots and/or video in case something breaks)
* Your RS should contain pipeline(s) with multiple models, neatly organized and annotated
* Your RS should bes highly original and reflects insights about usage of AI 

---

## Agentic Framework Design & Prototyping (25%)
**Objective:** Learn to design and prototype recursive agentic software using Ailixr, focusing on prompt engineering and understanding agentic frameworks.  

#### **In-class exercises:**
1. Provide a brief overview of agent-based systems, including key characteristics and functionalities of agents.  
    - Explore BabyAGI as a primitive framework for Agentic software, focusing on its core agents:
        * **Task_Creation_Agent:** which comes up with new tasks based on a given objective, keeping in mind a list of current and completed tasks.
        * **Prioritization_Agent:** that determines the order in which tasks should be tackled.
        * **Execution_Agent:** This agent actively works on executing each task.
|![babyagi]({{site.baseurl}}/assets/images/ailixr/image1.png)|  
2. Critique BabyAGI agent framework:
    - Develop a task for BabyAGI and evaluate the output from each agent.
    - Analyze & critique the prompt instructions for each agent:
        > Suggest improvements or additional components for more effective outputs.
    - Analyze & critique the Agentic architecture:  
        - Propose additional agent modules to enhance the framework.  
        - Identify opportunities for incorporating a “human-in-the-loop” mechanism for oversight and intervention.
3. Explore alternative agentic frameworks:
    - [https://github.com/e2b-dev/awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents): Investigate existing agentic frameworks listed, focusing on unique features and comparing them to BabyAGI.
    - Share findings and critiques with the class, highlighting potential improvements or innovations.

### Final Assignment:
**Task: Designing a New Agentic Framework.**
- Use an existing framework as a template to:
    - Enhance prompt instructions for clarity and effectiveness.
    - Modify the architecture for improved interaction and scalability.
- Or, conceptualize a completely new agentic framework, addressing identified gaps or opportunities in existing systems.  

### Deliverable:
- Develop a prototype of one of the agents in the designed framework using Ailixr.
- Agentic framework diagram detailing its functions and loops.
- A video explanation of the agent and the rationale behind its design (max. 3 mins;  the video does not have to be high quality, don’t spend a lot of time editing, but focus on the explanation). Show that you:  
    - Understand application and agentic principles
    - You can provide analysis of strengths and weaknesses of the Agent, suggesting improvements
    - Can create logically structured frameworks, introducing unique and novel ideas in it’s design
