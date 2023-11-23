const fs = require("fs");
const path = "./smart-dumb-tweets.txt";

class TweetManager {
    static getTweets() {
        try {
            const data = fs.readFileSync(path, "utf8");
            return data.split("\n").filter((tweet) => tweet.trim()); // Filters out any empty lines
        } catch (err) {
            console.error(`Error reading the file: ${err}`);
            return [];
        }
    }

    static addTweet(tweet) {
        try {
            fs.appendFileSync(path, `\n${tweet}`);
            console.log("Tweet added!");
        } catch (err) {
            console.error(`Error adding the tweet: ${err}`);
        }
    }

    static removeTweet(tweet) {
        const tweets = this.getTweets();
        const index = tweets.indexOf(tweet);
        if (index > -1) {
            tweets.splice(index, 1);
            try {
                fs.writeFileSync(path, tweets.join("\n"));
                console.log("Tweet removed!");
            } catch (err) {
                console.error(`Error writing to the file: ${err}`);
            }
        } else {
            console.log("Tweet not found!");
        }
    }

    static displayTweets() {
        const tweets = this.getTweets();
        tweets.forEach((tweet) => console.log(tweet));
    }
}

// Example Usage:
TweetManager.displayTweets();
TweetManager.addTweet("Hey! Added a new Tweet");
