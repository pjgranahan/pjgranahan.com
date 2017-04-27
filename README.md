# pjgranahan.com
My website.

## Build
The website is built using Hugo and a custom AWS Lambda function that is automatically triggered when I push a commit to GitHub.
You can read more about this process in the [Lambda function's repo](https://github.com/pjgranahan/pjgranahan.comLambda/).

## Serve
 - After being built, the site is uploaded to [my static website S3 bucket](http://pjgranahan-com-static-site-bucket.s3-website-us-east-1.amazonaws.com/). 
 - [A CloudFront distribution](https://dw96hj0icu35n.cloudfront.net) then delivers and caches the website. 
 - Finally, Route53 provides DNS entries for [pjgranahan.com](https://www.pjgranahan.com).
 
## Security
The site is entirely static and hosted on AWS, so its incredibly scalable.
This makes it less susceptible to DDoS and hugs of death. Being static also dramatically reduces the attack surface.
