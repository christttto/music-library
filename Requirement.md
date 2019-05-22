# React.js Assignment

You have a specially curated music library, with a limited set of songs. However,
despite the thoughtful curation, not all are to your liking, so you'd like to "star"
the ones that are your favorites.

The UI consists of two panels, one that allows the user to scroll through the songs, and
the other showing all the songs that have been "starred."

Data (title and artist is sufficient to display, and 25 songs is sufficent for the music library)
can be obtained by a GET request to:
https://gist.githubusercontent.com/paul-tcell/3803920c0570eb5ce83309bdd5d07ce4/raw/174eac7dc721cf83e2cee98710be947b8f526f87/100songs.json

In addition to being able to scroll to browse library, provide a search box that will filter the list
to a subset that is easier to mark favorites.

# Guidelines

Design your solution to be as robust, realistic, and readable as possible. Code should include
tests.

We want to get an idea how you approach real-world problems, so try to commit
often and be prepared to discuss your design choices.

The assignment shouldn't take more than 2-3 hours, so don't fret if you don't
have the time to create a production-ready solution.

When you are done, submit a pull request to this repository.
Include a README with instructions on how to run your code.

For anything that is left to do to make it production quality, be prepared to talk to those. (for instance,
what if music library contains hundreds of thousands of songs?)

# Stretch Goals

If you happen to have more time, and would like to do more, some other ideas to make it even better:

- Pull the music library from a service such as last.fm or spotify
- Instead of just favorite songs, be able to create playlists based on mood: "happy," "moody," "relaxed," "energetic."
- Be able to play your favorite songs, by looking up and playing the song from youtube
