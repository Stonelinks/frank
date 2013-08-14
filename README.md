#frank

Personal, omniscient life assistant. Also a pretty cool guy.

I'm making frank because I suck at keeping track of my shit. Realistically, I know I'm too lazy to actually put the effort into changing this about myself, so instead I thought it would be much more useful (and more fun) to engineer a tool that keeps track of stuff for me.

So what kind of things will frank keep track of? Nothing the NSA doesn't already know (heyyyoooo!) but for real right now it keeps track of jack squat. Eventually I want it to support the things in the rest of this document. Each these things would ideally be modules you could enable, disable and configure as part of frank.


###Budget

Right now this is my most pressing need. Back when I lived in America I could keep pretty good tabs on my finances using the excellent [mint.com](https://www.mint.com/). I used it for what are in my opinion really basic things:

- Getting a quick idea of how much is in my accounts
- Where and what types of things I spend money
- How my spending changes from month to month

So now that I live in Japan, I can't really use mint anymore since it doesn't work with Japanese banks and all my transactions are cash anyways. Right now in a frank-less world I basically spend a crapload of money while operating in a vacuum of information so I have no clue if my habits are actually good or not... So I want frank to be able figure that out for me, or at least present me with some information to help me figure it out.

Obviously keeping track of transactions is a lot of data input. Thats why I want to make it as easy as possible to interact with frank (more on that later). I pretty much want to send something like "900 yen beer" to frank and have him take care of the rest of the details. Some of you are probably thinking "just use a spreadsheet you lazy ass". My response to that is it is too much work and would force me to maintain a large and potentially intricate document given the granularity of data and the metrics I care about. But I agree if I wasn't a lazy ass I could probably do it with a spreadsheet but I want to give it a shot with frank first.


###Photostream and photo syncing

This idea is still a little half-baked, but I'm not happy with the current products out there that sync/backup photos from the various devices I take them on. I take a fair amount of photos and find it pretty annoying that they are not accessible across every piece of electronic equipment I own. This situation happens to me a fair amount:

I want to show someone a photo because it is relevant to a conversation we're having. While still trying to talk to them, I thumb through the gallery on my phone trying to find said picture, but once I realize it isn't there I remember it is on my tablet (which is at home). Okay... well it should still be synced with Dropbox right? Well not always. Also Dropbox is harder to search than facebook. So okay maybe I posted it to facebook. I go to facebook and try to search, but facebook's app is slow or I don't have internet or by this time the conversation has moved on to a different subject.

I know it sounds like whining about a first world problem, but it's 2013 dammit. If I take a photo on my phone, I should be able to look at it later on my tablet, and vice versa. Dropbox and G+ kind of do an okay job at this, but Dropbox limits my space and I don't like having ALL my photos tied to G+, a social network that I don't use. Also neither of these things will make your photos directly available on your other devices! You have to go out of your way to download them, which sucks in a bandwidth constrained environment.

So I'd like frank to take care of this somehow. Like some kind of ghetto rsync copy thing using HTTP over wifi would be fine.


###Runs

I run a fair amount, and in the past two months the app I use to keep track of my running stats ([strava](http://www.strava.com/)) has been sucking hard. It won't acquire a GPS signal until about halfway through my runs, which didn't start happening until a couple months ago when they must have pushed some major updates to the app that broke it. Anyways strava is the lastest in a long line of running apps that have tried and been disappointed in. All apps have some kind of bullshit you have to put up with. I'd like just tell frank I'm going on a run, and he keeps track of my GPS until I tell him I'm done. I pretty much want to know three simple things when it comes to my runs: tell me where I ran, how far I ran, and what my pace was. That is it.

###...and probably more
I guess once this thing gets off the ground it could be used for a menagerie of other things:
- Calendar notifications, alarms and alerts (a la Siri)
- Torrent / download things
- Home automation

##Natural interface
Of paramount importance is the ability to easily interact with frank. Ideally you'd interact with him like you would a personal assistant, through chats or text messages, maybe email. I'll still make a web interface for data input, but for day to day interaction with frank I don't want to dick around with spreadsheets or forms or any of that crap. However, when reading information from frank, I'd like that to be done through a web browser. Most of what I want to see will be in the form of charts anyways.

I'd like to avoid client apps for a phone or tablet if at all possible, but I suspect some types of data input can't be done through chat or a mobile web browser. If there doesn't end up being any sort of client app on my phone I'd like explicit control of what frank is paying attention to, and I'd like it to be ludicrously simple to use.


##So where does that leave us?
So after an hour of initial brainstorming, I have come to realize that frank has come into existence because I've been bitching about my dislike for various pieces of technology out there and have finally worked up the gumption to do something about it.

So yeah frank has been born of hate of other products, and a lot of these products have been made by some very smart engineers and companies. Kind of silly to think that I can really do any better than them. Oh well whatever nobody is forcing you to use this. Also it's open source! so you can do whatever with this. I'm still going to go ahead and try to make frank work. Maybe there are some other like minded individuals out there reading this that also feel the same way and want to help out. Send me a pull request and lets make it happen! Even if I fall flat on my face and frank sucks, something useful is still bound to come out of this.


##FAQ

**Q: what inspired frank?**

**A:** my own laziness/inability to keep track of what goes on my life, my collective distaste for a bunch of existing apps, [hubot](https://github.com/github/hubot) and of course [JARVIS](http://en.wikipedia.org/wiki/Edwin_Jarvis#J.A.R.V.I.S.)

**Q: why did you name it frank?**

**A:** because frank is clearly an awesome name

**Q: what powers frank?**

**A:** The planned stack for frank is as follows (in no particular order):

Thing | Purpose
--- | ---
[Heroku](http://www.heroku.com/) | host most of everything
???? | disk storage... which for photos might be a lot
[Django](https://www.djangoproject.com/) | server backend, but I only plan to use the models and the ORM
[Tastypie](https://github.com/toastdriven/django-tastypie) | API
[Backbone](http://backbonejs.org/) and [Marionette](https://github.com/marionettejs/backbone.marionette) | front end app framework
[requirejs](http://requirejs.org/) | front end module loader
[Bower](https://github.com/bower/bower) | front end package management
[Bootstrap](http://getbootstrap.com/) | css to make things pretty
xmpp | chat stuff??
