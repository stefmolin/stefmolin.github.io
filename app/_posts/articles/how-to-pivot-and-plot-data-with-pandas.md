---
title: "How to Pivot and Plot Data with Pandas"
subtitle: "Analyzing 2019 airline market share."
excerpt: "In this article, we will discuss how to create a pivot table of aggregated data in order to make a stacked bar visualization of the 2019 airline market share for the top 10 destination cities."
date: "2021-05-27T17:11:12.000Z"
modified: "2024-02-27T23:28:00.000Z"
author: Stefanie Molin
tags: ["data science", "Python", "pandas", "matplotlib", "data visualization"]
assets: "/assets/articles/how-to-pivot-and-plot-data-with-pandas"
ogImage:
  url: "/post-assets/cover-image.jpg"
canonical: "https://opendatascience.com/how-to-pivot-and-plot-data-with-pandas/"
featured:
  - "[The Real Python Podcast #68 (at 19:42)](https://realpython.com/podcasts/rpp/68/)"
  - "[PyCoder's Weekly Issue #478](https://pycoders.com/issues/478)"
  - '"[These Are the Top Blogs on OpenDataScience in 2021](https://opendatascience.com/these-are-the-top-blogs-on-opendatascience-in-2021/)," where it earned the top spot'
---

![two pandas](/post-assets/cover-image.jpg)

<figcaption>

