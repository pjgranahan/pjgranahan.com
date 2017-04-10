---
title: Detecting Election Irregularities in Texas Counties
description: "Using Benford’s Law to Analyze Voting Methods and County Clerk Partisanship"
date: 2015-03-21
---

Last semester I took [Election Systems][4], a course cross-listed between the computer science, psychology, and political science departments at Rice. The course looks at elections, how they are conducted, and the challenges involved with ensuring security, usability, and fairness, from the perspective of each discipline.

For my final project, I worked with a team of political science majors to analyze some Texas county elections from the past ten years. We were looking for irregularities in voting patterns, specifically in two scenarios. First, we wanted to examine if voting patterns changed depending on whether the county clerk held a different party affiliation than the county majority (e.g. a majority-Republican county had a clerk who was a Democrat). Second, we wanted to see if the types of voting machines being used significantly affected voting patterns.

Before I continue, a disclaimer: we are in no way insinuating that any irregularities we found are sings of fraud or other malicious activities. To begin with, we actually hoped that we wouldn't find any irregularities! That would have boosted our confidence about how elections are run in Texas. We are also using relatively naive methods of analysis, and we could have certainly used the help of a statistics major (or PhD). To be fair, our professors (1 from each department) didn't have any problems with our final results. 

To divide the project workload, my group members worked mostly on gathering the relevant data and producing the write-ups we needed for class. Thus, I was in charge of producing the visualizations. We wanted to examine county elections in Texas every two years from 2004 through 2010, but due to problems gathering the data for all the metrics we wanted to analyze, we were only able to produce a complete analysis of the 2004 Presidential Election in Texas.

Here's the final visualization we produced, using data from the 2004 Presidential Election in Texas. You can access the full-screen visualization [here][1].

<iframe height="800px" width="100%" src="https://public.tableausoftware.com/views/TexasElectionAnalysis/CountiesDash?:embed=y&:display_count=no" frameborder="0"></iframe>

To summarize, there were two conclusions we drew based on our observations. First, county clerk partisanship did not significantly affect voting patterns! We were glad that we came to this conclusion, as it bolsters our faith that the democratic elections that we hold in Texas are fair! Secondly, we observed that different voting machines actually produce distinct voting patterns.

You can read our final paper [here][2], and you can read our blog about the project from start to finish [here][3].

Special thanks to Victoria Comesañas, Nick Fleder, Jacob Jaffe, and Melanie Zook for being great partners and being great and getting things done.

[1]: https://public.tableausoftware.com/views/TexasElectionAnalysis/CountiesDash
[2]: https://docs.google.com/document/d/1FjcJARGSVVkyxKCGgMKWmVOO6CDU1-6cSvLtVELhAec/pub
[3]: http://emit.blogs.rice.edu/
[4]: https://courses.rice.edu/admweb/!SWKSCAT.cat?p_action=CATALIST&p_acyr_code=2015&p_crse_numb=435&p_subj=COMP
