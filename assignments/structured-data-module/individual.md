---
layout: default
title: Individual Assignment
nav_order: 1
grand_parent: "Assignments"
parent: "Assignment 3: Creating Machine Learning Models with Structured Data"
---

# Individual Assignment

In the individual assignment, you need to tweak parameters in the code to conduct a pilot experiment to understand if wind direction is a good feature for predicting the presence of bad smell. Also, you need to inspect if including the data from the previous hour is helpful. Specifically, you need to fill in the cells that have the question mark in the following table.

| Model         | Feature set                       | Number of hours to look back | Accuracy | Precision | Recall | F1-score |
|---------------|-----------------------------------|------------------------------|----------|-----------|--------|----------|
| Decision Tree | Hydrogen Sulfide                  | 0                            | ?        | ?         | ?      | ?        |
| Decision Tree | Hydrogen Sulfide + Wind Direction | 0                            | ?        | ?         | ?      | ?        |
| Decision Tree | Hydrogen Sulfide                  | 1                            | ?        | ?         | ?      | ?        |
| Decision Tree | Hydrogen Sulfide + Wind Direction | 1                            | ?        | ?         | ?      | ?        |
| Random Forest | Hydrogen Sulfide                  | 0                            | ?        | ?         | ?      | ?        |
| Random Forest | Hydrogen Sulfide + Wind Direction | 0                            | ?        | ?         | ?      | ?        |
| Random Forest | Hydrogen Sulfide                  | 1                            | ?        | ?         | ?      | ?        |
| Random Forest | Hydrogen Sulfide + Wind Direction | 1                            | ?        | ?         | ?      | ?        |

To add wind directions to the variable list, first find the following line in the code:

```
wanted_cols = ["DateTime", "3.feed_28.H2S_PPM"]
```

Then, add the variable that we want to use to the code. You will need to decide the variables in the group assignment. For the individual assignment, let us use the wind direction from the same monitoring station (feed 28) as the H2S measurement that is currently selected. After adding the variable, the above line should look like below:

```
wanted_cols = ["DateTime", "3.feed_28.H2S_PPM", "3.feed_28.SONICWD_DEG"]
```

Then, run the code. The console should display the features with wind directions now, as shown in the following:

```
Compute features...

================================================
Display features (X) and column names

       3.feed_28.H2S_PPM  3.feed_28.SONICWD_DEG_cosine  ...  DayOfWeek  HourOfDay
0              -0.426355                      2.125336  ...          0          3
1              -0.426355                      2.144620  ...          0          4
2              -0.426355                      2.158361  ...          0          5
3              -0.426355                      2.036771  ...          0          6
4              -0.426355                      1.621120  ...          0          7
...                  ...                           ...  ...        ...        ...
16762          -0.426355                      1.731267  ...          5         13
16763          -0.426355                      1.561840  ...          5         14
16764          -0.426355                     -0.027130  ...          5         15
16765          -0.426355                      1.561840  ...          5         16
16766          -0.426355                     -0.661948  ...          5         17

[16767 rows x 9 columns]

Column names below:
['3.feed_28.H2S_PPM', '3.feed_28.SONICWD_DEG_cosine', '3.feed_28.SONICWD_DEG_sine', '3.feed_28.H2S_PPM_1h', '3.feed_28.SONICWD_DEG_cosine_1h', '3.feed_28.SONICWD_DEG_sine_1h', 'Day', 'DayOfWeek', 'HourOfDay']
================================================
```

Notice that the wind direction is decomposed into the sine and cosine components. There are several reasons to do this instead of using the original wind direction degrees (that range from 0 to 360). First, by applying sine and cosine to the degrees, we can transform the original data to a continuous variable. The original data is not continuous since there are no values below 0 or above 360, and there is no information to tell that 0 degrees and 360 degrees are the same. Second, the decomposed sine and cosine components allow us to inspect the effect of wind on the north-south and east-west directions separately, which may help us explain the importance of wind directions.

Next, we need to specify the number of hours that we want the model to look back. The original Python script uses the data from the current hour and the previous hour. To make the machine learning pipeline only use the data from the current hour (and no previous hour), find the following line:

```
look_back_hrs = 1
```

And change the number from 1 to 0, as shown in the following:

```
look_back_hrs = 0
```

Run the code again, and you should see the following message in the console:

```
Compute features...

================================================
Display features (X) and column names

       3.feed_28.H2S_PPM  3.feed_28.SONICWD_DEG_cosine  ...  DayOfWeek  HourOfDay
0              -0.426339                      2.124983  ...          0          2
1              -0.426339                      2.124983  ...          0          3
2              -0.426339                      2.144266  ...          0          4
3              -0.426339                      2.158005  ...          0          5
4              -0.426339                      2.036427  ...          0          6
...                  ...                           ...  ...        ...        ...
16763          -0.426339                      1.730956  ...          5         13
16764          -0.426339                      1.561547  ...          5         14
16765          -0.426339                     -0.027255  ...          5         15
16766          -0.426339                      1.561547  ...          5         16
16767          -0.426339                     -0.662006  ...          5         17

[16768 rows x 6 columns]

Column names below:
['3.feed_28.H2S_PPM', '3.feed_28.SONICWD_DEG_cosine', '3.feed_28.SONICWD_DEG_sine', 'Day', 'DayOfWeek', 'HourOfDay']
================================================
```

Notice that the pipeline does not use the data from the previous hour as the features now, as printed in the above message that shows the list of column names.

You have learned how to change models, select variables, and define the number of hours that you want the model to consider the sensor data in the past. For the individual assignment, use the knowledge that you learned to conduct experiments and fill out the table provided before. After you conduct the experiments, answer the following questions:

- Is including sensor data in the past a good idea to help improve model performance?
- Is the wind direction from the air quality monitoring station (i.e., feed 28) that near the pollution source a good feature to predict bad smell?

Remember to also check the feature importance when answering the above questions.
