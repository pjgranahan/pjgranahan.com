---
title: BTCJam Jamboree
description: "Visualizations of various aspects of BTCJam, including breakdowns of loan locations, durations, and amounts."
date: 2014-05-04
---

* **Warning!** The data behind these visualizations were last updated on May 10, 2014.
* You can access the fullscreen visualizations from this post [here][1].

For my first Bitcoin related post, I will be analyzing the investors, borrowers, and loans of the peer-to-peer Bitcoin lending website [BTCJam][3].

For the investors of BTCJam, every loan carries significant risk: over [8000][4] Bitcoins are currently overdue, representing nearly 30% of all Bitcoins that have ever passed through the site. To combat this, [BTCJam espouses investor diversification][5]. In order to better help investors easily measure their diversification, I fed the [scraped data from Jam Community][6] into Tableau and created the following interactive visualization.

Investors will notice that there is some variation between the 4 columns with similar names: Unique Investments, Active Unique Investments, Unique Borrowers, and Active Unique Borrowers. A count of the number of investments made in total, including multiple investments into the same loan and investments into active, repaid, overdue, and deleted loans, is not a good metric for measuring investor diversification. Instead, Unique Investments counts the number of investments into unique loans of all types except for those that were deleted. Active Unique Investments counts the number of investments into unique loans that are currently active or overdue. These metrics are more accurate than Investments, but do not take into account multiple investments into different loans from a single borrower. Unique Borrowers counts the number of unique borrowers that investments have been made in, not including deleted loans. Active Unique Borrowers counts the number of unique borrowers investments have been made in, only counting loans that are currently active or overdue. These four columns are color coded to quickly give an idea of how diversified a given investor is. It is worth noting that while these are _better_ metrics than a simple count of investments, they are not the _best_. The visualization also includes a breakdown of an investor's portfolio!


<iframe height="800px" width="100%" src="https://public.tableausoftware.com/views/BTCJamDataAnalysis/InvestorDiversificationandPortfolio?:embed=y&amp%3B:display_count=no" frameborder="0"></iframe>


Coming as no surprise to most BTCJammers, hackbyte is far and away the most diversified investor on the site. And while there are a few well-known, veteran investors alongside hackbyte in the top ranks, the vast majority of investors do not come close to the [level of diversification][7] recommended by BTCJam. BTCJam is a global community, and as an investor now looking to remedy your lack of diversification, there are a host of borrowers from different countries vying for your investment. However, as the following interactive visualization details, different countries should be treated with varying levels of caution.

<iframe height="800px" width="100%" src="https://public.tableausoftware.com/views/BTCJamDataAnalysis/CountryRatings?:embed=y&:display_count=no" frameborder="0"></iframe>

The worst offenders are based on relatively few borrowers, potentially hurting future legitimate borrowers' chances of successfully having a loan funded. Meanwhile, other countries shine with much more polished records (Argentina!).

There's some data for borrowers too! The following visualization shows the breakdown of loan durations, first for all loans, and then for loans that have been successfully funded.

<iframe height="530px" width="100%" src="https://public.tableausoftware.com/views/BTCJamDataAnalysis/LoanDurationStatistics?:embed=y&:display_count=no" frameborder="0"></iframe>

To finish things off, the following visualization plots the amount of each loan against the interest rate for that loan. Note that both axes are logarithmic! I suggest alternating between selecting the Repaid loans and the Overdue loans – it is interesting to see the distinctly diagonal shift for each subset.

<iframe height="800px" width="100%" src="https://public.tableausoftware.com/views/BTCJamDataAnalysis/FundedLoanGraph?:embed=y&:display_count=no" frameborder="0"></iframe>

I hope this post is helpful to the BTCJam community!

[1]: https://public.tableausoftware.com/views/BTCJamDataAnalysis/InvestorDiversificationandPortfolio
[3]: https://btcjam.com/ "https://btcjam.com/"
[4]: http://jamcommunity.org/stats "http://jamcommunity.org/stats"
[5]: http://blog.btcjam.com/post/75934926878/the-3-rules-of-peer-to-peer-lending-for-investors "http://blog.btcjam.com/post/75934926878/the-3-rules-of-peer-to-peer-lending-for-investors"
[6]: http://jamcommunity.org/faq "http://jamcommunity.org/faq"
[7]: http://www.lendingmemo.com/diversification-lending-club-prosper/ "http://www.lendingmemo.com/diversification-lending-club-prosper/"
  
