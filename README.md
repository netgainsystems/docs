# Summary

This is the git repository source for NetGain Systems documentation website. 

- Official public website: https://netgainsystems.github.io/docs
- GitHub site: https://github.com/netgainsystems/docs
  - This site is the github repository for NetGain team to update the documentation
  - The website is built Hugo (https://gohugo.io) engine and uses the 'geekdoc' theme (see https://geekdocs.de)
  - Note: after editing and commiting the changes, to make the changes effective in official public website, do either
    - manually rebuild the website (see steps below) 
    - waits for the the daily auto rebuild, which happens at night

# Notes

- ## To manually rebuild the website
  - git clone repository
  - run 'hugo -D' to dump static website to 'docs'
  - git push
  - visit https://netgainsystems.github.io/docs to check changes

