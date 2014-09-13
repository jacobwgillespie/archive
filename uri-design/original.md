#Guidelines for URL Design






##Principles




###Be as <strike>short</strike> memorable as possible
The URL length should be a balance between shortness and memorability.  The URL should try to be as short as possible to be user friendly, but should not sacrifice that user-friendliness by using URLs like post/1gg32.  (credits: @chriscoyier)

Using a short URL for sharing is encouraged.

###Must be human readable
Related to memorability and shortness, the URL must be human readable and should not rely on non-user important data (like the post ID).  For example /products/ballpoint-pen is better than products/23 (credits: @chriscoyier)

If at all possible, the URL should be "speech-friendly," and should not require spelling aloud.  (credits: @mattthehoople)  For example:

"Go to domain dot com slash about" instead of

"Go to domain dot com slash page slash g g 2 3"

###Must represent an object
The URL must uniquely represent a data object.

###"Hackable"  URLs
The URL should be structured so that it is "hackable" or changeable.  For example

If a post page is at /posts/2010/06/08/my-post

* /posts/2010/06/08 should show a list of all posts posted on June 8th
* /posts/2010/06 should show all posts posted in June
* /posts/2010 should show all posts posted in 2010

Also, changing /posts/2010/06/08 to /posts/2009/06/08 should, as expected, show posts on June 8th, 2009.

(credits: @Steerpike)

###Keywords
The URL should be composed of keywords that are important to the content of the page.  As a side benefit, this will improve SEO.  (credits: @chriscoyier)

###URLs must be permanent
Kind of obvious.

###URLs must be unique
Only one URL per page.  Alternative URLs should 301 redirect to the correct one.

###Consistency
Related to format, the URLs across a site must be consistent in format.  (credits: @chriscoyier)

##Technical Details

###Format

domain.com/[key information]/[name]/?[modifiers]

Key information may include

* the type of thing (i.e. posts)
* the overall parent category (i.e. technology)
* key data members (i.e. the date posted)

Modifiers modify the view, not the data model being represented.

The amount of "key information" should be kept to a minimum, as URLs should not be overly nested.  Each item placed in this section must really be key to addressing the page.  (credits: @chriscoyier)

###No evidence of technology

The URL should not have .html, .htm, .aspx (a big annoyance) or anything related to the underlying technology.

*Exception*: Appending a URL with a postfix like .atom, .rss, or .json should return the requested format.  Alternatively, the Accept HTTP header could be used to specify the format.

###No WWW

The www. should be dropped from the website URL, especially if the domain name is short.  It is unnecessary typing and violates the rule of being short as possible.

Many users will still type in the www. prefix, so www. should 301 redirect to no www.

###All lowercase

All characters must be lowercase.  Attempting to describe a URL to someone when mixed case is involved is next to impossible.

If someone types the URL in mixed-case, they should be 301 redirected to the lowercase page.

###Descending hierarchy

A URL should represent a descending hierarchy.  For example

* domain
* type
* category
* title

Like http://domain.com/posts/tech/google-announces-android.  In the case of items with dates, the format should follow the descending hierarchy:

* year
* month
* day

So, http://domain.com/news/tech/2007/11/05/google-announces-android.

(credits: @caludio)

###Non-destructive actions appended to the URL

Like show, list, etc.  The action should not be listed for the default action (i.e. show)
###Google News

Google News has some interesting requirements, posted [here](http://www.google.com/support/news_pub/bin/answer.py?hl=en&answer=68323).  The one of interest is that Google requires at least a 3-digit unique number.  Due to the fact that they will ignore numbers that look like years, a 5 or more digit number is preferred.  Also recommended is a [Google News sitemap](http://www.google.com/support/news_pub/bin/answer.py?answer=74288).

(credits: @caludio)

###Destructive actions must be HTTP POSTed to the correct URLs

Many reasons why this is the case.

###URL identifiers should be made URL friendly

Special characters should be stripped.

Spaces should be converted to hyphens, not only for readability and convention, but also for SEO [citation needed] (credits: @tonymilne)









##More

Anything else?  Fork it at http://github.com/jacobwg/url-design!

##Updates

Updated times are CST.

1. Updated sometime yesterday
2. Updated June 8, 2010 @ 9:40 with comments from @chriscoyier
3. Updated June 8, 2010 @ 10:05 with the "Hackable" section provided by @Steerpike
4. Updated June 8, 2010 @ 10:48 with comments from @caludio and the Google News article
5. Updated June 8, 2010 @ 11:06 with the "don't require spelling" section from @mattthehoople
6. Updated June 8, 2010 @ 11:14 with the mixed-case 301 to lowercase part

 
