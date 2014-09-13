# Guidelines for URI Design

![image](http://cdn.css-tricks.com/wp-content/uploads/2010/07/urlbestpractices.jpg)

> This is a guest post by [Jacob Gillespie](http://jacobwg.com) who started an interesting [thread on Forrst](http://forrst.com/posts/URL_Guidelines-m0F) about this topic. I invited him to post it here, to which he graciously accepted.

Over the past several years, I have taken an interest in usability and web design.  One of the areas that seems to be often overlooked when it comes to design of a site is the design of the URIs on that site.  Modern CMS systems allow for varying degrees of URI customization, but the defaults are often not as usable as they could be, and URIs are often placed last in the design process.

Clean URIs are one component of a clean website, and it is an important one.  The majority of end-user access to the Internet involves a URI, and whether or not the user actually enters the URI, they are working with one nonetheless.

First, I would like to talk about the guiding principles behind URI design, then talk about the practical implementation of the principles.

Note: Originally, I wrote this article draft using the term “URL,” but since “URL” has been mostly deprecated by “URI,” I’ve updated to use the term URI.  [More information from W3C](http://www.w3.org/TR/uri-clarification/).

## Principles

First, let’s take a look at some of the general principles of URI design.

### A URI must represent an object, uniquely and permanently

One of the most fundamental philosophies behind a URI is that it represents a data object on the Internet.  The URI must be unique so that it is a one-to-one match - one URI per one data object.

While this is always the goal, there are times at which it is very difficult or impossible to accomplish.  Canonical URL tags were invented to help reduce the amount of duplicate content seen by a search engine.  While not a final solution, canonical URLs are strongly recommended as large search engines like Google are now paying attention to them.  For more information about canonical URLs, check out [this article by SEOmoz](http://www.seomoz.org/blog/canonical-url-tag-the-most-important-advancement-in-seo-practices-since-sitemaps).

URIs should also be permanent (i.e. choose the URI once and leave it at that).  This speaks to good URI design before a site is launched, with the URIs being carefully planned.  There will come a time when you do want to make improvements to your choices or otherwise must change URI structure.  When this becomes a necessity, be sure to set up [HTTP 301 moved permanently](http://en.wikipedia.org/wiki/URL_redirection#HTTP_status_codes_3xx) redirects on your server.  This tells browsers and search engines the new location of the content and will also preserve any [PageRank](http://en.wikipedia.org/wiki/Pagerank) that the old URI has accumulated.

### Be as human-friendly as possible

This is the most fundamental driving factor behind URI design (or it should be).  URIs should be designed with the end user in mind.  Search Engine Optimization (SEO) and ease of development should come second.

One way to keep a URI user-friendly is to keep it short and to the point.  This means using as few characters as possible while still maintaining usability.  So, `/about` is better than `/about-acme-corp-page`.  While striving to be as short as possible, it should not sacrifice that user-friendliness by using URIs like `/13d2` as this holds no meaning for the end users.

Conversely, using a [shortlink](http://en.wikipedia.org/wiki/URL_shortening) whenever sharing a URI is encouraged.  This is great for tweeting links on Twitter, or otherwise sharing on social sites like Facebook or Google Buzz.  It is great if you can control your own URI shortener for SEO reasons, although a site like Bit.ly is good too.  I personally use [PrettyLink Pro](http://prettylinkpro.com/) (a WordPress plugin) to create my short URIs. An alternative is the [Short URL plugin](http://wordpress.org/extend/plugins/short-url-plugin/).  WordPress now has this feature built-in.

![image](http://cdn.css-tricks.com/wp-content/uploads/2010/07/wordpresshortlink.png)

WordPress provides a button to get a shortlink to a post based on WordPress' own `/?p=XXX` format which is likely to be shorter than your chosen permalink structure. The advantage being that will work as long as your site is around. The disadvantage is the shortness of the link is dependent on the length of your domain name.

The URI should not rely on information that is not important to the content or the user.  A common example of this is using the database ID as the URI, as in `/products/23`.  The end user does not care that the product is database record number 23, so a URI like  `/products/ballpoint-pen` is much better.  It can be tempting to resort to such poor URI structure as it is often easier on the backend to query the database with an ID rather than have to do a lookup on an alias to find the object.
One good test to see if a URI is a user-friendly URI is the "speech-friendly" test.  You should be able to mention a URI in a conversation with a friend, and it should make sense.  For example:

> My bio’s at domain dot com slash jim

instead of

> My bio’s at domain dot com slash page slash g g 2 3

### Consistency

URIs across a site must be consistent in format.  Once you pick your URI structure, be consistent and follow it!  Having good URI structure for part of the site means that you still have poor structure overall.  In order for a user to trust that URIs work a certain way on a site, the format must be consistent.  If you must switch structure (maybe you’re updating a poorly-designed site), use 301 redirects as previously mentioned.

### "Hackable" URIs

Related to consistency, URIs should be structured so that they are intelligibly "hackable" or changeable.  For example, if `/events/2010/01` shows a monthly calendar with events from January 2010, then:

* `/events/2009/01` should show an events calendar for January 2009
* `/events/2010` should show events for the entire year of 2010
* `/events/2010/01/21` should show the events for January 21st, 2010

### Keywords

The URI should be composed of keywords that are important to the content of the page.  So, if the URI is for a blog post that has a long title, only the words important to the content of the page should be in the URI.  For example, if the blog post is “My Trip to Best Buy for Memory Cards,” then the URI might be `/posts/2010/07/02/trip-best-buy-memory-cards` or something similar.

As a side benefit, using important keywords in the URI will improve SEO.  My personal SEO philosophy is that, rather that optimize for search engines, optimize for good content.  Search engines have made it their goal to find the best content on the web, so doing everything possible to create an easy-to-use site with great content and opportunities for further information (links) will, in my opinion, yield the best long-term results for search engine visibility.

## Technical Details

We have covered some of the guiding principles behind URI design.  Now, let’s look at some technical implementations of those guidelines.

### No evidence of the underlying technology

The URI should not have .html, .htm, .aspx (a big annoyance), or anything else attached to it that is only designed to show the underlying technology.  No end user cares that your site was written in ASP.NET (.aspx), ColdFusion (.cfm), or uses Server Side Includes (.shtml) - or at least most end users don’t.  The extra info is just extra typing and extra room for error and frustration.
The one exception to this rule is appending a URI with a postfix like .atom, .rss, or .json to request that the certain format be returned.  Alternatively, the format could be requested with the Accept HTTP header.

### No WWW

The www. should be dropped from the website URI, as it is unnecessary typing and violates the rules of being as human-friendly as possible and not including unnecessary information in the URI.

Many users, however, will still type in the www. prefix, so `www.domain.com` should 301 redirect to `domain.com`.  The same goes for 301 redirecting `www.subdomain.domain.com` to `subdomain.domain.com`.

### Format

URIs should be in the format:

`domain.com/[key information]/[name]/?[modifiers]`

Key information is information that is not the object identifier (like the post title), but is still key to the object being accessed.  This may include:

* the type of thing (i.e. posts)
* the overall parent category (i.e. technology)
* key data members (i.e. the date posted)

Modifiers modify the view, not the data model being represented, and thus they are part of the query string and not the URI itself.
The amount of "key information" should be kept to a minimum, as URIs should not be overly nested.  Each item placed in the key information section must really be key to addressing the page.

In the end, the URI should represent a descending hierarchy.  For example

* domain
* type
* category
* title

Example: `http://domain.com/posts/servers/nginx-ubuntu-10.04`.  In the case of items with dates, the format should follow the descending hierarchy:

* year
* month
* day

Example: `http://domain.com/news/tech/2007/11/05/google-announces-android`.

Google News has some [interesting requirements](http://www.google.com/support/news_pub/bin/answer.py?hl=en&amp;answer=68323) for webpages that want to be listed in the Google News results - Google requires at least a 3-digit unique number.  Due to the fact that they will ignore numbers that look like years, a 5 or more digit number is preferred.  Also recommended is a [Google News sitemap](http://www.google.com/support/news_pub/bin/answer.py?answer=74288).  This is one of those cases where if you absolutely must target Google News, you must conform to this inferior URI structure.  But, if you must, make sure that you are consistent and that it is still hackable (for example, use the format yyyymmdd like `20100701`).

### All lowercase

All characters must be lowercase.  Attempting to describe a URI to someone when mixed case is involved is next to impossible.
If someone types the URI in mixed-case, they should be 301 redirected to the lowercase page.  That sounds really nice, but in practice, I’m not exactly sure if that is possible... using a CMS that rewrites all requests to a single file would be the easiest way to accomplish it as the script could issue the 301 to lowercase, but I’m not sure if there’s an easier way (.htaccess rules or something).

### Actions appended to the URI

Actions may be appended to the URI, like show, delete, edit, etc.  Non-destructive actions (those that do not change the object) should be requested with a HTTP GET, while destructive actions should be POSTed to the URI.  Run a Google search for REST URI Design for more information.

### URI identifiers should be made URI friendly

A URI might contain the title of a post, and that title might contain characters that are not URI-friendly.  That post title must therefore be made URI friendly.  For example

* All uppercase characters are made lowercase
* Characters like é should be converted to e (etc.)
* Spaces should be replaced with hyphens
* Unknown characters (!, @, #, $, %, ^, &, *, etc.) should be replaced with a hyphen
* Double hyphens (--) should be replaces with a single hyphen
* Probably more rules I’m forgetting

Characters can be URI escaped (like %20 for the space character), but this is generally a bad idea for many of the above reasons (shows technology, unnecessary typing, etc.)
### Fun idea

Use a sentence like structure (credit to [Chris Shiflett](http://shiflett.org/blog/2010/may/url-sentences)):

* `chriscoyier.net/authored/digging-into-wordpress/`
* `chriscoyier.net/has-worked-for/chatman-design/`
* `chriscoyier.net/likes/trailer-park-boys`
* `jacobwg.com/thinks/this-post/is/basically-done`

If you know of any more URI guidelines that I missed or have any comments about those I did remember, I’d love to hear them!

## Credits

Many thanks to the [Forrst](http://shiflett.org/blog/2010/may/url-sentences) community who saw the initial (very) rough drafts of this post and contributed many insightful comments.  Special thanks to [@chriscoyier](http://forrst.com/people/chriscoyier), [@caludio](http://forrst.com/people/caludio), [@steerpike](http://forrst.com/people/Steerpike), and [@mattthehoople](http://forrst.com/people/mattthehoople) for directly contributing to the guideline list and to all the other Forrst commenters for providing helpful discussion.

Thank you to my dad for proofreading and review! Thank you also to Chris for being kind enough to offer to post this on CSS Tricks!
