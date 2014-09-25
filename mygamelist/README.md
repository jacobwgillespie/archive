# MyGameList.co

## Goal

Be the GoodReads.com for video games, allow users to add games they like, have played, and want, as well as rate and review those games.  Information collected will be used to offer game recommendations ("you might also like").

Future versions might allow users to showcase achievements on their profile pages.  Users might also be able to authenticate and verify their profiles on other game services (Xbox Live, Steam, Origin, etc.).

## Future Feature Ideas

* Achievements on profile pages
* Authenticated profile links (Steam, Xbox Live, Origin, etc.)
* Friendship between users
* Design customization on profile pages (backgrounds a la Twitter)
* IMDb-style game directory
* 3rd-party API

## Monitization Strategy

* On-site advertising (would be much better once the site is larger)
* Affiliate sales (for game listings or specials with partners)
* Generated game recommendations

## Data Models

* Game - main game details model
* Genre - game genres
* List - game lists (played, favorite, wanted, etc.)
* Publisher - game publishers
* Rating - user ratings and reviews
* Relation - relates games to users via lists
* User - main user profile model
* Vote - a vote for or against a review (helpful/not)