Photo by [Stone Wang](https://unsplash.com/@stonewyq) on [Unsplash](https://unsplash.com/)

</figcaption>

A big challenge of working with data is manipulating its format for the analysis at hand. To make things a bit more difficult, the "proper format" can depend on what you are trying to analyze, meaning we have to know how to melt, pivot, and transpose our data.

In this article, we will discuss how to create a pivot table of aggregated data in order to make a stacked bar visualization of the 2019 airline market share for the top 10 destination cities. All the code for this analysis is available on GitHub [here](https://github.com/stefmolin/airline-market-share-analysis) and can also be run using this [Binder](https://mybinder.org/v2/gh/stefmolin/airline-market-share-analysis/master) environment.

We will be using 2019 flight statistics from the United States Department of Transportation's Bureau of Transportation Statistics (available [here](https://www.transtats.bts.gov/DL_SelectFields.asp?gnoyr_VQ=FMF&QO_fu146_anzr=Nv4+Pn44vr45)). It contains 321,409 rows and 41 columns:

```python[class="command-line"][data-prompt=">>>"][data-output="5"]
import pandas as pd

df = pd.read_csv('865214564_T_T100_MARKET_ALL_CARRIER.zip')
df.shape
(321409, 41)
```

Each row contains monthly-aggregated information on flights operated by a variety of airline carriers, including both passenger and cargo service. Note that the columns are all in uppercase at the moment:

```python[class="command-line"][data-prompt=">>>"][data-output="2-15"]
df.columns
Index(['PASSENGERS', 'FREIGHT', 'MAIL', 'DISTANCE',
       'UNIQUE_CARRIER', 'AIRLINE_ID', 'UNIQUE_CARRIER_NAME',
       'UNIQUE_CARRIER_ENTITY', 'REGION', 'CARRIER', 'CARRIER_NAME',
       'CARRIER_GROUP', 'CARRIER_GROUP_NEW', 'ORIGIN_AIRPORT_ID',
       'ORIGIN_AIRPORT_SEQ_ID', 'ORIGIN_CITY_MARKET_ID', 'ORIGIN',
       'ORIGIN_CITY_NAME', 'ORIGIN_STATE_ABR', 'ORIGIN_STATE_FIPS',
       'ORIGIN_STATE_NM', 'ORIGIN_COUNTRY', 'ORIGIN_COUNTRY_NAME',
       'ORIGIN_WAC', 'DEST_AIRPORT_ID', 'DEST_AIRPORT_SEQ_ID',
       'DEST_CITY_MARKET_ID', 'DEST', 'DEST_CITY_NAME',
       'DEST_STATE_ABR', 'DEST_STATE_FIPS', 'DEST_STATE_NM',
       'DEST_COUNTRY', 'DEST_COUNTRY_NAME', 'DEST_WAC', 'YEAR',
       'QUARTER', 'MONTH', 'DISTANCE_GROUP', 'CLASS',
       'DATA_SOURCE'],
      dtype='object')
```

To make the data easier to work with, we will transform the column names into lowercase using the `rename()` method:

```python[class="command-line"][data-prompt=">>>"]
df = df.rename(lambda x: x.lower(), axis=1)
df.head()
```

![output of the previous code snippet](/post-assets/fig-01.png)

For our analysis, we want to look at passenger airlines to find the 2019 market share of the top 5 carriers (based on total number of passengers in 2019). To do so, we first need to figure out which carriers were in the top 5. Remember, the data contains information on all types of flights, but we only want passenger flights, so we first query `df` for flights marked `F` in the `class` column (note that we need backticks to reference this column because `class` is a reserved keyword in Python). Then, we group by the carrier name and sum each carrier's passenger counts. Finally, we call the `nlargest()` method to return only the top 5:

```python[class="command-line"][data-prompt=">>>"][data-output="5-11"][data-filter-continuation="(con)"][data-continuation-prompt="..."]
top_airlines = df.query('`class` == "F"')\
(con)    .groupby('unique_carrier_name').passengers.sum()\
(con)    .nlargest(5)
top_airlines
unique_carrier_name
Southwest Airlines Co.    162681011.0
Delta Air Lines Inc.      162260114.0
American Airlines Inc.    155782611.0
United Air Lines Inc.     116212143.0
JetBlue Airways            42830602.0
Name: passengers, dtype: float64
```

<figcaption>

Download flight class meanings [here](https://www.transtats.bts.gov/Download_Lookup.asp?Y11x72=Y_fReiVPR_PYNff).

</figcaption>

Note that the top 5 airlines also run flights of a different class, so we can't remove this filter for the rest of our analysis:

```python[class="command-line"][data-prompt=">>>"][data-output="4-6"][data-filter-continuation="(con)"][data-continuation-prompt="..."]
df.loc[
(con)    df.unique_carrier_name.isin(top_airlines.index), 'class'
(con)].value_counts()
F    97293
L     3994
Name: class, dtype: int64
```

Now, we can create the pivot table; however, we cannot filter down to the top 5 airlines just yet, because, in order to get market share, we need to know the numbers for the other airlines as well. Therefore, we will build a pivot table that calculates the total number of passengers each airline flew to each destination city. To do so, we specify that we want the following in our call to the `pivot_table()` method:

- Unique values in the `dest_city_name` column should be used as our row labels (the `index` argument)
- Unique values in the `unique_carrier_name` column should be used as our column labels (the `columns` argument)
- The values used for the aggregation should come from the `passengers` column (the `values` argument), and they should be summed (the `aggfunc` argument)
- Row/column subtotals should be calculated (the `margins` argument)

Finally, since we want to look at the top 10 destinations, we will sort the data in descending order using the `All` column, which contains the total passengers flown to each city in 2019 for all carriers combined (this was created by passing in `margins=True` in the call to the `pivot_table()` method):

```python[class="command-line"][data-prompt=">>>"][data-filter-continuation="(con)"][data-continuation-prompt="..."]
pivot = df.query('`class` == "F"').pivot_table(
(con)    index='dest_city_name',
(con)    columns='unique_carrier_name',
(con)    values='passengers',
(con)    aggfunc='sum',
(con)    margins=True
(con)).sort_values('All', ascending=False)
pivot.head(10)
```

![output of the previous code snippet](/post-assets/fig-02.png)

Notice that the first row in the previous result is not a city, but rather, the subtotal by airline, so we will drop that row before selecting the first 10 rows of the sorted data:

```python[class="command-line"][data-prompt=">>>"]
pivot = pivot.drop('All').head(10)
```

Selecting the columns for the top 5 airlines now gives us the number of passengers that each airline flew to the top 10 cities. Note that we use `sort_index()` so that the resulting columns are displayed in alphabetical order:

```python[class="command-line"][data-prompt=">>>"]
pivot[top_airlines.sort_index().index]
```

![output of the previous code snippet](/post-assets/fig-03.png)

Our data is now in the right format for a stacked bar plot showing passenger counts. To make this visualization, we call the `plot()` method on the previous result and specify that we want horizontal bars (`kind='barh'`) and that the different airlines should be stacked (`stacked=True`). Note that since we have the destinations sorted in descending order, Atlanta will be plotted on the bottom, so we call `invert_yaxis()` on the `Axes` object returned by `plot()` to flip the order:

```python[class="command-line"][data-prompt=">>>"][data-filter-continuation="(con)"][data-continuation-prompt="..."][data-filter-output="(clear)"]
from matplotlib import ticker
(clear)
ax = pivot[top_airlines.sort_index().index].plot(
(con)    kind='barh', stacked=True,
(con)    title='2019 Passenger Totals\n(source: BTS)'
(con))
(clear)
(clear)# put destinations with more passengers on top
ax.invert_yaxis()
(clear)
(clear)# formatting
ax.set(xlabel='number of passengers', ylabel='destination')
ax.legend(title='carrier')
(clear)
(clear)# shows x-axis in millions instead of scientific notation
ax.xaxis.set_major_formatter(ticker.EngFormatter())
(clear)
(clear)# removes the top & right lines from the figure to make it less boxy
for spine in ['top', 'right']:
(con)    ax.spines[spine].set_visible(False)
```

![resulting visualization](/post-assets/fig-04.png)

One interesting thing to notice from the previous result is that Seattle is a top 10 destination, yet the top 5 carriers don't appear to be contributing as much to it as the rest of the destination cities, which are pretty much in the same order with the exception of Los Angeles. This could cause some confusion, so let's add in another stacked bar called `Other` that contains the passenger totals for all airlines not in the top 5. Since we calculated the `All` column when we created the pivot table, all we have to do here is add a column to our filtered data that contains the `All` column minus the top 5 airlines' passenger totals summed together. The plotting code only needs to be modified to shift the legend further out:

```python[class="command-line"][data-prompt=">>>"][data-filter-continuation="(con)"][data-continuation-prompt="..."][data-filter-output="(clear)"]
ax = pivot[top_airlines.sort_index().index].assign(
(con)    Other=lambda x: pivot.All - x.sum(axis=1)
(con)).plot(
(con)    kind='barh', stacked=True,
(con)    title='2019 Passenger Totals\n(source: BTS)'
(con))
ax.invert_yaxis()
(clear)
(clear)# formatting
ax.set(xlabel='number of passengers', ylabel='destination')
ax.xaxis.set_major_formatter(ticker.EngFormatter())
(clear)
(clear)# shift legend to not cover the bars
ax.legend(
(con)    title='carrier', bbox_to_anchor=(0.7, 0), loc='lower left'
(con))
(clear)
for spine in ['top', 'right']:
(con)    ax.spines[spine].set_visible(False)
```

![resulting visualization](/post-assets/fig-05.png)

We can now clearly see that Atlanta had the most passengers arriving in 2019 and that flights from Delta Air Lines were the biggest contributor. But, we can do better by representing market share as the percentage of all passengers arriving in each destination city. In order to do that, we need to modify our pivot table by dividing each airline’s passenger counts by the `All` column:

```python[class="command-line"][data-prompt=">>>"][data-filter-continuation="(con)"][data-continuation-prompt="..."]
normalized_pivot = pivot[top_airlines.sort_index().index].apply(
(con)    lambda x: x / pivot.All
(con))
normalized_pivot
```

![output from the above code](/post-assets/fig-06.png)

Before plotting, we will also sort the bars by the total market share of the top 5 carriers. Viewing this information as percentages gives us a better idea of which carriers dominate which markets &ndash; Delta has by far the largest share of Atlanta and American Airlines has over 60% of Dallas/Fort Worth, while United has strong footholds in several markets:

```python[class="command-line"][data-prompt=">>>"][data-filter-continuation="(con)"][data-continuation-prompt="..."][data-filter-output="(clear)"]
(clear)# determine sort order
market_share_sorted = normalized_pivot.sum(axis=1).sort_values()
ax = normalized_pivot.loc[market_share_sorted.index,:].plot(
(con)    kind='barh', stacked=True, xlim=(0, 1),
(con)    title='2019 Market Share\n(source: BTS)'
(con))
(clear)
(clear)# formatting
ax.set(
(con)    xlabel='percentage of all passengers', ylabel='destination'
(con))
ax.legend(
(con)    title='carrier', bbox_to_anchor=(0.7, 0), loc='lower left'
(con))
(clear)
(clear)# show x-axis as percentages
ax.xaxis.set_major_formatter(ticker.PercentFormatter(xmax=1))
for spine in ['top', 'right']:
(con)    ax.spines[spine].set_visible(False)
```

![resulting visualization](/post-assets/fig-07.png)

As we noticed earlier, Seattle sticks out. The top 5 carriers have more than 50% combined market share for 9 out of the top 10 destinations, but not for Seattle. Using our pivot table, we can see that Alaska Airlines is the top carrier for Seattle:

```python[class="command-line"][data-prompt=">>>"][data-output="2-9"]
pivot.loc['Seattle, WA', :].nlargest(6)
unique_carrier_name
All                       25084302.0
Alaska Airlines Inc.       9637977.0
Delta Air Lines Inc.       4906617.0
Horizon Air                2454491.0
Southwest Airlines Co.     1446404.0
United Air Lines Inc.      1383381.0
Name: Seattle, WA, dtype: float64
```

Now, it’s your turn.

---

In this article, we explored just a few of the many powerful features in the `pandas` library that make data analysis easier. While we only used a small subset of the columns, this dataset is packed with information that can be analyzed using a pivot table: try looking into origin cities, freight/mail carriers, or even flight distance.

Be sure to check out my [pandas workshop](/workshops/pandas-workshop) for an in-depth introduction to `pandas`. Or pick up my book, "[Hands-On Data Analysis with Pandas](/books/Hands-On-Data-Analysis-with-Pandas-2nd-edition/)," for a thorough exploration of the `pandas` library using real-world datasets, along with `matplotlib`, `seaborn`, and `scikit-learn`. For more advanced data visualizations, including animations and interactivity, check out my [Beyond the Basics: Data Visualization in Python](/workshops/python-data-viz-workshop) workshop.

<small><em>Originally posted on May 27, 2021 at [OpenDataScience.com](https://opendatascience.com/how-to-pivot-and-plot-data-with-pandas/).</em></small>
